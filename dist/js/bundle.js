/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/add_column.js":
/*!******************************!*\
  !*** ./src/js/add_column.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Добавление столбца */

let addColumn = document, newDiv;

addColumn.querySelector('.main__button').addEventListener('click', function () {
    newDiv = addColumn.createElement('div');
    newDiv.className = 'main__block main__block-add';
    newDiv.innerHTML = '<div class="main__block main__block-add"><div class="main__block-top"><div class="main__block-about"><div class="main__block-img"><img src="img/back_icon.svg" alt="Back"></div><h3 class="main__block-title">На доработку</h3></div><div class="main__block-action"><button class="main__block-edit"><img src="img/edit_icon.svg" alt=""></button><button class="main__block-delete" onclick="document.querySelector(`.main__block-add`).remove()"><img src="img/delete_icon.svg" alt=""></button></div></div><div class="main__block-bottom"><div class="block-card" draggable="true"><div class="block-card__left"><div class="block-card__img"><img src="img/user_first.svg" alt="User"><img src="img/user_second.svg" alt="User"></div><div class="block-card__icon"><img src="img/card_arrows.svg" alt="Arrows"></div></div><div class="block-card__right"><div class="block-card__text"><span>#20413:</span>Статистика по заявкам</div></div></div></div></div>';
    addColumn.querySelector('.main__content').appendChild(newDiv);
}, false);


/***/ }),

/***/ "./src/js/delete_column.js":
/*!*********************************!*\
  !*** ./src/js/delete_column.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {


/* Удаление столбца */

const deleteBlock = document.querySelectorAll('.main__block');
const deleteButton = document.querySelectorAll('.main__block-delete');

deleteButton.forEach(function (button) {
    button.addEventListener('click', function () {
        document.querySelector('.main__block').remove()
    })
})


/***/ }),

/***/ "./src/js/drag_n_drop.js":
/*!*******************************!*\
  !*** ./src/js/drag_n_drop.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Drag'n'Drop */

const list_items = document.querySelectorAll('.block-card');
const lists = document.querySelectorAll('.main__block-bottom');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    item.addEventListener('dragstart', function () {
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0)
    });

    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'flex';
            draggedItem = null;
        }, 0);
    })

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
        });

        list.addEventListener('dragleave', function (e) {
            ;
        });

        list.addEventListener('drop', function (e) {
            console.log('drop');
            this.append(draggedItem);
        });
    }
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag_n_drop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag_n_drop.js */ "./src/js/drag_n_drop.js");
/* harmony import */ var _drag_n_drop_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drag_n_drop_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _add_column_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_column.js */ "./src/js/add_column.js");
/* harmony import */ var _add_column_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_column_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delete_column_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_column.js */ "./src/js/delete_column.js");
/* harmony import */ var _delete_column_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_delete_column_js__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map