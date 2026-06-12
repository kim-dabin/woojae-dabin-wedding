#!/usr/bin/env python3
"""Small API server for the Woojae Dabin wedding invitation.

The app intentionally uses only Python standard-library modules so it can run
on a plain macOS machine without installing Node, pip packages, or a database
server. Runtime secrets live in `.env`, not in this repository.
"""

from __future__ import annotations

import html
import json
import os
import sqlite3
import sys
import time
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, urlparse


APP_DIR = Path(__file__).resolve().parent
DEFAULT_ALLOWED_ORIGINS = (
    "https://kim-dabin.github.io",
    "http://127.0.0.1:8000",
    "http://localhost:8000",
)
MAX_BODY_BYTES = 16 * 1024
RECENT_POSTS: dict[tuple[str, str], float] = {}


def load_dotenv(path: Path) -> None:
    if not path.exists():
        return

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue

        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


load_dotenv(APP_DIR / ".env")


def env_csv(name: str, default: tuple[str, ...]) -> set[str]:
    raw = os.environ.get(name, "")
    values = [item.strip().rstrip("/") for item in raw.split(",") if item.strip()]
    return set(values or default)


PORT = int(os.environ.get("PORT", "8787"))
DB_PATH = Path(os.environ.get("WEDDING_DB_PATH", APP_DIR / "data" / "wedding.sqlite3")).expanduser()
ADMIN_TOKEN = os.environ.get("WEDDING_ADMIN_TOKEN", "")
ALLOWED_ORIGINS = env_csv("ALLOWED_ORIGINS", DEFAULT_ALLOWED_ORIGINS)


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")


