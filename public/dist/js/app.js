/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/js/app.js":
/*!******************************!*\
  !*** ./app/assets/js/app.js ***!
  \******************************/
/***/ (() => {

var btnHamburger = document.querySelector("#btnHamburger");
var navbar = document.querySelector(".navbar");
var overlay = document.querySelector(".overlay");
var fadeElements = document.querySelectorAll(".has-fade");
var body = document.querySelector("body");
btnHamburger.addEventListener("click", function () {
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
window.addEventListener("scroll", function () {
  var windowpos = document.querySelector("html").scrollTop;
  var navbarTopPos = navbar.getBoundingClientRect().top;

  if (windowpos >= navbarTopPos && !navbar.classList.contains("navbar__scrolled")) {
    navbar.classList.add("navbar__scrolled");
  } else if (windowpos <= navbarTopPos && navbar.classList.contains("navbar__scrolled")) {
    navbar.classList.remove("navbar__scrolled");
  }
}); // initialize sal js

sal({
  threshold: 0.2
}); // Global swiper menu variables for Swiper JS

var swiperMenu = ""; // Initialize Swiper

var initSwiper = function initSwiper() {
  swiperMenu = new Swiper(".menu__lists", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    init: false,
    // enabled: false,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      670: {
        slidesPerView: 2
      },
      920: {
        slidesPerView: 4
      }
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
}; // Toggle swiper function


var menuListsElement = document.getElementById("menuLists");
var menuContainerElement = document.getElementById("menuContainer");
var menuWrapperElement = document.getElementById("menuWrapper");
var menuItemElement = document.getElementsByClassName("menu__item-wrapper");
var menuSwiperElement = document.getElementsByClassName("swiper-slide");

var toggleSwiper = function toggleSwiper() {
  if (!swiperMenu.params) {
    initSwiper();
  } // is there any Navigation Element


  var hasPagination = document.getElementsByClassName("swiper-pagination").length == 0;
  var hasButtonPrev = document.getElementsByClassName("swiper-button-prev").length == 0;
  var hasButtonNext = document.getElementsByClassName("swiper-button-next").length == 0;

  if (window.matchMedia("( max-width: 920px )").matches) {
    // Change into swiper components
    if (menuWrapperElement.classList.contains("menu__wrapper")) {
      // if flexbox wrapper
      menuWrapperElement.className = "swiper-wrapper";
    }

    for (var i = 0; i < menuItemElement.length; i++) {
      if (menuItemElement[i].classList.contains("menu__item-wrapper")) {
        // if flexbox child
        menuItemElement[i].className = "swiper-slide";
      }
    }

    if (hasPagination && hasButtonNext && hasButtonPrev) {
      menuListsElement.insertAdjacentHTML("afterend", '<div class="swiper-pagination" id="menuPagination"></div>\n <div class="swiper-button-prev" id="menuButtonPrev"></div> \n <div class="swiper-button-next" id="menuButtonNext"></div>');
      swiperMenu.init();
    } // intialize swiper

  } else if (window.matchMedia("( min-width: 920px )").matches) {
    // Change into flexbox components
    if (menuWrapperElement.classList.contains("swiper-wrapper")) {
      //if swiper wrapper
      menuWrapperElement.className = "menu__wrapper";
    }

    for (var _i = 0; _i < menuSwiperElement.length; _i++) {
      if (menuSwiperElement[_i].classList.contains("swiper-slide")) {
        //if swiper0slide
        menuSwiperElement[_i].className = "menu__item-wrapper";
      }
    }

    if (!hasPagination && !hasButtonNext && !hasButtonPrev) {
      var paginationElement = document.getElementById("menuPagination");
      var prevButtonElement = document.getElementById("menuButtonPrev");
      var nextButtonElement = document.getElementById("menuButtonNext");
      paginationElement.remove();
      prevButtonElement.remove();
      nextButtonElement.remove(); // destroy swiper

      swiperMenu.destroy();
    }
  }
};

window.addEventListener("resize", toggleSwiper);

/***/ }),

/***/ "./app/assets/scss/style.scss":
/*!************************************!*\
  !*** ./app/assets/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgrinder_coffee_test"] = self["webpackChunkgrinder_coffee_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./app/assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./app/assets/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;