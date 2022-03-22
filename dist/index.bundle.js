/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\n.centerContents {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#carousel {\n  height: 100vh;\n  width: 100vw;\n  flex-direction: row;\n}\n\n#carouselCenter {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n#imageContainer {\n  border: 2px solid lightblue;\n  border-radius: 10px;\n  padding: 20px;\n  width: 750px;\n  height: 550px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#imageContainer img {\n  transition: width 200ms;\n}\n\n#selectorsDiv {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.imageSelector {\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.imageSelector.selected {\n  background-color: darkgray;\n}\n\n#imgCarousel img.hidden {\n  visibility: hidden;\n}\n\n.navArrow {\n  width: 100px;\n  height: 100px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n}\n\n.centerContents {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#carousel {\n  height: 100vh;\n  width: 100vw;\n  flex-direction: row;\n}\n\n#carouselCenter {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\n#imageContainer {\n  border: 2px solid lightblue;\n  border-radius: 10px;\n  padding: 20px;\n  width: 750px;\n  height: 550px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#imageContainer img {\n  transition: width 200ms;\n}\n\n#selectorsDiv {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.imageSelector {\n  height: 20px;\n  width: 20px;\n  border: 1px solid black;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.imageSelector.selected {\n  background-color: darkgray;\n}\n\n#imgCarousel img.hidden {\n  visibility: hidden;\n}\n\n.navArrow {\n  width: 100px;\n  height: 100px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/icons/left-arrow.png":
/*!**********************************!*\
  !*** ./src/icons/left-arrow.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/photos/left-arrow.png");

/***/ }),

/***/ "./src/icons/right-arrow.png":
/*!***********************************!*\
  !*** ./src/icons/right-arrow.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/photos/right-arrow.png");

/***/ }),

/***/ "./src/images/bloodmoon.jpg":
/*!**********************************!*\
  !*** ./src/images/bloodmoon.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/photos/bloodmoon.jpg");

/***/ }),

/***/ "./src/images/ice.jpg":
/*!****************************!*\
  !*** ./src/images/ice.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/photos/ice.jpg");

/***/ }),

/***/ "./src/images/river.jpg":
/*!******************************!*\
  !*** ./src/images/river.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/photos/river.jpg");

/***/ }),

/***/ "./src/images/rockwaves.jpg":
/*!**********************************!*\
  !*** ./src/images/rockwaves.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/photos/rockwaves.jpg");

/***/ }),

/***/ "./src/images/waterfalls.jpg":
/*!***********************************!*\
  !*** ./src/images/waterfalls.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/photos/waterfalls.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_bloodmoon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bloodmoon.jpg */ "./src/images/bloodmoon.jpg");
/* harmony import */ var _images_ice_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ice.jpg */ "./src/images/ice.jpg");
/* harmony import */ var _images_river_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/river.jpg */ "./src/images/river.jpg");
/* harmony import */ var _images_rockwaves_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/rockwaves.jpg */ "./src/images/rockwaves.jpg");
/* harmony import */ var _images_waterfalls_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/waterfalls.jpg */ "./src/images/waterfalls.jpg");
/* harmony import */ var _icons_left_arrow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/left-arrow.png */ "./src/icons/left-arrow.png");
/* harmony import */ var _icons_right_arrow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/right-arrow.png */ "./src/icons/right-arrow.png");








var body = document.querySelector("body");

var createHTMLbody = function () {
  var main = document.createElement("div");
  main.setAttribute("id", "carousel");
  main.classList.add("centerContents");
  body.appendChild(main);
  var backArrow = new Image();
  backArrow.src = _icons_left_arrow_png__WEBPACK_IMPORTED_MODULE_6__["default"];
  backArrow.setAttribute("id", "backArrow");
  backArrow.classList.add("navArrow");
  main.appendChild(backArrow);
  var carouselCenter = document.createElement("div");
  carouselCenter.setAttribute("id", "carouselCenter");
  main.appendChild(carouselCenter);
  var imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "imageContainer");
  carouselCenter.appendChild(imageContainer);
  var selectors = document.createElement("div");
  selectors.setAttribute("id", "selectorsDiv");
  carouselCenter.appendChild(selectors);
  var nextArrow = new Image();
  nextArrow.src = _icons_right_arrow_png__WEBPACK_IMPORTED_MODULE_7__["default"];
  nextArrow.setAttribute("id", "nextArrow");
  nextArrow.classList.add("navArrow");
  main.appendChild(nextArrow);
  var navArrows = [backArrow, nextArrow];
  navArrows.forEach(function (arrow) {
    arrow.addEventListener("click", function (e) {
      var x = e.target.id === "nextArrow" ? 1 : -1;
      nextImage(x);
    });
  });
  return {
    main: main,
    imageContainer: imageContainer,
    selectors: selectors,
    backArrow: backArrow,
    nextArrow: nextArrow
  };
}();

