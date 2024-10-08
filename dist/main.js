/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_form_header_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/form/header-date.js */ \"./src/scripts/form/header-date.js\");\n/* harmony import */ var _scripts_form_header_date_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_header_date_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_form_phone_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/form/phone-number.js */ \"./src/scripts/form/phone-number.js\");\n/* harmony import */ var _scripts_form_phone_number_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_phone_number_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_buttons_button_new_schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/buttons/button-new-schedule.js */ \"./src/scripts/buttons/button-new-schedule.js\");\n/* harmony import */ var _scripts_buttons_cancel_scheduling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/buttons/cancel-scheduling.js */ \"./src/scripts/buttons/cancel-scheduling.js\");\n/* harmony import */ var _scripts_buttons_cancel_scheduling_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_buttons_cancel_scheduling_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_form_date_time_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/form/date-time.js */ \"./src/scripts/form/date-time.js\");\n\r\n\r\n// Configuração do dayjs\r\n//import \"./libs/dayjs.js\"\r\n\r\n// CSS\r\n/*import \"./styles/global.css\"\r\nconsole.log(\"olá\")*/\r\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Petshop_scheduler/./src/main.js?");

/***/ }),

/***/ "./src/scripts/buttons/button-new-schedule.js":
/*!****************************************************!*\
  !*** ./src/scripts/buttons/button-new-schedule.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_date_time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/date-time.js */ \"./src/scripts/form/date-time.js\");\n\r\n\r\nconst button = document.querySelector(\".button-new-schedule\");\r\nconst header = document.querySelector(\"main > header\")\r\nconst sectionMorning = document.querySelector(\".morning\");\r\nconst sectionAfternoon = document.querySelector(\".afternoon\");\r\nconst sectionEvening = document.querySelector(\".evening\");\r\nconst divOverlay = document.querySelector(\".overlay\");\r\nconst main = document.querySelector(\"main\");\r\n\r\nbutton.addEventListener(\"click\", () => {\r\n  header.classList.add(\"blur\");\r\n  sectionMorning.classList.add(\"blur\");\r\n  sectionAfternoon.classList.add(\"blur\");\r\n  sectionEvening.classList.add(\"blur\");\r\n  button.classList.add(\"hidden\");\r\n  divOverlay.classList.remove(\"hidden\");\r\n  main.classList.add(\"main-size\");\r\n\r\n  (0,_form_date_time_js__WEBPACK_IMPORTED_MODULE_0__.formInputRefresher)();\r\n})\r\n\n\n//# sourceURL=webpack://Petshop_scheduler/./src/scripts/buttons/button-new-schedule.js?");

/***/ }),

/***/ "./src/scripts/buttons/cancel-scheduling.js":
/*!**************************************************!*\
  !*** ./src/scripts/buttons/cancel-scheduling.js ***!
  \**************************************************/
/***/ (() => {

eval("const button = document.querySelector(\".button-new-schedule\");\r\nconst header = document.querySelector(\"main > header\")\r\nconst sectionMorning = document.querySelector(\".morning\");\r\nconst sectionAfternoon = document.querySelector(\".afternoon\");\r\nconst sectionEvening = document.querySelector(\".evening\");\r\nconst divOverlay = document.querySelector(\".overlay\");\r\nconst main = document.querySelector(\"main\");\r\n\r\ndivOverlay.addEventListener(\"click\", (event) => {\r\n  if(event.target.classList.contains(\"overlay\") || event.target.classList.contains(\"mobile-only\")) {\r\n    header.classList.remove(\"blur\");\r\n    sectionMorning.classList.remove(\"blur\");\r\n    sectionAfternoon.classList.remove(\"blur\");\r\n    sectionEvening.classList.remove(\"blur\");\r\n    button.classList.remove(\"hidden\");\r\n    divOverlay.classList.add(\"hidden\");\r\n    main.classList.remove(\"main-size\");\r\n  }\r\n})\n\n//# sourceURL=webpack://Petshop_scheduler/./src/scripts/buttons/cancel-scheduling.js?");

/***/ }),

