const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

function linkClick() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((element) => {
  element.addEventListener("click", linkClick);
});

const skillsContent = document.getElementsByClassName("skills__content");
const skillSHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  console.log("kkke");
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillSHeader.forEach((element) => {
  element.addEventListener("click", toggleSkills);
});

const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  console.log("dssd|");
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((element, i) => {
  element.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((element) => {
  element.addEventListener("click", () => {
    modalViews.forEach((model) => {
      console.log("ssdsd");
      model.classList.remove("active-modal");
    });
  });
});

// swipper

let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) {
    console.log("dsds");
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

function scrollUp() {
  const scroll = document.getElementById("scroll-up");
  if (this.scrollY >= 560) {
    scroll.classList.add("show-scroll");
  } else {
    scroll.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);
