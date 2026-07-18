const RECEPTION_PHOTOS = [
  ["01", "벚꽃 아래 선글라스를 든 김우재와 김다빈"],
  ["03", "풍년떡 방앗간 앞에서 포즈를 취한 김우재와 김다빈"],
  ["04", "나무 아래 돗자리에서 서로를 촬영하는 김우재와 김다빈"],
  ["05", "오래된 건물 앞 벤치에 나란히 앉은 김우재와 김다빈"],
  ["06", "벚꽃 아래에서 아이스크림을 든 김우재와 김다빈"],
  ["07", "실내 주방에서 딸기를 나눠 먹는 김우재와 김다빈"],
  ["09", "실내 주방에서 접시와 귤을 든 김우재와 김다빈"],
  ["10", "거울에 비친 김우재와 김다빈의 웨딩 촬영 준비 순간"],
  ["11", "책장 앞에서 정장을 입고 책을 든 김우재"],
  ["12", "책장 앞에서 웨딩드레스를 입고 부케를 든 김다빈"],
  ["13", "벚꽃길에서 손을 잡고 걷는 김우재와 김다빈"],
  ["14", "벚꽃길에서 아이스크림을 들고 걷는 김우재와 김다빈"],
  ["15", "벚꽃 아래에서 손을 잡고 선 김우재와 김다빈"],
  ["16", "벚꽃 아래에서 아이스크림을 나눠 먹는 김우재와 김다빈"],
  ["17", "침대 위에서 베개 장난을 치는 김우재와 김다빈"],
  ["18", "돗자리 위에서 과일을 든 김우재와 김다빈"],
  ["19", "주방에서 딸기 접시를 든 김우재와 김다빈"],
  ["20", "테이블 너머 딸기를 바라보는 김우재와 김다빈"],
  ["21", "돗자리 위에서 부케를 들고 마주 보는 김우재와 김다빈"],
  ["22", "창가 테이블에 나란히 앉은 김우재와 김다빈"],
  ["23", "꽃다발을 들고 장난스러운 표정을 짓는 김우재와 김다빈"],
  ["24", "파란 셔터 앞에서 손을 내민 김우재와 김다빈"],
  ["25", "나무 아래 돗자리에서 과일을 나누는 김우재와 김다빈"],
  ["26", "오래된 사진관 앞 횡단보도를 걷는 김우재와 김다빈"],
  ["27", "초록 나무 아래 부케를 든 김다빈"],
  ["28", "오래된 사진관 앞에 나란히 선 김우재와 김다빈"],
  ["29", "초록 나무 아래 손을 잡고 선 김우재와 김다빈"],
].map(([number, alt]) => ({
  src: `../assets/photos/photo-${number}.jpg`,
  alt,
}));

const gallery = document.querySelector("[data-reception-gallery]");
const dialog = document.querySelector("#photoDialog");
const dialogImage = dialog.querySelector("img");
const dialogImageStage = dialog.querySelector(".dialog-image-stage");
const dialogClose = dialog.querySelector(".dialog-close");
const photoViewer = dialog.querySelector(".photo-viewer");
const dialogCounter = dialog.querySelector(".dialog-counter");
const dialogPrev = dialog.querySelector("[data-photo-prev]");
const dialogNext = dialog.querySelector("[data-photo-next]");
const dialogReset = dialog.querySelector("[data-photo-reset]");

