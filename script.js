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
  photos: Array.from({ length: 6 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      src: index === 0 ? "assets/photos/photo-01.jpg" : "",
      suggestedFile: `assets/photos/photo-${number}.jpg`,
      alt:
        index === 0
          ? "벚꽃 아래 선글라스를 든 김우재와 김다빈"
          : `김우재와 김다빈의 흑백 웨딩 사진 ${index + 1}`,
    };
  }),
  closing: "귀한 걸음으로 함께해 주세요.",
};

const app = document.querySelector("#app");
const dialog = document.querySelector("#photoDialog");
const dialogImage = dialog.querySelector("img");
const dialogClose = dialog.querySelector(".dialog-close");

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
    </section>

    <section class="section gallery" aria-labelledby="galleryTitle">
      <p id="galleryTitle" class="section-kicker">GALLERY</p>
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
          <button class="line-button" type="button" data-calendar>캘린더에 추가</button>
        </div>
      </div>
    </section>

    <section class="section directions" aria-labelledby="directionsTitle">
      <p id="directionsTitle" class="section-kicker">LOCATION</p>
      ${renderMap()}
      <div class="nav-buttons" aria-label="지도 앱으로 보기">
        ${data.navigation.map((item) => `<a class="nav-button" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`).join("")}
      </div>
      <dl class="way-list">
        ${data.directions.map(renderDirection).join("")}
      </dl>
    </section>

    ${visibleGiftGroups.length ? renderGiftAccounts(visibleGiftGroups) : ""}

    <section class="section closing" aria-label="마무리 인사">
      <p class="closing-message">${escapeHtml(data.closing)}</p>
      <p class="closing-names">${escapeHtml(coupleNames)}</p>
    </section>
  `;

  wireHeroImage();
  wireGallery();
  wireGiftAccounts();
  app.querySelector("[data-calendar]").addEventListener("click", downloadCalendar);
}

function renderPhoto(photo) {
  const hasImage = Boolean(photo.src);
  const label = hasImage ? `${photo.alt} 크게 보기` : `${photo.alt} 자리`;
  return `
    <figure class="photo-frame">
      <button class="photo-button${hasImage ? "" : " is-empty"}" type="button" data-photo-src="${escapeHtml(photo.src)}" data-photo-alt="${escapeHtml(photo.alt)}" aria-label="${escapeHtml(label)}"${hasImage ? "" : " disabled"}>
        ${hasImage ? `<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy" />` : ""}
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

function renderMap() {
  return `
    <div class="map-panel" aria-label="건대 스타시티아트홀 약도">
      <svg viewBox="0 0 320 210" role="img" aria-labelledby="mapTitle mapDesc">
        <title id="mapTitle">건대 스타시티아트홀 미니 약도</title>
        <desc id="mapDesc">건대입구역과 능동로 주변을 단색 선으로 표현한 약도입니다.</desc>
        <path class="map-line soft" d="M28 48 H292" />
        <path class="map-line" d="M48 178 C84 132 108 96 140 76 C184 48 230 70 278 38" />
        <path class="map-line soft" d="M74 34 C92 80 104 118 118 176" />
        <path class="map-line soft" d="M214 36 C206 82 202 126 214 178" />
        <circle class="map-dot" cx="116" cy="98" r="3.6" />
        <circle class="map-dot" cx="214" cy="78" r="3.6" />
        <line class="map-line" x1="214" y1="78" x2="222" y2="99" />
        <text class="map-title" x="224" y="105">스타시티아트홀</text>
        <text class="map-label" x="86" y="92">건대입구역</text>
        <text class="map-small" x="88" y="110">2번 · 3번 출구</text>
        <text class="map-label" x="33" y="42">능동로</text>
        <text class="map-small" x="218" y="174">건국대학교병원</text>
      </svg>
    </div>
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
}

function wireGallery() {
  app.querySelectorAll(".photo-button").forEach((button) => {
    const image = button.querySelector("img");

    if (!image) {
      return;
    }

    image.addEventListener("error", () => {
      button.classList.add("is-empty");
      button.disabled = true;
      image.remove();
    });

    button.addEventListener("click", () => {
      openPhoto({
        src: button.dataset.photoSrc,
        alt: button.dataset.photoAlt,
      });
    });
  });
}

function openPhoto(photo) {
  dialogImage.src = photo.src;
  dialogImage.alt = photo.alt;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    return;
  }

  window.open(photo.src, "_blank", "noreferrer");
}

function closePhoto() {
  dialog.close();
  dialogImage.removeAttribute("src");
  dialogImage.alt = "";
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

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closePhoto();
  }
});

dialog.addEventListener("cancel", () => {
  dialogImage.removeAttribute("src");
  dialogImage.alt = "";
});

window.WeddingInvitation = {
  data: WEDDING_DATA,
  buildCalendarIcs,
};

render();
