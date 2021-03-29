/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/font-awesome.min.css */ \"./css/font-awesome.min.css\");\n/* harmony import */ var _css_style_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.min.css */ \"./css/style.min.css\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/togglePopup */ \"./modules/togglePopup.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./modules/burgerMenu.js\");\n/* harmony import */ var _modules_selectClubs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/selectClubs */ \"./modules/selectClubs.js\");\n/* harmony import */ var _modules_genMainSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/genMainSlider */ \"./modules/genMainSlider.js\");\n/* harmony import */ var _modules_slideServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slideServices */ \"./modules/slideServices.js\");\n/* harmony import */ var _modules_checkInputFormData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/checkInputFormData */ \"./modules/checkInputFormData.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_burgerMenuPopup_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burgerMenuPopup.js */ \"./modules/burgerMenuPopup.js\");\n/* harmony import */ var _modules_sliderGallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/sliderGallery */ \"./modules/sliderGallery.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_scrollPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/scrollPage */ \"./modules/scrollPage.js\");\n // import * as $ from '@images'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_genMainSlider__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_selectClubs__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_slideServices__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_burgerMenuPopup_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n(0,_modules_sliderGallery__WEBPACK_IMPORTED_MODULE_11__.default)();\n(0,_modules_scrollPage__WEBPACK_IMPORTED_MODULE_13__.default)(); // console.log(kar);\n// slideCarousel();\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_12__.default)(); //checkInputFormData();\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burgerMenu.js":
/*!*******************************!*\
  !*** ./modules/burgerMenu.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ appearBurgerMenu; }\n/* harmony export */ });\nfunction appearBurgerMenu() {\n  var topMenu = document.querySelector('.top-menu'),\n      // popup-menu hidden-large ДОБАВИТЬ АНИМАЦИЮ\n  menuButtonLarge = document.querySelector('.menu-button'),\n      // menu-button hidden-large\n  ulHiddenSmall = document.querySelector('.hidden-small');\n  window.addEventListener(\"resize\", function () {\n    var clientWidth = document.documentElement.clientWidth;\n\n    if (clientWidth < 768) {\n      ulHiddenSmall.style.display = 'none';\n      menuButtonLarge.style.display = 'block';\n    } else {\n      ulHiddenSmall.style.display = 'flex';\n      menuButtonLarge.style.display = 'none';\n    }\n  }, false); //\n\n  var beforeScrollCoord = topMenu.getBoundingClientRect();\n  window.addEventListener(\"scroll\", function () {\n    var clientWidth = document.documentElement.clientWidth;\n\n    if (window.pageYOffset > beforeScrollCoord.y && clientWidth < 768) {\n      topMenu.style.position = 'fixed';\n    } else if (window.pageYOffset <= beforeScrollCoord.y) {\n      topMenu.style.position = 'initial';\n    }\n  }, false);\n}\n\n//# sourceURL=webpack:///./modules/burgerMenu.js?");

/***/ }),

