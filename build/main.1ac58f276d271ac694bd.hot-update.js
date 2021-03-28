/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate"]("main",{

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ calculator; }\n/* harmony export */ });\nfunction calculator() {\n  var cards = document.getElementById('cards'),\n      cardOrder = cards.querySelectorAll('.card_order'),\n      cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),\n      cardLetoMozaika = document.getElementById('card_leto_mozaika');\n  console.log(cardOrder);\n  cardOrder.addEventListener('change', function (event) {\n    var url,\n        target = event.target;\n    console.log(target);\n    if (target === cardLetoSchelkovo) url = '../schelkovo.html';else if (target === cardLetoMozaika) url = '../mozaika.html';else return;\n    fetch(url).then(function (response) {\n      if (response.status === 200) {\n        throw new Error('status network not 200');\n      } else return response.json();\n    }).then(function (data) {\n      console.log(data);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e477d14d59c9dbe7d9aa"; }
/******/ }();
/******/ 
/******/ }
);