const WEDDING_DATA = {
  groom: {
    name: "김우재",
    shortName: "우재",
    parents: "김성대 · 류혜정",
  },
  bride: {
    name: "김다빈",
    shortName: "다빈",
    parents: "김건호 · 김선이",
  },
  title: "결혼합니다",
  heroImage: "assets/photos/photo-01.jpg",
  dateText: "2026.08.22 SAT 11:00 AM",
  event: {
    year: "2026",
    month: "08",
    day: "22",
    weekday: "SAT",
    dateLong: "2026년 8월 22일 토요일 오전 11시",
    startLocal: "20260822T110000",
    endLocal: "20260822T130000",
    venue: "건대 스타시티아트홀",
    address: "서울 광진구 능동로 110 스타시티영존 5층",
    addressDetail: "서울 광진구 능동로 110 스타시티영존 5층 (화양동 4-20)",
  },
  mapImage: {
    src: "assets/starcity-map-large-text.png?v=20260628-map-fix1",
    alt: "건대입구역 2번 출구와 3번 출구, 건국대학교 병원, 주차장 입구, 스타시티아트웨딩홀 위치를 표시한 약도",
  },
  invitation: [
    "초록빛이 찬란하게 빛나는\n8월의 어느 날,\n저희 두 사람은 서로에게\n그늘과 나무가 되려 합니다.",
    "한여름의 푸르름처럼\n변함없는 마음으로\n서로의 계절을 다채롭게 채워가며,\n언제나 옆에서 아끼고 사랑하며\n살아가겠습니다.",
    "저희 두 사람의 푸른 시작을\n약속하는 날,\n소중하고 귀한 걸음으로\n함께 빛내주시면 감사하겠습니다.",
  ],
  navigation: [
    {
      label: "네이버지도",
      href: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EB%8A%A5%EB%8F%99%EB%A1%9C%20110%20%EC%8A%A4%ED%83%80%EC%8B%9C%ED%8B%B0%EC%98%81%EC%A1%B4%205%EC%B8%B5",
    },
    {
      label: "카카오맵",
      href: "https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EB%8A%A5%EB%8F%99%EB%A1%9C%20110%20%EC%8A%A4%ED%83%80%EC%8B%9C%ED%8B%B0%EC%98%81%EC%A1%B4%205%EC%B8%B5",
    },
    {
      label: "티맵",
      href: "tmap://search?name=%EA%B1%B4%EB%8C%80%20%EC%8A%A4%ED%83%80%EC%8B%9C%ED%8B%B0%EC%95%84%ED%8A%B8%ED%99%80",
    },
  ],
  directions: [
    {
      term: "NAVIGATION",
      lines: ["서울 광진구 능동로 110 스타시티영존 5층 (화양동 4-20)"],
    },
    {
      term: "PARKING",
      lines: [
        "건물 내 B1 - B5 | 2시간 무료 주차",
        "건국대학교 병원 지상·지하 주차장 | 1시간 30분 무료주차",
      ],
    },
    {
      term: "SUBWAY",
      lines: ["2호선 건대입구역 2번 출구", "7호선 건대입구역 3번 출구"],
    },
    {
      term: "BUS",
      lines: [
        "건대입구역, 건대입구역 사거리",
        "간선버스: 240, 721, N61, N62",
        "지선버스: 2016, 2222, 3217, 3220, 4212",
        "직행버스: 102, 3500",
        "공항버스: 6013",
      ],
    },
  ],
  showGiftAccountPreview: false,
  giftAccounts: [
    {
      side: "신랑측",
      people: [
        { role: "신랑", name: "김우재", bank: "우리은행", account: "1002-742-834602", holder: "김우재" },
        { role: "부모님", name: "김성대 · 류혜정", bank: "기업은행", account: "918-006024-01-011", holder: "류혜정" },
      ],
    },
    {
      side: "신부측",
      people: [
        { role: "신부", name: "김다빈", bank: "국민은행", account: "462602-04-344182", holder: "김다빈" },
        { role: "아버지", name: "김건호", bank: "농협은행", account: "302-0594-9688-51", holder: "김건호" },
        { role: "어머니", name: "김선이", bank: "농협은행", account: "302-0572-4256-31", holder: "김선이" },
      ],
    },
  ],
  contactGroups: [
    {
      side: "신랑측",
      people: [
        { role: "신랑", name: "김우재", phone: "01042667637" },
        { role: "아버지", name: "김성대", phone: "01052214979" },
        { role: "어머니", name: "류혜정", phone: "01022917636" },
      ],
    },
    {
      side: "신부측",
      people: [
        { role: "신부", name: "김다빈", phone: "01043001117" },
        { role: "아버지", name: "김건호", phone: "01062376830" },
        { role: "어머니", name: "김선이", phone: "01042246830" },
      ],
    },
  ],
  photos: [
    {
      src: "assets/photos/photo-01.jpg",
      suggestedFile: "assets/photos/photo-01.jpg",
      alt: "벚꽃 아래 선글라스를 든 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-03.jpg",
      suggestedFile: "assets/photos/photo-03.jpg",
      alt: "풍년떡 방앗간 앞에서 포즈를 취한 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-04.jpg",
      suggestedFile: "assets/photos/photo-04.jpg",
      alt: "나무 아래 돗자리에서 서로를 촬영하는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-05.jpg",
      suggestedFile: "assets/photos/photo-05.jpg",
      alt: "오래된 건물 앞 벤치에 나란히 앉은 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-06.jpg",
      suggestedFile: "assets/photos/photo-06.jpg",
      alt: "벚꽃 아래에서 아이스크림을 든 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-07.jpg",
      suggestedFile: "assets/photos/photo-07.jpg",
      alt: "실내 주방에서 딸기를 나눠 먹는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-09.jpg",
      suggestedFile: "assets/photos/photo-09.jpg",
      alt: "실내 주방에서 접시와 귤을 든 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-10.jpg",
      suggestedFile: "assets/photos/photo-10.jpg",
      alt: "거울에 비친 김우재와 김다빈의 웨딩 촬영 준비 순간",
    },
    {
      src: "assets/photos/photo-11.jpg",
      suggestedFile: "assets/photos/photo-11.jpg",
      alt: "책장 앞에서 정장을 입고 책을 든 김우재",
    },
    {
      src: "assets/photos/photo-12.jpg",
      suggestedFile: "assets/photos/photo-12.jpg",
      alt: "책장 앞에서 웨딩드레스를 입고 부케를 든 김다빈",
    },
    {
      src: "assets/photos/photo-13.jpg",
      suggestedFile: "assets/photos/photo-13.jpg",
      alt: "벚꽃길에서 손을 잡고 걷는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-14.jpg",
      suggestedFile: "assets/photos/photo-14.jpg",
      alt: "벚꽃길에서 아이스크림을 들고 걷는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-15.jpg",
      suggestedFile: "assets/photos/photo-15.jpg",
      alt: "벚꽃 아래에서 손을 잡고 선 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-16.jpg",
      suggestedFile: "assets/photos/photo-16.jpg",
      alt: "벚꽃 아래에서 아이스크림을 나눠 먹는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-17.jpg",
      suggestedFile: "assets/photos/photo-17.jpg",
      alt: "침대 위에서 베개 장난을 치는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-18.jpg",
      suggestedFile: "assets/photos/photo-18.jpg",
      alt: "돗자리 위에서 과일을 든 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-19.jpg",
      suggestedFile: "assets/photos/photo-19.jpg",
      alt: "주방에서 딸기 접시를 든 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-20.jpg",
      suggestedFile: "assets/photos/photo-20.jpg",
      alt: "테이블 너머 딸기를 바라보는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-21.jpg",
      suggestedFile: "assets/photos/photo-21.jpg",
      alt: "돗자리 위에서 부케를 들고 마주 보는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-22.jpg",
      suggestedFile: "assets/photos/photo-22.jpg",
      alt: "창가 테이블에 나란히 앉은 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-23.jpg",
      suggestedFile: "assets/photos/photo-23.jpg",
      alt: "꽃다발을 들고 장난스러운 표정을 짓는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-24.jpg",
      suggestedFile: "assets/photos/photo-24.jpg",
      alt: "파란 셔터 앞에서 손을 내민 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-25.jpg",
      suggestedFile: "assets/photos/photo-25.jpg",
      alt: "나무 아래 돗자리에서 과일을 나누는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-26.jpg",
      suggestedFile: "assets/photos/photo-26.jpg",
      alt: "오래된 사진관 앞 횡단보도를 걷는 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-27.jpg",
      suggestedFile: "assets/photos/photo-27.jpg",
      alt: "초록 나무 아래 부케를 든 김다빈",
    },
    {
      src: "assets/photos/photo-28.jpg",
      suggestedFile: "assets/photos/photo-28.jpg",
      alt: "오래된 사진관 앞에 나란히 선 김우재와 김다빈",
    },
    {
      src: "assets/photos/photo-29.jpg",
      suggestedFile: "assets/photos/photo-29.jpg",
      alt: "초록 나무 아래 손을 잡고 선 김우재와 김다빈",
    },
  ],
  closing: "귀한 걸음으로 함께해 주세요.",
  api: {
    baseUrl: "https://dullness-ignition-fifty.ngrok-free.dev",
  },
};

