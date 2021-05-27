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
