const btnMenu = document.querySelector("#btn-menu");
const nav = document.querySelector("#menu");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active-menu");
});

let titles = document.querySelectorAll(".title");
let text = document.querySelectorAll(".text");
let imgsIntro = document.querySelectorAll(".scroll-img-animated");
let containerContentInfo = document.querySelectorAll(".container-content-info");
const button = document.querySelector("#btn-animated-scroll");
const findMoreSection = document.querySelector(".find-more-section");

ScrollReveal().reveal(titles, {
  delay: 02,
  origin: "left",
  distance: "100px",
  duration: 550,
  reset: true,
});
ScrollReveal().reveal(imgsIntro, {
  delay: 500,
  origin: "top",
  distance: "100px",
  duration: 550,
  reset: true,
});
ScrollReveal().reveal(button, {
  delay: 50,
  origin: "bottom",
  distance: "100px",
  duration: 550,
  reset: true,
});
ScrollReveal().reveal(text, {
  delay: 100,
  origin: "left",
  distance: "100px",
  duration: 850,
  reset: true,
});
ScrollReveal().reveal(containerContentInfo, {
  delay: 200,
  origin: "left",
  distance: "100px",
  duration: 850,
  reset: true,
});

ScrollReveal().reveal(findMoreSection, {
  delay: 200,
  origin: "bottom",
  distance: "100px",
  duration: 850,
  reset: true,
});
