self["webpackHotUpdate"]("main",{

/***/ "./modules/genMainSlider.js":
/*!**********************************!*\
  !*** ./modules/genMainSlider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ genMainSlider; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function genMainSlider() {
  var mainSlider = document.querySelector('.main-slider'),
      sliders = _toConsumableArray(mainSlider.children);

  var mainIndex = 1;
  console.log('mainSlider', sliders);
  setInterval(changeSlide, 4000);

  function changeSlide() {
    sliders.forEach(function (elem, index) {
      console.log('mainIndex', mainIndex);
      elem.style.display = 'none';

      if (index === mainIndex) {
        elem.style.display = 'flex';
        elem.style.transition = '2s ease 1s';
        console.log('elem', elem);
      }
    });
    if (mainIndex === sliders.length - 1) mainIndex = 0;else mainIndex++;
    console.log('mainIndex', mainIndex);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4884e99b5dca6c929cb0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b196b8cffe87c2d2cec6.hot-update.js.map