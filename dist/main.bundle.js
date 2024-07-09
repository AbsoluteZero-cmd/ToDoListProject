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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n\r\n    color: #212121;\r\n}\r\n\r\n\r\n*,\r\n*:after,\r\n*:before {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.section {\r\n    display: flex;\r\n    height: 100vh;\r\n}\r\n\r\n/* Sidebar */\r\n\r\n.sidebar {\r\n    width: 25%;\r\n    background: #fcfaf8;\r\n    padding: 30px;\r\n}\r\n\r\n.sidebar__title {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.add_project__button {\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: center;\r\n\r\n    text-decoration: none;\r\n    color: #c23c2a;\r\n\r\n    position: relative;\r\n\r\n    font-weight: 600;\r\n\r\n    font-size: 16px;\r\n\r\n    transition: font-size linear 0.2s;\r\n\r\n    margin: 5px 0 10px;\r\n}\r\n\r\n.add_project__button span {\r\n    \r\n    color: #df4b40;\r\n    font-size: 28px;\r\n\r\n    margin-right: 5px;\r\n\r\n    transition: all linear 0.2s;\r\n}\r\n\r\n/* .add_project__button:hover {\r\n    font-size: 18px;\r\n} */\r\n\r\n/* .add_project__button:hover.add_project__button::before{\r\n    width: 35px;\r\n    height: 35px;\r\n    line-height: 35px;\r\n\r\n    font-size: 30px;\r\n} */\r\n\r\n.projects {\r\n    margin-top: 20px;\r\n}\r\n\r\n.project__item {\r\n    list-style-type: none;\r\n\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n\r\n    margin-bottom: 5px;\r\n\r\n    transition: all linear 0.2s;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.project__item--selected .project__item {\r\n    background: #fff1e3;\r\n}\r\n\r\n.project__item--selected a {\r\n    text-decoration: none;\r\n    color: #c23c2a;\r\n    \r\n}\r\n\r\n.project__item:hover {\r\n    background: #fff1e3;\r\n}\r\n\r\n.project__item a {\r\n    text-decoration: none;\r\n    color: #212121;\r\n\r\n    transition: all linear 0.2s;\r\n}\r\n\r\n.project__item:hover a {\r\n    color: #c23c2a;\r\n}\r\n\r\n.project__delete {\r\n    color: #df4b40;\r\n\r\n    transition: color linear .2s;\r\n}\r\n\r\n.project__delete:hover {\r\n    color: #c23c2a;\r\n}\r\n\r\n/* Todos */\r\n\r\n.todos {\r\n    width: 75%;\r\n    padding: 30px;\r\n}\r\n\r\n.todos hr {\r\n    border: 1px solid #eeeeee;\r\n\r\n    margin: 20px 0;\r\n}\r\n\r\n.todos__title {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n/* .todos__form * {\r\n    display: block;\r\n} */\r\n\r\n.todos__form input,\r\n.sidebar input {\r\n    border: 1px solid #eeeeee;\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.add_todo__button {\r\n    padding: 5px 20px;\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    border: 1px solid #eeeeee;\r\n\r\n    text-decoration: none;\r\n    color: #bbbbbb;\r\n\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n\r\n    transition: font-size linear 0.2s;\r\n    align-items: center;\r\n}\r\n\r\n.add_todo__button div {\r\n    display: inline-block;\r\n}\r\n\r\n.add_todo__button i {\r\n    color: #df4b40;\r\n    margin-right: 5px;\r\n\r\n    transition: all linear 0.2s;\r\n}\r\n\r\n\r\n/* Todos List */\r\n\r\n.todo__item {\r\n    position: relative;\r\n    \r\n    margin: 10px 0;\r\n    padding-left: 40px;\r\n}\r\n\r\n.todo__item:after{\r\n    content: '';\r\n    display: block;\r\n    width: 100%;\r\n    height: 1px;\r\n\r\n    background: #eee;\r\n\r\n    margin: 10px 0;\r\n}\r\n\r\n/* .todo__item:before */\r\n.todo__checked {\r\n    display: block;\r\n\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    border: 1px solid #eee;\r\n    text-align: center;\r\n\r\n    color: #eee;\r\n}\r\n\r\n.todo__item--checked .todo__title {\r\n    text-decoration: line-through underline;\r\n    color: #eee;\r\n}\r\n\r\n.todo__title {\r\n    font-weight: 600;\r\n    text-transform: capitalize;\r\n\r\n    font-size: 18px;\r\n}\r\n\r\n.todo__date {\r\n    color: #6db272;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n}\r\n\r\n.todo__description {\r\n    margin: 5px 0;\r\n\r\n    color: #bbb;\r\n}\r\n\r\n.todo__date {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.todo__date span {\r\n    font-weight: 600;\r\n\r\n    margin-right: 5px;\r\n}\r\n\r\n.todo__button {\r\n    text-decoration: none;\r\n    color: #fcfaf8;\r\n    font-size: 14px;\r\n\r\n    padding: 5px 15px;\r\n    background: #df4b40;\r\n\r\n    border-radius: 5px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolistproject/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolistproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolistproject/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolistproject/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolistproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolistproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolistproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolistproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolistproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolistproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project{\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.todoList = [];\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todolistproject/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo{\r\n    constructor(title, description, dueDate) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.checked = false;\r\n    };\r\n\r\n    changeMarked() {\r\n        this.checked = !this.checked;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todolistproject/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nlet projectList = JSON.parse(localStorage.getItem('projects')) || [];\r\n\r\nconst validator = (function() {\r\n    function isEmpty(str) {\r\n        if(str === null || str !== null & (str.length === 0 || str.replace(/\\s/g, '') === '')) return true;\r\n        return false;\r\n    }\r\n\r\n    return { isEmpty };\r\n})();\r\n\r\n\r\nconst todoManager = (function() {\r\n\r\n    function createTodo(title, description = '', dueDate = null) {\r\n        const todo = new _Todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, dueDate);\r\n\r\n        return todo;\r\n    }\r\n\r\n    function changeTodoChecked(projectId, todoId) {\r\n        const project = projectList[projectId];\r\n\r\n        \r\n        project.todoList[todoId].changeMarked();\r\n        localStorage.setItem('projects', JSON.stringify(projectList));\r\n\r\n        const todo = project.todoList[todoId];\r\n        \r\n\r\n        return todo.checked;\r\n    }\r\n\r\n    return { createTodo, changeTodoChecked };\r\n})();\r\n\r\nconst domManager = (function() {\r\n    const projects = document.querySelector('.projects');\r\n    const todos = document.querySelector('.todos__list');\r\n\r\n    function displayTodo(projectId, todoId) {\r\n        const todo = projectList[projectId].todoList[todoId];\r\n\r\n        const todoItem = `\r\n                <div class=\"todo__item ${ todo.checked ? 'todo__item--checked' : '' }\">\r\n                    <span class=\"todo__checked\" ></span>\r\n                    <div class=\"todo__title\">${todo.title}</div>\r\n                    <div class=\"todo__description\">${todo.description}</div>\r\n                    <div class=\"todo__date\"><span><i class=\"fa-solid fa-clock\"></i></span>${todo.dueDate}</div>\r\n                    <a href=\"#\" class=\"todo__button\">Delete</a>\r\n                </div>\r\n        `;\r\n\r\n        const el = document.createElement('div');\r\n        el.innerHTML = todoItem;\r\n\r\n        const todoChecked = el.querySelector('.todo__checked');\r\n\r\n        todoChecked.addEventListener('click', (e) => {\r\n            if(todoManager.changeTodoChecked(projectId, todoId)){\r\n                el.classList.add('todo__item--checked');\r\n                todoChecked.textContent = '✔';\r\n            }\r\n            else {\r\n                el.classList.remove('todo__item--checked');\r\n                todoChecked.textContent = '';\r\n            }\r\n            \r\n        });\r\n\r\n        const todoDeleteBtn = el.querySelector('.todo__button');\r\n        todoDeleteBtn.addEventListener('click', () => {\r\n            projectList[projectId].todoList.splice(todoId, 1);\r\n            domManager.displayTodosList(projectId);\r\n\r\n            localStorage.setItem('projects', JSON.stringify(projectList));\r\n        });\r\n\r\n        todos.appendChild(el);\r\n\r\n        localStorage.setItem('projects', JSON.stringify(projectList));\r\n    }\r\n\r\n    function changeSelectedProject(projectItem, index) {\r\n        let previousSelected = document.querySelectorAll('.project__item--selected');\r\n        previousSelected.forEach(el => {\r\n            el.classList.remove('project__item--selected');\r\n        });\r\n\r\n        projectManager.selectProject(index);\r\n        // projectItem.innerHTML = `\r\n        //     <li class=\"project__item project__item--selected\"><a href=\"#\">${projectList[index].name}</a></li>\r\n        // `;\r\n        projectItem.classList.add('project__item--selected');\r\n\r\n        localStorage.setItem('projects', JSON.stringify(projectList));\r\n    }\r\n\r\n    function displayProject(projectId) {\r\n        const project = projectList[projectId]\r\n        let projectItem = document.createElement('div');\r\n        projectItem.innerHTML = `\r\n            <li class=\"project__item\"><a href=\"#\">${project.name}</a><span class=\"project__delete\"><i class=\"fa-solid fa-trash\"></i></span></li>\r\n        `;\r\n        projectItem.addEventListener('click', (e) => {\r\n            changeSelectedProject(projectItem, projectId);\r\n        });\r\n\r\n        const projectDeleteBtn = projectItem.querySelector('.project__delete');\r\n        projectDeleteBtn.addEventListener('click', () => {\r\n            projectList.splice(projectId, 1);\r\n            localStorage.setItem('projects', JSON.stringify(projectList));\r\n            domManager.displayProjectList();\r\n        })\r\n        projects.appendChild(projectItem);\r\n\r\n        localStorage.setItem('projects', JSON.stringify(projectList));\r\n    }\r\n\r\n    function displayProjectList() {\r\n        projects.innerHTML = '';\r\n        localStorage.setItem('projects', JSON.stringify(projectList));\r\n        projectList.forEach((_, projectId) => {\r\n            displayProject(projectId);\r\n        });\r\n    }\r\n\r\n    function displayTodosList(projectId) {\r\n        const project = projectList[projectId]\r\n        todos.innerHTML = '';\r\n        const projectTodos = project.todoList;\r\n        projectTodos.forEach((_, todoId) => {\r\n            displayTodo(projectId, todoId);\r\n        });\r\n    }\r\n\r\n    function initDOM() {\r\n        projectList = JSON.parse(localStorage.getItem('projects')) || [];\r\n        console.log(projectList);\r\n\r\n        displayProjectList();\r\n\r\n        let addProjectBtn = document.querySelector('.add_project__button');\r\n        addProjectBtn.addEventListener('click', (e) => {\r\n            let projectName = document.querySelector('#projectTitle').value;\r\n            if(!validator.isEmpty(projectName)) projectManager.createProject(projectName);\r\n            else console.log('error, the project name cannot be empty');\r\n        });\r\n\r\n        let addTodoBtn = document.querySelector('.add_todo__button');\r\n        addTodoBtn.addEventListener('click', (e) => {\r\n            let todoTitle = document.querySelector('#todoTitle').value;\r\n            let todoDescription = document.querySelector('#todoDescription').value;\r\n            let todoDueDate = document.querySelector('#todoDueDate').value;\r\n            if(!validator.isEmpty(todoTitle)){\r\n                const newTodo = todoManager.createTodo(todoTitle, todoDescription, todoDueDate);\r\n                if(projectList.length > 0) projectManager.addToSelectedProject(newTodo);\r\n                else alert('Cannot add since no projects here');\r\n            }\r\n            else alert('Cannot create empty title todo');\r\n        });\r\n\r\n        \r\n    }\r\n\r\n    return { displayTodo, displayProject, initDOM, displayProjectList, displayTodosList };\r\n})();\r\n\r\nconst projectManager = (function() {\r\n    let selectedProjectId = projectList.length > 0 ? 0 : null;\r\n\r\n    function createProject(projectName) {\r\n        const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName);\r\n        projectList.push(newProject);\r\n        if(projectList.length === 1) {\r\n            selectProject(0);\r\n        }\r\n        console.log(projectList);\r\n        domManager.displayProjectList();\r\n\r\n        localStorage.setItem('projects', JSON.stringify(projectList));\r\n        \r\n    }\r\n\r\n    function selectProject(projectId) {\r\n        selectedProjectId = projectId;\r\n        domManager.displayTodosList(selectedProjectId);\r\n        console.log(projectList[selectedProjectId]);\r\n    }\r\n\r\n    function addToSelectedProject(todo) {\r\n        let todoList = projectList[selectedProjectId].todoList;\r\n        todoList.push(todo);\r\n        domManager.displayTodosList(selectedProjectId);\r\n\r\n        localStorage.setItem('projects', JSON.stringify(projectList));\r\n    }\r\n\r\n    return { createProject, selectProject, addToSelectedProject};\r\n})();\r\n\r\n\r\ndomManager.initDOM();\n\n//# sourceURL=webpack://todolistproject/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;