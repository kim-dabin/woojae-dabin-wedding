#!/usr/bin/env python3
"""Create a consistent SQLite backup for the wedding API database."""

from __future__ import annotations

import os
import sqlite3
from datetime import datetime
from pathlib import Path


APP_DIR = Path(__file__).resolve().parent


def load_dotenv(path: Path) -> None:
    if not path.exists():
        return

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue

        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def resolve_path(value: str | Path) -> Path:
    path = Path(value).expanduser()
    if path.is_absolute():
        return path
    return APP_DIR / path


def prune_backups(backup_dir: Path, keep: int) -> None:
    backups = sorted(backup_dir.glob("wedding-*.sqlite3"), key=lambda item: item.stat().st_mtime, reverse=True)

    for old_backup in backups[keep:]:
        for suffix in ("-wal", "-shm"):
            Path(f"{old_backup}{suffix}").unlink(missing_ok=True)
        old_backup.unlink()


def main() -> None:
    load_dotenv(APP_DIR / ".env")

    db_path = resolve_path(os.environ.get("WEDDING_DB_PATH", APP_DIR / "data" / "wedding.sqlite3"))
    backup_dir = resolve_path(os.environ.get("WEDDING_BACKUP_DIR", APP_DIR / "backups"))
    keep = max(1, int(os.environ.get("WEDDING_BACKUP_KEEP", "168")))

    if not db_path.exists():
        raise SystemExit(f"database does not exist: {db_path}")

    backup_dir.mkdir(parents=True, exist_ok=True)
    backup_path = backup_dir / f"wedding-{datetime.now().strftime('%Y%m%d-%H%M%S')}.sqlite3"

    source_uri = f"file:{db_path}?mode=ro"
    with sqlite3.connect(source_uri, uri=True) as source, sqlite3.connect(backup_path) as destination:
        source.backup(destination)
        destination.execute("PRAGMA wal_checkpoint(TRUNCATE)")
        destination.execute("PRAGMA journal_mode=DELETE")
        integrity = destination.execute("PRAGMA integrity_check").fetchone()[0]

    if integrity != "ok":
        backup_path.unlink(missing_ok=True)
        raise SystemExit(f"backup integrity check failed: {integrity}")

    for suffix in ("-wal", "-shm"):
        Path(f"{backup_path}{suffix}").unlink(missing_ok=True)

    os.chmod(backup_path, 0o600)
    prune_backups(backup_dir, keep)
    print(backup_path)


if __name__ == "__main__":
    main()
