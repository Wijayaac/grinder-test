const btnHamburger = document.querySelector("#btnHamburger");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", () => {
  if (navbar.classList.contains("open")) {
    //close hamburger menu
    body.classList.remove("noscroll");
    navbar.classList.remove("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //open hamburger menu
    body.classList.add("noscroll");
    navbar.classList.add("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

window.addEventListener("scroll", () => {
  const windowpos = document.querySelector("html").scrollTop;
  const navbar = document.querySelector(".navbar");
  const navbarTopPos = navbar.getBoundingClientRect().top;

  if (
    windowpos >= navbarTopPos &&
    !navbar.classList.contains("navbar__scrolled")
  ) {
    navbar.classList.add("navbar__scrolled");
  } else if (
    windowpos <= navbarTopPos &&
    navbar.classList.contains("navbar__scrolled")
  ) {
    navbar.classList.remove("navbar__scrolled");
  }
});

// initialize sal js
sal({
  threshold: 0.2,
});