const app = document.querySelector("#app");
const dialog = document.querySelector("#photoDialog");
const dialogImage = dialog.querySelector("img");
const dialogImageStage = dialog.querySelector(".dialog-image-stage");
const dialogClose = dialog.querySelector(".dialog-close");
const photoViewer = dialog.querySelector(".photo-viewer");
const dialogCounter = dialog.querySelector(".dialog-counter");
const dialogPrev = dialog.querySelector("[data-photo-prev]");
const dialogNext = dialog.querySelector("[data-photo-next]");
const dialogReset = dialog.querySelector("[data-photo-reset]");
const RSVP_STORAGE_KEY = "woojae-dabin-rsvp-preview";
const GUESTBOOK_STORAGE_KEY = "woojae-dabin-guestbook-preview";
const API_TIMEOUT_MS = 7000;
let galleryPhotos = [];
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

function nl2br(value) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function renderVerticalText(value) {
  return Array.from(value)
    .map((char) => `<span aria-hidden="true">${escapeHtml(char)}</span>`)
    .join("");
}

function parseLocalEventDate(event) {
  const year = Number(event.year);
  const month = Number(event.month) - 1;
  const day = Number(event.day);

  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) {
    return null;
  }

  return new Date(year, month, day);
}

function getDdayText(event) {
  const eventDate = parseLocalEventDate(event);

  if (!eventDate) {
    return "";
  }

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const oneDay = 24 * 60 * 60 * 1000;
  const daysLeft = Math.ceil((eventDate.getTime() - todayDate.getTime()) / oneDay);

  if (daysLeft > 0) {
    return `${daysLeft}일 남았습니다.`;
  }

  if (daysLeft === 0) {
    return "오늘입니다.";
  }

  return "함께해 주셔서 감사합니다.";
}