let dialogPhotos = [];
let activePhotoIndex = 0;
let scrollLockY = 0;
let swipeStartX = 0;
let swipeStartY = 0;
const PHOTO_MIN_SCALE = 1;
const PHOTO_MAX_SCALE = 4;
const PHOTO_ZOOM_THRESHOLD = 1.02;
let photoScale = PHOTO_MIN_SCALE;
let photoTranslateX = 0;
let photoTranslateY = 0;
let pinchStartDistance = 0;
let pinchStartScale = PHOTO_MIN_SCALE;
let pinchStartCenterX = 0;
let pinchStartCenterY = 0;
let pinchStartTranslateX = 0;
let pinchStartTranslateY = 0;
let dragStartX = 0;
let dragStartY = 0;
let dragStartTranslateX = 0;
let dragStartTranslateY = 0;
let isPhotoPinching = false;
let isPhotoDragging = false;
let suppressPhotoSwipeUntil = 0;
let wheelZoomEndTimer = 0;
let lastPhotoTapAt = 0;
let lastPhotoTapX = 0;
let lastPhotoTapY = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderGallery() {
  gallery.innerHTML = RECEPTION_PHOTOS.map(
    (photo, index) => `
      <figure class="photo-frame${index === 0 ? " is-featured" : ""}">
        <button
          class="photo-button"
          type="button"
          data-photo-index="${index}"
          aria-controls="photoDialog"
          aria-haspopup="dialog"
          aria-label="${escapeHtml(`${photo.alt} 크게 보기`)}"
        >
          <img
            src="${escapeHtml(photo.src)}"
            alt="${escapeHtml(photo.alt)}"
            loading="${index < 4 ? "eager" : "lazy"}"
            decoding="async"
          />
        </button>
      </figure>
    `,
  ).join("");

  gallery.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const button = event.target.closest(".photo-button");

    if (!button || !gallery.contains(button)) {
      return;
    }

    const index = Number(button.dataset.photoIndex);

    if (Number.isFinite(index)) {
      openPhotoAt(index);
    }
  });

  gallery.querySelectorAll(".photo-button img").forEach((image) => {
    image.addEventListener("error", () => {
      const button = image.closest(".photo-button");
      button.disabled = true;
      button.classList.add("is-empty");
      image.remove();
    });
  });
}

function openPhotoAt(index) {
  if (typeof dialog.showModal !== "function") {
    window.open(RECEPTION_PHOTOS[index]?.src, "_blank", "noreferrer");
    return;
  }

  dialogPhotos = RECEPTION_PHOTOS;
  lockPageScroll();
  showPhotoAt(index);
  dialog.showModal();
}

function showPhotoAt(index) {
  const count = dialogPhotos.length;

  if (!count) {
    return;
  }

  resetPhotoZoom();
  const safeIndex = Number.isFinite(index) ? Math.trunc(index) : 0;
  activePhotoIndex = ((safeIndex % count) + count) % count;
  const photo = dialogPhotos[activePhotoIndex];

  dialogImage.src = photo.src;
  dialogImage.alt = photo.alt;
  dialogCounter.textContent = `${activePhotoIndex + 1} / ${count}`;
}

function showNextPhoto() {
  showPhotoAt(activePhotoIndex + 1);
}

function showPrevPhoto() {
  showPhotoAt(activePhotoIndex - 1);
}

function closePhoto() {
  if (dialog.open) {
    dialog.close();
  }
}

function clearPhotoDialog() {
  resetPhotoZoom();
  dialogPhotos = [];
  dialogImage.removeAttribute("src");
  dialogImage.alt = "";
  dialogCounter.textContent = "";
}

function lockPageScroll() {
  scrollLockY = window.scrollY;
  document.body.style.top = `-${scrollLockY}px`;
  document.body.classList.add("is-dialog-locked");
}

