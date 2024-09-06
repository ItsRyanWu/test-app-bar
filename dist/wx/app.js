
var self = {};
self["webpackChunktest_app_bar"] = require("./bundle.js");
(self["webpackChunktest_app_bar"] = self["webpackChunktest_app_bar"] || []).push([[0],{

/***/ 0:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__.g.currentModuleId = "mpx-app-scope"
__webpack_require__.g.currentResource = "/Users/ryanwu/Documents/DC/test-app-bar/src/app.mpx"
__webpack_require__.g.currentCtor = App
__webpack_require__.g.currentCtorType = "app"
__webpack_require__.g.currentResourceType = "app"
/* template */
/* styles */
__webpack_require__(610)
/* json */
__webpack_require__(611)
/* script */
__webpack_require__.g.currentSrcMode = "wx"
__webpack_require__(1)


/***/ }),

/***/ 609:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(445);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(572);





// 特别指定的不进行Promise封装的方法
var blackList = ['clearStorage', 'hideToast', 'hideLoading', 'drawCanvas', 'canIUse', 'stopRecord', 'pauseVoice', 'stopVoice', 'pauseBackgroundAudio', 'stopBackgroundAudio', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'createAnimation', 'createAnimationVideo', 'createSelectorQuery', 'createIntersectionObserver', 'getPerformance', 'hideKeyboard', 'stopPullDownRefresh', 'createWorker', 'pageScrollTo', 'reportAnalytics', 'getMenuButtonBoundingClientRect', 'reportMonitor', 'createOffscreenCanvas', 'reportEvent', 'connectSocket', 'base64ToArrayBuffer', 'getDeviceInfo', 'getWindowInfo'];
function getMapFromList(list) {
  if (list && list.length) {
    var map = {};
    list.forEach(function (item) {
      map[item] = true;
    });
    return map;
  }
}
function promisify(listObj, whiteList, customBlackList) {
  var result = {};
  var whiteListMap = getMapFromList(whiteList);
  var blackListMap = getMapFromList(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(blackList).call(blackList, customBlackList));
  function promisifyFilter(key) {
    if (whiteListMap && whiteListMap[key] !== undefined) {
      return !!whiteListMap[key];
    } else {
      return !(blackListMap[key] ||
      // 特别指定的方法
      /^get\w*Manager$/.test(key) ||
      // 获取manager的api
      /^create\w*Context$/.test(key) ||
      // 创建上下文相关api
      /^(on|off)/.test(key) ||
      // 以 on* 或 off开头的方法
      /\w+Sync$/.test(key) // 以Sync结尾的方法
      );
    }
  }
  _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(listObj).forEach(function (key) {
    if (typeof listObj[key] !== 'function') {
      return;
    }
    result[key] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var obj = args[0] || {};
      // 不需要转换 or 用户已定义回调，则不处理
      if (!promisifyFilter(key) || obj.success || obj.fail) {
        return listObj[key].apply(_utils__WEBPACK_IMPORTED_MODULE_3__.ENV_OBJ, args);
      } else {
        // 其他情况进行转换
        if (!args[0]) args.unshift(obj);
        var returned;
        var promise = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default())(function (resolve, reject) {
          obj.success = resolve;
          obj.fail = reject;
          returned = listObj[key].apply(_utils__WEBPACK_IMPORTED_MODULE_3__.ENV_OBJ, args);
        });
        promise.__returned = returned;
        return promise;
      }
    };
  });
  return result;
}
/* harmony default export */ __webpack_exports__["default"] = (promisify);

/***/ }),

/***/ 572:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENV_OBJ: function() { return /* binding */ ENV_OBJ; },
/* harmony export */   changeOpts: function() { return /* binding */ changeOpts; },
/* harmony export */   defineUnsupportedProps: function() { return /* binding */ defineUnsupportedProps; },
/* harmony export */   envError: function() { return /* binding */ envError; },
/* harmony export */   error: function() { return /* binding */ error; },
/* harmony export */   failHandle: function() { return /* binding */ failHandle; },
/* harmony export */   handleSuccess: function() { return /* binding */ handleSuccess; },
/* harmony export */   isBrowser: function() { return /* binding */ isBrowser; },
/* harmony export */   successHandle: function() { return /* binding */ successHandle; },
/* harmony export */   throwSSRWarning: function() { return /* binding */ throwSSRWarning; },
/* harmony export */   warn: function() { return /* binding */ warn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(204);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mpxjs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(202);
var _this2 = undefined;





/**
 *
 * @param {Object} options 原参数
 * @param {Object} updateOrRemoveOpt 要修改或者删除的参数
 * @param {Object} extraOpt 额外增加的参数
 * @returns {Object} 返回参数
 * @example
 * changeOpts({ a: 1, b: 2 }, {
 *  a: 'c', // a 变为 c
 *  b: '' // 删除 b
 * }, {
 *  d: 4 // 增加 d
 * })
 */
function changeOpts(options) {
  var updateOrRemoveOpt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraOpt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var opts = {};
  _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(options).forEach(function (key) {
    var myKey = (0,_mpxjs_utils__WEBPACK_IMPORTED_MODULE_3__.hasOwn)(updateOrRemoveOpt, key) ? updateOrRemoveOpt[key] : key;
    if (myKey !== '') {
      opts[myKey] = options[key];
    }
  });
  opts = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, opts, extraOpt);
  return opts;
}