function renderCalendar(event) {
  const eventDate = parseLocalEventDate(event);

  if (!eventDate) {
    return "";
  }

  const year = eventDate.getFullYear();
  const month = eventDate.getMonth();
  const selectedDay = eventDate.getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];
  const cells = [];

  for (let i = 0; i < firstWeekday; i += 1) {
    cells.push(`<span class="calendar-day is-empty" aria-hidden="true"></span>`);
  }

  for (let day = 1; day <= lastDay; day += 1) {
    const weekday = new Date(year, month, day).getDay();
    const classNames = ["calendar-day"];

    if (weekday === 0) {
      classNames.push("is-sunday");
    }

    if (day === selectedDay) {
      classNames.push("is-selected");
    }

    cells.push(`<span class="${classNames.join(" ")}"${day === selectedDay ? ' aria-current="date"' : ""}>${day}</span>`);
  }

  return `
    <div class="calendar-block" aria-label="${year}년 ${month + 1}월 달력">
      <div class="calendar-weekdays" aria-hidden="true">
        ${weekdayLabels.map((label) => `<span>${label}</span>`).join("")}
      </div>
      <div class="calendar-grid">
        ${cells.join("")}
      </div>
    </div>
  `;
}

function render() {
  const data = WEDDING_DATA;
  const coupleNames = `${data.groom.name} · ${data.bride.name}`;
  const visiblePhotos = data.photos.filter((photo) => photo.src);
  const visibleGiftGroups = data.giftAccounts
    .map((group) => ({
      ...group,
      people: data.showGiftAccountPreview
        ? group.people
        : group.people.filter((person) => person.bank && person.account),
    }))
    .filter((group) => group.people.length);

  app.innerHTML = `
    <section class="section hero" aria-labelledby="heroTitle">
      ${data.heroImage ? `<div class="hero-photo" aria-hidden="true"><img src="${escapeHtml(data.heroImage)}" alt="" /></div>` : ""}
      <div class="hero-inner">
        <div class="hero-mark">
          <h1 id="heroTitle" class="vertical-title" aria-label="${escapeHtml(data.title)}">${renderVerticalText(data.title)}</h1>
        </div>
        <div class="hero-rule" aria-hidden="true"></div>
        <div class="couple-block">
          <p class="couple-names">${escapeHtml(coupleNames)}</p>
          <p class="date-line">${escapeHtml(data.dateText)}</p>
          <p class="place-line">${escapeHtml(data.event.venue)}</p>
        </div>
      </div>
    </section>

    <section class="section invitation" aria-labelledby="invitationTitle">
      <p id="invitationTitle" class="section-kicker">INVITATION</p>
      <div class="invitation-text">
        ${data.invitation.map((line) => `<p>${nl2br(line)}</p>`).join("")}
      </div>
      <div class="family" aria-label="혼주와 신랑 신부">
        <p class="family-row"><strong>${escapeHtml(data.groom.parents)}</strong>의 아들 <strong>신랑 ${escapeHtml(data.groom.shortName)}</strong></p>
        <p class="family-row"><strong>${escapeHtml(data.bride.parents)}</strong>의 딸 <strong>신부 ${escapeHtml(data.bride.shortName)}</strong></p>
      </div>
      ${renderActionStrip()}
    </section>

    <section class="section gallery" aria-labelledby="galleryTitle">
      <p id="galleryTitle" class="section-kicker">GALLERY</p>
      <h2 class="section-title">우리의 순간</h2>
      <div class="section-rule-small" aria-hidden="true"></div>
      <div class="photo-strip${visiblePhotos.length === 1 ? " is-single" : ""}" aria-label="사진 갤러리">
        ${visiblePhotos.map(renderPhoto).join("")}
      </div>
    </section>

    <section class="section event" aria-labelledby="eventTitle">
      <p id="eventTitle" class="section-kicker">WEDDING DAY</p>
      <div class="event-panel">
        <div class="date-mark" aria-hidden="true">
          <span class="month">${escapeHtml(data.event.month)}</span>
          <span class="day">${escapeHtml(data.event.day)}</span>
          <span class="weekday">${escapeHtml(data.event.weekday)}</span>
        </div>
        <div class="event-copy">
          <h2>${escapeHtml(data.event.dateLong)}</h2>
          <p><strong>${escapeHtml(data.event.venue)}</strong></p>
          <p>${escapeHtml(data.event.address)}</p>
          ${renderCalendar(data.event)}
          <p class="dday-line">${escapeHtml(data.groom.shortName)}와 ${escapeHtml(data.bride.shortName)}의 결혼식이 <strong>${escapeHtml(getDdayText(data.event))}</strong></p>
          <button class="line-button" type="button" data-calendar>캘린더에 추가</button>
        </div>
      </div>
    </section>

    <section class="section reception-notice" aria-label="서산 피로연 별도 안내">
      <p class="reception-notice-text">서산 피로연 안내를 받으신 분은 별도 안내 페이지를 확인해 주세요.</p>
      <a class="line-button reception-notice-link" href="reception/">서산 피로연 안내</a>
    </section>

    <section class="section directions" aria-labelledby="directionsTitle">
      <p id="directionsTitle" class="section-kicker">LOCATION</p>
      <h2 class="section-title">오시는 길</h2>
      <div class="section-rule-small" aria-hidden="true"></div>
      ${renderMap()}
      <div class="nav-buttons" aria-label="지도 앱으로 보기">
        ${data.navigation.map((item) => `<a class="nav-button" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`).join("")}
      </div>
      <dl class="way-list">
        ${data.directions.map(renderDirection).join("")}
      </dl>
    </section>

    ${visibleGiftGroups.length ? renderGiftAccounts(visibleGiftGroups) : ""}

    ${renderGuestbookSection()}

    <section class="section closing" aria-label="마무리 인사">
      <p class="closing-message">${escapeHtml(data.closing)}</p>
      <p class="closing-names">${escapeHtml(coupleNames)}</p>
    </section>

    ${renderRsvpDialog()}
    ${renderContactDialog(data.contactGroups)}
    <div class="toast" role="status" aria-live="polite" data-toast></div>
  `;

  wireHeroImage();
  wireGallery();
  wireMap();
  wireGiftAccounts();
  wireInteractiveFeatures();
  app.querySelector("[data-calendar]").addEventListener("click", downloadCalendar);
}

