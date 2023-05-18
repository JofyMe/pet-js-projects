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

eval("__webpack_require__.r(__webpack_exports__);\n// This script adds an animation from the library to the first element in each section\r\nAOS.init();\r\nconst sections = document.getElementsByTagName(\"section\");\r\nfor (const section of sections) {\r\n  section.firstElementChild.setAttribute(\"data-aos\", \"fade-up\");\r\n  section.firstElementChild.setAttribute(\"data-aos-duration\", 1000);\r\n}\r\n\r\n//This script adds an open class for further animation\r\nconst burger = document.querySelector(\".header__burger\");\r\nconst navbar = document.querySelector(\".header__navbar\");\r\n\r\nburger.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n\r\n  burger.classList.toggle(\"active\");\r\n  navbar.classList.toggle(\"open\");\r\n});\r\n\r\n//Calculator code\r\n\r\ndocument.querySelector(\"#add\").addEventListener(\"click\", () => mainCalc(\"+\"));\r\ndocument.querySelector(\"#sub\").addEventListener(\"click\", () => mainCalc(\"-\"));\r\ndocument.querySelector(\"#mul\").addEventListener(\"click\", () => mainCalc(\"*\"));\r\ndocument.querySelector(\"#div\").addEventListener(\"click\", () => mainCalc(\"/\"));\r\n\r\nconst mainCalc = (sign) => {\r\n  const num1 = Number(document.querySelector(\"#num1\").value);\r\n  const num2 = Number(document.querySelector(\"#num2\").value);\r\n  let result;\r\n  if (sign === \"+\") {\r\n    result = num1 + num2;\r\n  } else if (sign === \"-\") {\r\n    result = num1 - num2;\r\n  } else if (sign === \"*\") {\r\n    result = num1 * num2;\r\n  } else if (sign === \"/\") {\r\n    result = num1 / num2;\r\n  }\r\n  document.querySelector(\"#result\").textContent = `Result: ${result}`;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://html-template/./src/js/main.js?");

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