/***/ "./modules/burgerMenuPopup.js":
/*!************************************!*\
  !*** ./modules/burgerMenuPopup.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ burgerMenuPopup; }\n/* harmony export */ });\nfunction burgerMenuPopup() {\n  var popupMenuHidLarge = document.querySelector('.popup-menu'),\n      btnClosePopupMenu = document.querySelector('.close-menu-btn'),\n      btnPopupMenu = document.querySelector('.menu-button');\n  btnPopupMenu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target === btnPopupMenu.children[0]) {\n      popupMenuHidLarge.style.display = 'flex';\n    }\n  });\n  popupMenuHidLarge.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target === btnClosePopupMenu.children[0]) {\n      popupMenuHidLarge.style.display = 'none';\n    } else {\n      target = target.closest('li');\n\n      if (target) {\n        popupMenuHidLarge.style.display = 'none';\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack:///./modules/burgerMenuPopup.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ calculator; }\n/* harmony export */ });\nfunction calculator() {\n  var cards = document.getElementById(\"cards\"),\n      cardOrder = cards.querySelector(\"#card_order\"),\n      cardLetoSchelkovo = document.getElementById(\"card_leto_schelkovo\"),\n      cardLetoMozaika = document.getElementById(\"card_leto_mozaika\"),\n      price = cardOrder.querySelector(\".price\"),\n      club = cardOrder.querySelector(\".club\"),\n      times = document.querySelector(\".time\").children;\n  console.log(cardOrder);\n  var url = \"mozaika.html\",\n      period = 1;\n  var finalPrice = price.children[2],\n      coupon = price.children[0];\n  cardOrder.addEventListener(\"click\", function (event) {\n    var target = event.target;\n    console.log(target);\n\n    for (var i = 0; i < times.length; i++) {\n      if (target === times[i]) {\n        if (target.nodeName === \"LABEL\") {\n          console.log(\"нажали на лабель\", target);\n          period = target.previousElementSibling.value;\n        } else if (target.nodeName === \"INPUT\") {\n          console.log(\"нажали на инпут\", target);\n          period = target.value;\n        }\n      }\n    }\n\n    console.log(\"найденный период\", period);\n    if (target === cardLetoSchelkovo) url = \"schelkovo.html\";else if (target === cardLetoMozaika) url = \"mozaika.html\";\n    console.log(url); // console.log(\"clubbbb\", clubs, cardLetoSchelkovo, cardLetoMozaika);\n  });\n  cardOrder.addEventListener(\"change\", function (event) {\n    var target = event.target;\n    console.log(target);\n\n    var getCost = function getCost(html) {\n      // This is the HTML from our response as a text string\n      var parser = new DOMParser();\n      var doc = parser.parseFromString(html, \"text/html\");\n      console.log(\"doc\", doc); // Получаем стоимость\n\n      var cards = doc.querySelector(\".cards-types\").children;\n      console.log(url, \"дети контенейра .cards-types\", cards);\n      var postfix = \"s\";\n      console.log(\"period + postfix\", period + postfix);\n\n      for (var i = 0; i < cards.length; i++) {\n        if (cards[i].value === period + postfix) {\n          var label = cards[i].nextElementSibling;\n          console.log(\"label\", label.innerHTML);\n          finalPrice.innerHTML = label.querySelector(\".cost\").innerHTML;\n          break;\n        }\n      } //   console.log(cards);\n\n    };\n\n    if (target.closest(\"div\") === coupon) {\n      if (coupon.children[0].value.toLowerCase() === \"тело2019\") {\n        finalPrice.innerHTML = Math.round(0.33 * parseFloat(price.children[2].innerHTML));\n      }\n    }\n\n    fetch(url).then(function (response) {\n      // The API call was successful!\n      return response.text();\n    }).then(function (html) {\n      getCost(html);\n    })[\"catch\"](function (err) {\n      // There was an error\n      console.warn(\"Something went wrong.\", err);\n    }); // const request = new XMLHttpRequest();\n    // console.log(request);\n    // request.open(\"GET\", url);\n    // request.addEventListener(\"readystatechange\", () => {\n    //   console.log(\"listen req\");\n    //   if (request.readyState === 4 && request.status === 200) {\n    //     const data = new DOMParser().parseFromString(\n    //       this.responseText,\n    //       \"text/html\"\n    //     );\n    //     let info = data.querySelector(\".card-types\");\n    //     console.log(info);\n    //   } else console.log(\"mist\");\n    //   });\n  });\n}\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/checkInputFormData.js":
/*!***************************************!*\
  !*** ./modules/checkInputFormData.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ checkInputFormData; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction checkInputFormData() {\n  var doc = document.querySelector('body'),\n      // bannerForm = document.getElementById('banner-form'),\n  // cardOrder = document.getElementById('card-order'),\n  // footerForm = document.getElementById('footer-form'),\n  // form1 = document.getElementById('form1'),\n  // form2 = document.getElementById('form2');\n  forms = _toConsumableArray(document.forms);\n\n  forms.forEach(function (form) {\n    form.addEventListener(\"input\", function (event) {\n      var target = event.target.closest(\"input\");\n      var regEx = \"\";\n\n      if (target.name === \"name\") {\n        regEx = /[^а-я\\ ]/gi;\n        target.value = target.value.replace(/^\\ /, \"\"); // let firstLetter = /(+\\ )$/\n\n        target.value = target.value.replace(regEx, \"\");\n      } else if (target.name === \"phone\") {\n        regEx = /[^\\d\\+]/g;\n        target.value = target.value.replace(regEx, \"\");\n      }\n\n      if (target.name === \"phone\") {\n        var value = target.value;\n\n        if (value.replace(/\\D/g, \"\").length < 6) {\n          target.form.querySelector(\".btn-send\").disabled = true;\n          target.title = \"Номер телефона должен содержать от 6 до 11 цифр.\";\n        } else {\n          target.form.querySelector(\".btn-send\").disabled = false;\n          target.title = \"\";\n        }\n\n        if (/^\\+/.test(value)) {\n          target.value = \"+\" + target.value.replace(/\\+/g, \"\");\n          if (value[-1] === \"+\") value.replace(-1, \"\");\n\n          if (/^\\+\\d{2}/.test(value)) {\n            value = value.replace(/\\)*\\(*/g, \"\");\n            value = value.slice(0, 2) + \"(\" + value.slice(2);\n            target.value = value;\n          }\n\n          if (/^\\+\\d\\(\\d{4}/.test(value)) {\n            value = value.replace(/\\(*\\)*/g, \"\");\n            value = value.slice(0, 2) + \"(\" + value.slice(2, 5) + \")\" + value.slice(5);\n            target.value = value;\n          }\n\n          if (/^\\+\\d\\(\\d{3}\\)\\d{4}/.test(value)) {\n            value = value.replace(/\\(*\\)*\\-*/g, \"\");\n            console.log(value);\n            value = value.slice(0, 2) + \"(\" + value.slice(2, 5) + \")\" + value.slice(5, 8) + \"-\" + value.slice(8);\n          }\n\n          if (/^\\+\\d\\(\\d{3}\\)\\d{3}\\-\\d{3}/.test(value)) {\n            value = value.replace(/\\(*\\)*\\-*/g, \"\");\n            console.log(value);\n            value = value.slice(0, 2) + \"(\" + value.slice(2, 5) + \")\" + value.slice(5, 8) + \"-\" + value.slice(8, 10) + \"-\" + value.slice(10);\n          }\n\n          if (/^\\+\\d\\(\\d{3}\\)\\d{3}\\-\\d{2}\\-\\d{2}/.test(value)) {\n            value = value.slice(0, 16);\n            target.value = value;\n          }\n        } else {\n          if (/^\\d{4}/.test(value)) {\n            value = value.replace(/\\)*\\(*\\-*/g, \"\");\n            value = value.slice(0, 3) + \"-\" + value.slice(3);\n            target.value = value;\n          }\n\n          if (/^\\d{3}\\-\\d{4}/.test(value)) {\n            value = value.replace(/\\(*\\)*\\-*/g, \"\");\n            value = value.slice(0, 3) + \"-\" + value.slice(3, 5) + \"-\" + value.slice(5);\n            target.value = value;\n          }\n\n          if (/^\\d{3}\\-\\d{2,3}\\-?\\d{0,2}/.test(value) && value.length > 10 && value.length < 14) {\n            value = value.replace(/\\(*\\)*\\-*/g, \"\");\n            value = value[0] + \"(\" + value.slice(1, 4) + \")\" + value.slice(4, 7) + \"-\" + value.slice(7);\n            target.value = value;\n          }\n\n          if (value.length === 14) {\n            value = value.replace(/\\(*\\)*\\-*/g, \"\");\n            value = value[0] + \"(\" + value.slice(1, 4) + \")\" + value.slice(4, 7) + \"-\" + value.slice(7, 9) + \"-\" + value.slice(9);\n            target.value = value;\n          }\n\n          if (/^\\d\\(\\d{3}\\)\\d{3}\\-\\d{2}\\-\\d{2}/.test(value)) {\n            value = value.slice(0, 15);\n            target.value = value;\n          }\n        }\n      }\n    });\n    var inputs = form.querySelectorAll(\"input\");\n    inputs.forEach(function (inputItem) {\n      if (inputItem.type !== 'checkbox') {\n        inputItem.addEventListener(\"blur\", function (event) {\n          var target = event.target;\n\n          if (target.name === \"name\") {\n            validAlpha(target);\n          } else if (target.name === \"phone\") {\n            validPhone(target);\n          }\n\n          function validAlpha(t) {\n            var value = t.value.replace(/\\ {2,}/, \" \").replace(/\\-{2,}/, \"-\").trim(),\n                correctValue = \"\";\n\n            if (!!value) {\n              if (t.name === \"user_name\") {\n                var nameArr = value.split(\" \");\n                nameArr.forEach(function (item, i) {\n                  correctValue += item[0].toUpperCase() + item.slice(1).toLowerCase() + \" \";\n                });\n              } else {\n                correctValue = value[0].toUpperCase() + value.slice(1).toLowerCase();\n              }\n\n              t.value = correctValue;\n            }\n          }\n\n          function validPhone(t) {\n            var resultValue = \"\",\n                value = t.value;\n\n            if (!!value) {\n              value = value.replace(/\\-/g, \"\").replace(/\\(/g, \"\").replace(/\\)/g, \"\").replace(/\\+/, \"\");\n\n              if (value.length < 6) {\n                resultValue = value;\n                return;\n              }\n\n              switch (true) {\n                case value.length === 6:\n                  resultValue = value.slice(0, 3) + \"-\" + value.slice(3);\n                  break;\n\n                case value.length === 7:\n                  resultValue = value.slice(0, 3) + \"-\" + value.slice(3, 5) + \"-\" + value.slice(5);\n                  break;\n\n                case value.length === 8:\n                  resultValue = value.slice(0, 4) + \"-\" + value.slice(4, 7) + \"-\" + value.slice(7);\n                  break;\n\n                case 9 === value.length || value.length === 10:\n                  resultValue = value[0] + \"(\" + value.slice(1, 4) + \")\" + value.slice(4, 7) + \"-\" + value.slice(7);\n                  break;\n\n                case 11 === value.length:\n                  resultValue = value[0] + \"(\" + value.slice(1, 4) + \")\" + value.slice(4, 7) + \"-\" + value.slice(7, 9) + \"-\" + value.slice(9);\n                  break;\n              }\n\n              if (t.value === \"+\") resultValue = \"+\" + resultValue;\n            }\n\n            t.value = resultValue;\n          }\n        });\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack:///./modules/checkInputFormData.js?");

/***/ }),

