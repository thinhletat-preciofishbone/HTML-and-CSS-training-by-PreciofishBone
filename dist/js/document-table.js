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

/***/ "./src/scripts/classes/_index.ts":
/*!***************************************!*\
  !*** ./src/scripts/classes/_index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/scripts/classes/item.ts");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./src/scripts/classes/file.ts");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder */ "./src/scripts/classes/folder.ts");



const classes = {
  Item: _item__WEBPACK_IMPORTED_MODULE_0__["default"],
  File: _file__WEBPACK_IMPORTED_MODULE_1__["default"],
  Folder: _folder__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (classes);

/***/ }),

/***/ "./src/scripts/classes/file.ts":
/*!*************************************!*\
  !*** ./src/scripts/classes/file.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return File; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/scripts/classes/item.ts");
 // The 'Leaf' class

class File extends _item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(_id, _name, _extension) {
    super(_id, _name);
    this.extension = _extension;
  }

}

/***/ }),

/***/ "./src/scripts/classes/folder.ts":
/*!***************************************!*\
  !*** ./src/scripts/classes/folder.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Folder; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/scripts/classes/item.ts");
 // The 'Leaf' class

class Folder extends _item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.fileItems = [];
    this.subFolderItems = [];
  }

  addFile(_file) {
    this.fileItems.push(_file);
  }

  addFolder(_folder) {
    this.subFolderItems.push(_folder);
  }

}

/***/ }),

/***/ "./src/scripts/classes/item.ts":
/*!*************************************!*\
  !*** ./src/scripts/classes/item.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
// The 'Component' class (root) (abstract class)
class Item {
  constructor(_id, _name) {
    this.id = _id;
    this.name = _name;
    this.createdTime = new Date().toLocaleDateString();
    this.createdBy = 'Administrator';
    this.modifiedTime = new Date().toLocaleDateString();
    this.modifiedBy = 'Administrator';
  }

}
/*

public abstract class GiftBase
{
    protected string name;
    protected int price;
    public GiftBase(string name, int price)
    {
        this.name = name;
        this.price = price;
   }
    public abstract int CalculateTotalPrice();
}

public interface IGiftOperations
{
    void Add(GiftBase gift);
    void Remove(GiftBase gift);
}

public class CompositeGift : GiftBase, IGiftOperations
{
    private List<GiftBase> _gifts;
    public CompositeGift(string name, int price)
        :base(name, price)
    {
        _gifts = new List<GiftBase>();
    }
    public void Add(GiftBase gift)
    {
        _gifts.Add(gift);
    }
    public void Remove(GiftBase gift)
    {
        _gifts.Remove(gift);
    }
    public override int CalculateTotalPrice()
    {
        int total = 0;
        Console.WriteLine($"{name} contains the following products with prices:");
        foreach (var gift in _gifts)
        {
            total += gift.CalculateTotalPrice();
        }
        return total;
    }
}

public class SingleGift : GiftBase
{
    public SingleGift(string name, int price)
        :base(name, price)
    {
    }
    public override int CalculateTotalPrice()
    {
        Console.WriteLine($"{name} with the price {price}");
        return price;
    }
}

class Program
{
    static void Main(string[] args)
    {
        var phone = new SingleGift("Phone", 256);
        phone.CalculateTotalPrice();
        Console.WriteLine();
        //composite gift
        var rootBox = new CompositeGift("RootBox", 0);
        var truckToy = new SingleGift("TruckToy", 289);
        var plainToy = new SingleGift("PlainToy", 587);
        rootBox.Add(truckToy);
        rootBox.Add(plainToy);
        var childBox = new CompositeGift("ChildBox", 0);
        var soldierToy = new SingleGift("SoldierToy", 200);
        childBox.Add(soldierToy);
        rootBox.Add(childBox);
        Console.WriteLine($"Total price of this composite present is: {rootBox.CalculateTotalPrice()}");
    }
}

*/

/***/ }),

/***/ "./src/scripts/constant/document-table.ts":
/*!************************************************!*\
  !*** ./src/scripts/constant/document-table.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const documentTable = {
  itemType: {
    folder: 'folder',
    file: 'file'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (documentTable);

/***/ }),

/***/ "./src/scripts/constant/item-icon-css-class.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/constant/item-icon-css-class.ts ***!
  \*****************************************************/
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
  oneNote: 'bi bi-journal-bookmark-fill one-note-icon',
  program: 'bi bi-gear-fill program-icon',
  file: 'bi bi-file'
};
/* harmony default export */ __webpack_exports__["default"] = (itemIconClass);

/***/ }),

/***/ "./src/scripts/pages/document-table.ts":
/*!*********************************************!*\
  !*** ./src/scripts/pages/document-table.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/index */ "./src/scripts/view/index.ts");
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/_index */ "./src/scripts/classes/_index.ts");
/* harmony import */ var _constant_document_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/document-table */ "./src/scripts/constant/document-table.ts");
/* harmony import */ var _services_document_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/document-table */ "./src/scripts/services/document-table.ts");