function renderActionStrip() {
  return `
    <div class="action-strip" aria-label="추가 안내">
      <button class="line-button" type="button" data-open-dialog="contactDialog">연락처</button>
      <button class="line-button" type="button" data-open-dialog="rsvpDialog">참석 여부</button>
      <a class="line-button" href="#guestbook">방명록</a>
    </div>
  `;
}

function renderPhoto(photo, index) {
  const hasImage = Boolean(photo.src);
  const label = hasImage ? `${photo.alt} 크게 보기` : `${photo.alt} 자리`;
  const featureClass = index === 0 ? " is-featured" : "";
  const dialogAttrs = hasImage ? ` aria-controls="photoDialog" aria-haspopup="dialog"` : "";

  return `
    <figure class="photo-frame${featureClass}">
      <button class="photo-button${hasImage ? "" : " is-empty"}" type="button" data-photo-index="${index}" data-photo-src="${escapeHtml(photo.src)}" data-photo-alt="${escapeHtml(photo.alt)}" aria-label="${escapeHtml(label)}"${dialogAttrs}${hasImage ? "" : " disabled"}>
        ${hasImage ? `<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="eager" decoding="async" />` : ""}
      </button>
    </figure>
  `;
}

function renderDirection(item) {
  return `
    <div class="way-item">
      <dt>${escapeHtml(item.term)}</dt>
      <dd>${item.lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}</dd>
    </div>
  `;
}

function renderGiftAccounts(groups) {
  return `
    <section class="section gift" aria-labelledby="giftTitle">
      <p id="giftTitle" class="section-kicker">ACCOUNT</p>
      <h2 class="gift-title">마음 전하실 곳</h2>
      <p class="gift-note">축하의 마음을 전해주셔서 감사합니다.</p>
      <div class="gift-groups">
        ${groups.map(renderGiftGroup).join("")}
      </div>
    </section>
  `;
}

