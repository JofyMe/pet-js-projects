/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n// This script adds an animation from the library to the first element in each section\r\nAOS.init();\r\nconst sections = document.getElementsByTagName(\"section\");\r\nfor (const section of sections) {\r\n  section.firstElementChild.setAttribute(\"data-aos\", \"fade-up\");\r\n  section.firstElementChild.setAttribute(\"data-aos-duration\", 1000);\r\n}\r\n\r\n//This script adds an open class for further animation\r\nconst burger = document.querySelector(\".header__burger\");\r\nconst navbar = document.querySelector(\".header__navbar\");\r\n\r\nburger.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n\r\n  burger.classList.toggle(\"active\");\r\n  navbar.classList.toggle(\"open\");\r\n});\r\n\r\n//Calculator code\r\n\r\nconst num1 = document.querySelector(\"#num1\");\r\nconst num2 = document.querySelector(\"#num2\");\r\n\r\nconst add = document.querySelector(\"#add\");\r\nconst sub = document.querySelector(\"#sub\");\r\nconst mul = document.querySelector(\"#mul\");\r\nconst div = document.querySelector(\"#div\");\r\n\r\nconst result = document.querySelector(\"#result\");\r\n\r\nconst actions = [add, sub, mul, div];\r\n\r\nactions.forEach((i) => {\r\n  i.addEventListener(\"click\", (e) => {\r\n    const value1 = parseFloat(num1.value);\r\n    const value2 = parseFloat(num2.value);\r\n\r\n    if (isNaN(value1) || isNaN(value2)) {\r\n      result.textContent = \"Result: Invalid input\";\r\n      return;\r\n    }\r\n\r\n    switch (i) {\r\n      case add:\r\n        result.textContent = \"Result: \" + (value1 + value2);\r\n        break;\r\n      case sub:\r\n        result.textContent = \"Result: \" + (value1 - value2);\r\n        break;\r\n      case mul:\r\n        result.textContent = \"Result: \" + value1 * value2;\r\n        break;\r\n      case div:\r\n        if ((value1 || value2) === 0) {\r\n          result.textContent = \"Result: You can't divide by zero\";\r\n          break;\r\n        }\r\n        result.textContent = \"Result: \" + value1 / value2;\r\n        break;\r\n\r\n      default:\r\n        break;\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://html-template/./src/js/main.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n// This script adds an animation from the library to the first element in each section\r\nAOS.init();\r\nconst sections = document.getElementsByTagName(\"section\");\r\nfor (const section of sections) {\r\n  section.firstElementChild.setAttribute(\"data-aos\", \"fade-up\");\r\n  section.firstElementChild.setAttribute(\"data-aos-duration\", 1000);\r\n}\r\n\r\n//This script adds an open class for further animation\r\nconst burger = document.querySelector(\".header__burger\");\r\nconst navbar = document.querySelector(\".header__navbar\");\r\n\r\nburger.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n\r\n  burger.classList.toggle(\"active\");\r\n  navbar.classList.toggle(\"open\");\r\n});\r\n\r\n//Calculator code\r\n\r\nconst num1 = document.querySelector(\"#num1\");\r\nconst num2 = document.querySelector(\"#num2\");\r\n\r\nconst add = document.querySelector(\"#add\");\r\nconst sub = document.querySelector(\"#sub\");\r\nconst mul = document.querySelector(\"#mul\");\r\nconst div = document.querySelector(\"#div\");\r\n\r\nconst result = document.querySelector(\"#result\");\r\n\r\nconst actions = [add, sub, mul, div];\r\n\r\nactions.forEach((i) => {\r\n  i.addEventListener(\"click\", (e) => {\r\n    const value1 = parseFloat(num1.value);\r\n    const value2 = parseFloat(num2.value);\r\n\r\n    switch (i) {\r\n      case add:\r\n        result.textContent = \"Result: \" + (value1 + value2);\r\n        break;\r\n      case sub:\r\n        result.textContent = \"Result: \" + (value1 - value2);\r\n        break;\r\n      case mul:\r\n        result.textContent = \"Result: \" + value1 * value2;\r\n        break;\r\n      case div:\r\n        result.textContent = \"Result: \" + value1 / value2;\r\n        break;\r\n\r\n      default:\r\n        break;\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://html-template/./src/js/main.js?");
>>>>>>> 5eb3e5de9e9bb2e8b13c4906f5c32f7510f5ecb1

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;