def connect_db() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db() -> None:
    with connect_db() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS rsvp (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              created_at TEXT NOT NULL,
              side TEXT NOT NULL,
              name TEXT NOT NULL,
              guest_count TEXT NOT NULL,
              attend TEXT NOT NULL,
              meal TEXT NOT NULL,
              message TEXT NOT NULL DEFAULT '',
              user_agent TEXT NOT NULL DEFAULT ''
            );

            CREATE INDEX IF NOT EXISTS idx_rsvp_created_at
              ON rsvp(created_at DESC);

            CREATE TABLE IF NOT EXISTS guestbook (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              created_at TEXT NOT NULL,
              name TEXT NOT NULL,
              message TEXT NOT NULL,
              is_hidden INTEGER NOT NULL DEFAULT 0,
              user_agent TEXT NOT NULL DEFAULT ''
            );

            CREATE INDEX IF NOT EXISTS idx_guestbook_visible_created_at
              ON guestbook(is_hidden, created_at DESC);
            """
        )


def clean_text(value: Any, max_len: int, *, required: bool = True) -> str:
    text = str(value or "").strip()

    if required and not text:
        raise ValueError("필수 항목을 입력해 주세요.")

    if len(text) > max_len:
        raise ValueError("입력한 내용이 너무 깁니다.")

    return text


def require_choice(value: Any, choices: set[str], label: str) -> str:
    text = clean_text(value, 20)

    if text not in choices:
        raise ValueError(f"{label} 값이 올바르지 않습니다.")

    return text


def format_public_row(row: sqlite3.Row) -> dict[str, Any]:
    return {
        "id": row["id"],
        "name": row["name"],
        "message": row["message"],
        "createdAt": row["created_at"],
    }


def client_key(handler: BaseHTTPRequestHandler, path: str) -> tuple[str, str]:
    ip = handler.headers.get("CF-Connecting-IP") or handler.client_address[0]
    return (ip, path)


def rate_limited(handler: BaseHTTPRequestHandler, path: str, seconds: int = 4) -> bool:
    key = client_key(handler, path)
    now = time.monotonic()
    previous = RECENT_POSTS.get(key, 0)

    if now - previous < seconds:
        return True

    RECENT_POSTS[key] = now
    return False


class WeddingApiHandler(BaseHTTPRequestHandler):
    server_version = "WeddingInvitationAPI/1.0"

    def log_message(self, fmt: str, *args: Any) -> None:
        sys.stderr.write("%s - %s\n" % (self.log_date_time_string(), fmt % args))

    def end_headers(self) -> None:
        origin = self.headers.get("Origin", "").rstrip("/")

        if "*" in ALLOWED_ORIGINS:
            self.send_header("Access-Control-Allow-Origin", "*")
        elif origin in ALLOWED_ORIGINS:
            self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Vary", "Origin")

        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS")
        self.send_header(
            "Access-Control-Allow-Headers",
            "Content-Type, X-Admin-Token, ngrok-skip-browser-warning",
        )
        self.send_header("Access-Control-Max-Age", "86400")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.send_response(HTTPStatus.NO_CONTENT)
        self.end_headers()

    def do_GET(self) -> None:
        parsed = urlparse(self.path)

        if parsed.path == "/health":
            self.send_json({"ok": True, "time": now_iso()})
            return

        if parsed.path == "/api/guestbook":
            self.handle_guestbook_list()
            return

        if parsed.path == "/api/admin/rsvp":
            if not self.require_admin():
                return
            self.handle_admin_rsvp()
            return

        if parsed.path == "/api/admin/guestbook":
            if not self.require_admin():
                return
            self.handle_admin_guestbook()
            return

        if parsed.path in ("/", "/admin"):
            self.send_admin_page()
            return

        self.send_error_json(HTTPStatus.NOT_FOUND, "찾을 수 없는 경로입니다.")

    def do_POST(self) -> None:
        parsed = urlparse(self.path)

        if parsed.path == "/api/rsvp":
            self.handle_rsvp_create()
            return

        if parsed.path == "/api/guestbook":
            self.handle_guestbook_create()
            return

        self.send_error_json(HTTPStatus.NOT_FOUND, "찾을 수 없는 경로입니다.")

    def do_PATCH(self) -> None:
        parsed = urlparse(self.path)

        if parsed.path.startswith("/api/admin/guestbook/"):
            if not self.require_admin():
                return
            self.handle_guestbook_update(parsed.path)
            return

        self.send_error_json(HTTPStatus.NOT_FOUND, "찾을 수 없는 경로입니다.")

    def read_json_body(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length", "0") or 0)

        if length <= 0:
            return {}

        if length > MAX_BODY_BYTES:
            raise ValueError("요청 크기가 너무 큽니다.")

        try:
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
        except json.JSONDecodeError as exc:
            raise ValueError("JSON 형식이 올바르지 않습니다.") from exc

        if not isinstance(payload, dict):
            raise ValueError("JSON 객체를 보내 주세요.")

        return payload

    def send_json(self, body: dict[str, Any], status: HTTPStatus = HTTPStatus.OK) -> None:
        payload = json.dumps(body, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def send_error_json(self, status: HTTPStatus, message: str) -> None:
        self.send_json({"ok": False, "error": message}, status)

    def require_admin(self) -> bool:
        if not ADMIN_TOKEN:
            self.send_error_json(HTTPStatus.SERVICE_UNAVAILABLE, "관리자 토큰이 설정되지 않았습니다.")
            return False

        token = self.headers.get("X-Admin-Token", "")

        if token != ADMIN_TOKEN:
            self.send_error_json(HTTPStatus.UNAUTHORIZED, "관리자 토큰이 올바르지 않습니다.")
            return False

        return True

    def handle_rsvp_create(self) -> None:
        if rate_limited(self, "/api/rsvp"):
            self.send_error_json(HTTPStatus.TOO_MANY_REQUESTS, "잠시 후 다시 시도해 주세요.")
            return

        try:
            payload = self.read_json_body()
            item = {
                "created_at": now_iso(),
                "side": require_choice(payload.get("side"), {"신랑측", "신부측"}, "구분"),
                "name": clean_text(payload.get("name"), 20),
                "guest_count": require_choice(payload.get("count"), {"1", "2", "3", "4명 이상"}, "인원"),
                "attend": require_choice(payload.get("attend"), {"참석", "불참"}, "참석"),
                "meal": require_choice(payload.get("meal"), {"식사", "식사 안 함", "미정"}, "식사"),
                "message": clean_text(payload.get("message"), 120, required=False),
                "user_agent": clean_text(self.headers.get("User-Agent", ""), 300, required=False),
            }
        except ValueError as exc:
            self.send_error_json(HTTPStatus.BAD_REQUEST, str(exc))
            return

        with connect_db() as conn:
            cursor = conn.execute(
                """
                INSERT INTO rsvp (created_at, side, name, guest_count, attend, meal, message, user_agent)
                VALUES (:created_at, :side, :name, :guest_count, :attend, :meal, :message, :user_agent)
                """,
                item,
            )

        self.send_json({"ok": True, "id": cursor.lastrowid, "createdAt": item["created_at"]}, HTTPStatus.CREATED)

    def handle_guestbook_create(self) -> None:
        if rate_limited(self, "/api/guestbook"):
            self.send_error_json(HTTPStatus.TOO_MANY_REQUESTS, "잠시 후 다시 시도해 주세요.")
            return

        try:
            payload = self.read_json_body()
            item = {
                "created_at": now_iso(),
                "name": clean_text(payload.get("name"), 20),
                "message": clean_text(payload.get("message"), 160),
                "user_agent": clean_text(self.headers.get("User-Agent", ""), 300, required=False),
            }
        except ValueError as exc:
            self.send_error_json(HTTPStatus.BAD_REQUEST, str(exc))
            return

        with connect_db() as conn:
            cursor = conn.execute(
                """
                INSERT INTO guestbook (created_at, name, message, user_agent)
                VALUES (:created_at, :name, :message, :user_agent)
                """,
                item,
            )

        self.send_json(
            {
                "ok": True,
                "entry": {
                    "id": cursor.lastrowid,
                    "name": item["name"],
                    "message": item["message"],
                    "createdAt": item["created_at"],
                },
            },
            HTTPStatus.CREATED,
        )

    def handle_guestbook_list(self) -> None:
        with connect_db() as conn:
            rows = conn.execute(
                """
                SELECT id, created_at, name, message
                FROM guestbook
                WHERE is_hidden = 0
                ORDER BY created_at DESC, id DESC
                LIMIT 50
                """
            ).fetchall()

        self.send_json({"ok": True, "messages": [format_public_row(row) for row in rows]})

    def handle_admin_rsvp(self) -> None:
        with connect_db() as conn:
            rows = conn.execute(
                """
                SELECT id, created_at, side, name, guest_count, attend, meal, message
                FROM rsvp
                ORDER BY created_at DESC, id DESC
                LIMIT 300
                """
            ).fetchall()

        self.send_json({"ok": True, "items": [dict(row) for row in rows]})

    def handle_admin_guestbook(self) -> None:
        with connect_db() as conn:
            rows = conn.execute(
                """
                SELECT id, created_at, name, message, is_hidden
                FROM guestbook
                ORDER BY created_at DESC, id DESC
                LIMIT 300
                """
            ).fetchall()

        self.send_json({"ok": True, "items": [dict(row) for row in rows]})

    def handle_guestbook_update(self, path: str) -> None:
        try:
            entry_id = int(path.rsplit("/", 1)[-1])
            payload = self.read_json_body()
            hidden = 1 if bool(payload.get("hidden")) else 0
        except (TypeError, ValueError):
            self.send_error_json(HTTPStatus.BAD_REQUEST, "수정할 방명록 항목이 올바르지 않습니다.")
            return

        with connect_db() as conn:
            cursor = conn.execute("UPDATE guestbook SET is_hidden = ? WHERE id = ?", (hidden, entry_id))

        if cursor.rowcount == 0:
            self.send_error_json(HTTPStatus.NOT_FOUND, "방명록 항목을 찾을 수 없습니다.")
            return

        self.send_json({"ok": True, "id": entry_id, "hidden": bool(hidden)})

    def send_admin_page(self) -> None:
        page = ADMIN_HTML.encode("utf-8")
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(page)))
        self.end_headers()
        self.wfile.write(page)


ADMIN_HTML = """<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Wedding API Admin</title>
    <style>
      :root { color-scheme: light; --ink: #292823; --muted: #777064; --line: #d7cebe; --paper: #f7f2e9; }
      body { margin: 0; background: var(--paper); color: var(--ink); font-family: ui-serif, Georgia, serif; }
      main { width: min(920px, calc(100% - 32px)); margin: 42px auto 80px; }
      h1 { margin: 0 0 8px; font-size: 26px; font-weight: 500; }
      p { color: var(--muted); line-height: 1.7; }
      .toolbar { display: flex; gap: 8px; flex-wrap: wrap; margin: 28px 0; }
      input, button { border: 1px solid var(--line); background: transparent; color: var(--ink); min-height: 38px; padding: 0 12px; font: inherit; }
      input { min-width: min(360px, 100%); flex: 1; }
      button { cursor: pointer; }
      section { margin-top: 34px; border-top: 1px solid var(--line); padding-top: 20px; }
      table { width: 100%; border-collapse: collapse; font-size: 14px; }
      th, td { border-bottom: 1px solid var(--line); padding: 10px 8px; text-align: left; vertical-align: top; }
      th { color: var(--muted); font-size: 12px; font-weight: 600; letter-spacing: .08em; }
      .message { max-width: 280px; white-space: pre-wrap; }
      .empty { padding: 22px 0; color: var(--muted); }
      @media (max-width: 720px) { table { display: block; overflow-x: auto; } }
    </style>
  </head>
  <body>
    <main>
      <h1>Wedding API Admin</h1>
      <p>맥미니에 저장된 RSVP와 방명록을 확인합니다. 관리자 토큰은 이 브라우저의 localStorage에만 저장됩니다.</p>
      <div class="toolbar">
        <input id="token" type="password" placeholder="관리자 토큰" autocomplete="current-password" />
        <button id="save" type="button">저장</button>
        <button id="load" type="button">새로고침</button>
      </div>
      <section>
        <h2>RSVP</h2>
        <div id="rsvp" class="empty">불러오기 전입니다.</div>
      </section>
      <section>
        <h2>Guestbook</h2>
        <div id="guestbook" class="empty">불러오기 전입니다.</div>
      </section>
    </main>
    <script>
      const tokenInput = document.querySelector("#token");
      const rsvpTarget = document.querySelector("#rsvp");
      const guestbookTarget = document.querySelector("#guestbook");
      tokenInput.value = localStorage.getItem("wedding-admin-token") || "";
      document.querySelector("#save").addEventListener("click", () => {
        localStorage.setItem("wedding-admin-token", tokenInput.value.trim());
        loadAll();
      });
      document.querySelector("#load").addEventListener("click", loadAll);

      async function fetchAdmin(path) {
        const response = await fetch(path, { headers: { "X-Admin-Token": tokenInput.value.trim() } });
        const data = await response.json();
        if (!response.ok || !data.ok) throw new Error(data.error || "요청에 실패했습니다.");
        return data;
      }

      function escapeHtml(value) {
        return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
      }

      function table(headers, rows) {
        if (!rows.length) return '<p class="empty">아직 저장된 내용이 없습니다.</p>';
        return `<table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table>`;
      }

      async function loadAll() {
        try {
          const [rsvp, guestbook] = await Promise.all([
            fetchAdmin("/api/admin/rsvp"),
            fetchAdmin("/api/admin/guestbook")
          ]);
          rsvpTarget.innerHTML = table(["일시", "구분", "성함", "인원", "참석", "식사", "메시지"], rsvp.items.map((item) => `
            <tr>
              <td>${escapeHtml(item.created_at)}</td><td>${escapeHtml(item.side)}</td><td>${escapeHtml(item.name)}</td>
              <td>${escapeHtml(item.guest_count)}</td><td>${escapeHtml(item.attend)}</td><td>${escapeHtml(item.meal)}</td>
              <td class="message">${escapeHtml(item.message)}</td>
            </tr>
          `));
          guestbookTarget.innerHTML = table(["일시", "성함", "상태", "메시지", ""], guestbook.items.map((item) => `
            <tr>
              <td>${escapeHtml(item.created_at)}</td><td>${escapeHtml(item.name)}</td><td>${item.is_hidden ? "숨김" : "공개"}</td>
              <td class="message">${escapeHtml(item.message)}</td>
              <td><button type="button" data-id="${item.id}" data-hidden="${item.is_hidden ? "0" : "1"}">${item.is_hidden ? "공개" : "숨김"}</button></td>
            </tr>
          `));
          guestbookTarget.querySelectorAll("button[data-id]").forEach((button) => {
            button.addEventListener("click", async () => {
              await fetch(`/api/admin/guestbook/${button.dataset.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json", "X-Admin-Token": tokenInput.value.trim() },
                body: JSON.stringify({ hidden: button.dataset.hidden === "1" })
              });
              loadAll();
            });
          });
        } catch (error) {
          rsvpTarget.innerHTML = `<p class="empty">${escapeHtml(error.message)}</p>`;
          guestbookTarget.innerHTML = `<p class="empty">${escapeHtml(error.message)}</p>`;
        }
      }
    </script>
  </body>
</html>"""


def main() -> None:
    init_db()
    server = ThreadingHTTPServer(("0.0.0.0", PORT), WeddingApiHandler)
    print(f"Wedding API listening on http://127.0.0.1:{PORT}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
