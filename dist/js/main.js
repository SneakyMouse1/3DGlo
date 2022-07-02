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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smoothscroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothscroll */ \"./modules/smoothscroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"28 june 2022\");\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_smoothscroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst calc = (price = 100) => {\n    const calcBlock = document.querySelector('.calc-block');\n    const calcType = document.querySelector('.calc-type');\n    const calcSquare = document.querySelector('.calc-square');\n    const calcCount = document.querySelector('.calc-count');\n    const calcDay = document.querySelector('.calc-day');\n    const total = document.getElementById('total');\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n        const calcSquareValue = calcSquare.value;\n\n        let totalValue = 0;\n        let calcCountValue = 1;\n        let calcDayValue = 1;\n\n        if (calcCount.value > 1) {\n            calcCountValue += +calcCount.value / 10;\n        }\n\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2;\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5;\n        }\n\n        if (calcType.value && calcSquare.value) {\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n        } else {\n            totalValue = 0;\n        }\n\n        return totalValue;\n    };\n\n    calcBlock.addEventListener('input', e => {\n        if (e.target === calcType || e.target === calcSquare ||\n            e.target === calcCount || e.target === calcDay) {\n            const totalValue = countCalc();\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                duration: 500,\n                timing(timeFraction) {\n                    return timeFraction;\n                },\n                draw(progress) {\n                    total.textContent = Math.round(progress * totalValue);\n                }\n            });\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({\n\ttiming,\n\tdraw,\n\tduration\n}) => {\n\n\tlet start = performance.now();\n\n\trequestAnimationFrame(function animate(time) {\n\t\t\n        // timeFraction изменяется от 0 до 1\n\t\tlet timeFraction = (time - start) / duration;\n\t\tif (timeFraction > 1) timeFraction = 1;\n\n\t\t// Вычисляем текущее состояние анимации\n\t\tlet progress = timing(timeFraction);\n\n\t\tdraw(progress); // Собсно, рисуем\n\n\t\tif (timeFraction < 1) {\n\t\t\trequestAnimationFrame(animate);\n\t\t}\n\n\t});\n};\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menu = document.querySelector('menu');\n    const closeBtn = menu.querySelector('.close-btn');\n\n    document.addEventListener('click', e => {\n        if (e.target.closest('.menu')) {\n            menu.classList.add('active-menu');\n        } else if (e.target.closest('a') || !e.target.closest('menu')) {\n            menu.classList.remove('active-menu');\n        }\n\n        if (e.target === closeBtn) e.preventDefault();\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst modal = () => {\n    \n    const buttons = document.querySelectorAll('.popup-btn');\n\n    const modal = document.querySelector('.popup');\n\n    const modalWindow = modal.querySelector('.popup-content');\n    \n    /*\n    const modalAnimation = () => {\n        count++;\n        idInterval = requestAnimationFrame(modalAnimation);\n        if (count < 42) {\n            modalWindow.style.left = count + '%';\n            modalWindow.style.transform = 'translateY(50%)';\n        }\n    };\n    */\n\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            if (document.body.clientWidth > 768) {\n                modal.style.display = 'block';\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                    duration: 600,\n                    timing(timeFraction) {\n                        return timeFraction;\n                    },\n                    draw(progress) {\n                        modalWindow.style.left = (42 * progress) + \"%\";\n                        modalWindow.style.transform = 'translateY(50%)';\n                    }\n                });\n            } else {\n                modal.style.display = 'block';\n            }\n        });\n    });\n    \n    \n    /*\n    closeBtn.addEventListener('click', () => {\n        count = 0;\n        cancelAnimationFrame(idInterval);\n        modal.style.display = 'none';\n    });\n    */\n    \n    // Закрываем по нажатию вне окна\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            modalWindow.style.left = '0px';\n            modal.style.display = 'none';\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n\n\n\n    const slider = document.querySelector('.portfolio-content'),\n        slide = document.querySelectorAll('.portfolio-item'),\n        dots = document.querySelector('.portfolio-dots');\n\n\n\n\n    const addDot = () => {\n        const newDot = document.createElement('li');\n    \n        slide.forEach((item, i) => {\n            item[i] = newDot.cloneNode(true);\n            dots.append(item[i]);\n        });\n        const dot = document.querySelectorAll('.dot');\n        dot[0].classList.add('dot-active');\n    };\n\n\n\n\n    addDot();\n    \n    const dot = document.querySelectorAll('.dot');\n    let currentSlide = 0,\n        interval; // Для стопа\n\n    const prevSlide = (elem, index, strClass) => {\n        elem[index].classList.remove(strClass);\n    };\n\n    const nextSlide = (elem, index, strClass) => {\n        elem[index].classList.add(strClass);\n    };\n\n    const autoPlaySlide = () => {\n        prevSlide(slide, currentSlide, 'portfolio-item-active');\n        prevSlide(dot, currentSlide, 'dot-active');\n        currentSlide++;\n        if (currentSlide >= slide.length) {\n            currentSlide = 0;\n        }\n        nextSlide(slide, currentSlide, 'portfolio-item-active');\n        nextSlide(dot, currentSlide, 'dot-active');\n    };\n\n\n\n    const timeSlider = 3000;\n    const startSlide = (time = 1500) => {\n        interval = setInterval(autoPlaySlide, time);\n    };\n    startSlide(timeSlider);\n\n    // Остановка при наведении на навигацию слайда\n    const stopSlide = () => { \n        clearInterval(interval);\n    };\n\n\n\n\n    slider.addEventListener('click', e => {\n        e.preventDefault(); // откл ссылки-заглушки по умолчанию\n        const target = e.target;\n\n        // Ограничение клика по не селекторам\n        if (!target.matches('.portfolio-btn, .dot')) return;\n\n        prevSlide(slide, currentSlide, 'portfolio-item-active');\n        prevSlide(dot, currentSlide, 'dot-active');\n\n\n\n        if (target.matches('#arrow-right')) {\n            currentSlide++;\n        } else if (target.matches('#arrow-left')) {\n            currentSlide--;\n        } else if (target.matches('.dot')) {\n            dot.forEach((elem, index) => {\n                if (elem === target) {\n                    currentSlide = index;\n                }\n            });\n        }\n\n\n\n        if (currentSlide < 0) {\n            // Обнуляем слайды\n            currentSlide = slide.length - 1; \n        } else if (currentSlide >= slide.length) {\n            currentSlide = 0;\n        }\n\n        nextSlide(slide, currentSlide, 'portfolio-item-active');\n        nextSlide(dot, currentSlide, 'dot-active');\n    });\n\n\n\n\n    slider.addEventListener('mouseover', e => {\n        if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {\n            stopSlide();\n        }\n    });\n\n\n\n    slider.addEventListener('mouseout', e => {\n        if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {\n            startSlide(timeSlider);\n        }\n    });\n\n\n    \n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/smoothscroll.js":
/*!*********************************!*\
  !*** ./modules/smoothscroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothscroll = () => {\n    \n    const menu = document.querySelector('menu');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n    const mainBtn = document.querySelector('main a');\n    const serviceBlock = document.getElementById('service-block');\n\n    mainBtn.addEventListener('click', (item) => {\n        item.preventDefault();\n        serviceBlock.scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n        });\n    });\n\n    menuItems.forEach((menuItem) => {\n        menuItem.addEventListener('click', (item) => {\n            item.preventDefault();\n            const id = menuItem.getAttribute('href');\n\n            document.querySelector(id).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            });\n        });\n    });\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothscroll);\n\n//# sourceURL=webpack:///./modules/smoothscroll.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    \n\tconst tabPanel = document.querySelector('.service-header');\n\tconst tabs = document.querySelectorAll('.service-header-tab');\n\tconst tabContent = document.querySelectorAll('.service-tab');\n\n\ttabPanel.addEventListener('click', e => {\n\t\tif (e.target.closest('.service-header-tab')) {\n\t\t\tconst tabBtn = e.target.closest('.service-header-tab');\n\n\t\t\ttabs.forEach((tab, index) => {\n\t\t\t\tif (tab === tabBtn) {\n\t\t\t\t\ttab.classList.add('active');\n\t\t\t\t\ttabContent[index].classList.remove('d-none');\n\t\t\t\t} else {\n\t\t\t\t\ttab.classList.remove('active');\n\t\t\t\t\ttabContent[index].classList.add('d-none');\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    \n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n    let interval;\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor(timeRemaining / 60 / 60);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        return { timeRemaining, hours, minutes, seconds };\n    };\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n        let zeroHours = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\n        let zeroMinutes = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\n        let zeroSeconds = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\n\n        if (getTime.timeRemaining > 0) {\n            timerHours.textContent = zeroHours;\n            timerMinutes.textContent = zeroMinutes;\n            timerSeconds.textContent = zeroSeconds;\n        } else {\n            timerHours.textContent = '00';\n            timerMinutes.textContent = '00';\n            timerSeconds.textContent = '00';\n            clearInterval(interval);\n        }\n    };\n    updateClock();\n    interval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\n\n    const calcBlockInput= document.querySelectorAll(\".calc-block >input\");\n    const userNameInput = document.querySelectorAll(\"input[name = user_name]\");\n    const emailInput = document.querySelectorAll(\"input[name = user_email]\");\n    const phoneInput = document.querySelectorAll(\"input[name = user_phone]\");\n    const messageInput = document.querySelectorAll(\"input[name = user_message]\");\n  \n\n    calcBlockInput.forEach((item) => {\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/\\D+/, \"\");\n      });\n    });\n  \n\n    userNameInput.forEach((name) => {\n      name.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^а-я -]/gi, \"\");\n      });\n    });\n  \n\n    emailInput.forEach((item) => {\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^\\w@-_.!~*]/gi, \"\");\n      });\n    });\n  \n\n    phoneInput.forEach((item) => {\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^()-\\d]/g, \"\");\n      });\n    });\n\n    messageInput.forEach((item) => {\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^а-я -]/gi, \"\");\n      });\n    });\n    \n  };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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