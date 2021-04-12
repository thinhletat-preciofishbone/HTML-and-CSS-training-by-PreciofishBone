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

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const renderGrid = () => {// TODO: implement code to Render grid
};

/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/components/_header.ts":
/*!*******************************************!*\
  !*** ./src/scripts/components/_header.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function activateNavigationMenuOperations() {
  $('.create-new-folder-option').on('click', () => {// TODO
  });
  $('.create-new-file-option').on('click', () => {// TODO
  });
}

const header = {
  activateOperations: () => {
    activateNavigationMenuOperations();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/scripts/constant/index.ts":
/*!***************************************!*\
  !*** ./src/scripts/constant/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const itemIconClass = {
  folder: 'bi bi-folder',
  text: 'bi bi-journal-text',
  word: 'bi bi-file-earmark-word-fill word-icon',
  excel: 'bi bi-file-earmark-spreadsheet-fill excel-icon',
  powerPoint: 'bi bi-file-earmark-ppt-fill power-point-icon',
  oneNote: 'bi bi-journal-bookmark-fill one-note-icon'
};
/* harmony default export */ __webpack_exports__["default"] = (itemIconClass);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_header */ "./src/scripts/components/_header.ts");
/* harmony import */ var _sample_data_sample_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sample-data/sample-data */ "./src/scripts/sample-data/sample-data.ts");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/index */ "./src/scripts/constant/index.ts");






function createItemIcon(_item) {
  const icon = document.createElement('i');

  if (_item.extension !== undefined) {
    switch (_item.extension) {
      case 'txt':
        icon.setAttribute('class', _constant_index__WEBPACK_IMPORTED_MODULE_4__["default"].text);
        break;

      case 'doc':
      case 'docx':
        icon.setAttribute('class', _constant_index__WEBPACK_IMPORTED_MODULE_4__["default"].word);
        break;

      case 'xml':
      case 'csv':
      case 'xlsx':
        icon.setAttribute('class', _constant_index__WEBPACK_IMPORTED_MODULE_4__["default"].excel);
        break;

      default:
    }
  } else {
    icon.setAttribute('class', _constant_index__WEBPACK_IMPORTED_MODULE_4__["default"].folder);
  }

  return icon;
}

function createItemRecord(_item) {
  const tbody = document.getElementsByClassName('document-table')[0].getElementsByTagName('tbody')[0];
  const tr = document.createElement('tr'); // file type

  let td = document.createElement('td');
  td.setAttribute('class', 'file-type');
  td.setAttribute('data-label', 'File Type');
  const icon = createItemIcon(_item);
  td.appendChild(icon);
  tr.appendChild(td); // file name

  td = document.createElement('td');
  td.setAttribute('class', 'file-name');
  td.setAttribute('data-label', 'Name');

  if (_item.extension !== undefined) {
    td.innerHTML = `${_item.name}.${_item.extension}`;
  } else {
    td.innerHTML = `${_item.name}`;
  }

  tr.appendChild(td); // modified time

  td = document.createElement('td');
  td.setAttribute('class', 'modified-time');
  td.setAttribute('data-label', 'Modified');
  td.innerHTML = `${_item.modifiedTime}`;
  tr.appendChild(td); // modified by

  td = document.createElement('td');
  td.setAttribute('class', 'modified-by');
  td.setAttribute('data-label', 'Modified By');
  td.innerHTML = `${_item.modifiedBy}`;
  tr.appendChild(td); // new column

  td = document.createElement('td');
  tr.appendChild(td);
  tbody.appendChild(tr);
}

function displayItems(itemList) {
  for (let itemIndex = 0; itemIndex < itemList.length; itemIndex += 1) {
    createItemRecord(itemList[itemIndex]);
  }
}

function renderDirectory(directory) {
  // Find tbody element
  if (directory === 'root') {
    displayItems(_sample_data_sample_data__WEBPACK_IMPORTED_MODULE_3__["default"].folders);
    /* Display folders */

    /* Display files */

    displayItems(_sample_data_sample_data__WEBPACK_IMPORTED_MODULE_3__["default"].files);
  }
}

Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  _components_header__WEBPACK_IMPORTED_MODULE_2__["default"].activateOperations();
  renderDirectory('root');
});

/***/ }),

/***/ "./src/scripts/sample-data/sample-data.ts":
/*!************************************************!*\
  !*** ./src/scripts/sample-data/sample-data.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
  root/
  ├─ assignment/
  │  ├─ assignment 1.ts
  │  ├─ assignment 2.ts
  │  ├─ records/
  │  │  ├─ record 1.mp4
  │  │  ├─ record 2.mp4
  ├─ readme.txt
  ├─ note.txt
*/
const root = {
  id: 'folder-root',
  name: 'root',
  createdTime: '2021/04/12 08:54:00',
  createdBy: 'Administrator',
  modifiedTime: '2021/04/12 08:54:00',
  modifiedBy: 'Administrator',
  folders: [{
    id: 'folder-000002',
    name: 'assignment',
    createdTime: '2021/04/12 09:07:00',
    createdBy: 'Thinh Le',
    modifiedTime: '2021/04/12 09:07:00',
    modifiedBy: 'Thinh Le',
    folders: [{
      id: 'folder-000003',
      name: 'record',
      createdTime: '2021/04/12 09:10:00',
      createdBy: 'Thinh Le',
      modifiedTime: '',
      modifiedBy: '',
      folders: [],
      files: [{
        id: 'file-000005',
        name: 'record 1',
        extension: 'ts',
        createdTime: '2021/04/12 09:16:17',
        createdBy: 'Thinh Le',
        modifiedTime: '',
        modifiedBy: ''
      }, {
        id: 'file-000006',
        name: 'record 2',
        extension: 'ts',
        createdTime: '2021/04/12 09:16:24',
        createdBy: 'Thinh Le',
        modifiedTime: '',
        modifiedBy: ''
      }]
    }],
    files: [{
      id: 'file-000003',
      name: 'assignment 1',
      extension: 'ts',
      createdTime: '2021/04/12 09:14:10',
      createdBy: 'Thinh Le',
      modifiedTime: '',
      modifiedBy: ''
    }, {
      id: 'file-000004',
      name: 'assignment 2',
      extension: 'ts',
      createdTime: '2021/04/12 09:14:38',
      createdBy: 'Thinh Le',
      modifiedTime: '',
      modifiedBy: ''
    }]
  }],
  files: [{
    id: 'file-000001',
    name: 'readme',
    extension: 'txt',
    createdTime: '2021/04/12 08:56:00',
    createdBy: 'Thinh Le',
    modifiedTime: '2021/04/12 08:56:00',
    modifiedBy: 'Thinh Le'
  }, {
    id: 'file-000002',
    name: 'note',
    extension: 'docx',
    createdTime: '2021/04/12 08:59:00',
    createdBy: 'Thinh Le',
    modifiedTime: '2021/04/12 08:59:00',
    modifiedBy: 'Thinh Le'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map