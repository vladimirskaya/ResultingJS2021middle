/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate"]("main",{

/***/ "./modules/slideLilCarousel.js":
/*!*************************************!*\
  !*** ./modules/slideLilCarousel.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideLilCarousel; }\n/* harmony export */ });\nfunction slideLilCarousel() {\n  var services = document.querySelector('#services'),\n      wrapper = services.querySelector('.wrapper'),\n      servicesSlides = services.querySelector('.services-slider');\n  console.log(servicesSlides);\n  var currentSlide = 0,\n      interval;\n  var amountOpenSlides = 5;\n\n  var defaultStart = function defaultStart(arr) {\n    console.log('defaultStart');\n\n    for (var i = amountOpenSlides; i < arr.length; i++) {\n      arr[i].style.display = 'none';\n    }\n  };\n\n  defaultStart(servicesSlides.children);\n  var indexOpen = 0; //amountOpenSlides;\n\n  var autoPlaySlide = function autoPlaySlide(arr) {\n    indexOpen++;\n    console.log(' indexOpen === amountOpenSlides', indexOpen === amountOpenSlides);\n\n    if (indexOpen === amountOpenSlides) {\n      console.log('arr[0]', arr[0]);\n      indexOpen--;\n      servicesSlides.insertAdjacentElement('afterend', arr[0]);\n    } // let n = 1;\n    // if (indexOpen < 5) {\n    //     arr[indexOpen].classList.add('show-active');\n    //     arr[indexOpen].style.display = '';\n    //     arr[indexOpen - n * amountOpenSlides].classList.remove('show-active');\n    //     arr[indexOpen - n * amountOpenSlides].style.display = 'none';\n    //     indexOpen++;\n    // } else if (indexOpen === arr.length) {\n    //     indexOpen = 0;\n    // }\n    // arr[indexOpen].classList.add('show-active');\n    // arr[indexOpen].style.display = '';\n    // arr[indexOpen - n * amountOpenSlides].classList.remove('show-active');\n    // arr[indexOpen - n * amountOpenSlides].style.display = 'none';\n    // indexOpen++;\n    // hidePrevSlide([...openSlides], \"show-active\");    \n    // showNextSlide([...closeSlides], \"no-active\");\n\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlide, time, servicesSlides.children);\n  };\n\n  startSlide(); // // const stopSlide = () => {\n  // //     clearInterval(interval);\n  // // };\n  // startSlide(1500)\n} // class SlideCarousel{\n//     constructor({main = '#services', wrap = '.wrapper', slide = '.services-slider' })\n//     {\n//     this.main = document.querySelector(main),\n//     this.wrap = this.main.querySelector(wrap),\n//     this.slides = this.main.querySelector(slide).children,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      \n//     },\n//     init(){\n//         console.log('class connect');\n//     }\n// }\n\n//# sourceURL=webpack:///./modules/slideLilCarousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7781f6c0098fb0b03044"; }
/******/ }();
/******/ 
/******/ }
);