function renderGiftGroup(group) {
  return `
    <details class="gift-group">
      <summary>${escapeHtml(group.side)}</summary>
      <div class="gift-list">
        ${group.people.map(renderGiftPerson).join("")}
      </div>
    </details>
  `;
}

function renderGiftPerson(person) {
  const hasAccount = Boolean(person.bank && person.account);
  const copyText = `${person.bank} ${person.account} ${person.holder}`;
  return `
    <div class="gift-row${hasAccount ? "" : " is-pending"}">
      <div class="gift-person">
        <span class="gift-role">${escapeHtml(person.role)}</span>
        <strong>${escapeHtml(person.name)}</strong>
      </div>
      <div class="gift-account">
        ${
          hasAccount
            ? `<span>${escapeHtml(person.bank)}</span>
        <span>${escapeHtml(person.account)}</span>
        <span>예금주 ${escapeHtml(person.holder)}</span>`
            : `<span class="gift-pending">계좌번호 준비 중</span>`
        }
      </div>
      ${hasAccount ? `<button class="copy-button" type="button" data-copy="${escapeHtml(copyText)}">복사</button>` : ""}
    </div>
  `;
}

function renderGuestbookSection() {
  return `
    <section id="guestbook" class="section guestbook" aria-labelledby="guestbookTitle">
      <p id="guestbookTitle" class="section-kicker">GUESTBOOK</p>
      <h2 class="section-title">축하의 말</h2>
      <div class="section-rule-small" aria-hidden="true"></div>
      <form class="guestbook-form" data-guestbook-form>
        <label>
          <span>이름</span>
          <input type="text" name="name" autocomplete="name" required maxlength="20" />
        </label>
        <label>
          <span>메시지</span>
          <textarea name="message" rows="4" required maxlength="160"></textarea>
        </label>
        <button class="line-button" type="submit">남기기</button>
        <p class="form-note">${escapeHtml(renderStorageNote())}</p>
      </form>
      <div class="guestbook-list" data-guestbook-list></div>
    </section>
  `;
}

function renderRsvpDialog() {
  return `
    <dialog id="rsvpDialog" class="form-dialog" aria-labelledby="rsvpTitle">
      <form class="dialog-panel" data-rsvp-form>
        <button class="dialog-text-close" type="button" data-dialog-close="rsvpDialog">닫기</button>
        <p class="section-kicker">RSVP</p>
        <h2 id="rsvpTitle" class="dialog-title">참석 여부 전달</h2>
        <div class="section-rule-small" aria-hidden="true"></div>

        <fieldset class="form-fieldset">
          <legend>구분</legend>
          <div class="choice-grid">
            <label class="choice-line"><input type="radio" name="side" value="신랑측" required /><span class="choice-text">신랑측</span></label>
            <label class="choice-line"><input type="radio" name="side" value="신부측" /><span class="choice-text">신부측</span></label>
          </div>
        </fieldset>

        <div class="form-grid">
          <label>
            <span>성함</span>
            <input type="text" name="name" autocomplete="name" required maxlength="20" />
          </label>
          <label>
            <span>인원</span>
            <select name="count">
              <option value="1">1명</option>
              <option value="2">2명</option>
              <option value="3">3명</option>
              <option value="4명 이상">4명 이상</option>
            </select>
          </label>
        </div>

        <fieldset class="form-fieldset">
          <legend>참석</legend>
          <div class="choice-grid">
            <label class="choice-line"><input type="radio" name="attend" value="참석" required /><span class="choice-text">참석</span></label>
            <label class="choice-line"><input type="radio" name="attend" value="불참" /><span class="choice-text">불참</span></label>
          </div>
        </fieldset>

        <fieldset class="form-fieldset">
          <legend>식사</legend>
          <div class="choice-grid is-three">
            <label class="choice-line"><input type="radio" name="meal" value="식사" required /><span class="choice-text">식사</span></label>
            <label class="choice-line"><input type="radio" name="meal" value="식사 안 함" /><span class="choice-text">식사 안 함</span></label>
            <label class="choice-line"><input type="radio" name="meal" value="미정" /><span class="choice-text">미정</span></label>
          </div>
        </fieldset>

        <label>
          <span>전하실 말</span>
          <textarea name="message" rows="3" maxlength="120"></textarea>
        </label>

        <button class="line-button dialog-submit" type="submit">저장하기</button>
        <p class="form-note">${escapeHtml(renderStorageNote())}</p>
      </form>
    </dialog>
  `;
}

function renderContactDialog(groups) {
  return `
    <dialog id="contactDialog" class="form-dialog" aria-labelledby="contactTitle">
      <div class="dialog-panel">
        <button class="dialog-text-close" type="button" data-dialog-close="contactDialog">닫기</button>
        <p class="section-kicker">CONTACT</p>
        <h2 id="contactTitle" class="dialog-title">축하 연락처</h2>
        <div class="section-rule-small" aria-hidden="true"></div>
        <div class="contact-groups">
          ${groups.map(renderContactGroup).join("")}
        </div>
      </div>
    </dialog>
  `;
}