function setNewItemModalInfo(_itemInfo) {
  document.getElementById('new-item-modal-title').innerHTML = _itemInfo.title;
  document.getElementById('new-item-name-label').innerHTML = _itemInfo.name;
  document.getElementById("new-item-name").value = '';

  if (_itemInfo.type === _constant_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].itemType.folder) {
    document.getElementById('item-type').setAttribute('data-item-type', _constant_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].itemType.folder);
  } else {
    document.getElementById('item-type').setAttribute('data-item-type', _constant_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].itemType.file);
  }
}

function createANewFolderEvent() {
  // when click on create a new folder button
  document.getElementsByClassName('create-new-folder-option')[0].addEventListener('click', () => {
    setNewItemModalInfo({
      title: 'Create a new folder',
      name: 'Folder name',
      type: _constant_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].itemType.folder
    });
  });
}

function createANewFileEvent() {
  // when click on create a new file button
  document.getElementsByClassName('create-new-file-option')[0].addEventListener('click', () => {
    setNewItemModalInfo({
      title: 'Create a new file',
      name: 'File name',
      type: _constant_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].itemType.file
    });
  });
}

function createANewItemEvent() {
  createANewFolderEvent();
  createANewFileEvent();
}

function saveANewItemEvent() {
  // save a new item
  document.getElementsByClassName('save-new-item')[0].addEventListener('click', () => {
    // get the current folder data
    let currentFolderData = _services_document_table__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentFolderData(); // get the item info
    // -- item name

    const itemNameInput = document.getElementById('new-item-name');

    if (itemNameInput.value === '') {
      return;
    } // -- item type


    const itemTypeInput = document.getElementById('item-type').getAttribute('data-item-type'); // create item data

    let newitemId = '';
    let newItemName = '';

    if (itemTypeInput === _constant_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].itemType.folder) {
      newitemId = 'folder-' + _services_document_table__WEBPACK_IMPORTED_MODULE_3__["default"].makeTempId(5);
      newItemName = itemNameInput.value;
      const folderItem = new _classes_index__WEBPACK_IMPORTED_MODULE_1__["default"].Folder(newitemId, newItemName);
      currentFolderData.folders.push(folderItem);
    } else {
      newitemId = 'file-' + _services_document_table__WEBPACK_IMPORTED_MODULE_3__["default"].makeTempId(5);
      newItemName = itemNameInput.value;
      let fileExtension = ''; // file does have extension

      if (newItemName.lastIndexOf('.') !== -1) {
        fileExtension = newItemName.split('.').pop();
        newItemName = newItemName.substring(0, newItemName.lastIndexOf('.'));
      }

      const fileItem = new _classes_index__WEBPACK_IMPORTED_MODULE_1__["default"].File(newitemId, newItemName, fileExtension);
      currentFolderData.files.push(fileItem);
    } // get the current directory


    const urlParams = new URLSearchParams(window.location.search);
    const directory = urlParams.get('directory');

    if (!urlParams.has('directory') || urlParams.get('directory') === 'root') {
      _view_index__WEBPACK_IMPORTED_MODULE_0__["default"].renderDirectory();
    } else {
      console.log('currentFolderData.id', currentFolderData.id);
      _view_index__WEBPACK_IMPORTED_MODULE_0__["default"].renderDirectory(currentFolderData.id);
    }
  });
}

function loadMenuBarEvents() {
  createANewItemEvent();
  saveANewItemEvent();
}

function loadTableEvents() {}

const header = {
  loadEvents: () => {
    loadMenuBarEvents();
    loadTableEvents();
    const folderDirectory = _services_document_table__WEBPACK_IMPORTED_MODULE_3__["default"].getFolderDirectory();

    if (folderDirectory === 'root') {
      _view_index__WEBPACK_IMPORTED_MODULE_0__["default"].renderDirectory();
    } else {
      const folderId = _services_document_table__WEBPACK_IMPORTED_MODULE_3__["default"].getFolderIdFromSessionStorage(folderDirectory);
      _view_index__WEBPACK_IMPORTED_MODULE_0__["default"].renderDirectory(folderId);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (header);

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
    }, {
      id: 'folder-000005',
      name: 'd4ng3r0Us f0ld3r',
      createdTime: '2021/04/13 14:49:00',
      createdBy: 'Thinh Le',
      modifiedTime: '',
      modifiedBy: '',
      folders: [],
      files: [{
        id: 'file-000007',
        name: 's4fe pr0gram',
        extension: 'exe',
        createdTime: 'A few second ago',
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

/***/ "./src/scripts/services/document-table.ts":
/*!************************************************!*\
  !*** ./src/scripts/services/document-table.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-services */ "./src/scripts/services/page-services.ts");

const documentTableServices = {
  getFolderDirectory: () => {
    const folderDirectory = _page_services__WEBPACK_IMPORTED_MODULE_0__["default"].getURLParams('directory');

    if (folderDirectory === null || folderDirectory === 'root') {
      return 'root';
    }

    return folderDirectory;
  },
  getFolderIdFromSessionStorage: _folderDirectory => {
    return _page_services__WEBPACK_IMPORTED_MODULE_0__["default"].getDataFromSessionStorage(_folderDirectory);
  },
  getCurrentFolderData: () => {
    const folderDirectory = documentTableServices.getFolderDirectory();
    return _page_services__WEBPACK_IMPORTED_MODULE_0__["default"].getDataFromSessionStorage(folderDirectory);
  },
  makeTempId: _length => {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    return result.join('');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (documentTableServices);

/***/ }),

/***/ "./src/scripts/services/page-services.ts":
/*!***********************************************!*\
  !*** ./src/scripts/services/page-services.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pageServices = {
  getURLParams: _parameter => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(_parameter);
  },
  getDataFromSessionStorage: _key => {
    return window.sessionStorage.getItem(_key);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (pageServices);

/***/ }),

/***/ "./src/scripts/view/index.ts":
/*!***********************************!*\
  !*** ./src/scripts/view/index.ts ***!
  \***********************************/
/*! exports provided: getCurrentFolderData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentFolderData", function() { return getCurrentFolderData; });
/* harmony import */ var _sample_data_sample_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sample-data/sample-data */ "./src/scripts/sample-data/sample-data.ts");
/* harmony import */ var _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/item-icon-css-class */ "./src/scripts/constant/item-icon-css-class.ts");