/***/ "./modules/genMainSlider.js":
/*!**********************************!*\
  !*** ./modules/genMainSlider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ genMainSlider; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction genMainSlider() {\n  var mainSlider = document.querySelector('.main-slider'),\n      sliders = _toConsumableArray(mainSlider.children);\n\n  var mainIndex = 1; // console.log('mainSlider', sliders);\n\n  setInterval(changeSlide, 4000);\n\n  function changeSlide() {\n    sliders.forEach(function (elem, index) {\n      //console.log('mainIndex', mainIndex);\n      elem.style.display = 'none';\n\n      if (index === mainIndex) {\n        elem.style.display = 'flex';\n        elem.style.transition = '2s ease 1s'; // console.log('elem',elem);\n      }\n    });\n    if (mainIndex === sliders.length - 1) mainIndex = 0;else mainIndex++; // console.log('mainIndex', mainIndex);\n  }\n}\n\n//# sourceURL=webpack:///./modules/genMainSlider.js?");

/***/ }),

/***/ "./modules/scrollPage.js":
/*!*******************************!*\
  !*** ./modules/scrollPage.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ scrollPage; }\n/* harmony export */ });\nfunction scrollPage() {\n  var toTop = document.getElementById(\"totop\");\n  console.log(toTop);\n  toTop.style.display = \"none\";\n}\n\n//# sourceURL=webpack:///./modules/scrollPage.js?");

/***/ }),

/***/ "./modules/selectClubs.js":
/*!********************************!*\
  !*** ./modules/selectClubs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ selectClubs; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction selectClubs() {\n  var clubList = document.querySelector('.clubs-list');\n  clubList.addEventListener('click', function (event) {\n    _toConsumableArray(clubList.children).forEach(function (elem) {\n      // console.log('elem ', elem);\n      if (elem.nodeName === 'UL') {\n        if (elem.classList.contains('open')) {\n          elem.classList.remove('open');\n          elem.style.display = 'none';\n        } else {\n          elem.style.display = 'block';\n          elem.classList.add('open');\n\n          var liClubs = _toConsumableArray(document.querySelector('.open').children);\n\n          console.log(liClubs);\n          liClubs.forEach(function (li) {\n            li.addEventListener('click', function (event) {\n              if (event.target === li.children[0]) {\n                event.preventDefault();\n                console.log(event.target);\n                /*\r\n                todo:\r\n                1. вызвать функцию из модуля,\r\n                обрабатывающего инфу по выбранному клубу.\r\n                Уточнить в инете - возможно ли просто отослаться на выбранную страницу.*/\n              } // target = event.target;\n\n            });\n          });\n        }\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack:///./modules/selectClubs.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ sendForm; }\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction sendForm() {\n  var errorMessage = \"\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A.<br> \\u041E\\u0431\\u0440\\u0430\\u0442\\u0438\\u0442\\u0435\\u0441\\u044C, \\u043F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043F\\u043E\\u0437\\u0436\\u0435.\",\n      thanks = document.getElementById(\"thanks\"),\n      formContentThanks = thanks.querySelector(\".form-content\").children[1];\n\n  var forms = _toConsumableArray(document.forms);\n\n  console.log(forms);\n  /*отправлено, ошибка). В последних двух состояниях \r\n    необходимо заменить сам контент модального окна на оповещение. */\n\n  forms.forEach(function (form, index) {\n    form.addEventListener(\"submit\", function (event) {\n      console.log(event);\n      event.preventDefault();\n      console.log(\"cancel standart answer\"); //проверка ,если все заполнено, то выводим сообщение в в отдельном окне, где-то там оно есть\n\n      var formData = new FormData(form);\n      console.log(formData);\n      var body = {};\n      console.log(form.elements);\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      }), console.log(body); // вызов обещания с передачей ему данных из форм\n\n      postData(body).then(function (response) {\n        //console.log(response);\n        if (response.status !== 200) {\n          throw new Error(\"Status network not 200\");\n        }\n\n        thanks.style.display = \"flex\";\n      }) // ловим возможную ошибку\n      [\"catch\"](function (error) {\n        if (!!error) {\n          //console.log(error);\n          formContentThanks.innerHTML = errorMessage;\n        }\n      });\n      clearInputs();\n    });\n\n    function postData(body) {\n      return fetch(\"./server.php\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(body)\n      });\n    }\n\n    function clearInputs() {\n      var allInputs = document.querySelectorAll(\"input\");\n\n      var _iterator = _createForOfIteratorHelper(allInputs),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var input = _step.value;\n          input.value = \"\";\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slideServices.js":
/*!**********************************!*\
  !*** ./modules/slideServices.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ slideServices; }\n/* harmony export */ });\nfunction slideServices() {\n  var servicesSliders = document.querySelector('.services-slider');\n  var slide = servicesSliders.querySelectorAll('.slide'),\n      amount = 5;\n  servicesSliders.style.cssText = 'position: relative; overflow: hidden';\n  slide.forEach(function (elem) {\n    elem.style.flex = ' 0 0 20%';\n  });\n  servicesSliders.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    var target = event.target.closest('a');\n    console.log('target', target);\n    var where, index;\n    slide = servicesSliders.querySelectorAll('.slide');\n    if (slide.length === amount) return;\n\n    if (target.matches(\"#arrow-right\")) {\n      where = where = 'beforeend';\n      index = 0;\n    } else if (target.matches(\"#arrow-left\")) {\n      where = 'afterbegin';\n      index = slide.length - 1;\n    }\n\n    servicesSliders.insertAdjacentElement(where, slide[index]);\n  });\n}\n\n//# sourceURL=webpack:///./modules/slideServices.js?");

/***/ }),

/***/ "./modules/sliderGallery.js":
/*!**********************************!*\
  !*** ./modules/sliderGallery.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n//cslider\n//cslider\nvar sliderGallery = function sliderGallery() {\n  var gallery = document.querySelector('.gallery-slider'),\n      slide = gallery.querySelectorAll(\".slide\");\n  gallery.style.position = 'relative';\n  var dots = document.createElement('ul');\n  dots.className = 'slider-dots';\n  gallery.append(dots);\n\n  for (var i = 0; i < slide.length; i++) {\n    var dot = document.createElement(\"li\");\n    dot.classList.add('dot');\n    if (i === 0) dot.classList.add(\"slick-active\");\n    dots.append(dot);\n  }\n\n  var sliderDots = gallery.querySelectorAll('.dot');\n\n  for (var _i = 0; _i < sliderDots.length; _i++) {\n    var btn = document.createElement('button');\n\n    sliderDots[_i].append(btn);\n  }\n\n  for (var _i2 = 0; _i2 < slide.length; _i2++) {\n    if (_i2 !== 0) slide[_i2].style.display = 'none';\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(arr, index) {\n    if (arr[index].nodeName === 'DIV') {\n      arr[index].style.display = 'none';\n    } else {\n      arr[index].classList.remove('slick-active');\n    }\n  };\n\n  var nextSlide = function nextSlide(arr, index) {\n    if (arr[index].nodeName === 'DIV') {\n      arr[index].style.display = 'block';\n    } else {\n      arr[index].classList.add('slick-active');\n    }\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide);\n    prevSlide(sliderDots, currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide);\n    nextSlide(sliderDots, currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  gallery.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    var target = event.target.closest('a');\n    if (!target) target = event.target.closest('li');\n    console.log('target', target);\n\n    if (!target.matches('.dot, .slider-arrow')) {\n      console.log('not that place');\n      return;\n    }\n\n    prevSlide(slide, currentSlide);\n    prevSlide(sliderDots, currentSlide);\n\n    if (target.matches(\"#arrow-right\")) {\n      console.log('next');\n      currentSlide++;\n    } else if (target.matches(\"#arrow-left\")) {\n      currentSlide--;\n      console.log('back');\n    } else if (target.matches(\".dot\")) {\n      console.log('по точкам^', sliderDots);\n      sliderDots.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n          console.log('нужна картинка', index);\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide);\n    nextSlide(sliderDots, currentSlide);\n  }); //обработчик события на весь слайдер\n\n  gallery.addEventListener(\"mouseover\", function (event) {\n    // console.log(event.target);\n    if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'A') {\n      stopSlide();\n    }\n  });\n  gallery.addEventListener(\"mouseout\", function (event) {\n    if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'A') {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderGallery);\n\n//# sourceURL=webpack:///./modules/sliderGallery.js?");

/***/ }),