/**
 * @param {Object} opts 原参数
 * @param {Function} getOptions 获取 success 回调修改后的参数
 * @param {Object} thisObj this对象
 */
var handleSuccess = function handleSuccess(opts) {
  var getOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _mpxjs_utils__WEBPACK_IMPORTED_MODULE_3__.noop;
  var thisObj = arguments.length > 2 ? arguments[2] : undefined;
  if (!opts.success) {
    return;
  }
  var _this = thisObj || _this2;
  var cacheSuc = opts.success;
  opts.success = function (res) {
    var changedRes = getOptions(res) || res;
    cacheSuc.call(_this, changedRes);
  };
};
function warn(msg) {
  console.warn && console.warn("[@mpxjs/api-proxy warn]:\n ".concat(msg));
}
function error(msg) {
  console.error && console.error("[@mpxjs/api-proxy error]:\n ".concat(msg));
}
function envError(method) {
  return function () {
    var _context;
    throw Error(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = "[@mpxjs/api-proxy error]:\n ".concat("wx", "\u73AF\u5883\u4E0D\u652F\u6301")).call(_context, method, "\u65B9\u6CD5"));
  };
}
function defineUnsupportedProps(resObj, props) {
  var defineProps = {};
  props.forEach(function (item) {
    defineProps[item] = {
      get: function get() {
        var _context2;
        warn(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = "The ".concat(item, " attribute is not supported in ")).call(_context2, "wx", " environment"));
        return null;
      }
    };
  });
  Object.defineProperties(resObj, defineProps);
}
var isBrowser = typeof window !== 'undefined';
function throwSSRWarning(info) {
  console.error("[Mpx runtime error]: Dangerous API! ".concat(info, ", It may cause some problems, please use this method with caution"));
}
function successHandle(result, success, complete) {
  typeof success === 'function' && success(result);
  typeof complete === 'function' && complete(result);
}
function failHandle(result, fail, complete) {
  typeof fail === 'function' && fail(result);
  typeof complete === 'function' && complete(result);
}
var ENV_OBJ = (0,_mpxjs_utils__WEBPACK_IMPORTED_MODULE_3__.getEnvObj)();


/***/ }),

/***/ 568:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPhoneContact: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.addPhoneContact; },
/* harmony export */   arrayBufferToBase64: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.arrayBufferToBase64; },
/* harmony export */   base64ToArrayBuffer: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.base64ToArrayBuffer; },
/* harmony export */   canvasGetImageData: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.canvasGetImageData; },
/* harmony export */   canvasToTempFilePath: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.canvasToTempFilePath; },
/* harmony export */   checkSession: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.checkSession; },
/* harmony export */   chooseLocation: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.chooseLocation; },
/* harmony export */   clearStorage: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.clearStorage; },
/* harmony export */   clearStorageSync: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.clearStorageSync; },
/* harmony export */   closeBLEConnection: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.closeBLEConnection; },
/* harmony export */   compressImage: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.compressImage; },
/* harmony export */   connectSocket: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.connectSocket; },
/* harmony export */   createAnimation: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.createAnimation; },
/* harmony export */   createBLEConnection: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.createBLEConnection; },
/* harmony export */   createInnerAudioContext: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.createInnerAudioContext; },
/* harmony export */   createIntersectionObserver: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.createIntersectionObserver; },
/* harmony export */   createSelectorQuery: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.createSelectorQuery; },
/* harmony export */   createVideoContext: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.createVideoContext; },
/* harmony export */   downloadFile: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.downloadFile; },
/* harmony export */   getClipboardData: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getClipboardData; },
/* harmony export */   getDeviceInfo: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getDeviceInfo; },
/* harmony export */   getEnterOptionsSync: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getEnterOptionsSync; },
/* harmony export */   getLocation: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getLocation; },
/* harmony export */   getNetworkType: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getNetworkType; },
/* harmony export */   getProxy: function() { return /* reexport safe */ _install__WEBPACK_IMPORTED_MODULE_1__.getProxy; },
/* harmony export */   getScreenBrightness: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getScreenBrightness; },
/* harmony export */   getStorage: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getStorage; },
/* harmony export */   getStorageInfo: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getStorageInfo; },
/* harmony export */   getStorageInfoSync: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getStorageInfoSync; },
/* harmony export */   getStorageSync: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getStorageSync; },
/* harmony export */   getSystemInfo: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getSystemInfo; },
/* harmony export */   getSystemInfoSync: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getSystemInfoSync; },
/* harmony export */   getUserInfo: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getUserInfo; },
/* harmony export */   getWindowInfo: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.getWindowInfo; },
/* harmony export */   hideLoading: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.hideLoading; },
/* harmony export */   hideTabBar: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.hideTabBar; },
/* harmony export */   hideToast: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.hideToast; },
/* harmony export */   login: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.login; },
/* harmony export */   makePhoneCall: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.makePhoneCall; },
/* harmony export */   navigateBack: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.navigateBack; },
/* harmony export */   navigateTo: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.navigateTo; },
/* harmony export */   nextTick: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.nextTick; },
/* harmony export */   offAppHide: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.offAppHide; },
/* harmony export */   offAppShow: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.offAppShow; },
/* harmony export */   offError: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.offError; },
/* harmony export */   offNetworkStatusChange: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.offNetworkStatusChange; },
/* harmony export */   offWindowResize: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.offWindowResize; },
/* harmony export */   onAppHide: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.onAppHide; },
/* harmony export */   onAppShow: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.onAppShow; },
/* harmony export */   onBLEConnectionStateChange: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.onBLEConnectionStateChange; },
/* harmony export */   onError: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.onError; },
/* harmony export */   onNetworkStatusChange: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.onNetworkStatusChange; },
/* harmony export */   onWindowResize: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.onWindowResize; },
/* harmony export */   openLocation: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.openLocation; },
/* harmony export */   pageScrollTo: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.pageScrollTo; },
/* harmony export */   previewImage: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.previewImage; },
/* harmony export */   promisify: function() { return /* reexport safe */ _common_js_promisify__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   reLaunch: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.reLaunch; },
/* harmony export */   redirectTo: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.redirectTo; },
/* harmony export */   removeStorage: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.removeStorage; },
/* harmony export */   removeStorageSync: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.removeStorageSync; },
/* harmony export */   request: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.request; },
/* harmony export */   requestPayment: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.requestPayment; },
/* harmony export */   scanCode: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.scanCode; },
/* harmony export */   setClipboardData: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.setClipboardData; },
/* harmony export */   setNavigationBarColor: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.setNavigationBarColor; },
/* harmony export */   setNavigationBarTitle: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.setNavigationBarTitle; },
/* harmony export */   setScreenBrightness: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.setScreenBrightness; },
/* harmony export */   setStorage: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.setStorage; },
/* harmony export */   setStorageSync: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.setStorageSync; },
/* harmony export */   setTabBarItem: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.setTabBarItem; },
/* harmony export */   setTabBarStyle: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.setTabBarStyle; },
/* harmony export */   showActionSheet: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.showActionSheet; },
/* harmony export */   showLoading: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.showLoading; },
/* harmony export */   showModal: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.showModal; },
/* harmony export */   showTabBar: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.showTabBar; },
/* harmony export */   showToast: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.showToast; },
/* harmony export */   startPullDownRefresh: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.startPullDownRefresh; },
/* harmony export */   stopPullDownRefresh: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.stopPullDownRefresh; },
/* harmony export */   switchTab: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.switchTab; },
/* harmony export */   uploadFile: function() { return /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.uploadFile; }
/* harmony export */ });
/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(569);
/* harmony import */ var _common_js_promisify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(609);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(570);




