self["webpackHotUpdate"]("main",{

/***/ "./modules/togglePopup.js":
/*!********************************!*\
  !*** ./modules/togglePopup.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ togglePopup; }
/* harmony export */ });
function togglePopup() {
  var doc = document.querySelector('body'),
      openPopup = document.querySelector('.open-popup'),
      callbackBtn = document.querySelector('.callback-btn'),
      fixedGift = document.querySelector('.fixed-gift'),
      closeBtn = document.querySelectorAll('.close-btn')[1],
      callbackForm = document.querySelector('#callback_form'),
      // id=form1
  freeVisitForm = document.querySelector('#free_visit_form'),
      // id=form2
  gift = document.querySelector('#gift');
  doc.addEventListener('click', function (event) {
    var target = event.target,
        purpose;
    if (target === openPopup) purpose = freeVisitForm;
    if (target === callbackBtn) purpose = callbackForm;
    if (target.closest('div') === fixedGift) purpose = gift;

    if (!!purpose) {
      purpose.style.display = 'block';
      if (purpose === gift) fixedGift.style.display = 'none';
    }

    if (target.className === 'overlay' || target.className === 'close_icon' || target === closeBtn) {
      freeVisitForm.style.display = 'none';
      callbackForm.style.display = 'none';
      gift.style.display = 'none';
    }
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2565491c215a028559b5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c7a7a300fd4d2846c127.hot-update.js.map