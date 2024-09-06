
var self = {};
self["webpackChunktest_app_bar"] = require("../../bundle.js");
(self["webpackChunktest_app_bar"] = self["webpackChunktest_app_bar"] || []).push([[3],{

/***/ 635:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__.g.currentModuleId = "_09db9c32"
__webpack_require__.g.currentResource = "/Users/ryanwu/Documents/DC/test-app-bar/src/components/icon.mpx"
__webpack_require__.g.currentCtor = Component
__webpack_require__.g.currentCtorType = "component"
__webpack_require__.g.currentResourceType = "component"
/* template */
__webpack_require__(637)
/* styles */
__webpack_require__(638)
/* json */
__webpack_require__(639)
/* script */
__webpack_require__.g.currentSrcMode = "wx"
__webpack_require__(636)


/***/ }),

/***/ 636:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(567);

(0,_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["default"])({
  options: {
    virtualHost: true
  },
  externalClasses: ['class'],
  properties: {
    type: {
      type: String
    },
    style: String,
    height: {
      type: Number,
      optionalTypes: [String]
    },
    width: {
      type: Number,
      optionalTypes: [String]
    },
    hidden: {
      type: Boolean,
      value: false
    },
    hoverStyle: String,
    isDisabled: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: ''
    },
    fillMode: {
      type: String,
      value: 'contain'
    }
  },
  computed: {
    dynamicStyle: function dynamicStyle() {
      var height = this.height ? "height:".concat(Number(this.height) * 2, "rpx;") : '';
      var width = this.width ? "width:".concat(Number(this.width) * 2, "rpx;") : '';
      var backgroundColor = this.color ? "background-color:".concat(this.color, ";") : '';
      return height + width + backgroundColor;
    }
  }
});

/***/ }),

/***/ 637:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__.g.currentInject = {
  moduleId: "_09db9c32"
};
__webpack_require__.g.currentInject.render = function (_i, _c, _r, _sc) {
"-" + _sc("hoverStyle", this.hoverStyle);
_sc("hidden", this.hidden);
"icon class " + (_sc("color", this.color) ? 'overflow-hidden' : '') + " " + (_sc("isDisabled", this.isDisabled) ? '-disabled' : '');
_sc("style", this.style);
"icon__inner icon-" + _sc("type", this.type) + " fill-" + _sc("fillMode", this.fillMode) + " " + (_sc("color", this.color) ? 'colorable' : 'non-colorable');
_sc("dynamicStyle", this.dynamicStyle);
_r();
};


/***/ }),

/***/ 638:
/***/ (function() {



/***/ }),

/***/ 639:
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(635));
/******/ }
]);
//# sourceMappingURL=index.js.map