/* harmony default export */ __webpack_exports__["default"] = (_install__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ 569:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ install; },
/* harmony export */   getProxy: function() { return /* binding */ getProxy; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(570);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(572);
/* harmony import */ var _common_js_promisify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(609);




function install(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$usePromise = options.usePromise,
    usePromise = _options$usePromise === void 0 ? false : _options$usePromise,
    _options$whiteList = options.whiteList,
    whiteList = _options$whiteList === void 0 ? [] : _options$whiteList,
    _options$blackList = options.blackList,
    blackList = _options$blackList === void 0 ? [] : _options$blackList,
    _options$custom = options.custom,
    custom = _options$custom === void 0 ? {} : _options$custom;
  var transedApi = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _common_js__WEBPACK_IMPORTED_MODULE_1__.ENV_OBJ, _platform__WEBPACK_IMPORTED_MODULE_2__);
  var promisedApi = usePromise ? (0,_common_js_promisify__WEBPACK_IMPORTED_MODULE_3__["default"])(transedApi, whiteList, blackList) : {};
  _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(target, transedApi, promisedApi, custom["wx"]);
}
function getProxy() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var apiProxy = {};
  install(apiProxy, options);
  return apiProxy;
}

/***/ }),

/***/ 571:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showActionSheet: function() { return /* binding */ showActionSheet; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var showActionSheet = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.showActionSheet || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('showActionSheet');


/***/ }),

/***/ 573:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPhoneContact: function() { return /* binding */ addPhoneContact; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var addPhoneContact = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.addPhoneContact || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('addPhoneContact');


/***/ }),

/***/ 574:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnimation: function() { return /* binding */ createAnimation; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var createAnimation = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.createAnimation || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('createAnimation');


/***/ }),

/***/ 575:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   offAppHide: function() { return /* binding */ offAppHide; },
/* harmony export */   offAppShow: function() { return /* binding */ offAppShow; },
/* harmony export */   offError: function() { return /* binding */ offError; },
/* harmony export */   onAppHide: function() { return /* binding */ onAppHide; },
/* harmony export */   onAppShow: function() { return /* binding */ onAppShow; },
/* harmony export */   onError: function() { return /* binding */ onError; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var onError = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.onError || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('onError');
var offError = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.offError || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('offError');
var onAppShow = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.onAppShow || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('onAppShow');
var offAppShow = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.offAppShow || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('offAppShow');
var onAppHide = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.onAppHide || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('onAppHide');
var offAppHide = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.offAppHide || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('offAppHide');


/***/ }),

/***/ 576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInnerAudioContext: function() { return /* binding */ createInnerAudioContext; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var createInnerAudioContext = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.createInnerAudioContext || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('createInnerAudioContext');


/***/ }),

/***/ 577:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayBufferToBase64: function() { return /* binding */ arrayBufferToBase64; },
/* harmony export */   base64ToArrayBuffer: function() { return /* binding */ base64ToArrayBuffer; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var base64ToArrayBuffer = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.base64ToArrayBuffer || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('base64ToArrayBuffer');
var arrayBufferToBase64 = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.arrayBufferToBase64 || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('arrayBufferToBase64');


/***/ }),

