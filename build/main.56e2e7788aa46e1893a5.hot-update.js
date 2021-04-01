/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate"]("main",{

/***/ "./modules/sliderClass.js":
/*!********************************!*\
  !*** ./modules/sliderClass.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(cont, list, dots) {\n    _classCallCheck(this, Slider);\n\n    this.container = document.querySelector(cont), this.listSlides = document.querySelectorAll(list), this.dotSlides = this.container.querySelectorAll(dots);\n    this.startIndex = 0;\n    this.lastIndex = this.listSlides.length;\n    this.currentIndex = 0;\n    this.interval = 4000;\n  } //методы класса\n\n\n  _createClass(Slider, [{\n    key: \"changeSlides\",\n    value: function changeSlides() {\n      var _this = this;\n\n      this.listSlides.forEach(function (elem, index) {\n        //console.log('mainIndex', mainIndex);\n        elem.style.display = 'none';\n\n        if (index === _this.currentIndex) {\n          elem.style.display = 'flex';\n          elem.style.transition = '2s ease 1s'; // console.log('elem',elem);\n        }\n      });\n      if (this.currentIndex === sliders.length - 1) this.currentIndex = 0;else this.currentIndex++; // console.log('this.currentIndex', this.currentIndex);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      console.log(this); // this.changeSlides();    \n\n      if (this.dotSlides) this.changeSlides();else this.addDots();\n    }\n  }]);\n\n  return Slider;\n}();\n\n\n\n//# sourceURL=webpack:///./modules/sliderClass.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9bbe7dcd1fefc737afdf"; }
/******/ }();
/******/ 
/******/ }
);