var imageManagement = function () {
  var parent = document.querySelector("#imageContainer");
  var bloodMoon = new Image();
  var ice = new Image();
  var river = new Image();
  var rockWaves = new Image();
  var waterfall = new Image();
  bloodMoon.src = _images_bloodmoon_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
  ice.src = _images_ice_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];
  river.src = _images_river_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
  rockWaves.src = _images_rockwaves_jpg__WEBPACK_IMPORTED_MODULE_4__["default"];
  waterfall.src = _images_waterfalls_jpg__WEBPACK_IMPORTED_MODULE_5__["default"];
  parent.appendChild(bloodMoon);
  parent.appendChild(ice);
  parent.appendChild(river);
  parent.appendChild(rockWaves);
  parent.appendChild(waterfall);
  var images = Array.from(parent.getElementsByTagName("img"));

  for (var i = 0; i < images.length; i++) {
    var selectorsDiv = createHTMLbody.selectors;
    var selector = document.createElement("div");
    selector.setAttribute("id", "selector".concat(i));
    selector.classList.add("imageSelector");
    selectorsDiv.appendChild(selector);
    selector.addEventListener("click", changeImagesSelector);
  }

  var selectors = Array.from(document.querySelectorAll(".imageSelector"));
  var selected = images[0];
  selectors[0].classList.add("selected");
  var unselected = images.filter(function (image) {
    return image != selected;
  });
  hideOtherImages(unselected);
  showSelectedImage(selected);
  return {
    images: images,
    selectors: selectors
  };
}();

function changeImagesSelector(e) {
  var images = imageManagement.images;
  var selectedIMG = images[parseInt(e.target.id.replace("selector", ""))];
  var others = images.filter(function (image) {
    return image !== selectedIMG;
  });
  hideOtherImages(others);
  showSelectedImage(selectedIMG);
  var selectors = imageManagement.selectors;
  var selectedSel = e.currentTarget;
  var otherSels = selectors.filter(function (ele) {
    return ele !== selectedSel;
  });
  selectedSel.classList.add("selected");
  otherSels.forEach(function (ele) {
    return ele.classList.remove("selected");
  });
  return;
}

function hideOtherImages(others) {
  others.forEach(function (image) {
    image.classList.add("hidden");
    image.style.width = "0px";
  });
}

function showSelectedImage(image) {
  image.classList.remove("hidden");
  var natHeight = image.naturalHeight;
  var natWidth = image.naturalWidth;
  var maxWidth = Math.floor(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 0.8 * 0.8);
  var maxHeight = Math.floor(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.8 * 0.8);

  if (natHeight > maxHeight || natWidth > maxWidth) {
    if (natHeight > natWidth) {
      image.style.height = maxHeight + "px";
      var percentage = maxHeight / natHeight;
      var setWidth = natWidth * percentage;
      image.style.width = setWidth + "px";
    } else {
      image.style.width = maxWidth + "px";

      var _percentage = maxWidth / natWidth;

      var setHeight = natHeight * _percentage;
      image.style.height = setHeight + "px";
    }
  } else {
    image.style.width = natWidth + "px";
    image.style.height = natHeight + "px";
  }
}

function nextImage(x) {
  var images = imageManagement.images;
  var selectors = imageManagement.selectors;
  var max = images.length - 1;
  var current = parseInt(Array.from(document.querySelectorAll(".imageSelector")).find(function (selector) {
    return Array.from(selector.classList).includes("selected");
  }).id.replace("selector", ""));
  var next = current + x;
  next = next > max ? 0 : next;
  next = next < 0 ? max : next;
  var selectedIMG = images[next];
  var others = images.filter(function (image) {
    return image !== selectedIMG;
  });
  showSelectedImage(selectedIMG);
  hideOtherImages(others);
  selectors[next].classList.add("selected");
  var otherSels = selectors.filter(function (ele) {
    return ele !== selectors[next];
  });
  otherSels.forEach(function (ele) {
    return ele.classList.remove("selected");
  });
}

