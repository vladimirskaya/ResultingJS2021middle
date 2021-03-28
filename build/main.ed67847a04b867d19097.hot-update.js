/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate"]("main",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/font-awesome.min.css */ \"./css/font-awesome.min.css\");\n/* harmony import */ var _css_style_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.min.css */ \"./css/style.min.css\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/togglePopup */ \"./modules/togglePopup.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./modules/burgerMenu.js\");\n/* harmony import */ var _modules_selectClubs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/selectClubs */ \"./modules/selectClubs.js\");\n/* harmony import */ var _modules_genMainSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/genMainSlider */ \"./modules/genMainSlider.js\");\n/* harmony import */ var _modules_slideServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slideServices */ \"./modules/slideServices.js\");\n/* harmony import */ var _modules_checkInputFormData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/checkInputFormData */ \"./modules/checkInputFormData.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_burgerMenuPopup_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burgerMenuPopup.js */ \"./modules/burgerMenuPopup.js\");\n/* harmony import */ var _modules_sliderGallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/sliderGallery */ \"./modules/sliderGallery.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n // import * as $ from '@images'\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_genMainSlider__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_selectClubs__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_slideServices__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_burgerMenuPopup_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n(0,_modules_sliderGallery__WEBPACK_IMPORTED_MODULE_11__.default)(); // const kar = new SlideCarousel();\n// console.log(kar);\n// slideCarousel();\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_12__.default)();\n(0,_modules_checkInputFormData__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ calculator; }\n/* harmony export */ });\nfunction calculator() {\n  var cards = document.getElementById('cards'),\n      cardOrder = cards.querySelectorAll('.card_order'),\n      cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),\n      cardLetoMozaika = document.getElementById('card_leto_mozaika');\n  cardOrder.addEventListener('change', function (event) {\n    var url,\n        target = event.target;\n    console.log(target);\n    if (target === cardLetoSchelkovo) url = '../schelkovo.html';else if (target === cardLetoMozaika) url = '../mozaika.html';else return;\n    fetch(url).then(function (response) {\n      if (response.status === 200) {\n        throw new Error('status network not 200');\n      } else return response.json();\n    }).then(function (data) {\n      console.log(data);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cebe9210e544a1838e82"; }
/******/ }();
/******/ 
/******/ }
);