/***/ 578:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeBLEConnection: function() { return /* binding */ closeBLEConnection; },
/* harmony export */   createBLEConnection: function() { return /* binding */ createBLEConnection; },
/* harmony export */   onBLEConnectionStateChange: function() { return /* binding */ onBLEConnectionStateChange; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var closeBLEConnection = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.closeBLEConnection || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('closeBLEConnection');
var createBLEConnection = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.createBLEConnection || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('createBLEConnection');
var onBLEConnectionStateChange = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.onBLEConnectionStateChange || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('onBLEConnectionStateChange');


/***/ }),

/***/ 579:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canvasGetImageData: function() { return /* binding */ canvasGetImageData; },
/* harmony export */   canvasToTempFilePath: function() { return /* binding */ canvasToTempFilePath; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var canvasToTempFilePath = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.canvasToTempFilePath || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('canvasToTempFilePath');
var canvasGetImageData = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.canvasGetImageData || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('canvasGetImageData');


/***/ }),

/***/ 580:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSession: function() { return /* binding */ checkSession; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var checkSession = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.checkSession || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('checkSession');


/***/ }),

/***/ 581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClipboardData: function() { return /* binding */ getClipboardData; },
/* harmony export */   setClipboardData: function() { return /* binding */ setClipboardData; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var setClipboardData = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.setClipboardData || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('setClipboardData');
var getClipboardData = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getClipboardData || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getClipboardData');


/***/ }),

/***/ 582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIntersectionObserver: function() { return /* binding */ createIntersectionObserver; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var createIntersectionObserver = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.createIntersectionObserver || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('createIntersectionObserver');


/***/ }),

/***/ 583:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelectorQuery: function() { return /* binding */ createSelectorQuery; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var createSelectorQuery = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.createSelectorQuery || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('createSelectorQuery');


/***/ }),

/***/ 584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNetworkType: function() { return /* binding */ getNetworkType; },
/* harmony export */   offNetworkStatusChange: function() { return /* binding */ offNetworkStatusChange; },
/* harmony export */   onNetworkStatusChange: function() { return /* binding */ onNetworkStatusChange; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var getNetworkType = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getNetworkType || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getNetworkType');
var onNetworkStatusChange = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.onNetworkStatusChange || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('onNetworkStatusChange');
var offNetworkStatusChange = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.offNetworkStatusChange || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('offNetworkStatusChange');


/***/ }),

/***/ 585:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadFile: function() { return /* binding */ downloadFile; },
/* harmony export */   uploadFile: function() { return /* binding */ uploadFile; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var downloadFile = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.downloadFile || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('downloadFile');
var uploadFile = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.uploadFile || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('uploadFile');


/***/ }),

/***/ 586:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserInfo: function() { return /* binding */ getUserInfo; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var getUserInfo = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getUserInfo || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getUserInfo');


/***/ }),

/***/ 587:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compressImage: function() { return /* binding */ compressImage; },
/* harmony export */   previewImage: function() { return /* binding */ previewImage; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var previewImage = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.previewImage || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('previewImage');
var compressImage = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.compressImage || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('compressImage');


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnterOptionsSync: function() { return /* binding */ getEnterOptionsSync; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var getEnterOptionsSync = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getEnterOptionsSync || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getEnterOptionsSync');


/***/ }),

/***/ 608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chooseLocation: function() { return /* binding */ chooseLocation; },
/* harmony export */   getLocation: function() { return /* binding */ getLocation; },
/* harmony export */   openLocation: function() { return /* binding */ openLocation; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var getLocation = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getLocation || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getLocation');
var openLocation = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.openLocation || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('openLocation');
var chooseLocation = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.chooseLocation || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('chooseLocation');


/***/ }),

/***/ 588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: function() { return /* binding */ login; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var login = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.login || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('login');


/***/ }),

/***/ 589:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makePhoneCall: function() { return /* binding */ makePhoneCall; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var makePhoneCall = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.makePhoneCall || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('makePhoneCall');


/***/ }),

/***/ 590:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showModal: function() { return /* binding */ showModal; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var showModal = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.showModal || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('showModal');


/***/ }),

/***/ 591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nextTick: function() { return /* binding */ nextTick; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var nextTick = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.nextTick || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('nextTick');


/***/ }),

/***/ 592:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageScrollTo: function() { return /* binding */ pageScrollTo; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var pageScrollTo = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.pageScrollTo || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('pageScrollTo');


/***/ }),

/***/ 593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startPullDownRefresh: function() { return /* binding */ startPullDownRefresh; },
/* harmony export */   stopPullDownRefresh: function() { return /* binding */ stopPullDownRefresh; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var stopPullDownRefresh = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.stopPullDownRefresh || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('stopPullDownRefresh');
var startPullDownRefresh = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.startPullDownRefresh || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('startPullDownRefresh');


/***/ }),

/***/ 595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestPayment: function() { return /* binding */ requestPayment; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var requestPayment = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.requestPayment || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('requestPayment');


/***/ }),

/***/ 594:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   request: function() { return /* binding */ request; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var request = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.request || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('request');


/***/ }),

