
var self = {};
self["webpackChunktest_app_bar"] = require("../bundle.js");
(self["webpackChunktest_app_bar"] = self["webpackChunktest_app_bar"] || []).push([[1],{

/***/ 624:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__.g.currentModuleId = "_73e450bf"
__webpack_require__.g.currentResource = "/Users/ryanwu/Documents/DC/test-app-bar/src/app-bar/index.mpx"
__webpack_require__.g.currentCtor = Component
__webpack_require__.g.currentCtorType = "component"
__webpack_require__.g.currentResourceType = "component"
/* template */
__webpack_require__(626)
/* styles */
__webpack_require__(628)
/* json */
__webpack_require__(629)
/* script */
__webpack_require__.g.currentSrcMode = "wx"
__webpack_require__(625)


/***/ }),

/***/ 627:
/***/ (function(module) {

function objectKeys(obj) {
  if (true) {
    return Object.keys(obj);
  } else { var lastItem, item, i, keyEnd, keyStart, stack, inKey, objStr, stackMap, keys; }
}
function genRegExp(str, flags) {
  if (true) {
    return new RegExp(str, flags);
  } else {}
}
function extend(target, from) {
  var fromKeys = objectKeys(from);
  for (var i = 0; i < fromKeys.length; i++) {
    var key = fromKeys[i];
    target[key] = from[key];
  }
  return target;
}
function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
function isArray(arr) {
  if (true) {
    return Array.isArray(arr);
  } else {}
}
var escapeMap = {
  '(': '_pl_',
  ')': '_pr_',
  '[': '_bl_',
  ']': '_br_',
  '{': '_cl_',
  '#': '_h_',
  '!': '_i_',
  '/': '_s_',
  '.': '_d_',
  ':': '_c_',
  ',': '_2c_',
  '%': '_p_',
  // wxs can not use '\'' as key
  // wxs环境中'\''!=="'"，此文件不能格式化，否则会导致程序错误
  "'": '_q_',
  // wxs can not use '"' as key
  '"': '_dq_',
  '+': '_a_',
  '$': '_si_'
};
var escapeReg = genRegExp('[()[\]{}#!/.:,%\'"+$]', 'g');
function mpEscape(str) {
  return str.replace(escapeReg, function (match) {
    if (escapeMap[match]) return escapeMap[match];
    // fix wxs can not use '}' as key
    if (match === '}') return '_cr_';
    // unknown escaped
    return '_u_';
  });
}
function stringifyDynamicClass(value) {
  if (isArray(value)) {
    value = stringifyArray(value);
  } else if (isObject(value)) {
    value = stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  } else {
    return '';
  }
}
function stringifyArray(value) {
  var res = '';
  var classString;
  for (var i = 0; i < value.length; i++) {
    if (classString = stringifyDynamicClass(value[i])) {
      if (res) res += ' ';
      res += classString;
    }
  }
  return res;
}
var mpxEscapeReg = genRegExp('(.+)MpxEscape$');
var dashEscapeReg = genRegExp('_da_', 'g');
var spaceEscapeReg = genRegExp('_sp_', 'g');
function stringifyObject(value) {
  var res = '';
  var objKeys = objectKeys(value);
  for (var i = 0; i < objKeys.length; i++) {
    var key = objKeys[i];
    if (value[key]) {
      if (res) res += ' ';
      if (mpxEscapeReg.test(key)) {
        key = mpxEscapeReg.exec(key)[1].replace(dashEscapeReg, '-').replace(spaceEscapeReg, ' ');
      }
      res += key;
    }
  }
  return res;
}
function hump2dash(value) {
  var reg = genRegExp('[A-Z]', 'g');
  return value.replace(reg, function (match) {
    return '-' + match.toLowerCase();
  });
}
function dash2hump(value) {
  var reg = genRegExp('-([a-z])', 'g');
  return value.replace(reg, function (match, p1) {
    return p1.toUpperCase();
  });
}
function parseStyleText(cssText) {
  var res = {};
  var listDelimiter = genRegExp(';(?![^(]*[)])', 'g');
  var propertyDelimiter = genRegExp(':(.+)');
  var arr = cssText.split(listDelimiter);
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item) {
      var tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        var k = dash2hump(tmp[0].trim());
        res[k] = tmp[1].trim();
      }
    }
  }
  return res;
}
function genStyleText(styleObj) {
  var res = '';
  var objKeys = objectKeys(styleObj);
  for (var i = 0; i < objKeys.length; i++) {
    var key = objKeys[i];
    var item = styleObj[key];
    res += hump2dash(key) + ':' + item + ';';
  }
  return res;
}
function mergeObjectArray(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}
function normalizeDynamicStyle(value) {
  if (!value) return {};
  if (isArray(value)) {
    return mergeObjectArray(value);
  }
  if (typeof value === 'string') {
    return parseStyleText(value);
  }
  return value;
}
module.exports = {
  stringifyClass: function (staticClass, dynamicClass) {
    if (typeof staticClass !== 'string') {
      return console.log('Template attr class must be a string!');
    }
    return concat(staticClass, mpEscape(stringifyDynamicClass(dynamicClass)));
  },
  stringifyStyle: function (staticStyle, dynamicStyle) {
    var normalizedDynamicStyle = normalizeDynamicStyle(dynamicStyle);
    var parsedStaticStyle = typeof staticStyle === 'string' ? parseStyleText(staticStyle) : {};
    return genStyleText(extend(parsedStaticStyle, normalizedDynamicStyle));
  }
};

