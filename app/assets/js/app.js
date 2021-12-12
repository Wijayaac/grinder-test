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

// Global swiper menu variables for Swiper JS
let swiperMenu = "";

// Initialize Swiper
const initSwiper = () => {
  swiperMenu = new Swiper(".menu__lists", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    init: false,
    // enabled: false,
    spaceBetween: 10,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      670: {
        slidesPerView: 2,
      },
      920: {
        slidesPerView: 4,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};

// Toggle swiper function
const menuListsElement = document.getElementById("menuLists");
const menuContainerElement = document.getElementById("menuContainer");
const menuWrapperElement = document.getElementById("menuWrapper");
const menuItemElement = document.getElementsByClassName("menu__item-wrapper");
const menuSwiperElement = document.getElementsByClassName("swiper-slide");

const toggleSwiper = () => {
  if (!swiperMenu.params) {
    initSwiper();
  }

  // is there any Navigation Element
  let hasPagination =
    document.getElementsByClassName("swiper-pagination").length == 0;
  let hasButtonPrev =
    document.getElementsByClassName("swiper-button-prev").length == 0;
  let hasButtonNext =
    document.getElementsByClassName("swiper-button-next").length == 0;

  if (window.matchMedia("( max-width: 920px )").matches) {
    // Change into swiper components
    if (menuWrapperElement.classList.contains("menu__wrapper")) {
      // if flexbox wrapper
      menuWrapperElement.className = "swiper-wrapper";
    }
    for (let i = 0; i < menuItemElement.length; i++) {
      if (menuItemElement[i].classList.contains("menu__item-wrapper")) {
        // if flexbox child
        menuItemElement[i].className = "swiper-slide";
      }
    }
    if (hasPagination && hasButtonNext && hasButtonPrev) {
      menuListsElement.insertAdjacentHTML(
        "afterend",
        '<div class="swiper-pagination" id="menuPagination"></div>\n <div class="swiper-button-prev" id="menuButtonPrev"></div> \n <div class="swiper-button-next" id="menuButtonNext"></div>'
      );
    }
    // intialize swiper
    swiperMenu.init();
  } else if (window.matchMedia("( min-width: 920px )").matches) {
    // Change into flexbox components
    if (menuWrapperElement.classList.contains("swiper-wrapper")) {
      //if swiper wrapper
      menuWrapperElement.className = "menu__wrapper";
    }
    for (let i = 0; i < menuSwiperElement.length; i++) {
      if (menuSwiperElement[i].classList.contains("swiper-slide")) {
        //if swiper0slide
        menuSwiperElement[i].className = "menu__item-wrapper";
      }
    }
    if (!hasPagination && !hasButtonNext && !hasButtonPrev) {
      let paginationElement = document.getElementById("menuPagination");
      let prevButtonElement = document.getElementById("menuButtonPrev");
      let nextButtonElement = document.getElementById("menuButtonNext");

      paginationElement.remove();
      prevButtonElement.remove();
      nextButtonElement.remove();

      // destroy swiper
      swiperMenu.destroy();
    }
  }
};

window.addEventListener("resize", toggleSwiper);