/***/ "./modules/togglePopup.js":
/*!********************************!*\
  !*** ./modules/togglePopup.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ togglePopup; }\n/* harmony export */ });\nfunction togglePopup() {\n  var doc = document.querySelector('body'),\n      openPopup = document.querySelector('.open-popup'),\n      callbackBtn = document.querySelector('.callback-btn'),\n      fixedGift = document.querySelector('.fixed-gift'),\n      closeBtn = document.querySelectorAll('.close-btn')[1],\n      callbackForm = document.querySelector('#callback_form'),\n      // id=form1\n  freeVisitForm = document.querySelector('#free_visit_form'),\n      // id=form2\n  gift = document.querySelector('#gift');\n  doc.addEventListener('click', function (event) {\n    var target = event.target,\n        purpose;\n    if (target === openPopup) purpose = freeVisitForm;\n    if (target === callbackBtn) purpose = callbackForm;\n    if (target.closest('div') === fixedGift) purpose = gift;\n\n    if (!!purpose) {\n      purpose.style.display = 'block';\n      if (purpose === gift) fixedGift.style.display = 'none';\n    }\n\n    if (target.className === 'overlay' || target.className === 'close_icon' || target === closeBtn) {\n      freeVisitForm.style.display = 'none';\n      callbackForm.style.display = 'none';\n      gift.style.display = 'none';\n    }\n  });\n}\n\n//# sourceURL=webpack:///./modules/togglePopup.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/font-awesome.min.css */ \"./css/font-awesome.min.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./css/style.min.css */ \"./css/style.min.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gift.png */ \"./images/gift.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ \"./images/logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/head-icon.png */ \"./images/head-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu-button.png */ \"./images/menu-button.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete.png */ \"./images/delete.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/head-slider-1.png */ \"./images/head-slider-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/leto-mozaika-bg.png */ \"./images/leto-mozaika-bg.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/clubs-icon.png */ \"./images/clubs-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/leto-schelkovo-bg.png */ \"./images/leto-schelkovo-bg.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/services-slider/akva.jpg */ \"./images/services-slider/akva.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/services-slider/vesy.jpg */ \"./images/services-slider/vesy.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/services-slider/TRX.jpg */ \"./images/services-slider/TRX.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/services-slider/kardio.jpg */ \"./images/services-slider/kardio.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/services-slider/yoga.jpg */ \"./images/services-slider/yoga.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-left.png */ \"./images/arrow-left.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-right.png */ \"./images/arrow-right.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery/photo1.jpg */ \"./images/gallery/photo1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery/photo2.jpg */ \"./images/gallery/photo2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery/photo3.jpg */ \"./images/gallery/photo3.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery/photo4.jpg */ \"./images/gallery/photo4.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery/photo5.jpg */ \"./images/gallery/photo5.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cards.png */ \"./images/cards.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./images/close-icon.png */ \"./images/close-icon.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { maybeNeedQuotes: true });\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\r\\n    <title>Сеть фитнес клубов Тело</title>\\r\\n    <link href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic\\\" rel=\\\"stylesheet\\\">\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n</head>\\r\\n<body>\\r\\n<div class=\\\"fixed-gift\\\">\\r\\n    <img src=\" + ___HTML_LOADER_REPLACEMENT_2___ + \" alt>\\r\\n</div>\\r\\n<header class=\\\"header-main\\\">\\r\\n    <div class=\\\"head\\\">\\r\\n        <div class=\\\"wrapper\\\">\\r\\n            <div class=\\\"head-main\\\">\\r\\n                <div class=\\\"left\\\">\\r\\n                    <div class=\\\"logo\\\">\\r\\n                        <a href=\\\"index.html\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"Сеть фитнес клубов Тело\\\"></a>\\r\\n                    </div>\\r\\n                    <div class=\\\"club-select\\\">\\r\\n                        <div class=\\\"clubs-list\\\">\\r\\n                            <p>Выбрать клуб</p>\\r\\n                            <ul>\\r\\n                                <li><a href=\\\"./mozaika.html\\\">Тело мозаика</a></li>\\r\\n                                <li><a href=\\\"./schelkovo.html\\\">Тело щелково</a></li>\\r\\n                            </ul>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"right\\\">\\r\\n                    <div class=\\\"free-visit\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\">\\r\\n                        <p><a href=\\\"#\\\" class=\\\"open-popup\\\" data-popup=\\\"#free_visit_form\\\">Записаться на <br>бесплатный\\r\\n                            визит</a></p>\\r\\n                    </div>\\r\\n                    <div class=\\\"call\\\">\\r\\n                        <div class=\\\"our-phone\\\">\\r\\n                            <span>Звоните круглосуточно!</span>\\r\\n                            <p>+7 (800) 555-64-47</p>\\r\\n                        </div>\\r\\n                        <button class=\\\"btn callback-btn\\\" data-popup=\\\"#callback_form\\\">Перезвоните мне</button>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <nav class=\\\"top-menu\\\">\\r\\n        <div class=\\\"wrapper\\\">\\r\\n            <ul class=\\\"hidden-small\\\">\\r\\n                <li class=\\\"scroll\\\"><a href=\\\"#clubs\\\">Клубы</a></li>\\r\\n                <li class=\\\"scroll\\\"><a href=\\\"#services\\\">Услуги</a></li>\\r\\n                <li class=\\\"scroll\\\"><a href=\\\"#cards\\\">Клубные карты</a></li>\\r\\n                <li class=\\\"scroll\\\"><a href=\\\"#gallery\\\">Галерея</a></li>\\r\\n                <li class=\\\"scroll\\\"><a href=\\\"#footer\\\">Контакты</a></li>\\r\\n            </ul>\\r\\n            <div class=\\\"menu-button hidden-large\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"\\\">\\r\\n            </div>\\r\\n        </div>\\r\\n    </nav>\\r\\n    <nav class=\\\"popup-menu hidden-large\\\">\\r\\n        <div class=\\\"close-menu-btn\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"\\\">\\r\\n        </div>\\r\\n        <ul>\\r\\n            <li class=\\\"scroll\\\"><a href=\\\"#clubs\\\">Клубы</a></li>\\r\\n            <li class=\\\"scroll\\\"><a href=\\\"#services\\\">Услуги</a></li>\\r\\n            <li class=\\\"scroll\\\"><a href=\\\"#cards\\\">Клубные карты</a></li>\\r\\n            <li class=\\\"scroll\\\"><a href=\\\"#gallery\\\">Галерея</a></li>\\r\\n            <li class=\\\"scroll\\\"><a href=\\\"#footer\\\">Контакты</a></li>\\r\\n        </ul>\\r\\n    </nav>\\r\\n    <div class=\\\"head-slider\\\">\\r\\n        <div class=\\\"slider-image\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"wrapper\\\">\\r\\n            <div class=\\\"main-slider\\\">\\r\\n                <div class=\\\"slide\\\">\\r\\n                    <div class=\\\"slide-text\\\">\\r\\n                        <div class=\\\"offer-head\\\">\\r\\n                            <p class=\\\"top\\\">2 круглосуточные</p>\\r\\n                            <p class=\\\"middle\\\">клубные карты</p>\\r\\n                            <p class=\\\"bottom\\\">за 25 000<span>i</span></p>\\r\\n                        </div>\\r\\n                        <div class=\\\"validity\\\">\\r\\n                            <p>Только до 31 августа!<br>\\r\\n                                Закажите карту по телефону:</p>\\r\\n                            <span>+7 (800) 555-64-47</span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"slide type2\\\" style=\\\"display: none\\\">\\r\\n                    <div class=\\\"slide-text\\\">\\r\\n                        <div class=\\\"offer-head\\\">\\r\\n                            <p class=\\\"top\\\">открытый чемпионат</p>\\r\\n                            <p class=\\\"middle\\\">по бодибилдингу</p>\\r\\n                            <p class=\\\"bottom\\\">приз 200 000<span>i</span></p>\\r\\n                        </div>\\r\\n                        <div class=\\\"validity\\\">\\r\\n                            <p>записаться\\r\\n                                для участия:</p>\\r\\n                            <span>+7 (800) 555-64-47</span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"slide\\\" style=\\\"display: none\\\">\\r\\n                    <div class=\\\"slide-text\\\">\\r\\n                        <div class=\\\"offer-head\\\">\\r\\n                            <p class=\\\"top\\\">без выходных</p>\\r\\n                            <p class=\\\"middle\\\">круглосуточно</p>\\r\\n                            <p class=\\\"bottom\\\">Бассейн</p>\\r\\n\\r\\n                        </div>\\r\\n                        <div class=\\\"validity\\\">\\r\\n                            <p> Записаться по телефону:\\r\\n                                </p>\\r\\n                            <span>+7 (800) 555-64-47</span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"slide type2 type3\\\" style=\\\"display: none\\\">\\r\\n                    <div class=\\\"slide-text\\\">\\r\\n                        <div class=\\\"offer-head\\\">\\r\\n                            <p class=\\\"top\\\">Круглосуточно</p>\\r\\n                            <p class=\\\"middle\\\">Тренажерный зал</p>\\r\\n                            <p class=\\\"bottom\\\">без выходных</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"validity\\\">\\r\\n                            <p> Записаться по телефону:\\r\\n                                </p>\\r\\n                            <span>+7 (800) 555-64-47</span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"slide type2\\\"  style=\\\"display: none\\\">\\r\\n                    <div class=\\\"slide-text\\\">\\r\\n                        <div class=\\\"offer-head\\\">\\r\\n                            <p class=\\\"top\\\">Пробное занятие</p>\\r\\n                            <p class=\\\"middle\\\">ЙОГА / ПИЛАТЕС</p>\\r\\n                            <p class=\\\"bottom\\\">БЕСПЛАТНО</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"validity\\\">\\r\\n                            <p>Только до 11 сентября!<br>\\r\\n                                Записаться по телефону:</p>\\r\\n                            <span>+7 (800) 555-64-47</span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n\\r\\n            </div>\\r\\n        </div>\\r\\n\\r\\n    </div>\\r\\n</header>\\r\\n<section id=\\\"clubs\\\">\\r\\n    <div class=\\\"wrapper\\\">\\r\\n        <h2>Выберите свой клуб</h2>\\r\\n        <div class=\\\"content\\\">\\r\\n            <div class=\\\"left\\\">\\r\\n                <div class=\\\"image\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"\\\">\\r\\n                    <div class=\\\"club-head\\\">\\r\\n                        <a href=\\\"mozaika.html\\\"><h3>Тело Мозаика</h3></a>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"bottom\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" class=\\\"hidden-991\\\" alt=\\\"\\\">\\r\\n                    <div class=\\\"text\\\">\\r\\n                        <h5>«Тело» в ТРЦ «Мозаика»</h5>\\r\\n                        <p>Россия, Москва, 7-я Кожуховская ул., 9</p>\\r\\n                    </div>\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" class=\\\"hidden-991\\\" alt=\\\"\\\">\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"right\\\">\\r\\n                <div class=\\\"image\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"\\\">\\r\\n                    <div class=\\\"club-head\\\">\\r\\n                        <a href=\\\"schelkovo.html\\\"><h3>Тело Щелково</h3></a>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"bottom\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" class=\\\"hidden-991\\\" alt=\\\"\\\">\\r\\n                    <div class=\\\"text\\\">\\r\\n                        <h5>«Тело» в БЦ Спиртзавод</h5>\\r\\n                        <p>Россия, г. Щелково, ул. Советская, д. 16</p>\\r\\n                    </div>\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" class=\\\"hidden-991\\\" alt=\\\"\\\">\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</section>\\r\\n<section id=\\\"banner\\\">\\r\\n    <div class=\\\"wrapper\\\">\\r\\n        <h2>Записаться на бесплатный&nbsp;визит</h2>\\r\\n        <div class=\\\"form-wrapper\\\">\\r\\n            <form name=\\\"banner-form\\\" id=\\\"banner-form\\\" action=\\\"#\\\" method=\\\"post\\\">\\r\\n                <input type=\\\"hidden\\\" name=\\\"form_name\\\" value=\\\" Записаться на визит\\\">\\r\\n                <input name=\\\"name\\\" type=\\\"text\\\" required placeholder=\\\"Ваше имя...\\\">\\r\\n                <input type=\\\"tel\\\" name=\\\"phone\\\" id=\\\"phone\\\" required placeholder=\\\"Ваш номер телефона...\\\">\\r\\n                <button name=\\\"send\\\" class=\\\"btn\\\" type=\\\"submit\\\">Записаться</button>\\r\\n                <p class=\\\"personal-data\\\">\\r\\n                    <input type=\\\"checkbox\\\" required id=\\\"check1\\\"><label for=\\\"check1\\\">Я согласен на обработку персональных\\r\\n                    данных</label>\\r\\n                </p>\\r\\n            </form>\\r\\n\\r\\n        </div>\\r\\n    </div>\\r\\n</section>\\r\\n<section id=\\\"services\\\">\\r\\n    <div class=\\\"wrapper\\\">\\r\\n        <h2>услуги наших клубов</h2>\\r\\n        <div class=\\\"services-slider\\\">\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"Аква территория\\\">\\r\\n                <h6>Аква территория</h6>\\r\\n                <p>Плавание полезно для людей абсолютно любой возрастной категории. Бассейн 5 на 6 метров.</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Зона свободных весов\\\">\\r\\n                <h6>Зона свободных весов</h6>\\r\\n                <p>Здесь есть всё необходимое, чтобы достичь максимальных результатов</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"Зона TRX\\\">\\r\\n                <h6>Зона TRX</h6>\\r\\n                <p>Укрепление суставов и связок, увеличение мышечной массы, выносливости и гибкости</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"Кардиозона\\\">\\r\\n                <h6>Кардиозона</h6>\\r\\n                <p>Эффективное снижение веса и улучшение работы сердечно-сосудистой системы</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"Йога\\\">\\r\\n                <h6>Йога</h6>\\r\\n                <p>Йога - идеальны не только физическая форма, но и эмоциональное состояние</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"Аква территория\\\">\\r\\n                <h6>Аква территория</h6>\\r\\n                <p>Плавание полезно для людей абсолютно любой возрастной категории. Бассейн 5 на 6 метров.</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Зона свободных весов\\\">\\r\\n                <h6>Зона свободных весов</h6>\\r\\n                <p>Здесь есть всё необходимое, чтобы достичь максимальных результатов</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"Зона TRX\\\">\\r\\n                <h6>Зона TRX</h6>\\r\\n                <p>Укрепление суставов и связок, увеличение мышечной массы, выносливости и гибкости</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"Кардиозона\\\">\\r\\n                <h6>Кардиозона</h6>\\r\\n                <p>Эффективное снижение веса и улучшение работы сердечно-сосудистой системы</p>\\r\\n            </div>\\r\\n            <div class=\\\"slide\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"Йога\\\">\\r\\n                <h6>Йога</h6>\\r\\n                <p>Йога - идеальны не только физическая форма, но и эмоциональное состояние</p>\\r\\n            </div>\\r\\n            <a href='#' class='slider-arrow prev' id='arrow-left'> <span><img src='\" + ___HTML_LOADER_REPLACEMENT_16___ + \"' alt=''> </span></a>\\r\\n                <a href='#' class='slider-arrow next' id='arrow-right'> <span>  <img src='\" + ___HTML_LOADER_REPLACEMENT_17___ + \"' alt=''> </span> </a> \\r\\n        </div>\\r\\n    </div>\\r\\n</section>\\r\\n<section id=\\\"gallery\\\">\\r\\n    <h2>Фотогалерея</h2>\\r\\n    <div class=\\\"gallery-bg\\\">\\r\\n        <div class=\\\"wrapper\\\">\\r\\n            <div class=\\\"gallery-slider\\\">\\r\\n                <div class=\\\"slide\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"\\\">\\r\\n                </div>\\r\\n                <div class=\\\"slide\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"\\\">\\r\\n                </div>\\r\\n                <div class=\\\"slide\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"\\\">\\r\\n                </div>\\r\\n                <div class=\\\"slide\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"\\\">\\r\\n                </div>\\r\\n                <div class=\\\"slide\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\" alt=\\\"\\\">\\r\\n                </div>\\r\\n                <a href='#' class='slider-arrow prev' id='arrow-left'> <span><img src='\" + ___HTML_LOADER_REPLACEMENT_16___ + \"' alt=''> </span></a>\\r\\n                    <a href='#' class='slider-arrow next' id='arrow-right'> <span>  <img src='\" + ___HTML_LOADER_REPLACEMENT_17___ + \"' alt=''> </span> </a> \\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</section>\\r\\n<section id=\\\"cards\\\">\\r\\n    <div class=\\\"wrapper\\\">\\r\\n        <h2>Клубные карты</h2>\\r\\n        <div class=\\\"content\\\">\\r\\n            <div class=\\\"left\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" alt=\\\"Клубные карты\\\">\\r\\n            </div>\\r\\n            <div class=\\\"right\\\">\\r\\n                <form action=\\\"\\\" id=\\\"card_order\\\">\\r\\n                    <div class=\\\"time\\\">\\r\\n                        <input id=\\\"m1\\\" type=\\\"radio\\\" name=\\\"card-type\\\" value=\\\"1\\\" checked>\\r\\n                        <label for=\\\"m1\\\">1 месяц</label>\\r\\n                        <input id=\\\"m2\\\" type=\\\"radio\\\" name=\\\"card-type\\\" value=\\\"6\\\">\\r\\n                        <label for=\\\"m2\\\">6 месяцев</label>\\r\\n                        <input id=\\\"m3\\\" type=\\\"radio\\\" name=\\\"card-type\\\" value=\\\"9\\\">\\r\\n                        <label for=\\\"m3\\\">9 месяцев</label>\\r\\n                        <input id=\\\"m4\\\" type=\\\"radio\\\" name=\\\"card-type\\\" value=\\\"12\\\">\\r\\n                        <label for=\\\"m4\\\">12 месяцев</label>\\r\\n                    </div>\\r\\n                    <div class=\\\"club\\\">\\r\\n                        <input type=\\\"radio\\\" id=\\\"card_leto_mozaika\\\" name=\\\"club-name\\\" value=\\\"mozaika\\\" checked><label\\r\\n                            for=\\\"card_leto_mozaika\\\">\\r\\n                        <h5>Тело «Мозаика»</h5>\\r\\n                        <p>Россия, Москва, 7-я Кожуховская ул., 9</p>\\r\\n                    </label>\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\\"club\\\">\\r\\n                        <input type=\\\"radio\\\" id=\\\"card_leto_schelkovo\\\" name=\\\"club-name\\\" value=\\\"schelkovo\\\"><label\\r\\n                            for=\\\"card_leto_schelkovo\\\">\\r\\n                        <h5>Тело «Щелково»</h5>\\r\\n                        <p>Россия, г. Щелково, ул. Советская, д. 16</p>\\r\\n                    </label>\\r\\n                    </div>\\r\\n                    <div class=\\\"price\\\">\\r\\n                        <div class=\\\"price-message input-text\\\"><input name=\\\"name\\\" type=\\\"text\\\" required\\r\\n                                                                     placeholder=\\\"Промокод\\\"></div>\\r\\n                        <div class=\\\"price-message\\\">Цена:</div>\\r\\n                        <div class=\\\"price-message\\\" id=\\\"price-total\\\">1999</div>\\r\\n                    </div>\\r\\n                    <input type=\\\"hidden\\\" name=\\\"form_name\\\" value=\\\"Заказать карту\\\">\\r\\n                    <p class=\\\"input-text\\\"><input name=\\\"name\\\" type=\\\"text\\\" required placeholder=\\\"Ваше имя...\\\"></p>\\r\\n                    <p class=\\\"input-text\\\"><input type=\\\"tel\\\" name=\\\"phone\\\" id=\\\"callback_form-phone\\\" required\\r\\n                                                 placeholder=\\\"Ваш номер телефона...\\\"></p>\\r\\n                    <p class=\\\"personal-data\\\">\\r\\n                        <input type=\\\"checkbox\\\" required id=\\\"card_check\\\"><label for=\\\"card_check\\\">Я согласен на обработку\\r\\n                        персональных данных</label>\\r\\n                    </p>\\r\\n                    <p class=\\\"submit\\\">\\r\\n                        <button type=\\\"submit\\\" class=\\\"btn card-order-btn\\\">Забронировать карту</button>\\r\\n                    </p>\\r\\n                </form>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</section>\\r\\n<footer id=\\\"footer\\\">\\r\\n    <div class=\\\"wrapper\\\">\\r\\n        <div class=\\\"footer-top\\\">\\r\\n            <div class=\\\"left\\\">\\r\\n                <div class=\\\"footer-logo\\\">\\r\\n                    <a href=\\\"index.html\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"Сеть фитнес клубов Тело\\\"></a>\\r\\n                </div>\\r\\n                <div class=\\\"about\\\">\\r\\n                    <h5>«Тело»</h5>\\r\\n                    <ul>\\r\\n                        <li><a href=\\\"#clubs\\\">Клубы</a></li>\\r\\n                        <li><a href=\\\"#gallery\\\">Фотогалерея</a></li>\\r\\n                    </ul>\\r\\n                </div>\\r\\n                <div class=\\\"for-clients\\\">\\r\\n                    <h5>Клиентам</h5>\\r\\n                    <ul>\\r\\n                        <li><a href=\\\"#cards\\\">Клубные карты</a></li>\\r\\n                        <li><a href=\\\"#services\\\">Услуги</a></li>\\r\\n                    </ul>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"right\\\">\\r\\n                <form action=\\\"\\\" id=\\\"footer_form\\\">\\r\\n                    <div class=\\\"content\\\">\\r\\n                        <div class=\\\"choose-club\\\">\\r\\n                            <h5>Выбрать клуб</h5>\\r\\n                            <div class=\\\"club\\\">\\r\\n                                <input type=\\\"radio\\\" id=\\\"footer_leto_mozaika\\\" name=\\\"club-name\\\" value=\\\"mozaika\\\"><label\\r\\n                                    for=\\\"footer_leto_mozaika\\\">\\r\\n                                <h6>Тело «Мозаика»</h6>\\r\\n                                <p>Россия, Москва, 7-я Кожуховская ул.,&nbsp;9</p>\\r\\n                            </label>\\r\\n                            </div>\\r\\n                            <div class=\\\"club\\\">\\r\\n                                <input type=\\\"radio\\\" id=\\\"footer_leto_schelkovo\\\" name=\\\"club-name\\\" value=\\\"schelkovo\\\"><label\\r\\n                                    for=\\\"footer_leto_schelkovo\\\">\\r\\n                                <h6>Тело «Щелково»</h6>\\r\\n                                <p>Россия, г. Щелково, ул. Советская, д.&nbsp;16</p>\\r\\n                            </label>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"call\\\">\\r\\n                            <p>Единый телефон</p>\\r\\n                            <p class=\\\"tel\\\">+7 (800) 555-64-47</p>\\r\\n                            <p class=\\\"input-text\\\"><input type=\\\"tel\\\" name=\\\"phone\\\" id=\\\"callback_footer_form-phone\\\"\\r\\n                                                         required=\\\"\\\" placeholder=\\\"Ваш номер телефона...\\\"></p>\\r\\n\\r\\n                            <button class=\\\"btn callback-btn\\\" type=\\\"submit\\\" data-popup=\\\"#callback_form\\\">Перезвоните мне\\r\\n                            </button>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </form>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"footer-bottom\\\">\\r\\n            <div class=\\\"left\\\">© Фитнес-центр «Тело», 2019. Все права защищены.</div>\\r\\n            <div class=\\\"right\\\">\\r\\n                <div class=\\\"socials\\\">\\r\\n                    <div class=\\\"social-icon\\\"><a href=\\\"#\\\"><!-- <img src=\\\"images/footer-socials-vk.png\\\" alt=\\\"\\\"> --><i\\r\\n                            class=\\\"fa fa-vk\\\" aria-hidden=\\\"true\\\"></i></a></div>\\r\\n                    <div class=\\\"social-icon\\\"><a href=\\\"#\\\"><!-- <img src=\\\"images/footer-socials-2.png\\\" alt=\\\"\\\"> --><i\\r\\n                            class=\\\"fa fa-instagram\\\" aria-hidden=\\\"true\\\"></i></a></div>\\r\\n                    <div class=\\\"social-icon\\\"><a href=\\\"#\\\"><!-- <img src=\\\"images/footer-socials-youtube.png\\\" alt=\\\"\\\"> --><i\\r\\n                            class=\\\"fa fa-youtube-play\\\" aria-hidden=\\\"true\\\"></i></a></div>\\r\\n                    <div class=\\\"social-icon\\\"><a href=\\\"#\\\">\\r\\n                        <!-- <img src=\\\"images/footer-socials-facebook.png\\\" alt=\\\"\\\"> --><i class=\\\"fa fa-facebook\\\"\\r\\n                                                                                         aria-hidden=\\\"true\\\"></i></a>\\r\\n                    </div>\\r\\n                    <div class=\\\"social-icon\\\"><a href=\\\"#\\\"><!-- <img src=\\\"images/footer-socials-twitter.png\\\" alt=\\\"\\\"> --><i\\r\\n                            class=\\\"fa fa-twitter\\\" aria-hidden=\\\"true\\\"></i></a></div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n</footer>\\r\\n<div class=\\\"wrapper\\\">\\r\\n    <a href=\\\"#\\\" id=\\\"totop\\\"><i class=\\\"fa fa-arrow-up\\\" aria-hidden=\\\"true\\\"></i>\\r\\n    </a>\\r\\n</div>\\r\\n<div class=\\\"popup\\\" id=\\\"callback_form\\\">\\r\\n    <div class=\\\"overlay\\\">\\r\\n    </div>\\r\\n    <div class=\\\"form-wrapper\\\">\\r\\n        <div class=\\\"close-form\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"close\\\" class=\\\"close_icon\\\">\\r\\n        </div>\\r\\n        <div class=\\\"form-content\\\">\\r\\n            <form name=\\\"callback-form\\\" id=\\\"form1\\\" action=\\\"#\\\" method=\\\"post\\\">\\r\\n                <h4>Обратный звонок</h4>\\r\\n                <input type=\\\"hidden\\\" name=\\\"form_name\\\" value=\\\" Обратный звонок\\\">\\r\\n                <!--  <input type=\\\"hidden\\\" name=\\\"club\\\" value=\\\"<?=$_GET['club-name']?>\\\"> -->\\r\\n                <p class=\\\"input-text\\\"><input name=\\\"name\\\" type=\\\"text\\\" required placeholder=\\\"Ваше имя...\\\"></p>\\r\\n                <p class=\\\"input-text\\\"><input type=\\\"tel\\\" name=\\\"phone\\\" id=\\\"callback_form1-phone\\\" required\\r\\n                                             placeholder=\\\"Ваш номер телефона...\\\"></p>\\r\\n                <p class=\\\"personal-data\\\">\\r\\n                    <input type=\\\"checkbox\\\" required id=\\\"check\\\"><label for=\\\"check\\\">Я согласен на обработку <br>персональных\\r\\n                    данных</label>\\r\\n\\r\\n                </p>\\r\\n                <button name=\\\"send1\\\" class=\\\"btn btn-send\\\" type=\\\"submit\\\">Перезвоните мне</button>\\r\\n            </form>\\r\\n\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n<div class=\\\"popup\\\" id=\\\"free_visit_form\\\">\\r\\n    <div class=\\\"overlay\\\">\\r\\n    </div>\\r\\n    <div class=\\\"form-wrapper\\\">\\r\\n        <div class=\\\"close-form\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"close\\\" class=\\\"close_icon\\\">\\r\\n        </div>\\r\\n        <div class=\\\"form-content\\\">\\r\\n            <form name=\\\"free-visit-form\\\" id=\\\"form2\\\" action=\\\"#\\\" method=\\\"post\\\">\\r\\n                <h4>Записаться на визит</h4>\\r\\n                <input type=\\\"hidden\\\" name=\\\"form_name\\\" value=\\\" Записаться на визит\\\">\\r\\n                <p class=\\\"input-text\\\"><input name=\\\"name\\\" type=\\\"text\\\" required placeholder=\\\"Ваше имя...\\\"></p>\\r\\n                <p class=\\\"input-text\\\"><input type=\\\"tel\\\" name=\\\"phone\\\" id=\\\"callback_form2-phone\\\" required\\r\\n                                             placeholder=\\\"Ваш номер телефона...\\\"></p>\\r\\n                <p class=\\\"personal-data\\\">\\r\\n                    <input type=\\\"checkbox\\\" required id=\\\"check2\\\"><label for=\\\"check2\\\">Я согласен на обработку <br>персональных\\r\\n                    данных</label>\\r\\n\\r\\n                </p>\\r\\n                <button name=\\\"send1\\\" class=\\\"btn btn-send\\\" type=\\\"submit\\\">записаться</button>\\r\\n            </form>\\r\\n\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n<div class=\\\"popup\\\" id=\\\"thanks\\\">\\r\\n    <div class=\\\"overlay\\\">\\r\\n    </div>\\r\\n    <div class=\\\"form-wrapper\\\">\\r\\n        <div class=\\\"close-form\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"close\\\" class=\\\"close_icon\\\">\\r\\n        </div>\\r\\n        <div class=\\\"form-content\\\">\\r\\n            <h4>Спасибо!</h4>\\r\\n            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\\r\\n            <button class=\\\"btn close-btn\\\">OK</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n<div class=\\\"popup\\\" id=\\\"gift\\\">\\r\\n    <div class=\\\"overlay\\\">\\r\\n    </div>\\r\\n    <div class=\\\"form-wrapper\\\">\\r\\n        <div class=\\\"close-form\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"close\\\" class=\\\"close_icon\\\">\\r\\n        </div>\\r\\n        <div class=\\\"form-content\\\">\\r\\n            <h4>У нас для вас есть подарок!</h4>\\r\\n            <p>Введите промо-код ТЕЛО2019 и получите скидку 30%</p>\\r\\n            <button class=\\\"btn close-btn\\\">OK</button>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n</div>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./css/font-awesome.min.css":
/*!**********************************!*\
  !*** ./css/font-awesome.min.css ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/e1a5ca976a4409e6fccd.css\";\n\n//# sourceURL=webpack:///./css/font-awesome.min.css?");

/***/ }),

