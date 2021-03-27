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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideLilCarousel; }\n/* harmony export */ });\nfunction slideLilCarousel() {\n  var services = document.querySelector('#services'),\n      wrapper = services.querySelector('.wrapper'),\n      servicesSlides = services.querySelector('.services-slider'); // console.log(servicesSlides);\n\n  var currentSlide = 0,\n      interval;\n  var amountOpenSlides = 5;\n\n  var defaultStart = function defaultStart(arr) {\n    // console.log('defaultStart');\n    for (var i = amountOpenSlides; i < arr.length; i++) {\n      arr[i].style.display = 'none';\n    }\n  };\n\n  defaultStart(servicesSlides.children);\n  var indexOpen = 0; //amountOpenSlides;\n\n  var autoPlaySlide = function autoPlaySlide(arr) {\n    arr[0].style.display = 'none';\n    arr[amountOpenSlides].style.display = 'block';\n    servicesSlides.insertAdjacentElement('beforeend', arr[0]);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;\n    interval = setInterval(autoPlaySlide, time, servicesSlides.children);\n  };\n\n  startSlide();\n}\n\n//# sourceURL=webpack:///./modules/slideLilCarousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6d93b077445bc03204c5"; }
/******/ }();
/******/ 
/******/ }
);