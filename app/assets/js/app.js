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

var swiperMenu = "";

initSwiper;

const initSwiper = () => {
  swiperMenu = new Swiper(".swiper-menu", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    init: false,
    // enabled: false,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      920: {
        slidesPerView: 4,
        spaceBetween: 10,
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

const toggleSwiper = () => {
  if (!swiperMenu.params) {
    initSwiper();
  }

  swiperMenu.params.init = !swiperMenu.params.init;

  if (swiperMenu.params.init) {
    swiperMenu.init();
  } else {
    swiperMenu.destroy();
  }
};

// initialize Swiper JS
// const swiperMenu = () =>
//   new Swiper(".swiper-menu", {
//     // Optional parameters
//     direction: "horizontal",
//     loop: false,
//     init: false,
//     // enabled: false,

//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       920: {
//         slidesPerView: 4,
//         spaceBetween: 10,
//       },
//     },

//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//   });

const buttonToggle = document.getElementById("btnToggle");

// const toggleMenuSlider = () => {
//   // let swiperInitClass = document.getElementsByClassName("swiper-intitalized").length;
//   let swiperSlider = swiperMenu();
//   // let isSwiperInit = "";
//   swiperSlider.init();
//   setTimeout(() => {
//     swiperSlider.disable();
//     swiperSlider.pagination.destroy();
//     swiperSlider.navigation.destroy();
//     swiperSlider.destroy();
//   }, 5000);
//   if (count > 0) {
//     count = count - 1;
//     // swiperSlider.init();
//     // isSwiperInit = true;
//     // console.log(isSwiperInit);
//   } else {
//     // swiperSlider.init();
//     // console.log("else block", isSwiperInit);
//     // swiperSlider.destroy();
//     // isSwiperInit = false;
//     console.log(count);
//     count++;
//   }
//   // console.log(swiperInitClass);
// };

// buttonToggle.addEventListener("click", toggleMenuSlider, false);

buttonToggle.addEventListener("click", toggleSwiper);

window.addEventListener("resi");
