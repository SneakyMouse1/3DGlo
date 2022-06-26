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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smoothscroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothscroll */ \"./modules/smoothscroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"28 june 2022\");\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_smoothscroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    const closeBtn = menu.querySelector('.close-btn');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu');\n    };\n\n    menuBtn.addEventListener('click', handleMenu);\n    closeBtn.addEventListener('click', handleMenu);\n\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const modal = document.querySelector('.popup');\n    const buttons = document.querySelectorAll('.popup-btn');\n    const closeBtn = modal.querySelector('.popup-close');\n    const modalWindow = modal.querySelector('.popup-content');\n    let count = 0;\n    let idInterval;\n\n    const modalAnimation = () => {\n        count++;\n        idInterval = requestAnimationFrame(modalAnimation);\n        if (count < 45) {\n            modalWindow.style.left = count + '%';\n        }\n    };\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            if (document.body.clientWidth > 768) {\n                modalWindow.style.left = '0px';\n                modal.style.display = 'block';\n                idInterval = requestAnimationFrame(modalAnimation);\n            } else {\n                modal.style.display = 'block';\n            }\n        });\n    });\n\n    closeBtn.addEventListener('click', () => {\n        count = 0;\n        cancelAnimationFrame(idInterval);\n        modal.style.display = 'none';\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/smoothscroll.js":
/*!*********************************!*\
  !*** ./modules/smoothscroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothscroll = () => {\n    const menu = document.querySelector('menu');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n    const mainBtn = document.querySelector('main a');\n    const serviceBlock = document.getElementById('service-block');\n\n    mainBtn.addEventListener('click', (item) => {\n        item.preventDefault();\n        serviceBlock.scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n        });\n    });\n\n    menuItems.forEach((menuItem) => {\n        menuItem.addEventListener('click', (item) => {\n            item.preventDefault();\n            const id = menuItem.getAttribute('href');\n\n            document.querySelector(id).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            });\n        });\n    });\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothscroll);\n\n//# sourceURL=webpack:///./modules/smoothscroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n    let interval;\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor(timeRemaining / 60 / 60);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        return { timeRemaining, hours, minutes, seconds };\n    };\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n        let zeroHours = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\n        let zeroMinutes = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\n        let zeroSeconds = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\n\n        if (getTime.timeRemaining > 0) {\n            timerHours.textContent = zeroHours;\n            timerMinutes.textContent = zeroMinutes;\n            timerSeconds.textContent = zeroSeconds;\n        } else {\n            timerHours.textContent = '00';\n            timerMinutes.textContent = '00';\n            timerSeconds.textContent = '00';\n            clearInterval(interval);\n        }\n    };\n    interval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\n\n    const calcSquare = document.querySelector('.calc-square');\n    const calcCount = document.querySelector('.calc-count');\n    const calcDay = document.querySelector('.calc-day');\n\n    const mainInput = document.querySelectorAll('.form-name')[0];\n    const modalInput = document.querySelectorAll('.form-name')[1];\n    const footerInput = document.getElementById('form2-name');\n    const messageInput = document.getElementById('form2-message');\n\n    const emailInputs = document.querySelectorAll('.form-email');\n\n    const phoneInputs = document.querySelectorAll('.form-phone');\n\n    const numberCheck = (input) => {\n        input.addEventListener('blur', (e) => {\n            e.target.value = e.target.value.replace(/\\D+/, '');\n        });\n    };\n\n    const textCheck = (input) => {\n        input.addEventListener('blur', (e) => {\n            let word = e.target.value.replace(/[^а-яё\\-\\s+]/gi, ' ');\n            word = word.replace(/^\\s+|\\s+$/g, '');\n            word = word.replace(/^\\-+|\\-+$/g, '');\n            word = word.replace(/\\s+/g, ' ');\n            word = word.replace(/\\-+/g, '-');\n\n            e.target.value = word;\n            let upWord = word[0].toUpperCase() + word.slice(1);\n            e.target.value = upWord;\n        });\n\n\n    };\n\n    const mailCheck = (input) => {\n        input.forEach((e) => {\n            e.addEventListener('blur', () => {\n                let word = e.value.replace(/[^a-z\\@\\-\\_\\.\\!\\~\\*\\']/i, '');\n                word = word.replace(/^\\-+|\\-+$/g, '');\n                word = word.replace(/\\-+/g, '-');\n\n                e.value = word;\n            });\n        });\n    };\n\n    const phoneCheck = (input) => {\n        input.forEach((e) => {\n            e.addEventListener('blur', () => {\n                let word = e.value.replace(/[^0-9\\-\\(\\)]/gi, '');\n                word = word.replace(/^\\-+|\\-+$/g, '');\n                word = word.replace(/\\-+/g, '-');\n\n                e.value = word;\n            });\n        });\n    };\n\n    numberCheck(calcSquare);\n    numberCheck(calcCount);\n    numberCheck(calcDay);\n\n    textCheck(mainInput);\n    textCheck(modalInput);\n    textCheck(footerInput);\n\n    mailCheck(emailInputs);\n\n    phoneCheck(phoneInputs);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;