function renderContactGroup(group) {
  return `
    <section class="contact-group">
      <h3>${escapeHtml(group.side)}</h3>
      <div class="contact-list">
        ${group.people.map(renderContactPerson).join("")}
      </div>
    </section>
  `;
}

function renderContactPerson(person) {
  const phone = person.phone.trim();
  return `
    <div class="contact-row">
      <p><span>${escapeHtml(person.role)}</span> <strong>${escapeHtml(person.name)}</strong></p>
      ${
        phone
          ? `<div class="contact-actions">
        <a class="line-button" href="tel:${escapeHtml(phone)}">전화</a>
        <a class="line-button" href="sms:${escapeHtml(phone)}">문자</a>
      </div>`
          : `<span class="contact-pending">준비 중</span>`
      }
    </div>
  `;
}

function renderMap() {
  const map = WEDDING_DATA.mapImage;

  return `
    <button class="map-panel" type="button" data-map-image aria-label="건대 스타시티아트홀 약도 크게 보기">
      <img class="map-image" src="${escapeHtml(map.src)}" alt="${escapeHtml(map.alt)}" loading="lazy" decoding="async" />
    </button>
  `;
}

function wireHeroImage() {
  const hero = app.querySelector(".hero");
  const image = hero.querySelector(".hero-photo img");

  if (!image) {
    return;
  }

  image.addEventListener("load", () => {
    hero.classList.add("has-photo");
  });

  image.addEventListener("error", () => {
    hero.classList.remove("has-photo");
  });

  if (image.complete && image.naturalWidth > 0) {
    hero.classList.add("has-photo");
  }
}

function wireGallery() {
  const strip = app.querySelector(".photo-strip");
  const buttons = Array.from(app.querySelectorAll(".photo-button"));

  galleryPhotos = buttons
    .filter((button) => button.dataset.photoSrc)
    .map((button) => ({
      src: button.dataset.photoSrc,
      alt: button.dataset.photoAlt,
    }));

  buttons.forEach((button) => {
    const image = button.querySelector("img");

    if (!image) {
      return;
    }

    image.addEventListener("error", () => {
      button.classList.add("is-empty");
      button.disabled = true;
      image.remove();
    });
  });

  if (!strip) {
    return;
  }

  strip.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const button = event.target.closest(".photo-button");

    if (!button || !strip.contains(button) || button.disabled || !button.dataset.photoSrc) {
      return;
    }

    const photoIndex = Number(button.dataset.photoIndex);

    if (!Number.isFinite(photoIndex)) {
      return;
    }

    openPhotoAt(photoIndex);
  });
}

function wireMap() {
  const mapButton = app.querySelector("[data-map-image]");

  if (!mapButton) {
    return;
  }

  const image = mapButton.querySelector("img");

  if (image) {
    image.addEventListener("error", () => {
      mapButton.disabled = true;
      mapButton.classList.add("is-empty");
    });
  }

  mapButton.addEventListener("click", openMapImage);
}

function openPhotoAt(index) {
  openPhotoSet(galleryPhotos, index);
}

function openMapImage() {
  const map = WEDDING_DATA.mapImage;

  if (!map.src) {
    return;
  }

  openPhotoSet(
    [
      {
        src: map.src,
        alt: map.alt,
        counter: "약도",
      },
    ],
    0,
  );
}

function openPhotoSet(photos, index) {
  const validPhotos = photos.filter((photo) => photo.src);
  const safeIndex = Number.isFinite(index) ? Math.trunc(index) : 0;

  if (!validPhotos.length || typeof dialog.showModal !== "function") {
    const photo = validPhotos[safeIndex] || validPhotos[0];

    if (photo) {
      window.open(photo.src, "_blank", "noreferrer");
    }
    return;
  }

  dialogPhotos = validPhotos;
  lockPageScroll();
  showPhotoAt(safeIndex);
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
  dialogCounter.textContent = photo.counter || `${activePhotoIndex + 1} / ${count}`;
  dialog.classList.toggle("is-single-photo", count < 2);
}

function showNextPhoto() {
  showPhotoAt(activePhotoIndex + 1);
}

function showPrevPhoto() {
  showPhotoAt(activePhotoIndex - 1);
}

function closePhoto() {
  if (!dialog.open) {
    return;
  }

  dialog.close();
}

function clearPhotoDialog() {
  resetPhotoZoom();
  dialogPhotos = [];
  dialog.classList.remove("is-single-photo");
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

  if (isPhotoPinching || isPhotoDragging || isPhotoZoomed() || Date.now() < suppressPhotoSwipeUntil) {
    endPhotoGesture();
    return;
  }

  const touch = event.changedTouches[0];

  if (touch) {
    finishPhotoSwipe(touch.clientX, touch.clientY);
  }
}