/***/ 596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigateBack: function() { return /* binding */ navigateBack; },
/* harmony export */   navigateTo: function() { return /* binding */ navigateTo; },
/* harmony export */   reLaunch: function() { return /* binding */ reLaunch; },
/* harmony export */   redirectTo: function() { return /* binding */ redirectTo; },
/* harmony export */   switchTab: function() { return /* binding */ switchTab; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var redirectTo = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.redirectTo || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('redirectTo');
var navigateTo = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.navigateTo || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('navigateTo');
var navigateBack = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.navigateBack || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('navigateBack');
var reLaunch = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.reLaunch || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('reLaunch');
var switchTab = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.switchTab || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('switchTab');


/***/ }),

/***/ 597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scanCode: function() { return /* binding */ scanCode; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var scanCode = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.scanCode || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('scanCode');


/***/ }),

/***/ 598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScreenBrightness: function() { return /* binding */ getScreenBrightness; },
/* harmony export */   setScreenBrightness: function() { return /* binding */ setScreenBrightness; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var setScreenBrightness = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.setScreenBrightness || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('setScreenBrightness');
var getScreenBrightness = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getScreenBrightness || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getScreenBrightness');


/***/ }),

/***/ 599:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setNavigationBarColor: function() { return /* binding */ setNavigationBarColor; },
/* harmony export */   setNavigationBarTitle: function() { return /* binding */ setNavigationBarTitle; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var setNavigationBarTitle = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.setNavigationBarTitle || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('setNavigationBarTitle');
var setNavigationBarColor = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.setNavigationBarColor || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('setNavigationBarColor');


/***/ }),

/***/ 600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectSocket: function() { return /* binding */ connectSocket; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var connectSocket = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.connectSocket || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('connectSocket');


/***/ }),

/***/ 601:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearStorage: function() { return /* binding */ clearStorage; },
/* harmony export */   clearStorageSync: function() { return /* binding */ clearStorageSync; },
/* harmony export */   getStorage: function() { return /* binding */ getStorage; },
/* harmony export */   getStorageInfo: function() { return /* binding */ getStorageInfo; },
/* harmony export */   getStorageInfoSync: function() { return /* binding */ getStorageInfoSync; },
/* harmony export */   getStorageSync: function() { return /* binding */ getStorageSync; },
/* harmony export */   removeStorage: function() { return /* binding */ removeStorage; },
/* harmony export */   removeStorageSync: function() { return /* binding */ removeStorageSync; },
/* harmony export */   setStorage: function() { return /* binding */ setStorage; },
/* harmony export */   setStorageSync: function() { return /* binding */ setStorageSync; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var setStorage = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.setStorage || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('setStorage');
var setStorageSync = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.setStorageSync || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('setStorageSync');
var getStorage = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getStorage || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getStorage');
var getStorageSync = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getStorageSync || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getStorageSync');
var getStorageInfo = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getStorageInfo || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getStorageInfo');
var getStorageInfoSync = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getStorageInfoSync || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getStorageInfoSync');
var removeStorage = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.removeStorage || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('removeStorage');
var removeStorageSync = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.removeStorageSync || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('removeStorageSync');
var clearStorage = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.clearStorage || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('clearStorage');
var clearStorageSync = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.clearStorageSync || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('clearStorageSync');


/***/ }),

/***/ 602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDeviceInfo: function() { return /* binding */ getDeviceInfo; },
/* harmony export */   getSystemInfo: function() { return /* binding */ getSystemInfo; },
/* harmony export */   getSystemInfoSync: function() { return /* binding */ getSystemInfoSync; },
/* harmony export */   getWindowInfo: function() { return /* binding */ getWindowInfo; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var getSystemInfo = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getSystemInfo || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getSystemInfo');
var getSystemInfoSync = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getSystemInfoSync || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getSystemInfoSync');
var getDeviceInfo = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getDeviceInfo || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getDeviceInfo');
var getWindowInfo = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.getWindowInfo || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('getWindowInfo');


/***/ }),

/***/ 603:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideTabBar: function() { return /* binding */ hideTabBar; },
/* harmony export */   setTabBarItem: function() { return /* binding */ setTabBarItem; },
/* harmony export */   setTabBarStyle: function() { return /* binding */ setTabBarStyle; },
/* harmony export */   showTabBar: function() { return /* binding */ showTabBar; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var setTabBarItem = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.setTabBarItem || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('setTabBarItem');
var setTabBarStyle = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.setTabBarStyle || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('setTabBarStyle');
var showTabBar = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.showTabBar || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('showTabBar');
var hideTabBar = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.hideTabBar || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('hideTabBar');


/***/ }),

/***/ 604:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideLoading: function() { return /* binding */ hideLoading; },
/* harmony export */   hideToast: function() { return /* binding */ hideToast; },
/* harmony export */   showLoading: function() { return /* binding */ showLoading; },
/* harmony export */   showToast: function() { return /* binding */ showToast; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var showToast = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.showToast || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('showToast');
var hideToast = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.hideToast || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('hideToast');
var showLoading = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.showLoading || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('showLoading');
var hideLoading = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.hideLoading || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('hideLoading');


/***/ }),

/***/ 605:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createVideoContext: function() { return /* binding */ createVideoContext; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var createVideoContext = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.createVideoContext || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('createVideoContext');


/***/ }),

/***/ 606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   offWindowResize: function() { return /* binding */ offWindowResize; },
/* harmony export */   onWindowResize: function() { return /* binding */ onWindowResize; }
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);