function unlockPageScroll() {
  const restoreY = scrollLockY;
  const restoreScroll = () => window.scrollTo(0, restoreY);

  document.body.classList.remove("is-dialog-locked");
  document.body.style.removeProperty("top");
  restoreScroll();
  window.requestAnimationFrame(() => {
    restoreScroll();
    window.requestAnimationFrame(restoreScroll);
  });
  window.setTimeout(restoreScroll, 80);
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function isPhotoZoomed() {
  return photoScale > PHOTO_ZOOM_THRESHOLD;
}

function getTouchDistance(firstTouch, secondTouch) {
  return Math.hypot(firstTouch.clientX - secondTouch.clientX, firstTouch.clientY - secondTouch.clientY);
}

function getStageCenteredPoint(clientX, clientY) {
  const rect = dialogImageStage.getBoundingClientRect();

  return {
    x: clientX - rect.left - rect.width / 2,
    y: clientY - rect.top - rect.height / 2,
  };
}

function getTouchCenter(firstTouch, secondTouch) {
  return getStageCenteredPoint(
    (firstTouch.clientX + secondTouch.clientX) / 2,
    (firstTouch.clientY + secondTouch.clientY) / 2,
  );
}

function clampPhotoTranslate(scale, translateX, translateY) {
  const stageRect = dialogImageStage.getBoundingClientRect();
  const imageWidth = dialogImage.offsetWidth || stageRect.width;
  const imageHeight = dialogImage.offsetHeight || stageRect.height;
  const maxX = Math.max(0, (imageWidth * scale - stageRect.width) / 2);
  const maxY = Math.max(0, (imageHeight * scale - stageRect.height) / 2);

  return {
    x: clampNumber(translateX, -maxX, maxX),
    y: clampNumber(translateY, -maxY, maxY),
  };
}

function setPhotoZoom(nextScale, nextTranslateX = photoTranslateX, nextTranslateY = photoTranslateY) {
  photoScale = clampNumber(nextScale, PHOTO_MIN_SCALE, PHOTO_MAX_SCALE);

  if (!isPhotoZoomed()) {
    photoScale = PHOTO_MIN_SCALE;
    photoTranslateX = 0;
    photoTranslateY = 0;
  } else {
    const clamped = clampPhotoTranslate(photoScale, nextTranslateX, nextTranslateY);
    photoTranslateX = clamped.x;
    photoTranslateY = clamped.y;
  }

  dialogImage.style.setProperty("--photo-scale", photoScale.toFixed(4));
  dialogImage.style.setProperty("--photo-x", `${photoTranslateX.toFixed(2)}px`);
  dialogImage.style.setProperty("--photo-y", `${photoTranslateY.toFixed(2)}px`);
  dialog.classList.toggle("is-zoomed", isPhotoZoomed());
}

function resetPhotoZoom() {
  isPhotoPinching = false;
  isPhotoDragging = false;
  pinchStartDistance = 0;
  lastPhotoTapAt = 0;
  dialog.classList.remove("is-gesture-active", "is-dragging", "is-zoomed");
  setPhotoZoom(PHOTO_MIN_SCALE, 0, 0);
}

function beginPhotoPinch(event) {
  const [firstTouch, secondTouch] = event.touches;

  pinchStartDistance = getTouchDistance(firstTouch, secondTouch);
  pinchStartScale = photoScale;
  const center = getTouchCenter(firstTouch, secondTouch);
  pinchStartCenterX = center.x;
  pinchStartCenterY = center.y;
  pinchStartTranslateX = photoTranslateX;
  pinchStartTranslateY = photoTranslateY;
  isPhotoPinching = true;
  isPhotoDragging = false;
  suppressPhotoSwipeUntil = Date.now() + 350;
  dialog.classList.add("is-gesture-active");
  dialog.classList.remove("is-dragging");
}

function updatePhotoPinch(event) {
  if (!isPhotoPinching || event.touches.length < 2 || pinchStartDistance <= 0) {
    return;
  }

  const [firstTouch, secondTouch] = event.touches;
  const currentDistance = getTouchDistance(firstTouch, secondTouch);
  const distanceRatio = currentDistance / pinchStartDistance;
  const scaleRatioFromGesture = distanceRatio < 1 ? Math.pow(distanceRatio, 1.75) : Math.pow(distanceRatio, 1.08);
  const nextScale = pinchStartScale * scaleRatioFromGesture;
  const scaleRatio = clampNumber(nextScale, PHOTO_MIN_SCALE, PHOTO_MAX_SCALE) / pinchStartScale;
  const center = getTouchCenter(firstTouch, secondTouch);
  const nextTranslateX = center.x - (pinchStartCenterX - pinchStartTranslateX) * scaleRatio;
  const nextTranslateY = center.y - (pinchStartCenterY - pinchStartTranslateY) * scaleRatio;

  setPhotoZoom(nextScale, nextTranslateX, nextTranslateY);
}

function zoomPhotoAroundPoint(clientX, clientY, nextScale) {
  const nextPhotoScale = clampNumber(nextScale, PHOTO_MIN_SCALE, PHOTO_MAX_SCALE);
  const scaleRatio = nextPhotoScale / photoScale;
  const center = getStageCenteredPoint(clientX, clientY);
  const nextTranslateX = center.x - (center.x - photoTranslateX) * scaleRatio;
  const nextTranslateY = center.y - (center.y - photoTranslateY) * scaleRatio;

  setPhotoZoom(nextPhotoScale, nextTranslateX, nextTranslateY);
}

function beginPhotoDrag(touch) {
  dragStartX = touch.clientX;
  dragStartY = touch.clientY;
  dragStartTranslateX = photoTranslateX;
  dragStartTranslateY = photoTranslateY;
  isPhotoDragging = true;
  suppressPhotoSwipeUntil = Date.now() + 250;
  dialog.classList.add("is-dragging");
}

function updatePhotoDrag(touch) {
  if (!isPhotoDragging || !isPhotoZoomed()) {
    return;
  }

  setPhotoZoom(
    photoScale,
    dragStartTranslateX + touch.clientX - dragStartX,
    dragStartTranslateY + touch.clientY - dragStartY,
  );
}

function endPhotoGesture() {
  isPhotoPinching = false;
  isPhotoDragging = false;
  pinchStartDistance = 0;
  suppressPhotoSwipeUntil = Date.now() + 250;
  dialog.classList.remove("is-gesture-active", "is-dragging");
  setPhotoZoom(photoScale, photoTranslateX, photoTranslateY);
}

function isPhotoControlTarget(target) {
  return target instanceof Element && Boolean(target.closest(".dialog-nav, .dialog-reset"));
}

function handlePhotoTouchStart(event) {
  if (isPhotoControlTarget(event.target)) {
    return;
  }

  if (event.touches.length >= 2) {
    event.preventDefault();
    beginPhotoPinch(event);
    return;
  }

  if (event.touches.length !== 1) {
    return;
  }

  const touch = event.touches[0];

  if (isPhotoZoomed()) {
    event.preventDefault();
    beginPhotoDrag(touch);
    return;
  }

  startPhotoSwipe(touch.clientX, touch.clientY);
}

function handlePhotoTouchMove(event) {
  if (isPhotoControlTarget(event.target)) {
    return;
  }

  if (event.touches.length >= 2) {
    event.preventDefault();

    if (!isPhotoPinching) {
      beginPhotoPinch(event);
    }

    updatePhotoPinch(event);
    return;
  }

  if (event.touches.length === 1 && isPhotoDragging) {
    event.preventDefault();
    updatePhotoDrag(event.touches[0]);
  }
}

function handlePhotoTouchEnd(event) {
  if (isPhotoControlTarget(event.target)) {
    return;
  }

  if (event.touches.length >= 2) {
    beginPhotoPinch(event);
    return;
  }

  if (isPhotoPinching && event.touches.length === 1 && isPhotoZoomed()) {
    beginPhotoDrag(event.touches[0]);
    return;
  }

  if (isPhotoDragging) {
    const touch = event.changedTouches[0];

    if (touch && Math.hypot(touch.clientX - dragStartX, touch.clientY - dragStartY) < 12) {
      event.preventDefault();
      handlePhotoTap(touch.clientX, touch.clientY);
    }

    endPhotoGesture();
    return;
  }

  if (isPhotoPinching || isPhotoZoomed() || Date.now() < suppressPhotoSwipeUntil) {
    endPhotoGesture();
    return;
  }

  const touch = event.changedTouches[0];

  if (touch) {
    finishPhotoSwipe(touch.clientX, touch.clientY);
  }
}

function handlePhotoTap(clientX, clientY) {
  const now = Date.now();
  const isDoubleTap = now - lastPhotoTapAt < 320 && Math.hypot(clientX - lastPhotoTapX, clientY - lastPhotoTapY) < 34;

  lastPhotoTapAt = now;
  lastPhotoTapX = clientX;
  lastPhotoTapY = clientY;

  if (!isDoubleTap) {
    return;
  }

  suppressPhotoSwipeUntil = now + 280;
  lastPhotoTapAt = 0;

  if (isPhotoZoomed()) {
    resetPhotoZoom();
    return;
  }

  zoomPhotoAroundPoint(clientX, clientY, 2);
}

function handlePhotoWheel(event) {
  if (!event.ctrlKey && !event.metaKey) {
    return;
  }

  event.preventDefault();
  dialog.classList.add("is-gesture-active");
  zoomPhotoAroundPoint(event.clientX, event.clientY, photoScale * Math.exp(-event.deltaY * 0.006));
  window.clearTimeout(wheelZoomEndTimer);
  wheelZoomEndTimer = window.setTimeout(() => {
    dialog.classList.remove("is-gesture-active");
    setPhotoZoom(photoScale, photoTranslateX, photoTranslateY);
  }, 140);
}

function preventNativePhotoGesture(event) {
  event.preventDefault();
}

function startPhotoSwipe(clientX, clientY) {
  if (isPhotoZoomed() || Date.now() < suppressPhotoSwipeUntil) {
    return;
  }

  swipeStartX = clientX;
  swipeStartY = clientY;
}

function finishPhotoSwipe(clientX, clientY) {
  if (isPhotoZoomed() || Date.now() < suppressPhotoSwipeUntil) {
    return;
  }

  const deltaX = clientX - swipeStartX;
  const deltaY = clientY - swipeStartY;
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  if (absX < 12 && absY < 12) {
    handlePhotoTap(clientX, clientY);
    return;
  }

  if (absX < 45 || absX < absY * 1.2) {
    return;
  }

  if (deltaX < 0) {
    showNextPhoto();
    return;
  }

  showPrevPhoto();
}

dialogClose.addEventListener("click", closePhoto);
dialogPrev.addEventListener("click", showPrevPhoto);
dialogNext.addEventListener("click", showNextPhoto);
dialogReset.addEventListener("click", resetPhotoZoom);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closePhoto();
  }
});

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closePhoto();
});