function handlePhotoTouchCancel() {
  endPhotoGesture();
}

function handlePhotoTap(clientX, clientY) {
  const now = Date.now();
  const isDoubleTap = now - lastPhotoTapAt < 320 && Math.hypot(clientX - lastPhotoTapX, clientY - lastPhotoTapY) < 34;

  lastPhotoTapAt = now;
  lastPhotoTapX = clientX;
  lastPhotoTapY = clientY;

  if (!isDoubleTap) {
    return false;
  }

  suppressPhotoSwipeUntil = now + 280;
  lastPhotoTapAt = 0;

  if (isPhotoZoomed()) {
    resetPhotoZoom();
    return true;
  }

  zoomPhotoAroundPoint(clientX, clientY, 2);
  return true;
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

function wireGiftAccounts() {
  app.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      await copyText(button.dataset.copy);
      button.textContent = "복사됨";
      window.setTimeout(() => {
        button.textContent = "복사";
      }, 1400);
    });
  });
}

function wireInteractiveFeatures() {
  app.querySelectorAll("[data-open-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      openManagedDialog(button.dataset.openDialog);
    });
  });

  app.querySelectorAll("[data-dialog-close]").forEach((button) => {
    button.addEventListener("click", () => {
      closeManagedDialog(button.dataset.dialogClose);
    });
  });

  app.querySelectorAll(".form-dialog").forEach((managedDialog) => {
    managedDialog.addEventListener("click", (event) => {
      if (event.target === managedDialog) {
        managedDialog.close();
      }
    });

    managedDialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      managedDialog.close();
    });

    managedDialog.addEventListener("close", () => {
      if (document.body.classList.contains("is-dialog-locked")) {
        unlockPageScroll();
      }
    });
  });

  const rsvpForm = app.querySelector("[data-rsvp-form]");
  const guestbookForm = app.querySelector("[data-guestbook-form]");

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", handleRsvpSubmit);
  }

  if (guestbookForm) {
    guestbookForm.addEventListener("submit", handleGuestbookSubmit);
    renderGuestbookMessages();
  }
}

function openManagedDialog(id) {
  const managedDialog = document.getElementById(id);

  if (!managedDialog || typeof managedDialog.showModal !== "function") {
    return;
  }

  lockPageScroll();
  managedDialog.showModal();
}

function closeManagedDialog(id) {
  const managedDialog = document.getElementById(id);

  if (managedDialog?.open) {
    managedDialog.close();
  }
}

function readStoredList(key) {
  try {
    const stored = window.localStorage.getItem(key);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStoredList(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("저장 공간을 사용할 수 없습니다.");
  }
}

function getApiBaseUrl() {
  const localHostnames = new Set(["127.0.0.1", "localhost"]);
  const localOverride = localHostnames.has(window.location.hostname)
    ? new URLSearchParams(window.location.search).get("apiBaseUrl")
    : "";

  return String(localOverride || WEDDING_DATA.api?.baseUrl || "")
    .trim()
    .replace(/\/+$/, "");
}

function hasRemoteApi() {
  return Boolean(getApiBaseUrl());
}

function renderStorageNote() {
  return hasRemoteApi()
    ? "제출 내용은 신랑 신부에게 전달됩니다."
    : "제출 내용은 서버 연결 전까지 이 기기에만 보관됩니다.";
}

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function formatDisplayDate(value) {
  const date = value ? new Date(value) : new Date();

  if (Number.isNaN(date.getTime())) {
    return String(value || "");
  }

  return formatLocalDate(date);
}

async function requestJson(path, options = {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), API_TIMEOUT_MS);
  const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    ...(options.headers || {}),
  };

  try {
    const response = await fetch(`${getApiBaseUrl()}${path}`, {
      ...options,
      headers,
      signal: controller.signal,
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.ok === false) {
      throw new Error(data.error || "저장에 실패했습니다.");
    }

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("서버 응답이 지연되고 있습니다.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}

function setFormPending(form, pending) {
  form.querySelectorAll("button, input, textarea, select").forEach((field) => {
    field.disabled = pending;
  });
}

async function handleRsvpSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const item = {
    id: Date.now(),
    side: formData.get("side"),
    name: formData.get("name"),
    count: formData.get("count"),
    attend: formData.get("attend"),
    meal: formData.get("meal"),
    message: formData.get("message"),
    date: formatLocalDate(new Date()),
  };

  setFormPending(form, true);

  try {
    if (hasRemoteApi()) {
      await requestJson("/api/rsvp", {
        method: "POST",
        body: JSON.stringify(item),
      });
      showToast("참석 안내가 전달되었습니다.");
    } else {
      const entries = readStoredList(RSVP_STORAGE_KEY);
      entries.unshift(item);
      writeStoredList(RSVP_STORAGE_KEY, entries.slice(0, 20));
      showToast("참석 안내가 임시 저장되었습니다.");
    }

    form.reset();
    closeManagedDialog("rsvpDialog");
  } catch (error) {
    showToast(error.message || "저장에 실패했습니다.");
  } finally {
    setFormPending(form, false);
  }
}

async function handleGuestbookSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !message) {
    return;
  }

  setFormPending(form, true);

  try {
    if (hasRemoteApi()) {
      await requestJson("/api/guestbook", {
        method: "POST",
        body: JSON.stringify({ name, message }),
      });
      showToast("축하 메시지가 전달되었습니다.");
    } else {
      const messages = readStoredList(GUESTBOOK_STORAGE_KEY);
      messages.unshift({
        id: Date.now(),
        name,
        message,
        date: formatLocalDate(new Date()),
      });
      writeStoredList(GUESTBOOK_STORAGE_KEY, messages.slice(0, 12));
      showToast("축하 메시지가 임시 저장되었습니다.");
    }

    form.reset();
    await renderGuestbookMessages();
  } catch (error) {
    showToast(error.message || "저장에 실패했습니다.");
  } finally {
    setFormPending(form, false);
  }
}

