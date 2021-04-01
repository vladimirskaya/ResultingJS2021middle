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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/font-awesome.min.css */ \"./css/font-awesome.min.css\");\n/* harmony import */ var _css_style_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.min.css */ \"./css/style.min.css\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/togglePopup */ \"./modules/togglePopup.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./modules/burgerMenu.js\");\n/* harmony import */ var _modules_selectClubs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/selectClubs */ \"./modules/selectClubs.js\");\n/* harmony import */ var _modules_genMainSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/genMainSlider */ \"./modules/genMainSlider.js\");\n/* harmony import */ var _modules_slideServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slideServices */ \"./modules/slideServices.js\");\n/* harmony import */ var _modules_checkInputFormData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/checkInputFormData */ \"./modules/checkInputFormData.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_burgerMenuPopup_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burgerMenuPopup.js */ \"./modules/burgerMenuPopup.js\");\n/* harmony import */ var _modules_sliderGallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/sliderGallery */ \"./modules/sliderGallery.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_scrollPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/scrollPage */ \"./modules/scrollPage.js\");\n/* harmony import */ var _modules_sliderClass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/sliderClass.js */ \"./modules/sliderClass.js\");\n // import * as $ from '@images'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__.default)(); // genMainSlider();\n\nvar headerSlides = new _modules_sliderClass_js__WEBPACK_IMPORTED_MODULE_14__.default('.main-slider', '.slide');\nheaderSlides.init();\n(0,_modules_selectClubs__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_slideServices__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_burgerMenuPopup_js__WEBPACK_IMPORTED_MODULE_10__.default)(); // sliderGallery();\n\n(0,_modules_scrollPage__WEBPACK_IMPORTED_MODULE_13__.default)();\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_12__.default)();\n(0,_modules_checkInputFormData__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/sliderClass.js":
/*!********************************!*\
  !*** ./modules/sliderClass.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(cont, list, dots) {\n    _classCallCheck(this, Slider);\n\n    this.container = document.getElementById(cont), this.listSlides = this.container.querySelectorAll(list), this.dotSlides = this.container.querySelectorAll(dots);\n    this.startIndex = 0;\n    this.lastIndex = this.listSlides.length;\n    this.currentIndex = 0;\n    this.interval = 4000;\n  } //методы класса\n\n\n  _createClass(Slider, [{\n    key: \"changeSlides\",\n    value: function changeSlides() {\n      var _this = this;\n\n      this.listSlides.forEach(function (elem, index) {\n        //console.log('mainIndex', mainIndex);\n        elem.style.display = 'none';\n\n        if (index === _this.currentIndex) {\n          elem.style.display = 'flex';\n          elem.style.transition = '2s ease 1s'; // console.log('elem',elem);\n        }\n      });\n      if (this.currentIndex === sliders.length - 1) this.currentIndex = 0;else this.currentIndex++; // console.log('this.currentIndex', this.currentIndex);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      console.log(this); // this.changeSlides();    \n\n      if (this.dotSlides) this.changeSlides();else this.addDots();\n    }\n  }]);\n\n  return Slider;\n}();\n\n\n\n//# sourceURL=webpack:///./modules/sliderClass.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2875c9c6c59f238485dc"; }
/******/ }();
/******/ 
/******/ }
);