/***/ "./css/style.min.css":
/*!***************************!*\
  !*** ./css/style.min.css ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/347f9526071e3424f2c9.css\";\n\n//# sourceURL=webpack:///./css/style.min.css?");

/***/ }),

/***/ "./images/arrow-left.png":
/*!*******************************!*\
  !*** ./images/arrow-left.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/ad61bd223a6199263cee.png\";\n\n//# sourceURL=webpack:///./images/arrow-left.png?");

/***/ }),

/***/ "./images/arrow-right.png":
/*!********************************!*\
  !*** ./images/arrow-right.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/67d92a2a24fc67b9f9c3.png\";\n\n//# sourceURL=webpack:///./images/arrow-right.png?");

/***/ }),

/***/ "./images/cards.png":
/*!**************************!*\
  !*** ./images/cards.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/87d823845f0af672b41c.png\";\n\n//# sourceURL=webpack:///./images/cards.png?");

/***/ }),

/***/ "./images/close-icon.png":
/*!*******************************!*\
  !*** ./images/close-icon.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/36935414c394148f7a2b.png\";\n\n//# sourceURL=webpack:///./images/close-icon.png?");

/***/ }),

/***/ "./images/clubs-icon.png":
/*!*******************************!*\
  !*** ./images/clubs-icon.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/f5a7838a078dc95dec5e.png\";\n\n//# sourceURL=webpack:///./images/clubs-icon.png?");

/***/ }),

