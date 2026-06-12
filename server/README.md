# Wedding API Server

맥미니에서 RSVP와 방명록을 저장하는 작은 Python 서버입니다. Python 표준 라이브러리와 SQLite만 사용합니다.

## 로컬 실행

```bash
cd server
cp .env.example .env
python3 app.py
```

상태 확인:

```bash
curl http://127.0.0.1:8787/health
```

관리 화면:

```text
http://127.0.0.1:8787/admin
```

## 환경 변수

- `PORT`: API 포트. 기본값은 `8787`.
- `WEDDING_DB_PATH`: SQLite DB 파일 경로.
- `WEDDING_ADMIN_TOKEN`: 관리자 API와 `/admin` 화면에서 사용할 토큰.
- `ALLOWED_ORIGINS`: CORS 허용 origin 목록. 쉼표로 구분합니다.

## API

- `POST /api/rsvp`: 참석 여부 저장.
- `GET /api/guestbook`: 공개 방명록 목록 조회.
- `POST /api/guestbook`: 방명록 저장.
- `GET /api/admin/rsvp`: 관리자 RSVP 목록 조회. `X-Admin-Token` 필요.
- `GET /api/admin/guestbook`: 관리자 방명록 목록 조회. `X-Admin-Token` 필요.
- `PATCH /api/admin/guestbook/:id`: 방명록 숨김/공개. `X-Admin-Token` 필요.

## 배포 메모

GitHub Pages에서 직접 호출하려면 API도 HTTPS 공개 주소가 필요합니다. 현재는 맥미니에서 ngrok 터널을 실행해 아래 주소로 연결합니다.

```text
https://dullness-ignition-fifty.ngrok-free.dev
```

`script.js` 상단의 `WEDDING_DATA.api.baseUrl`도 같은 주소를 사용합니다.

현재 맥미니 운영 경로:

```text
~/woojae-dabin-wedding-server
```

launchd 상태 확인:

```bash
ssh mini 'launchctl print gui/$(id -u)/com.woojaedabin.wedding-api | grep -E "state =|pid ="'
```

API 상태 확인:

```bash
ssh mini 'curl http://127.0.0.1:8787/health'
```

ngrok 터널 상태 확인:

```bash
ssh mini 'curl http://127.0.0.1:4040/api/tunnels'
```

관리자 토큰 확인:

```bash
ssh mini 'cat ~/woojae-dabin-wedding-server/admin-token.txt'
```