var onWindowResize = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.onWindowResize || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('onWindowResize');
var offWindowResize = _common_js__WEBPACK_IMPORTED_MODULE_0__.ENV_OBJ.offWindowResize || (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.envError)('offWindowResize');


/***/ }),

/***/ 570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPhoneContact: function() { return /* reexport safe */ _api_add_phone_contact__WEBPACK_IMPORTED_MODULE_1__.addPhoneContact; },
/* harmony export */   arrayBufferToBase64: function() { return /* reexport safe */ _api_base__WEBPACK_IMPORTED_MODULE_5__.arrayBufferToBase64; },
/* harmony export */   base64ToArrayBuffer: function() { return /* reexport safe */ _api_base__WEBPACK_IMPORTED_MODULE_5__.base64ToArrayBuffer; },
/* harmony export */   canvasGetImageData: function() { return /* reexport safe */ _api_canvas__WEBPACK_IMPORTED_MODULE_7__.canvasGetImageData; },
/* harmony export */   canvasToTempFilePath: function() { return /* reexport safe */ _api_canvas__WEBPACK_IMPORTED_MODULE_7__.canvasToTempFilePath; },
/* harmony export */   checkSession: function() { return /* reexport safe */ _api_check_session__WEBPACK_IMPORTED_MODULE_8__.checkSession; },
/* harmony export */   chooseLocation: function() { return /* reexport safe */ _api_location__WEBPACK_IMPORTED_MODULE_36__.chooseLocation; },
/* harmony export */   clearStorage: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.clearStorage; },
/* harmony export */   clearStorageSync: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.clearStorageSync; },
/* harmony export */   closeBLEConnection: function() { return /* reexport safe */ _api_ble_connection__WEBPACK_IMPORTED_MODULE_6__.closeBLEConnection; },
/* harmony export */   compressImage: function() { return /* reexport safe */ _api_image__WEBPACK_IMPORTED_MODULE_15__.compressImage; },
/* harmony export */   connectSocket: function() { return /* reexport safe */ _api_socket__WEBPACK_IMPORTED_MODULE_28__.connectSocket; },
/* harmony export */   createAnimation: function() { return /* reexport safe */ _api_animation__WEBPACK_IMPORTED_MODULE_2__.createAnimation; },
/* harmony export */   createBLEConnection: function() { return /* reexport safe */ _api_ble_connection__WEBPACK_IMPORTED_MODULE_6__.createBLEConnection; },
/* harmony export */   createInnerAudioContext: function() { return /* reexport safe */ _api_audio__WEBPACK_IMPORTED_MODULE_4__.createInnerAudioContext; },
/* harmony export */   createIntersectionObserver: function() { return /* reexport safe */ _api_create_intersection_observer__WEBPACK_IMPORTED_MODULE_10__.createIntersectionObserver; },
/* harmony export */   createSelectorQuery: function() { return /* reexport safe */ _api_create_selector_query__WEBPACK_IMPORTED_MODULE_11__.createSelectorQuery; },
/* harmony export */   createVideoContext: function() { return /* reexport safe */ _api_video__WEBPACK_IMPORTED_MODULE_33__.createVideoContext; },
/* harmony export */   downloadFile: function() { return /* reexport safe */ _api_file__WEBPACK_IMPORTED_MODULE_13__.downloadFile; },
/* harmony export */   getClipboardData: function() { return /* reexport safe */ _api_clipboard_data__WEBPACK_IMPORTED_MODULE_9__.getClipboardData; },
/* harmony export */   getDeviceInfo: function() { return /* reexport safe */ _api_system__WEBPACK_IMPORTED_MODULE_30__.getDeviceInfo; },
/* harmony export */   getEnterOptionsSync: function() { return /* reexport safe */ _api_lifecycle__WEBPACK_IMPORTED_MODULE_35__.getEnterOptionsSync; },
/* harmony export */   getLocation: function() { return /* reexport safe */ _api_location__WEBPACK_IMPORTED_MODULE_36__.getLocation; },
/* harmony export */   getNetworkType: function() { return /* reexport safe */ _api_device_network__WEBPACK_IMPORTED_MODULE_12__.getNetworkType; },
/* harmony export */   getScreenBrightness: function() { return /* reexport safe */ _api_screen_brightness__WEBPACK_IMPORTED_MODULE_26__.getScreenBrightness; },
/* harmony export */   getStorage: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.getStorage; },
/* harmony export */   getStorageInfo: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.getStorageInfo; },
/* harmony export */   getStorageInfoSync: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.getStorageInfoSync; },
/* harmony export */   getStorageSync: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.getStorageSync; },
/* harmony export */   getSystemInfo: function() { return /* reexport safe */ _api_system__WEBPACK_IMPORTED_MODULE_30__.getSystemInfo; },
/* harmony export */   getSystemInfoSync: function() { return /* reexport safe */ _api_system__WEBPACK_IMPORTED_MODULE_30__.getSystemInfoSync; },
/* harmony export */   getUserInfo: function() { return /* reexport safe */ _api_get_user_info__WEBPACK_IMPORTED_MODULE_14__.getUserInfo; },
/* harmony export */   getWindowInfo: function() { return /* reexport safe */ _api_system__WEBPACK_IMPORTED_MODULE_30__.getWindowInfo; },
/* harmony export */   hideLoading: function() { return /* reexport safe */ _api_toast__WEBPACK_IMPORTED_MODULE_32__.hideLoading; },
/* harmony export */   hideTabBar: function() { return /* reexport safe */ _api_tab_bar__WEBPACK_IMPORTED_MODULE_31__.hideTabBar; },
/* harmony export */   hideToast: function() { return /* reexport safe */ _api_toast__WEBPACK_IMPORTED_MODULE_32__.hideToast; },
/* harmony export */   login: function() { return /* reexport safe */ _api_login__WEBPACK_IMPORTED_MODULE_16__.login; },
/* harmony export */   makePhoneCall: function() { return /* reexport safe */ _api_make_phone_call__WEBPACK_IMPORTED_MODULE_17__.makePhoneCall; },
/* harmony export */   navigateBack: function() { return /* reexport safe */ _api_route__WEBPACK_IMPORTED_MODULE_24__.navigateBack; },
/* harmony export */   navigateTo: function() { return /* reexport safe */ _api_route__WEBPACK_IMPORTED_MODULE_24__.navigateTo; },
/* harmony export */   nextTick: function() { return /* reexport safe */ _api_next_tick__WEBPACK_IMPORTED_MODULE_19__.nextTick; },
/* harmony export */   offAppHide: function() { return /* reexport safe */ _api_app__WEBPACK_IMPORTED_MODULE_3__.offAppHide; },
/* harmony export */   offAppShow: function() { return /* reexport safe */ _api_app__WEBPACK_IMPORTED_MODULE_3__.offAppShow; },
/* harmony export */   offError: function() { return /* reexport safe */ _api_app__WEBPACK_IMPORTED_MODULE_3__.offError; },
/* harmony export */   offNetworkStatusChange: function() { return /* reexport safe */ _api_device_network__WEBPACK_IMPORTED_MODULE_12__.offNetworkStatusChange; },
/* harmony export */   offWindowResize: function() { return /* reexport safe */ _api_window__WEBPACK_IMPORTED_MODULE_34__.offWindowResize; },
/* harmony export */   onAppHide: function() { return /* reexport safe */ _api_app__WEBPACK_IMPORTED_MODULE_3__.onAppHide; },
/* harmony export */   onAppShow: function() { return /* reexport safe */ _api_app__WEBPACK_IMPORTED_MODULE_3__.onAppShow; },
/* harmony export */   onBLEConnectionStateChange: function() { return /* reexport safe */ _api_ble_connection__WEBPACK_IMPORTED_MODULE_6__.onBLEConnectionStateChange; },
/* harmony export */   onError: function() { return /* reexport safe */ _api_app__WEBPACK_IMPORTED_MODULE_3__.onError; },
/* harmony export */   onNetworkStatusChange: function() { return /* reexport safe */ _api_device_network__WEBPACK_IMPORTED_MODULE_12__.onNetworkStatusChange; },
/* harmony export */   onWindowResize: function() { return /* reexport safe */ _api_window__WEBPACK_IMPORTED_MODULE_34__.onWindowResize; },
/* harmony export */   openLocation: function() { return /* reexport safe */ _api_location__WEBPACK_IMPORTED_MODULE_36__.openLocation; },
/* harmony export */   pageScrollTo: function() { return /* reexport safe */ _api_page_scroll_to__WEBPACK_IMPORTED_MODULE_20__.pageScrollTo; },
/* harmony export */   previewImage: function() { return /* reexport safe */ _api_image__WEBPACK_IMPORTED_MODULE_15__.previewImage; },
/* harmony export */   reLaunch: function() { return /* reexport safe */ _api_route__WEBPACK_IMPORTED_MODULE_24__.reLaunch; },
/* harmony export */   redirectTo: function() { return /* reexport safe */ _api_route__WEBPACK_IMPORTED_MODULE_24__.redirectTo; },
/* harmony export */   removeStorage: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.removeStorage; },
/* harmony export */   removeStorageSync: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.removeStorageSync; },
/* harmony export */   request: function() { return /* reexport safe */ _api_request__WEBPACK_IMPORTED_MODULE_22__.request; },
/* harmony export */   requestPayment: function() { return /* reexport safe */ _api_request_payment__WEBPACK_IMPORTED_MODULE_23__.requestPayment; },
/* harmony export */   scanCode: function() { return /* reexport safe */ _api_scan_code__WEBPACK_IMPORTED_MODULE_25__.scanCode; },
/* harmony export */   setClipboardData: function() { return /* reexport safe */ _api_clipboard_data__WEBPACK_IMPORTED_MODULE_9__.setClipboardData; },
/* harmony export */   setNavigationBarColor: function() { return /* reexport safe */ _api_set_navigation_bar__WEBPACK_IMPORTED_MODULE_27__.setNavigationBarColor; },
/* harmony export */   setNavigationBarTitle: function() { return /* reexport safe */ _api_set_navigation_bar__WEBPACK_IMPORTED_MODULE_27__.setNavigationBarTitle; },
/* harmony export */   setScreenBrightness: function() { return /* reexport safe */ _api_screen_brightness__WEBPACK_IMPORTED_MODULE_26__.setScreenBrightness; },
/* harmony export */   setStorage: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.setStorage; },
/* harmony export */   setStorageSync: function() { return /* reexport safe */ _api_storage__WEBPACK_IMPORTED_MODULE_29__.setStorageSync; },
/* harmony export */   setTabBarItem: function() { return /* reexport safe */ _api_tab_bar__WEBPACK_IMPORTED_MODULE_31__.setTabBarItem; },
/* harmony export */   setTabBarStyle: function() { return /* reexport safe */ _api_tab_bar__WEBPACK_IMPORTED_MODULE_31__.setTabBarStyle; },
/* harmony export */   showActionSheet: function() { return /* reexport safe */ _api_action_sheet__WEBPACK_IMPORTED_MODULE_0__.showActionSheet; },
/* harmony export */   showLoading: function() { return /* reexport safe */ _api_toast__WEBPACK_IMPORTED_MODULE_32__.showLoading; },
/* harmony export */   showModal: function() { return /* reexport safe */ _api_modal__WEBPACK_IMPORTED_MODULE_18__.showModal; },
/* harmony export */   showTabBar: function() { return /* reexport safe */ _api_tab_bar__WEBPACK_IMPORTED_MODULE_31__.showTabBar; },
/* harmony export */   showToast: function() { return /* reexport safe */ _api_toast__WEBPACK_IMPORTED_MODULE_32__.showToast; },
/* harmony export */   startPullDownRefresh: function() { return /* reexport safe */ _api_pull_down__WEBPACK_IMPORTED_MODULE_21__.startPullDownRefresh; },
/* harmony export */   stopPullDownRefresh: function() { return /* reexport safe */ _api_pull_down__WEBPACK_IMPORTED_MODULE_21__.stopPullDownRefresh; },
/* harmony export */   switchTab: function() { return /* reexport safe */ _api_route__WEBPACK_IMPORTED_MODULE_24__.switchTab; },
/* harmony export */   uploadFile: function() { return /* reexport safe */ _api_file__WEBPACK_IMPORTED_MODULE_13__.uploadFile; }
/* harmony export */ });
/* harmony import */ var _api_action_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(571);
/* harmony import */ var _api_add_phone_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(573);
/* harmony import */ var _api_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(574);
/* harmony import */ var _api_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(575);
/* harmony import */ var _api_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(576);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(577);
/* harmony import */ var _api_ble_connection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(578);
/* harmony import */ var _api_canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(579);
/* harmony import */ var _api_check_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(580);
/* harmony import */ var _api_clipboard_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(581);
/* harmony import */ var _api_create_intersection_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(582);
/* harmony import */ var _api_create_selector_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(583);
/* harmony import */ var _api_device_network__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(584);
/* harmony import */ var _api_file__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(585);
/* harmony import */ var _api_get_user_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(586);
/* harmony import */ var _api_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(587);
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(588);
/* harmony import */ var _api_make_phone_call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(589);
/* harmony import */ var _api_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(590);
/* harmony import */ var _api_next_tick__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(591);
/* harmony import */ var _api_page_scroll_to__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(592);
/* harmony import */ var _api_pull_down__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(593);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(594);
/* harmony import */ var _api_request_payment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(595);
/* harmony import */ var _api_route__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(596);
/* harmony import */ var _api_scan_code__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(597);
/* harmony import */ var _api_screen_brightness__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(598);
/* harmony import */ var _api_set_navigation_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(599);
/* harmony import */ var _api_socket__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(600);
/* harmony import */ var _api_storage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(601);
/* harmony import */ var _api_system__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(602);
/* harmony import */ var _api_tab_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(603);
/* harmony import */ var _api_toast__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(604);
/* harmony import */ var _api_video__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(605);
/* harmony import */ var _api_window__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(606);
/* harmony import */ var _api_lifecycle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(607);
/* harmony import */ var _api_location__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(608);
// showActionSheet


