# 사진 교체 방법

아래 파일명으로 사진을 넣은 뒤, `script.js` 상단 `WEDDING_DATA.photos`의 `src` 값을 채우면 반영됩니다.

- `hero.jpg`: 첫 화면 배경 사진입니다. 사용하려면 `heroImage`를 `"assets/photos/hero.jpg"`로 바꿉니다.
- `photo-01.jpg` - `photo-11.jpg`: 갤러리 사진입니다. 각 사진의 `src`를 `"assets/photos/photo-01.jpg"`처럼 채웁니다.

사진은 세로 사진 중심으로 넣는 것이 좋고, 갤러리에서는 컬러로 표시됩니다.
원본 대용량 `IMG_*.JPG` 파일은 로컬 보관용이며, 배포에는 `photo-01.jpg`처럼 웹용으로 줄인 파일만 사용합니다.
