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
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/_index */ "./src/scripts/classes/_index.ts");
/* harmony import */ var _constant_document_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/document-table */ "./src/scripts/constant/document-table.ts");
/* harmony import */ var _services_document_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/document-table */ "./src/scripts/services/document-table.ts");
/* harmony import */ var _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/item-icon-css-class */ "./src/scripts/constant/item-icon-css-class.ts");




const documentTable = {
  setNewItemModalInfo: _itemInfo => {
    document.getElementById('new-item-modal-title').innerHTML = _itemInfo.title;
    document.getElementById('new-item-name-label').innerHTML = _itemInfo.name;
    document.getElementById("new-item-name").value = '';

    if (_itemInfo.type === _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.folder) {
      document.getElementById('item-type').setAttribute('data-item-type', _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.folder);
    } else {
      document.getElementById('item-type').setAttribute('data-item-type', _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.file);
    }
  },
  createANewFileEvent: () => {
    // when click on create a new folder button
    document.getElementsByClassName('create-new-folder-option')[0].addEventListener('click', () => {
      documentTable.setNewItemModalInfo({
        title: 'Create a new folder',
        name: 'Folder name',
        type: _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.folder
      });
    });
  },
  createANewFolderEvent: () => {
    // when click on create a new folder button
    document.getElementsByClassName('create-new-file-option')[0].addEventListener('click', () => {
      documentTable.setNewItemModalInfo({
        title: 'Create a new file',
        name: 'File name',
        type: _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.file
      });
    });
  },
  createANewItemEvent: () => {
    documentTable.createANewFolderEvent();
    documentTable.createANewFileEvent();
  },
  setNewItemData: _itemInputData => {
    let id = '';
    let name = _itemInputData.name.value;
    let extension = '';
    let type = _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.folder;

    if (_itemInputData.type === _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.folder) {
      id = 'folder-' + _services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].makeTempId(5);
    } else {
      id = 'file-' + _services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].makeTempId(5); // file does have extension

      if (name.lastIndexOf('.') !== -1) {
        extension = name.split('.').pop();
        name = name.substring(0, name.lastIndexOf('.'));
      }

      type = _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.file;
    }

    return {
      id,
      name,
      extension,
      type
    };
  },
  getItemInputData: () => {
    // -- item name
    const name = document.getElementById('new-item-name'); // -- item type

    const type = document.getElementById('item-type').getAttribute('data-item-type');

    if (name.value === '') {
      return;
    } else {
      return {
        name,
        type
      };
    }
  },
  saveANewItemEvent: () => {
    // save a new item
    document.getElementsByClassName('save-new-item')[0].addEventListener('click', () => {
      let currentFolderData = _services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentFolderData();
      let itemInputData = documentTable.getItemInputData();
      let newItemData = documentTable.setNewItemData(itemInputData);
      let item = {};

      if (itemInputData.type === _constant_document_table__WEBPACK_IMPORTED_MODULE_1__["default"].itemType.folder) {
        // a folder
        item = new _classes_index__WEBPACK_IMPORTED_MODULE_0__["default"].Folder(newItemData.id, newItemData.name);
      } else {
        item = new _classes_index__WEBPACK_IMPORTED_MODULE_0__["default"].File(newItemData.id, newItemData.name, newItemData.extension);
      }

      currentFolderData = _services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].addNewItemToCurrentFolderInRootData(_services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].getRootFolderData(), currentFolderData.id, item);
      documentTable.renderTableData(currentFolderData);
    });
  },
  loadMenuBarEvents: () => {
    documentTable.createANewItemEvent();
    documentTable.saveANewItemEvent();
  },
  createItemIcon: _extension => {
    const icon = document.createElement('i');

    if (_extension !== undefined) {
      switch (_extension) {
        case 'txt':
          icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_3__["default"].text);
          break;

        case 'doc':
        case 'docx':
          icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_3__["default"].word);
          break;

        case 'xml':
        case 'csv':
        case 'xlsx':
          icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_3__["default"].excel);
          break;

        case 'exe':
          icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_3__["default"].program);
          break;

        default:
          icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_3__["default"].file);
      }
    } else {
      icon.setAttribute('class', _constant_item_icon_css_class__WEBPACK_IMPORTED_MODULE_3__["default"].folder);
    }

    return icon;
  },
  renderItemTypeData: _item => {
    // item type
    let td = document.createElement('td');
    td.setAttribute('class', 'item-type');
    td.setAttribute('data-label', 'File Type');
    const icon = documentTable.createItemIcon(_item.extension);
    td.appendChild(icon);
    return td;
  },
  clickOnAFolderEvent: _item => {
    _services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].updateFolderDirectoryInQueryString(_item.name);
    let clickedFolderData = _services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].searchFolderById(_services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].getRootFolderData(), _item.id);
    _services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].setFolderDirectoryToBrowserStorage(JSON.stringify(clickedFolderData));
    documentTable.renderTableData(clickedFolderData);
  },
  renderItemNameData: _item => {
    // item type
    let td = document.createElement('td');
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
        documentTable.clickOnAFolderEvent(_item);
      });
    }

    return td;
  },
  renderItemModifiedTimeData: _item => {
    // item type
    let td = document.createElement('td');
    td.setAttribute('class', 'modified-time');
    td.setAttribute('data-label', 'Modified');
    td.innerHTML = `${_item.modifiedTime}`;
    return td;
  },
  renderItemModifiedByData: _item => {
    // item type
    let td = document.createElement('td');
    td.setAttribute('class', 'modified-by');
    td.setAttribute('data-label', 'Modified By');
    td.innerHTML = `${_item.modifiedBy}`;
    return td;
  },
  renderTableRowData: _item => {
    const tbody = document.getElementsByClassName('document-table')[0].getElementsByTagName('tbody')[0];
    const tr = document.createElement('tr');
    tr.appendChild(documentTable.renderItemTypeData(_item));
    tr.appendChild(documentTable.renderItemNameData(_item));
    tr.appendChild(documentTable.renderItemModifiedTimeData(_item));
    tr.appendChild(documentTable.renderItemModifiedByData(_item)); // new column

    let td = document.createElement('td');
    tr.appendChild(td);
    tbody.appendChild(tr);
  },
  displayItems: _itemList => {
    for (let itemIndex = 0; itemIndex < _itemList.length; itemIndex += 1) {
      documentTable.renderTableRowData(_itemList[itemIndex]);
    }
  },
  renderTableData: folderData => {
    // Find tbody element
    const tbody = document.getElementsByClassName('document-table')[0].getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    documentTable.displayItems(folderData.subFolderItems);
    documentTable.displayItems(folderData.fileItems);
  },
  loadTableData: () => {
    let currentFolderData = _services_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentFolderData();
    documentTable.renderTableData(currentFolderData);
  },
  loadTableEvents: () => {
    documentTable.loadTableData();
  },
  loadEvents: () => {
    documentTable.loadMenuBarEvents();
    documentTable.loadTableEvents();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (documentTable);

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
  subFolderItems: [{
    id: 'folder-000002',
    name: 'assignment',
    createdTime: '2021/04/12 09:07:00',
    createdBy: 'Thinh Le',
    modifiedTime: '2021/04/12 09:07:00',
    modifiedBy: 'Thinh Le',
    subFolderItems: [{
      id: 'folder-000003',
      name: 'record',
      createdTime: '2021/04/12 09:10:00',
      createdBy: 'Thinh Le',
      modifiedTime: '',
      modifiedBy: '',
      subFolderItems: [],
      fileItems: [{
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
      subFolderItems: [],
      fileItems: [{
        id: 'file-000007',
        name: 's4fe pr0gram',
        extension: 'exe',
        createdTime: 'A few second ago',
        createdBy: 'Thinh Le',
        modifiedTime: '',
        modifiedBy: ''
      }]
    }],
    fileItems: [{
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
  fileItems: [{
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
/* harmony import */ var _sample_data_sample_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sample-data/sample-data */ "./src/scripts/sample-data/sample-data.ts");
/* harmony import */ var _constant_document_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/document-table */ "./src/scripts/constant/document-table.ts");



const documentTableServices = {
  getFolderDirectoryFromQueryString: () => {
    const folderDirectory = _page_services__WEBPACK_IMPORTED_MODULE_0__["default"].getURLParams('directory');

    if (folderDirectory === null || folderDirectory === 'root') {
      return 'root';
    }

    return folderDirectory;
  },
  getFolderIdFromBrowserStorage: _folderDirectory => {
    return _page_services__WEBPACK_IMPORTED_MODULE_0__["default"].getFolderDataFromBrowserStorage(_folderDirectory);
  },
  getRootFolderData: () => {
    return _sample_data_sample_data__WEBPACK_IMPORTED_MODULE_1__["default"];
  },
  getCurrentFolderData: () => {
    const folderDirectory = documentTableServices.getFolderDirectoryFromQueryString();

    if (folderDirectory === 'root') {
      return _sample_data_sample_data__WEBPACK_IMPORTED_MODULE_1__["default"];
    }

    return _page_services__WEBPACK_IMPORTED_MODULE_0__["default"].getFolderDataFromBrowserStorage(folderDirectory);
  },
  updateFolderDirectoryInQueryString: _directoryName => {
    const folderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    const newFolderDirectory = `${folderDirectory}/${_directoryName}`;
    window.history.pushState(null, null, `?directory=${newFolderDirectory}`);
  },
  setFolderDirectoryToBrowserStorage: _folderData => {
    const currentFolderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    _page_services__WEBPACK_IMPORTED_MODULE_0__["default"].setDataToBrowserStorage(currentFolderDirectory, _folderData);
  },
  addNewItemToCurrentFolderInRootData: (_folderData, _folderId, _newItemData) => {
    if (_folderData.id === _folderId) {
      if (_newItemData.type = _constant_document_table__WEBPACK_IMPORTED_MODULE_2__["default"].itemType.folder) {
        _folderData.subFolderItems.push(_newItemData);
      } else {
        _folderData.fileItems.push(_newItemData);
      }

      return _folderData;
    }

    for (const child of _folderData.subFolderItems) {
      const result = documentTableServices.addNewItemToCurrentFolderInRootData(child, _folderId, _newItemData);

      if (result) {
        return result;
      }
    }
  },
  searchFolderById: (_folderData, _folderId = 'folder-root') => {
    if (_folderData.id === _folderId) {
      return _folderData;
    }

    for (const child of _folderData.subFolderItems) {
      const result = documentTableServices.searchFolderById(child, _folderId);

      if (result) {
        return result;
      }
    }
  },
  makeTempId: _length => {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < _length; i += 1) {
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
  getFolderDataFromBrowserStorage: _key => {
    return JSON.parse(window.localStorage.getItem(_key));
  },
  setDataToBrowserStorage: (_key, _value) => {
    return window.localStorage.setItem(_key, _value);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (pageServices);

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