async function loadGuestbookMessages() {
  if (!hasRemoteApi()) {
    return readStoredList(GUESTBOOK_STORAGE_KEY);
  }

  const data = await requestJson("/api/guestbook");
  const messages = Array.isArray(data.messages) ? data.messages : [];
  return messages.map((message) => ({
    id: message.id,
    name: message.name,
    message: message.message,
    date: formatDisplayDate(message.createdAt),
  }));
}

async function renderGuestbookMessages() {
  const list = app.querySelector("[data-guestbook-list]");

  if (!list) {
    return;
  }

  list.innerHTML = `<p class="guestbook-empty">축하 메시지를 불러오는 중입니다.</p>`;

  let messages = [];

  try {
    messages = await loadGuestbookMessages();
  } catch (error) {
    list.innerHTML = `<p class="guestbook-empty">${escapeHtml(error.message || "방명록을 불러오지 못했습니다.")}</p>`;
    return;
  }

  if (!messages.length) {
    list.innerHTML = `<p class="guestbook-empty">아직 남겨진 축하 메시지가 없습니다.</p>`;
    return;
  }

  list.innerHTML = messages
    .map(
      (message) => `
        <article class="guestbook-message">
          <header>
            <strong>${escapeHtml(message.name)}</strong>
            <time>${escapeHtml(message.date)}</time>
          </header>
          <p>${escapeHtml(message.message)}</p>
        </article>
      `,
    )
    .join("");
}

function showToast(message) {
  const toast = app.querySelector("[data-toast]");

  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function escapeIcs(value) {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replaceAll("\n", "\\n");
}

function buildCalendarIcs(data) {
  const event = data.event;
  const dtstamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const description = `${data.groom.name}와 ${data.bride.name}의 결혼식입니다.`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Woojae Dabin Wedding//Mobile Invitation//KO",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:woojae-dabin-wedding-20260822@mobile-invitation",
    `DTSTAMP:${dtstamp}`,
    `DTSTART;TZID=Asia/Seoul:${event.startLocal}`,
    `DTEND;TZID=Asia/Seoul:${event.endLocal}`,
    `SUMMARY:${escapeIcs(`${data.groom.name} · ${data.bride.name} 결혼식`)}`,
    `LOCATION:${escapeIcs(`${event.venue}, ${event.addressDetail}`)}`,
    `DESCRIPTION:${escapeIcs(description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function downloadCalendar() {
  const ics = buildCalendarIcs(WEDDING_DATA);

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "woojae-dabin-wedding.ics";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1200);
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
    if (event.pointerType === "touch") {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    startPhotoSwipe(event.clientX, event.clientY);
  });

  photoViewer.addEventListener("pointerup", (event) => {
    if (event.pointerType === "touch") {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    finishPhotoSwipe(event.clientX, event.clientY);
  });
}

photoViewer.addEventListener("touchstart", handlePhotoTouchStart, { passive: false, capture: true });
photoViewer.addEventListener("touchmove", handlePhotoTouchMove, { passive: false, capture: true });
photoViewer.addEventListener("touchend", handlePhotoTouchEnd);
photoViewer.addEventListener("touchcancel", handlePhotoTouchCancel);
photoViewer.addEventListener("wheel", handlePhotoWheel, { passive: false });
photoViewer.addEventListener("gesturestart", preventNativePhotoGesture, { passive: false, capture: true });
photoViewer.addEventListener("gesturechange", preventNativePhotoGesture, { passive: false, capture: true });
photoViewer.addEventListener("gestureend", preventNativePhotoGesture, { passive: false, capture: true });

dialogImage.addEventListener("load", () => {
  setPhotoZoom(photoScale, photoTranslateX, photoTranslateY);
});

window.WeddingInvitation = {
  data: WEDDING_DATA,
  buildCalendarIcs,
};

render();
