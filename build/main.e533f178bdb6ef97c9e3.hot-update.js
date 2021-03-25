self["webpackHotUpdate"]("main",{

/***/ "./modules/checkInputFormData.js":
/*!***************************************!*\
  !*** ./modules/checkInputFormData.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ checkInputFormData; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function checkInputFormData() {
  var doc = document.querySelector('body'),
      // bannerForm = document.getElementById('banner-form'),
  // cardOrder = document.getElementById('card-order'),
  // footerForm = document.getElementById('footer-form'),
  // form1 = document.getElementById('form1'),
  // form2 = document.getElementById('form2');
  forms = _toConsumableArray(document.forms);

  forms.forEach(function (form) {
    form.addEventListener("input", function (event) {
      var target = event.target.closest("input");
      var regEx = "";

      if (target.name === "name") {
        regEx = /[^а-я\ ]/gi;
        target.value = target.value.replace(/^\ /, ""); // let firstLetter = /(+\ )$/

        target.value = target.value.replace(regEx, "");
      } else if (target.name === "phone") {
        regEx = /[^\d\+]/g;
        target.value = target.value.replace(regEx, "");
      }

      if (target.name === "phone") {
        var value = target.value;

        if (value.replace(/\D/g, "").length < 6) {
          target.form.querySelector(".btn-send").disabled = true;
          target.title = "Номер телефона должен содержать от 6 до 11 цифр.";
        } else {
          target.form.querySelector(".btn-send").disabled = false;
          target.title = "";
        }

        if (/^\+/.test(value)) {
          target.value = "+" + target.value.replace(/\+/g, "");
          if (value[-1] === "+") value.replace(-1, "");

          if (/^\+\d{2}/.test(value)) {
            value = value.replace(/\)*\(*/g, "");
            value = value.slice(0, 2) + "(" + value.slice(2);
            target.value = value;
          }

          if (/^\+\d\(\d{4}/.test(value)) {
            value = value.replace(/\(*\)*/g, "");
            value = value.slice(0, 2) + "(" + value.slice(2, 5) + ")" + value.slice(5);
            target.value = value;
          }

          if (/^\+\d\(\d{3}\)\d{4}/.test(value)) {
            value = value.replace(/\(*\)*\-*/g, "");
            console.log(value);
            value = value.slice(0, 2) + "(" + value.slice(2, 5) + ")" + value.slice(5, 8) + "-" + value.slice(8);
          }

          if (/^\+\d\(\d{3}\)\d{3}\-\d{3}/.test(value)) {
            value = value.replace(/\(*\)*\-*/g, "");
            console.log(value);
            value = value.slice(0, 2) + "(" + value.slice(2, 5) + ")" + value.slice(5, 8) + "-" + value.slice(8, 10) + "-" + value.slice(10);
          }

          if (/^\+\d\(\d{3}\)\d{3}\-\d{2}\-\d{2}/.test(value)) {
            value = value.slice(0, 16);
            target.value = value;
          }
        } else {
          if (/^\d{4}/.test(value)) {
            value = value.replace(/\)*\(*\-*/g, "");
            value = value.slice(0, 3) + "-" + value.slice(3);
            target.value = value;
          }

          if (/^\d{3}\-\d{4}/.test(value)) {
            value = value.replace(/\(*\)*\-*/g, "");
            value = value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5);
            target.value = value;
          }

          if (/^\d{3}\-\d{2,3}\-?\d{0,2}/.test(value) && value.length > 10 && value.length < 14) {
            value = value.replace(/\(*\)*\-*/g, "");
            value = value[0] + "(" + value.slice(1, 4) + ")" + value.slice(4, 7) + "-" + value.slice(7);
            target.value = value;
          }

          if (value.length === 14) {
            value = value.replace(/\(*\)*\-*/g, "");
            value = value[0] + "(" + value.slice(1, 4) + ")" + value.slice(4, 7) + "-" + value.slice(7, 9) + "-" + value.slice(9);
            target.value = value;
          }

          if (/^\d\(\d{3}\)\d{3}\-\d{2}\-\d{2}/.test(value)) {
            value = value.slice(0, 15);
            target.value = value;
          }
        }
      }
    });
    var inputs = form.querySelectorAll("input");
    inputs.forEach(function (inputItem) {
      if (inputItem.type !== 'checkbox') {
        inputItem.addEventListener("blur", function (event) {
          var target = event.target;

          if (target.name === "name") {
            validAlpha(target);
          } else if (target.name === "phone") {
            validPhone(target);
          }

          function validAlpha(t) {
            var value = t.value.replace(/\ {2,}/, " ").replace(/\-{2,}/, "-").trim(),
                correctValue = "";

            if (!!value) {
              if (t.name === "user_name") {
                var nameArr = value.split(" ");
                nameArr.forEach(function (item, i) {
                  correctValue += item[0].toUpperCase() + item.slice(1).toLowerCase() + " ";
                });
              } else {
                correctValue = value[0].toUpperCase() + value.slice(1).toLowerCase();
              }

              t.value = correctValue;
            }
          }

          function validPhone(t) {
            var resultValue = "",
                value = t.value;

            if (!!value) {
              value = value.replace(/\-/g, "").replace(/\(/g, "").replace(/\)/g, "").replace(/\+/, "");

              if (value.length < 6) {
                resultValue = value;
                return;
              }

              switch (true) {
                case value.length === 6:
                  resultValue = value.slice(0, 3) + "-" + value.slice(3);
                  break;

                case value.length === 7:
                  resultValue = value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5);
                  break;

                case value.length === 8:
                  resultValue = value.slice(0, 4) + "-" + value.slice(4, 7) + "-" + value.slice(7);
                  break;

                case 9 === value.length || value.length === 10:
                  resultValue = value[0] + "(" + value.slice(1, 4) + ")" + value.slice(4, 7) + "-" + value.slice(7);
                  break;

                case 11 === value.length:
                  resultValue = value[0] + "(" + value.slice(1, 4) + ")" + value.slice(4, 7) + "-" + value.slice(7, 9) + "-" + value.slice(9);
                  break;
              }

              if (t.value === "+") resultValue = "+" + resultValue;
            }

            t.value = resultValue;
          }
        });
      }
    });
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1d71c07f96145c2f1ecc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e533f178bdb6ef97c9e3.hot-update.js.map