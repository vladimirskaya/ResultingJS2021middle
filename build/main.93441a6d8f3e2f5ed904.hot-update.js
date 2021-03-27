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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideLilCarousel; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction slideLilCarousel() {\n  var services = document.querySelector('#services'),\n      wrapper = services.querySelector('.wrapper'),\n      servicesSlides = _toConsumableArray(services.querySelector('.services-slider').children);\n\n  console.log(servicesSlides);\n  var currentSlide = 0,\n      interval;\n  var amountOpenSlides = 5;\n\n  var defaultStart = function defaultStart(arr) {\n    console.log('defaultStart');\n\n    for (var i = amountOpenSlides; i < arr.length; i++) {\n      arr[i].style.display = 'none';\n    }\n  };\n\n  defaultStart(servicesSlides);\n  var indexOpen = 0; //amountOpenSlides;\n\n  var autoPlaySlide = function autoPlaySlide(arr) {\n    if (indexOpen = maxIndex) {\n      arr[0].insertAdjacentElement('afterend', servicesSlides);\n      indexOpen--;\n    } // let n = 1;\n    // if (indexOpen < 5) {\n    //     arr[indexOpen].classList.add('show-active');\n    //     arr[indexOpen].style.display = '';\n    //     arr[indexOpen - n * amountOpenSlides].classList.remove('show-active');\n    //     arr[indexOpen - n * amountOpenSlides].style.display = 'none';\n    //     indexOpen++;\n    // } else if (indexOpen === arr.length) {\n    //     indexOpen = 0;\n    // }\n    // arr[indexOpen].classList.add('show-active');\n    // arr[indexOpen].style.display = '';\n    // arr[indexOpen - n * amountOpenSlides].classList.remove('show-active');\n    // arr[indexOpen - n * amountOpenSlides].style.display = 'none';\n    // indexOpen++;\n    // hidePrevSlide([...openSlides], \"show-active\");    \n    // showNextSlide([...closeSlides], \"no-active\");\n\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlide, time, servicesSlides);\n  };\n\n  startSlide(); // // const stopSlide = () => {\n  // //     clearInterval(interval);\n  // // };\n  // startSlide(1500)\n} // class SlideCarousel{\n//     constructor({main = '#services', wrap = '.wrapper', slide = '.services-slider' })\n//     {\n//     this.main = document.querySelector(main),\n//     this.wrap = this.main.querySelector(wrap),\n//     this.slides = this.main.querySelector(slide).children,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      \n//     },\n//     init(){\n//         console.log('class connect');\n//     }\n// }\n\n//# sourceURL=webpack:///./modules/slideLilCarousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "af0559dae17e2f08fd09"; }
/******/ }();
/******/ 
/******/ }
);