function timer() {
  setInterval(function () {
    nextImage(1);
  }, 5000);
}

window.onload = function () {
  timer();
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUZRLENBQVg7QUFHRDs7QUFFRDZDLE1BQU0sQ0FBQ2UsTUFBUCxHQUFnQixZQUFNO0FBQ3BCRixFQUFBQSxLQUFLO0FBQ04sQ0FGRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvLi9zcmMvaWNvbnMvbGVmdC1hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC8uL3NyYy9pY29ucy9yaWdodC1hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC8uL3NyYy9pbWFnZXMvYmxvb2Rtb29uLmpwZyIsIndlYnBhY2s6Ly9pbWFnZWNhcm91c2VsLy4vc3JjL2ltYWdlcy9pY2UuanBnIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvLi9zcmMvaW1hZ2VzL3JpdmVyLmpwZyIsIndlYnBhY2s6Ly9pbWFnZWNhcm91c2VsLy4vc3JjL2ltYWdlcy9yb2Nrd2F2ZXMuanBnIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvLi9zcmMvaW1hZ2VzL3dhdGVyZmFsbHMuanBnIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9pbWFnZWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9pbWFnZWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbWFnZWNhcm91c2VsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW1hZ2VjYXJvdXNlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbWFnZWNhcm91c2VsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ltYWdlY2Fyb3VzZWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNlbnRlckNvbnRlbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjYXJvdXNlbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI2Nhcm91c2VsQ2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2ltYWdlQ29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDc1MHB4O1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbWFnZUNvbnRhaW5lciBpbWcge1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXM7XFxufVxcblxcbiNzZWxlY3RvcnNEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbWFnZVNlbGVjdG9yIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbWFnZVNlbGVjdG9yLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4jaW1nQ2Fyb3VzZWwgaW1nLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5uYXZBcnJvdyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNlbnRlckNvbnRlbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjYXJvdXNlbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI2Nhcm91c2VsQ2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2ltYWdlQ29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDc1MHB4O1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbWFnZUNvbnRhaW5lciBpbWcge1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXM7XFxufVxcblxcbiNzZWxlY3RvcnNEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbWFnZVNlbGVjdG9yIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbWFnZVNlbGVjdG9yLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4jaW1nQ2Fyb3VzZWwgaW1nLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5uYXZBcnJvdyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9waG90b3MvbGVmdC1hcnJvdy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL3Bob3Rvcy9yaWdodC1hcnJvdy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL3Bob3Rvcy9ibG9vZG1vb24uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9waG90b3MvaWNlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvcGhvdG9zL3JpdmVyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvcGhvdG9zL3JvY2t3YXZlcy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL3Bob3Rvcy93YXRlcmZhbGxzLmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgYmxvb2RNb29uUGhvdG8gZnJvbSBcIi4vaW1hZ2VzL2Jsb29kbW9vbi5qcGdcIjtcbmltcG9ydCBpY2VQaG90byBmcm9tIFwiLi9pbWFnZXMvaWNlLmpwZ1wiO1xuaW1wb3J0IHJpdmVyUGhvdG8gZnJvbSBcIi4vaW1hZ2VzL3JpdmVyLmpwZ1wiO1xuaW1wb3J0IHJvY2tXYXZlc1Bob3RvIGZyb20gXCIuL2ltYWdlcy9yb2Nrd2F2ZXMuanBnXCI7XG5pbXBvcnQgd2F0ZXJmYWxsUGhvdG8gZnJvbSBcIi4vaW1hZ2VzL3dhdGVyZmFsbHMuanBnXCI7XG5cbmltcG9ydCBsZWZ0QXJyb3cgZnJvbSBcIi4vaWNvbnMvbGVmdC1hcnJvdy5wbmdcIjtcbmltcG9ydCByaWdodEFycm93IGZyb20gXCIuL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IGNyZWF0ZUhUTUxib2R5ID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYXJvdXNlbFwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiY2VudGVyQ29udGVudHNcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgY29uc3QgYmFja0Fycm93ID0gbmV3IEltYWdlKCk7XG4gIGJhY2tBcnJvdy5zcmMgPSBsZWZ0QXJyb3c7XG4gIGJhY2tBcnJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2tBcnJvd1wiKTtcbiAgYmFja0Fycm93LmNsYXNzTGlzdC5hZGQoXCJuYXZBcnJvd1wiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChiYWNrQXJyb3cpO1xuXG4gIGNvbnN0IGNhcm91c2VsQ2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2Fyb3VzZWxDZW50ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYXJvdXNlbENlbnRlclwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJvdXNlbENlbnRlcik7XG5cbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltYWdlQ29udGFpbmVyXCIpO1xuICBjYXJvdXNlbENlbnRlci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2VsZWN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsZWN0b3JzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0b3JzRGl2XCIpO1xuICBjYXJvdXNlbENlbnRlci5hcHBlbmRDaGlsZChzZWxlY3RvcnMpO1xuXG4gIGNvbnN0IG5leHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICBuZXh0QXJyb3cuc3JjID0gcmlnaHRBcnJvdztcbiAgbmV4dEFycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV4dEFycm93XCIpO1xuICBuZXh0QXJyb3cuY2xhc3NMaXN0LmFkZChcIm5hdkFycm93XCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG5leHRBcnJvdyk7XG5cbiAgY29uc3QgbmF2QXJyb3dzID0gW2JhY2tBcnJvdywgbmV4dEFycm93XTtcblxuICBuYXZBcnJvd3MuZm9yRWFjaCgoYXJyb3cpID0+IHtcbiAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5pZCA9PT0gXCJuZXh0QXJyb3dcIiA/IDEgOiAtMTtcbiAgICAgIG5leHRJbWFnZSh4KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluLFxuICAgIGltYWdlQ29udGFpbmVyLFxuICAgIHNlbGVjdG9ycyxcbiAgICBiYWNrQXJyb3csXG4gICAgbmV4dEFycm93LFxuICB9O1xufSkoKTtcblxuY29uc3QgaW1hZ2VNYW5hZ2VtZW50ID0gKCgpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZUNvbnRhaW5lclwiKTtcblxuICBjb25zdCBibG9vZE1vb24gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaWNlID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHJpdmVyID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHJvY2tXYXZlcyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCB3YXRlcmZhbGwgPSBuZXcgSW1hZ2UoKTtcblxuICBibG9vZE1vb24uc3JjID0gYmxvb2RNb29uUGhvdG87XG4gIGljZS5zcmMgPSBpY2VQaG90bztcbiAgcml2ZXIuc3JjID0gcml2ZXJQaG90bztcbiAgcm9ja1dhdmVzLnNyYyA9IHJvY2tXYXZlc1Bob3RvO1xuICB3YXRlcmZhbGwuc3JjID0gd2F0ZXJmYWxsUGhvdG87XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGJsb29kTW9vbik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChpY2UpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQocml2ZXIpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQocm9ja1dhdmVzKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHdhdGVyZmFsbCk7XG5cbiAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIikpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzRGl2ID0gY3JlYXRlSFRNTGJvZHkuc2VsZWN0b3JzO1xuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdG9yLnNldEF0dHJpYnV0ZShcImlkXCIsIGBzZWxlY3RvciR7aX1gKTtcbiAgICBzZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VTZWxlY3RvclwiKTtcbiAgICBzZWxlY3RvcnNEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VJbWFnZXNTZWxlY3Rvcik7XG4gIH1cbiAgY29uc3Qgc2VsZWN0b3JzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlU2VsZWN0b3JcIikpO1xuXG4gIGxldCBzZWxlY3RlZCA9IGltYWdlc1swXTtcblxuICBzZWxlY3RvcnNbMF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXG4gIGxldCB1bnNlbGVjdGVkID0gaW1hZ2VzLmZpbHRlcigoaW1hZ2UpID0+IGltYWdlICE9IHNlbGVjdGVkKTtcblxuICBoaWRlT3RoZXJJbWFnZXModW5zZWxlY3RlZCk7XG4gIHNob3dTZWxlY3RlZEltYWdlKHNlbGVjdGVkKTtcblxuICByZXR1cm4ge1xuICAgIGltYWdlcyxcbiAgICBzZWxlY3RvcnMsXG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZXNTZWxlY3RvcihlKSB7XG4gIGNvbnN0IGltYWdlcyA9IGltYWdlTWFuYWdlbWVudC5pbWFnZXM7XG5cbiAgY29uc3Qgc2VsZWN0ZWRJTUcgPSBpbWFnZXNbcGFyc2VJbnQoZS50YXJnZXQuaWQucmVwbGFjZShcInNlbGVjdG9yXCIsIFwiXCIpKV07XG4gIGNvbnN0IG90aGVycyA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiBpbWFnZSAhPT0gc2VsZWN0ZWRJTUcpO1xuXG4gIGhpZGVPdGhlckltYWdlcyhvdGhlcnMpO1xuICBzaG93U2VsZWN0ZWRJbWFnZShzZWxlY3RlZElNRyk7XG5cbiAgY29uc3Qgc2VsZWN0b3JzID0gaW1hZ2VNYW5hZ2VtZW50LnNlbGVjdG9ycztcblxuICBjb25zdCBzZWxlY3RlZFNlbCA9IGUuY3VycmVudFRhcmdldDtcbiAgY29uc3Qgb3RoZXJTZWxzID0gc2VsZWN0b3JzLmZpbHRlcigoZWxlKSA9PiBlbGUgIT09IHNlbGVjdGVkU2VsKTtcblxuICBzZWxlY3RlZFNlbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIG90aGVyU2Vscy5mb3JFYWNoKChlbGUpID0+IGVsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuXG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gaGlkZU90aGVySW1hZ2VzKG90aGVycykge1xuICBvdGhlcnMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGltYWdlLnN0eWxlLndpZHRoID0gXCIwcHhcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dTZWxlY3RlZEltYWdlKGltYWdlKSB7XG4gIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgbmF0SGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcbiAgY29uc3QgbmF0V2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XG5cbiAgY29uc3QgbWF4V2lkdGggPSBNYXRoLmZsb29yKFxuICAgIE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IDAsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwXG4gICAgKSAqXG4gICAgICAwLjggKlxuICAgICAgMC44XG4gICk7XG4gIGNvbnN0IG1heEhlaWdodCA9IE1hdGguZmxvb3IoXG4gICAgTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IDAsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMFxuICAgICkgKlxuICAgICAgMC44ICpcbiAgICAgIDAuOFxuICApO1xuXG4gIGlmIChuYXRIZWlnaHQgPiBtYXhIZWlnaHQgfHwgbmF0V2lkdGggPiBtYXhXaWR0aCkge1xuICAgIGlmIChuYXRIZWlnaHQgPiBuYXRXaWR0aCkge1xuICAgICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gbWF4SGVpZ2h0ICsgXCJweFwiO1xuXG4gICAgICBjb25zdCBwZXJjZW50YWdlID0gbWF4SGVpZ2h0IC8gbmF0SGVpZ2h0O1xuICAgICAgY29uc3Qgc2V0V2lkdGggPSBuYXRXaWR0aCAqIHBlcmNlbnRhZ2U7XG5cbiAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gc2V0V2lkdGggKyBcInB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gbWF4V2lkdGggKyBcInB4XCI7XG5cbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBtYXhXaWR0aCAvIG5hdFdpZHRoO1xuICAgICAgY29uc3Qgc2V0SGVpZ2h0ID0gbmF0SGVpZ2h0ICogcGVyY2VudGFnZTtcblxuICAgICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gc2V0SGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IG5hdFdpZHRoICsgXCJweFwiO1xuICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IG5hdEhlaWdodCArIFwicHhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0SW1hZ2UoeCkge1xuICBjb25zdCBpbWFnZXMgPSBpbWFnZU1hbmFnZW1lbnQuaW1hZ2VzO1xuICBjb25zdCBzZWxlY3RvcnMgPSBpbWFnZU1hbmFnZW1lbnQuc2VsZWN0b3JzO1xuXG4gIGNvbnN0IG1heCA9IGltYWdlcy5sZW5ndGggLSAxO1xuICBjb25zdCBjdXJyZW50ID0gcGFyc2VJbnQoXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlU2VsZWN0b3JcIikpXG4gICAgICAuZmluZCgoc2VsZWN0b3IpID0+IEFycmF5LmZyb20oc2VsZWN0b3IuY2xhc3NMaXN0KS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKVxuICAgICAgLmlkLnJlcGxhY2UoXCJzZWxlY3RvclwiLCBcIlwiKVxuICApO1xuXG4gIGxldCBuZXh0ID0gY3VycmVudCArIHg7XG4gIG5leHQgPSBuZXh0ID4gbWF4ID8gMCA6IG5leHQ7XG4gIG5leHQgPSBuZXh0IDwgMCA/IG1heCA6IG5leHQ7XG5cbiAgY29uc3Qgc2VsZWN0ZWRJTUcgPSBpbWFnZXNbbmV4dF07XG4gIGNvbnN0IG90aGVycyA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiBpbWFnZSAhPT0gc2VsZWN0ZWRJTUcpO1xuXG4gIHNob3dTZWxlY3RlZEltYWdlKHNlbGVjdGVkSU1HKTtcbiAgaGlkZU90aGVySW1hZ2VzKG90aGVycyk7XG5cbiAgc2VsZWN0b3JzW25leHRdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICBjb25zdCBvdGhlclNlbHMgPSBzZWxlY3RvcnMuZmlsdGVyKChlbGUpID0+IGVsZSAhPT0gc2VsZWN0b3JzW25leHRdKTtcbiAgb3RoZXJTZWxzLmZvckVhY2goKGVsZSkgPT4gZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XG59XG5cblxuZnVuY3Rpb24gdGltZXIoKSB7XG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIG5leHRJbWFnZSgxKTtcbiAgfSwgNTAwMCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIHRpbWVyKCk7XG59Il0sIm5hbWVzIjpbImJsb29kTW9vblBob3RvIiwiaWNlUGhvdG8iLCJyaXZlclBob3RvIiwicm9ja1dhdmVzUGhvdG8iLCJ3YXRlcmZhbGxQaG90byIsImxlZnRBcnJvdyIsInJpZ2h0QXJyb3ciLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlSFRNTGJvZHkiLCJtYWluIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiYmFja0Fycm93IiwiSW1hZ2UiLCJzcmMiLCJjYXJvdXNlbENlbnRlciIsImltYWdlQ29udGFpbmVyIiwic2VsZWN0b3JzIiwibmV4dEFycm93IiwibmF2QXJyb3dzIiwiZm9yRWFjaCIsImFycm93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ4IiwidGFyZ2V0IiwiaWQiLCJuZXh0SW1hZ2UiLCJpbWFnZU1hbmFnZW1lbnQiLCJwYXJlbnQiLCJibG9vZE1vb24iLCJpY2UiLCJyaXZlciIsInJvY2tXYXZlcyIsIndhdGVyZmFsbCIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaSIsImxlbmd0aCIsInNlbGVjdG9yc0RpdiIsInNlbGVjdG9yIiwiY2hhbmdlSW1hZ2VzU2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0ZWQiLCJ1bnNlbGVjdGVkIiwiZmlsdGVyIiwiaW1hZ2UiLCJoaWRlT3RoZXJJbWFnZXMiLCJzaG93U2VsZWN0ZWRJbWFnZSIsInNlbGVjdGVkSU1HIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwib3RoZXJzIiwic2VsZWN0ZWRTZWwiLCJjdXJyZW50VGFyZ2V0Iiwib3RoZXJTZWxzIiwiZWxlIiwicmVtb3ZlIiwic3R5bGUiLCJ3aWR0aCIsIm5hdEhlaWdodCIsIm5hdHVyYWxIZWlnaHQiLCJuYXRXaWR0aCIsIm5hdHVyYWxXaWR0aCIsIm1heFdpZHRoIiwiTWF0aCIsImZsb29yIiwibWF4IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWF4SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoZWlnaHQiLCJwZXJjZW50YWdlIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJjdXJyZW50IiwiZmluZCIsImluY2x1ZGVzIiwibmV4dCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9