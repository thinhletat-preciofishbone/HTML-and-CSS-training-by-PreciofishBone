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
  constructor(_fileType, _fileName, _fileExtension) {
    super(_fileType, _fileName);
    this.fileExtension = _fileExtension;
  }

  test() {
    console.log(this.itemType);
    console.log(this.itemName);
    console.log(this.fileExtension);
    console.log(this.modifiedTime);
    console.log(this.modifiedBy);
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
    this.subItems = {};
  }

}
/*
  class CompositeElement : DrawingElement

  {
    private List<DrawingElement> elements =
      new List<DrawingElement>();
 
    // Constructor

    public CompositeElement(string name)
      : base(name)
    {
    }
 
    public override void Add(DrawingElement d)
    {
      elements.Add(d);
    }
 
    public override void Remove(DrawingElement d)
    {
      elements.Remove(d);
    }
 
    public override void Display(int indent)
    {
      Console.WriteLine(new String('-', indent) +
        "+ " + _name);
 
      // Display each child element on this node

      foreach (DrawingElement d in elements)
      {
        d.Display(indent + 2);
      }
    }
    */

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
  constructor(_fileType, _fileName) {
    this.itemType = _fileType;
    this.itemName = _fileName;
    this.modifiedTime = new Date();
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
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/_index */ "./src/scripts/classes/_index.ts");
/* harmony import */ var _enums_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/index */ "./src/scripts/enums/index.ts");



function activateNavigationMenuOperations() {
  $('.create-new-folder-option').on('click', () => {
    const file = new _classes_index__WEBPACK_IMPORTED_MODULE_0__["default"].File(_enums_index__WEBPACK_IMPORTED_MODULE_1__["default"].Item.fileType.File, 'd4ng3r0Us v1rUs', 'exe');
    file.test();
  });
  $('.create-new-file-option').on('click', () => {// console.log('create a new file option clicked');
  });
}

const header = {
  activateOperations: () => {
    activateNavigationMenuOperations();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/scripts/enums/index.ts":
/*!************************************!*\
  !*** ./src/scripts/enums/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/scripts/enums/item.ts");

const classes = {
  Item: _item__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (classes);

/***/ }),

/***/ "./src/scripts/enums/item.ts":
/*!***********************************!*\
  !*** ./src/scripts/enums/item.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fileType;

(function (fileType) {
  fileType["Folder"] = "folder";
  fileType["File"] = "file";
})(fileType || (fileType = {}));

/* harmony default export */ __webpack_exports__["default"] = ({
  fileType
});

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



Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  _components_header__WEBPACK_IMPORTED_MODULE_2__["default"].activateOperations();
});

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