let targetfolder = _sample_data_sample_data__WEBPACK_IMPORTED_MODULE_0__["default"];
function getCurrentFolderData() {
  return targetfolder;
}

function createItemIcon(_item) {
  const icon = document.createElement('i');

  if (_item.extension !== undefined) {
    switch (_item.extension) {
      case 'txt':
        icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_1__["default"].text);
        break;

      case 'doc':
      case 'docx':
        icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_1__["default"].word);
        break;

      case 'xml':
      case 'csv':
      case 'xlsx':
        icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_1__["default"].excel);
        break;

      case 'exe':
        icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_1__["default"].program);
        break;

      default:
        icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_1__["default"].file);
    }
  } else {
    icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_1__["default"].folder);
  }

  return icon;
}

function createItemRecord(_item) {
  const tbody = document.getElementsByClassName('document-table')[0].getElementsByTagName('tbody')[0];
  const tr = document.createElement('tr'); // item type

  let td = document.createElement('td');
  td.setAttribute('class', 'item-type');
  td.setAttribute('data-label', 'File Type');
  const icon = createItemIcon(_item);
  td.appendChild(icon);
  tr.appendChild(td); // item name

  td = document.createElement('td');
  td.setAttribute('class', 'item-name');
  td.setAttribute('data-label', 'Name'); // a file

  if (_item.extension !== undefined) {
    if (_item.extension !== '') {
      td.innerHTML = `${_item.name}.${_item.extension}`;
    } else {
      td.innerHTML = `${_item.name}`;
    }
  } else {
    // a folder
    td.className += ' folder-item';
    td.innerHTML = `${_item.name}`;
    td.setAttribute('data-id', _item.id);
    td.addEventListener('click', () => {
      changeDirectory(_item.id, _item.name); // write to local storage

      const urlParams = new URLSearchParams(window.location.search);
      window.sessionStorage.setItem(urlParams.get('directory'), _item);
    });
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

function searchDirectoryById(_data, _directoryId = 'folder-root') {
  if (_data.id === _directoryId) {
    return _data;
  }

  for (const child of _data.folders) {
    const res = searchDirectoryById(child, _directoryId);

    if (res) {
      return res;
    }
  }
}

function renderDirectory(_directoryId = 'folder-root') {
  // Find tbody element
  const tbody = document.getElementsByClassName('document-table')[0].getElementsByTagName('tbody')[0];
  tbody.innerHTML = ''; // if the current directory is root

  if (_directoryId === 'folder-root') {
    displayItems(_sample_data_sample_data__WEBPACK_IMPORTED_MODULE_0__["default"].folders);
    displayItems(_sample_data_sample_data__WEBPACK_IMPORTED_MODULE_0__["default"].files);
  } else {
    // find the node
    targetfolder = searchDirectoryById(_sample_data_sample_data__WEBPACK_IMPORTED_MODULE_0__["default"], _directoryId);
    displayItems(targetfolder.folders);
    displayItems(targetfolder.files);
  }
}

function changeDirectory(_directoryId, _directoryName) {
  const urlParams = new URLSearchParams(window.location.search);

  if (!urlParams.has('directory')) {
    // append params to url
    urlParams.append('directory', `${'root/'}${_directoryName}`); // update the url query

    window.history.pushState(null, null, `?${urlParams.toString()}`); // render result again

    renderDirectory(_directoryId);
  } else {
    // append params to url
    const newDirectory = `${urlParams.get('directory')}/${_directoryName}`;
    urlParams.set('directory', newDirectory); // update the url query

    window.history.pushState(null, null, `?${urlParams.toString()}`);
    renderDirectory(_directoryId);
  }
}

const view = {
  renderDirectory,
  searchDirectoryById,
  getCurrentFolderData
};
/* harmony default export */ __webpack_exports__["default"] = (view);

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/scripts/pages/document-table.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/scripts/pages/document-table.ts */"./src/scripts/pages/document-table.ts");


/***/ })

/******/ });
//# sourceMappingURL=document-table.js.map