/***/ "./images/delete.png":
/*!***************************!*\
  !*** ./images/delete.png ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/d59d807cd2e50630084c.png\";\n\n//# sourceURL=webpack:///./images/delete.png?");

/***/ }),

/***/ "./images/gallery/photo1.jpg":
/*!***********************************!*\
  !*** ./images/gallery/photo1.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/0aea8ad0f99918e9a314.jpg\";\n\n//# sourceURL=webpack:///./images/gallery/photo1.jpg?");

/***/ }),

/***/ "./images/gallery/photo2.jpg":
/*!***********************************!*\
  !*** ./images/gallery/photo2.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/964225321067e27c63ca.jpg\";\n\n//# sourceURL=webpack:///./images/gallery/photo2.jpg?");

/***/ }),

/***/ "./images/gallery/photo3.jpg":
/*!***********************************!*\
  !*** ./images/gallery/photo3.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/ab1187c895dc80742d75.jpg\";\n\n//# sourceURL=webpack:///./images/gallery/photo3.jpg?");

/***/ }),

/***/ "./images/gallery/photo4.jpg":
/*!***********************************!*\
  !*** ./images/gallery/photo4.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/5921940e216d5d267f55.jpg\";\n\n//# sourceURL=webpack:///./images/gallery/photo4.jpg?");

/***/ }),

