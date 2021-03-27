/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate"]("main",{

/***/ "./modules/kar.js":
/*!************************!*\
  !*** ./modules/kar.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideCarousel; }\n/* harmony export */ });\nfunction slideCarousel() {\n  var services = document.querySelector('#services'),\n      wrapper = services.querySelector('.wrapper'),\n      servicesSlides = services.querySelector('.services-slider');\n  console.log(servicesSlides);\n  var parentStyle = window.getComputedStyle(servicesSlides);\n  console.log(parentStyle);\n  var currentSlide = 0,\n      interval;\n  var amountOpenSlides = 5;\n}\n\n//# sourceURL=webpack:///./modules/kar.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a893741eebe336817cba"; }
/******/ }();
/******/ 
/******/ }
);