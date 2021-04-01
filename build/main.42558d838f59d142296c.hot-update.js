/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate"]("main",{

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ sendForm; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction sendForm() {\n  var errorMessage = [\"Приносим извинения!\", \"\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A.\\n\\u041E\\u0431\\u0440\\u0430\\u0442\\u0438\\u0442\\u0435\\u0441\\u044C, \\u043F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430, \\u043F\\u043E\\u0437\\u0436\\u0435.\"],\n      workMessage = [\"\", \"\\u0412\\u0430\\u0448\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 \\n\\u043F\\u0435\\u0440\\u0435\\u0434\\u0430\\u044E\\u0442\\u0441\\u044F.\"],\n      successMessage = [\"Спасибо!\", \"\\u0412\\u0430\\u0448\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E \\u043F\\u0435\\u0440\\u0435\\u0434\\u0430\\u043D\\u044B. \\n \\u041C\\u044B \\u0441\\u043A\\u043E\\u0440\\u043E \\u0441\\u0432\\u044F\\u0436\\u0435\\u043C\\u0441\\u044F \\u0432 \\u0412\\u0430\\u043C\\u0438!\"];\n  var formContentThanks = thanks.querySelector(\".form-content\").children[1],\n      check2 = document.getElementById(\"check2\"),\n      check = document.getElementById(\"check\"),\n      card_check = document.getElementById(\"card_check\"),\n      check1 = document.getElementById(\"check1\");\n  var checkAgree = document.querySelectorAll(\"form>input[name]\"); // console.log(\"checkAgree\", checkAgree);\n\n  var forms = _toConsumableArray(document.forms); // console.log(forms);\n\n  /*отправлено, ошибка). В последних двух состояниях \r\n    необходимо заменить сам контент модального окна на оповещение. */\n\n\n  var btn;\n  forms.forEach(function (form, index) {\n    //получаем чекбоксы\n    // console.log(\"form[check]\", form[\"check\"]);\n    form.addEventListener(\"mouseover\", function (event) {\n      var target = event.target;\n      btn = form.querySelector(\"button\"); // console.log(\"form['check']\", btn);\n\n      if (target === btn) {\n        // console.log(\"pfikb d button\");\n        if (!!form[\"check\"]) {\n          if (!form[\"check\"].checked) {\n            // console.log(\"button is not actove\");\n            btn.disabled = true;\n            btn.style.opacity = \"0.5\";\n            btn.title = \"Необходимо подтвердить согласие на обработку данных.\";\n            form[\"check\"].nextElementSibling.textContent = \"Необходимо подтвердить \\nсогласие на обработку\\n персональных данных.\";\n            form[\"check\"].nextElementSibling.style.color = \"red\";\n          }\n        }\n      }\n    });\n    form.addEventListener(\"change\", function (event) {\n      var target = event.target;\n\n      if (target === form[\"check\"] && form[\"check\"]) {\n        btn.disabled = false;\n        btn.style.opacity = \"1\";\n        btn.title = \"\";\n        form[\"check\"].nextElementSibling.textContent = \"Я СОГЛАСЕН НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ\";\n        form[\"check\"].nextElementSibling.style.color = \"\";\n      } else return;\n    });\n    form.addEventListener(\"submit\", function (event) {\n      // console.log(event);\n      event.preventDefault();\n      var popup = form.closest(\"div.popup\");\n      if (!!popup) popup.style.display = \"none\"; //проверка ,если все заполнено, то выводим сообщение в в отдельном окне, где-то там оно есть\n\n      var formData = new FormData(form);\n      var body = {}; //console.log(form.elements);\n\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      }), // console.log(\"body \", body);\n      // вызов обещания с передачей ему данных из форм\n      postData(body).then(function (response) {\n        //console.log(response);\n        if (response.status !== 200) {\n          throw new Error(\"Status network not 200\");\n        } // outputPopup(workMessage);\n\n      }) // ловим возможную ошибку\n      [\"catch\"](function (error) {\n        if (!!error) {\n          //console.log(error);\n          outputPopup(errorMessage);\n        }\n      });\n      outputPopup();\n    });\n  });\n\n  function postData(body) {\n    return fetch(\"./server.php\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(body)\n    });\n  }\n\n  function outputPopup(message) {\n    var thanks = document.getElementById(\"thanks\"); // console.log(thanks);\n\n    thanks.style.display = \"block\";\n    var content = thanks.querySelector(\".form-content\");\n\n    if (!!message) {\n      content.children[0].textContent = message[0];\n      content.children[1].textContent = message[1];\n    }\n\n    clearInputs();\n    closeForm(thanks);\n\n    function closeForm(paren) {\n      paren.addEventListener(\"click\", function (event) {\n        var target = event.target;\n\n        if (target.closest(\"div\").matches(\".close-btn, .close-form\") || target.nodeName === \"BUTTON\") {\n          paren.style.display = \"none\";\n        }\n      });\n    }\n\n    function clearInputs() {\n      var forms = _toConsumableArray(document.forms);\n\n      forms.forEach(function (form) {\n        var elements = _toConsumableArray(form.elements);\n\n        elements.forEach(function (elem) {\n          if (elem.type === \"checkbox\") elem.checked = false;else if (elem.type === \"input\") elem.value = \"\";\n        });\n      });\n    }\n  }\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "358e94f5b9f525a29d14"; }
/******/ }();
/******/ 
/******/ }
);