/***/ "./images/gallery/photo5.jpg":
/*!***********************************!*\
  !*** ./images/gallery/photo5.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/3a6098e994e4f7ea78cf.jpg\";\n\n//# sourceURL=webpack:///./images/gallery/photo5.jpg?");

/***/ }),

/***/ "./images/gift.png":
/*!*************************!*\
  !*** ./images/gift.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/ff76d4ed5e1570e653d4.png\";\n\n//# sourceURL=webpack:///./images/gift.png?");

/***/ }),

/***/ "./images/head-icon.png":
/*!******************************!*\
  !*** ./images/head-icon.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1c998ad5743b4d12dad6.png\";\n\n//# sourceURL=webpack:///./images/head-icon.png?");

/***/ }),

/***/ "./images/head-slider-1.png":
/*!**********************************!*\
  !*** ./images/head-slider-1.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/5f3bee28e9d4f404fdea.png\";\n\n//# sourceURL=webpack:///./images/head-slider-1.png?");

/***/ }),

/***/ "./images/leto-mozaika-bg.png":
/*!************************************!*\
  !*** ./images/leto-mozaika-bg.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/31fe8d166442edf29e83.png\";\n\n//# sourceURL=webpack:///./images/leto-mozaika-bg.png?");

/***/ }),

/***/ "./images/leto-schelkovo-bg.png":
/*!**************************************!*\
  !*** ./images/leto-schelkovo-bg.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/661632d323c6aba21d94.png\";\n\n//# sourceURL=webpack:///./images/leto-schelkovo-bg.png?");

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/949cdb59a9571b6e70fd.png\";\n\n//# sourceURL=webpack:///./images/logo.png?");

/***/ }),

