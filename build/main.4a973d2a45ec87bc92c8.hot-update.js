/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate"]("main",{

/***/ "./modules/sliderGallery.js":
/*!**********************************!*\
  !*** ./modules/sliderGallery.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n//cslider\n//cslider\nvar sliderGallery = function sliderGallery() {\n  var gallery = document.querySelector(\".gallery-slider\"),\n      slide = gallery.querySelectorAll(\".slide\");\n  gallery.style.position = \"relative\";\n\n  for (var i = 0; i < slide.length; i++) {\n    slide[i].style.transition = \"all 2s ease-in-out 1s\";\n  } // transition: all 1.2s ease-in-out;\n\n\n  var dots = document.createElement(\"ul\");\n  dots.className = \"slider-dots\";\n  gallery.append(dots);\n\n  for (var _i = 0; _i < slide.length; _i++) {\n    var dot = document.createElement(\"li\");\n    dot.classList.add(\"dot\");\n    if (_i === 0) dot.classList.add(\"slick-active\");\n    dots.append(dot);\n  }\n\n  var sliderDots = gallery.querySelectorAll(\".dot\");\n\n  for (var _i2 = 0; _i2 < sliderDots.length; _i2++) {\n    var btn = document.createElement(\"button\");\n\n    sliderDots[_i2].append(btn);\n  }\n\n  for (var _i3 = 0; _i3 < slide.length; _i3++) {\n    if (_i3 !== 0) slide[_i3].style.display = \"none\";\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(arr, index) {\n    if (arr[index].nodeName === \"DIV\") {\n      arr[index].style.display = \"none\";\n    } else {\n      arr[index].classList.remove(\"slick-active\");\n    }\n  };\n\n  var nextSlide = function nextSlide(arr, index) {\n    if (arr[index].nodeName === \"DIV\") {\n      arr[index].style.display = \"block\";\n    } else {\n      arr[index].classList.add(\"slick-active\");\n    }\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide);\n    prevSlide(sliderDots, currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide);\n    nextSlide(sliderDots, currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  gallery.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    var target = event.target.closest(\"a\");\n    if (!target) target = event.target.closest(\"li\"); // console.log(\"target\", target);\n\n    if (!target) return;\n    if (!target.matches(\".dot, .slider-arrow\")) return;\n    prevSlide(slide, currentSlide);\n    prevSlide(sliderDots, currentSlide);\n\n    if (target.matches(\"#arrow-right\")) {\n      // console.log(\"next\");\n      currentSlide++;\n    } else if (target.matches(\"#arrow-left\")) {\n      currentSlide--; // console.log(\"back\");\n    } else if (target.matches(\".dot\")) {\n      // console.log(\"по точкам^\", sliderDots);\n      sliderDots.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index; // console.log(\"нужна картинка\", index);\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide);\n    nextSlide(sliderDots, currentSlide);\n  }); //обработчик события на весь слайдер\n\n  gallery.addEventListener(\"mouseover\", function (event) {\n    // console.log(event.target);\n    if (event.target.nodeName === \"BUTTON\" || event.target.nodeName === \"A\") {\n      stopSlide();\n    }\n  });\n  gallery.addEventListener(\"mouseout\", function (event) {\n    if (event.target.nodeName === \"BUTTON\" || event.target.nodeName === \"A\") {\n      startSlide();\n    }\n  });\n  startSlide(3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderGallery);\n\n//# sourceURL=webpack:///./modules/sliderGallery.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9929097f272666881048"; }
/******/ }();
/******/ 
/******/ }
);