// addPhoneContact


// createAnimation


// onAppShow, onAppHide, offAppShow, offAppHide, onError, offError


// createInnerAudioContext


// base64ToArrayBuffer, arrayBufferToBase64


// closeBLEConnection, createBLEConnection, onBLEConnectionStateChange


// canvasToTempFilePath, canvasGetImageData


// checkSession


// setClipboardData, getClipboardData


// createIntersectionObserver


// createSelectorQuery


// getNetworkType, onNetworkStatusChange, offNetworkStatusChange


// downloadFile, uploadFile


// getUserInfo


// previewImage, compressImage


// login


// makePhoneCall


// showModal


// nextTick


// pageScrollTo


// stopPullDownRefresh


// request


// requestPayment


// redirectTo, navigateTo, navigateBack, reLaunch, switchTab


// scanCode


// setScreenBrightness, getScreenBrightness


// setNavigationBarTitle, setNavigationBarColor


// connectSocket


// setStorage, setStorageSync, getStorage, getStorageSync
// getStorageInfo, getStorageInfoSync, removeStorage, removeStorageSync
// clearStorage, clearStorageSync


// getSystemInfo, getSystemInfoSync


// setTabBarItem, setTabBarStyle, showTabBar, hideTabBar


// showToast, hideToast, showLoading, hideLoading


// createVideoContext


// onWindowResize, offWindowResize


// getEnterOptionsSync


// getLocation, openLocation, chooseLocation


/***/ }),

/***/ 1:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(536);
/* harmony import */ var _mpxjs_api_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(568);


_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["default"].use(_mpxjs_api_proxy__WEBPACK_IMPORTED_MODULE_1__["default"], {
  usePromise: true
});
(0,_mpxjs_core__WEBPACK_IMPORTED_MODULE_2__["default"])({});

/***/ }),

/***/ 610:
/***/ (function() {



/***/ }),

/***/ 611:
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);
//# sourceMappingURL=app.js.map