dialog.addEventListener("close", () => {
  clearPhotoDialog();
  unlockPageScroll();
});

document.addEventListener("keydown", (event) => {
  if (!dialog.open) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showPrevPhoto();
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    showNextPhoto();
  }
});

if ("PointerEvent" in window) {
  photoViewer.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || (event.pointerType === "mouse" && event.button !== 0)) {
      return;
    }

    startPhotoSwipe(event.clientX, event.clientY);
  });

  photoViewer.addEventListener("pointerup", (event) => {
    if (event.pointerType === "touch" || (event.pointerType === "mouse" && event.button !== 0)) {
      return;
    }

    finishPhotoSwipe(event.clientX, event.clientY);
  });
}

photoViewer.addEventListener("touchstart", handlePhotoTouchStart, { passive: false, capture: true });
photoViewer.addEventListener("touchmove", handlePhotoTouchMove, { passive: false, capture: true });
photoViewer.addEventListener("touchend", handlePhotoTouchEnd);
photoViewer.addEventListener("touchcancel", endPhotoGesture);
photoViewer.addEventListener("wheel", handlePhotoWheel, { passive: false });
photoViewer.addEventListener("gesturestart", preventNativePhotoGesture, { passive: false, capture: true });
photoViewer.addEventListener("gesturechange", preventNativePhotoGesture, { passive: false, capture: true });
photoViewer.addEventListener("gestureend", preventNativePhotoGesture, { passive: false, capture: true });

dialogImage.addEventListener("load", () => {
  setPhotoZoom(photoScale, photoTranslateX, photoTranslateY);
});

renderGallery();
