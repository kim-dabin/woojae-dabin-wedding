# 김우재 · 김다빈 모바일 청첩장

정적 HTML/CSS/JS로 만든 모바일 우선 청첩장입니다.

## 공개 URL

GitHub Pages 배포 주소:

```text
https://kim-dabin.github.io/woojae-dabin-wedding/
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

## 수정

- 문구, 예식 정보, 지도 링크, 교통 정보는 `script.js` 상단의 `WEDDING_DATA`에서 수정합니다.
- 사진은 `assets/photos/hero.jpg`, `assets/photos/photo-01.jpg` - `photo-06.jpg` 파일로 넣고, `script.js` 상단의 `heroImage`와 `photos[].src`를 채웁니다.
- 계좌 정보는 `script.js` 상단의 `giftAccounts`에 `bank`, `account`, `holder`를 채우면 표시됩니다. 비어 있는 계좌는 화면에 나오지 않습니다.
- 한글 본문 폰트는 네이버 `마루 부리(MaruBuri)` 웹폰트를 사용합니다.
- 종이 질감 배경은 `assets/paper-ivory.webp`, `assets/paper-ivory.jpg`를 사용합니다.