/***/ "./src/scripts/form/date-time.js":
/*!***************************************!*\
  !*** ./src/scripts/form/date-time.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formInputRefresher: () => (/* binding */ formInputRefresher)\n/* harmony export */ });\nconst dateTimeSpan = document.querySelectorAll(\".input-date span\");\r\nconst dateInput = document.getElementById(\"date-form\");\r\nconst timeInput = document.getElementById(\"time\");\r\n\r\nfunction formInputRefresher() {\r\n  dateTimeSpan[0].textContent = dayjs().format(\"MMM DD, YYYY\")\r\n  dateTimeSpan[1].textContent = dayjs().format(\"HH:mm\")\r\n  dateInput.min = dayjs().format(\"YYYY-MM-DD\");\r\n}\r\n\r\ndateInput.onchange = () => {\r\n  dateTimeSpan[0].textContent = dayjs(dateInput.value).format(\"MMM DD, YYYY\")\r\n}\r\n\r\ntimeInput.onchange = () => {\r\n  dateTimeSpan[1].textContent = dayjs().hour(timeInput.value.split(\":\")[0]).minute(timeInput.value.split(\":\")[1]).format(\"HH:mm\")\r\n}\n\n//# sourceURL=webpack://Petshop_scheduler/./src/scripts/form/date-time.js?");

/***/ }),

/***/ "./src/scripts/form/header-date.js":
/*!*****************************************!*\
  !*** ./src/scripts/form/header-date.js ***!
  \*****************************************/
/***/ (() => {

eval("//import dayjs from \"dayjs\"\r\n\r\nconst textDate = document.getElementById(\"text-date\");\r\nconst inputDate = document.getElementById(\"date\");\r\n\r\ntextDate.textContent = dayjs().format(\"MMM DD, YYYY\");\r\ninputDate.min = dayjs().format(\"YYYY-MM-DD\")\r\ninputDate.onchange = () => textDate.textContent = dayjs(inputDate.value).format(\"MMM DD, YYYY\");\r\n\n\n//# sourceURL=webpack://Petshop_scheduler/./src/scripts/form/header-date.js?");

/***/ }),

/***/ "./src/scripts/form/phone-number.js":
/*!******************************************!*\
  !*** ./src/scripts/form/phone-number.js ***!
  \******************************************/
/***/ (() => {

eval("const phoneInput = document.getElementById(\"clientPhone\");\r\nlet phoneNumber = \"\";\r\nconst listOfNumbers = \" 0123456789\";\r\nconst listOfCaracteres = \"+()-\"\r\n\r\nphoneInput.addEventListener(\"focus\",() => {\r\n  if (!phoneInput.value.includes(\"+\"))\r\n    phoneInput.value = \"+\";\r\n})\r\n\r\nphoneInput.addEventListener(\"input\", () => {\r\n  if (!phoneInput.value.includes(\"+\"))\r\n    phoneInput.value = \"+\";\r\n\r\n  if (!listOfNumbers.includes(phoneInput.value[phoneInput.value.length - 1])) {\r\n    if (listOfCaracteres.includes(phoneInput.value[phoneInput.value.length-1])){\r\n      if (Verify())\r\n        phoneInput.value = phoneInput.value.slice(0,-1)\r\n    }\r\n    else\r\n      phoneInput.value = phoneInput.value.slice(0,-1)\r\n  }\r\n  function Verify() {\r\n    let contain = false\r\n    if (phoneInput.value.slice(0,-1).includes(phoneInput.value[phoneInput.value.length-1]))\r\n      contain = true\r\n    return contain\r\n  }\r\n\r\n  if (phoneInput.value[phoneInput.value.length - 1] === \" \") {\r\n    if (!phoneInput.value.includes(\"(\"))\r\n      phoneInput.value += \"(\"\r\n    else if (!phoneInput.value.includes(\")\")) {\r\n      phoneInput.value = phoneInput.value.slice(0,-1)\r\n      phoneInput.value += \") \"\r\n    }\r\n    else if (!phoneInput.value.includes(\"-\") && listOfNumbers.includes(phoneInput.value[phoneInput.value.length - 2])) {\r\n      phoneInput.value = phoneInput.value.slice(0,-1)\r\n      phoneInput.value += \"-\"\r\n    }\r\n  }\r\n})\n\n//# sourceURL=webpack://Petshop_scheduler/./src/scripts/form/phone-number.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;