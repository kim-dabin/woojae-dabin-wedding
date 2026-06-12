# 김우재 · 김다빈 모바일 청첩장

정적 HTML/CSS/JS로 만든 모바일 우선 청첩장입니다.

## 공개 URL

GitHub Pages 배포 주소:

```text
https://kim-dabin.github.io/woojae-dabin-wedding/
```

RSVP/방명록 API 주소:

```text
https://dullness-ignition-fifty.ngrok-free.dev
```

QR 인쇄용 파일:

- `qr/woojae-dabin-github-pages.svg`
- `qr/woojae-dabin-github-pages.png`

## 실행

파일만 열어도 동작합니다.

```bash
open index.html
```

로컬 서버로 확인하려면 아래 명령을 실행한 뒤 `http://localhost:8000`으로 접속합니다.

```bash
python3 -m http.server 8000
```

## RSVP / 방명록 서버

RSVP와 방명록 저장용 API는 `server/`에 있습니다. 맥미니에서는 아래 경로에 배포해 launchd로 실행합니다.

```text
~/woojae-dabin-wedding-server
```

상태 확인:

```bash
ssh mini 'curl http://127.0.0.1:8787/health'
```

관리자 토큰은 맥미니의 `~/woojae-dabin-wedding-server/admin-token.txt`에만 저장합니다. 공개 사이트에서 서버 저장을 사용하려면 HTTPS 터널 주소를 만든 뒤 `script.js` 상단의 `WEDDING_DATA.api.baseUrl`에 입력합니다.

현재 HTTPS 터널은 맥미니의 ngrok launchd 서비스 `com.woojaedabin.ngrok-api`가 실행합니다.

로컬 미리보기에서만 임시 API 주소를 붙여 테스트할 수 있습니다.

```text
http://127.0.0.1:8000/?apiBaseUrl=https%3A%2F%2Fexample.trycloudflare.com
```

## 수정

- 문구, 예식 정보, 지도 링크, 교통 정보는 `script.js` 상단의 `WEDDING_DATA`에서 수정합니다.
- 사진은 `assets/photos/hero.jpg`, `assets/photos/photo-01.jpg` - `photo-06.jpg` 파일로 넣고, `script.js` 상단의 `heroImage`와 `photos[].src`를 채웁니다.
- 계좌 정보는 `script.js` 상단의 `giftAccounts`에 `bank`, `account`, `holder`를 채우면 표시됩니다. 비어 있는 계좌는 화면에 나오지 않습니다.
- 연락처는 `script.js` 상단의 `contactGroups`에서 수정합니다.
- 한글 본문 폰트는 네이버 `마루 부리(MaruBuri)` 웹폰트를 사용합니다.
- 종이 질감 배경은 `assets/paper-ivory.webp`, `assets/paper-ivory.jpg`를 사용합니다.
