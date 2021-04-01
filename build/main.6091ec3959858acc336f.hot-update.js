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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ calculator; }\n/* harmony export */ });\nfunction calculator() {\n  var cards = document.getElementById(\"cards\"),\n      cardOrder = cards.querySelector(\"#card_order\"),\n      cardLetoSchelkovo = document.getElementById(\"card_leto_schelkovo\"),\n      cardLetoMozaika = document.getElementById(\"card_leto_mozaika\"),\n      price = cardOrder.querySelector(\".price\"),\n      // club = cardOrder.querySelector(\".club\"),\n  time = document.querySelector(\".time\"),\n      times = time.querySelectorAll(\"input\");\n  var url = \"mozaika.html\",\n      period = 1;\n  var finalPrice = price.children[2];\n  cardOrder.addEventListener(\"click\", function (event) {\n    var target = event.target; // console.log(target);\n\n    for (var i = 0; i < times.length; i++) {\n      if (target === times[i]) {\n        // if (target.nodeName === \"LABEL\") {\n        //   // console.log(\"нажали на лабель\", target);\n        //   period = target.previousElementSibling.value;\n        // } else if (target.nodeName === \"INPUT\") {\n        //   // console.log(\"нажали на инпут\", target);\n        period = target.value; // }\n      }\n    } // console.log(\"найденный период\", period);\n\n\n    if (target === cardLetoSchelkovo) url = \"schelkovo.html\";else if (target === cardLetoMozaika) url = \"mozaika.html\";\n  });\n  cardOrder.addEventListener(\"change\", function (event) {\n    var target = event.target; // console.log(target);\n\n    var getPromo = function getPromo() {\n      var promo = cardOrder.elements.promo.value; // console.log(\"promo\", promo);\n\n      if (promo.toLowerCase() === \"тело2019\") {\n        finalPrice.innerHTML = Math.round(0.7 * parseFloat(cardOrder.querySelector(\"#price-total\").innerHTML));\n      }\n    };\n\n    var getCost = function getCost(html) {\n      // This is the HTML from our response as a text string\n      var parser = new DOMParser();\n      var doc = parser.parseFromString(html, \"text/html\"); // console.log(\"doc\", doc);\n      // Получаем стоимость\n\n      var cards = doc.querySelector(\".cards-types\").children; // console.log(url, \"дети контенейра .cards-types\", cards);\n\n      var postfix = \"s\"; //  / console.log(\"period + postfix\", period + postfix);\n\n      for (var i = 0; i < cards.length; i++) {\n        if (cards[i].value === period + postfix) {\n          var label = cards[i].nextElementSibling; // console.log(\"label\", label.innerHTML);\n\n          finalPrice.innerHTML = label.querySelector(\".cost\").innerHTML;\n          getPromo();\n          break;\n        }\n      }\n    };\n\n    fetch(url).then(function (response) {\n      // The API call was successful!\n      return response.text();\n    }).then(function (html) {\n      getCost(html);\n    })[\"catch\"](function (err) {\n      // There was an error\n      console.warn(\"Something went wrong.\", err);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "81d1c4833ecc0a18f602"; }
/******/ }();
/******/ 
/******/ }
);