/***/ }),

/***/ 625:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(567);

(0,_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    activePath: '/pages/index',
    items: [{
      name: '分数',
      icon: 'chart',
      path: '/pages/index'
    }, {
      name: '任务',
      icon: 'badge',
      path: '/pages/index',
      count: true
    }, {
      name: '报告',
      icon: 'report',
      path: '/pages/index'
    }],
    isHidden: true,
    skipAnimation: [false, false]
  },
  lifetimes: {
    attached: function attached() {
      var _this = this;
      // app.log('Tab bar mounted')
      // const path = getCurrentPagePath() as Route
      // this.setVisible(path)
      // this.calcHeight()
      // // This event behave differently on iOS and Android when call 'didPop' method from cutsom route context
      // // It doesn't respond instantly on iOS
      // @ts-ignore
      wx.onAppRoute(function (e) {
        var currentPage = e.path;
        _this.setVisible(currentPage);
      });
    }
  },
  computed: {
    tabbarStyle: function tabbarStyle() {
      var originalPadding = 8;
      var reduced = 30;
      var padding = Math.max(originalPadding, reduced);
      return {
        paddingTop: originalPadding,
        paddingBottom: padding
      };
    }
  },
  methods: {
    setVisible: function setVisible(currentPath) {
      this.activePath = '/' + currentPath;
    } // switch(item: Item) {
    //   if (this.activePath === item.path) return
    //   app.vibrate()
    //   this.activePath = item.path
    //   wx.switchTab({
    //     url: item.path,
    //     routeType: CustomRouteType.Tab,
    //     fail: (e) => {
    //       console.log(e)
    //     }
    //   })
    // },
    // calcHeight() {
    //   const query = this.createSelectorQuery()
    //   query.select('.tabbar').boundingClientRect()
    //   app.log('Tab bar caculate layout')
    //   const timer = setTimeout(() => {
    //     this.handleTabbarRenderFailure()
    //   }, 1000)
    //   query.exec((res) => {
    //     clearTimeout(timer)
    //     const currentPage = getCurrentPagePath() as Route
    //     const isTabPage = tabRoutes.some((route) => isSameRoute(route, currentPage))
    //     app.log(`Tab bar caculate layout: isTabPage ${isTabPage}`)
    //     const { height, bottom, left, right, top, width } = res[0]
    //     const dimension = { height, bottom, left, right, top, width }
    //     app.log(`Tab bar caculate layout: ${JSON.stringify(dimension)}`)
    //     tabbarHeight.value = height
    //     // Suspect sometimes the component wouldn't render
    //     if (!height) {
    //       this.handleTabbarRenderFailure()
    //     }
    //   })
    // },
    // show() {
    //   this.isHidden = false
    // },
    // hide() {
    //   this.isHidden = true
    // },
    // handleTabbarRenderFailure() {
    //   app.catchError('Tabbar render failed')
    //   wx.reportEvent(WeDataEvent.TabbarRenderError)
    //   wx.showModal({
    //     title: '出现了一点问题',
    //     content: '请尝试刷新页面解决',
    //     confirmText: '刷新页面',
    //     cancelText: '继续浏览',
    //     success(res) {
    //       if (res.confirm) {
    //         app.vibrate()
    //         const currentPath = getCurrentPagePath()
    //         const enterOption = wx.getEnterOptionsSync()
    //         const query = objectToQueryString(enterOption.query)
    //         app.log(`Relaunch MP on page:`, '/' + currentPath + query)
    //         wx.reLaunch({ url: '/' + currentPath + query })
    //       }
    //     }
    //   })
    // }
  }
});

/***/ }),

/***/ 626:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __stringify__ = __webpack_require__(627);
__webpack_require__.g.currentInject = {
  moduleId: "_73e450bf"
};
__webpack_require__.g.currentInject.render = function (_i, _c, _r, _sc) {
"padding-top:" + _c("tabbarStyle.paddingTop", this.tabbarStyle.paddingTop) + "px;padding-bottom:" + _c("tabbarStyle.paddingBottom", this.tabbarStyle.paddingBottom) + "px;";
_i(_sc("items", this.items), function (item, index) {
  item.path;
  __stringify__.stringifyClass("tabbar-item flex flex-col justify-center items-center flex-auto p-2.5", {
    ml_da_3MpxEscape: index !== 0
  });
  ({
    tap: [["switch", item]]
  });
  item.icon;
  item.name;
});
_r();
};


/***/ }),

/***/ 628:
/***/ (function() {



/***/ }),

/***/ 629:
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(624));
/******/ }
]);
//# sourceMappingURL=index.js.map