/***/ "./images/menu-button.png":
/*!********************************!*\
  !*** ./images/menu-button.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/e8e1cfdc72ec124ed2e7.png\";\n\n//# sourceURL=webpack:///./images/menu-button.png?");

/***/ }),

/***/ "./images/services-slider/TRX.jpg":
/*!****************************************!*\
  !*** ./images/services-slider/TRX.jpg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/6597693b5d80b827405b.jpg\";\n\n//# sourceURL=webpack:///./images/services-slider/TRX.jpg?");

/***/ }),

/***/ "./images/services-slider/akva.jpg":
/*!*****************************************!*\
  !*** ./images/services-slider/akva.jpg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/8d585bd55054595232f7.jpg\";\n\n//# sourceURL=webpack:///./images/services-slider/akva.jpg?");

/***/ }),

/***/ "./images/services-slider/kardio.jpg":
/*!*******************************************!*\
  !*** ./images/services-slider/kardio.jpg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/748a956d950caba84502.jpg\";\n\n//# sourceURL=webpack:///./images/services-slider/kardio.jpg?");

/***/ }),

/***/ "./images/services-slider/vesy.jpg":
/*!*****************************************!*\
  !*** ./images/services-slider/vesy.jpg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1cdaffdbcabce9145db7.jpg\";\n\n//# sourceURL=webpack:///./images/services-slider/vesy.jpg?");

/***/ }),

/***/ "./images/services-slider/yoga.jpg":
/*!*****************************************!*\
  !*** ./images/services-slider/yoga.jpg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/a85397ff7905d49e610f.jpg\";\n\n//# sourceURL=webpack:///./images/services-slider/yoga.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;