"use strict";

function _typeof3(obj) { "@babel/helpers - typeof"; return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof3(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _react = require("react");

var _client = require("react-dom/client");

var _reactFilerobotImageEditor = _interopRequireWildcard(require("react-filerobot-image-editor"));

var _deepMerge = _interopRequireDefault(require("react-filerobot-image-editor/lib/utils/deepMerge"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(a, b) {
  var c = Object.keys(a);

  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function (b) {
      return Object.getOwnPropertyDescriptor(a, b).enumerable;
    })), c.push.apply(c, d);
  }

  return c;
}

function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++) {
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys(Object(b), !0).forEach(function (c) {
      (0, _defineProperty2["default"])(a, c, b[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys(Object(b)).forEach(function (c) {
      Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
    });
  }

  return a;
}

function _classPrivateFieldInitSpec(a, b, c) {
  _checkPrivateRedeclaration(a, b), b.set(a, c);
}

function _checkPrivateRedeclaration(a, b) {
  if (b.has(a)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}

var _root = new WeakMap(),
    _getCurrentImgDataFnRef = new WeakMap(),
    _updateStateFnRef = new WeakMap(),
    FilerobotImageEditor = function () {
  function a(b) {
    var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    if ((0, _classCallCheck2["default"])(this, a), _classPrivateFieldInitSpec(this, _root, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldInitSpec(this, _getCurrentImgDataFnRef, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldInitSpec(this, _updateStateFnRef, {
      writable: !0,
      value: void 0
    }), this.container = b, this.config = c, !b || !(b instanceof HTMLElement)) throw new Error("`container` (argument 0) is required to initialize the image editor plugin.");
    (0, _classPrivateFieldSet2["default"])(this, _root, (0, _client.createRoot)(this.container)), (0, _classPrivateFieldSet2["default"])(this, _getCurrentImgDataFnRef, {}), (0, _classPrivateFieldSet2["default"])(this, _updateStateFnRef, {});
  }

  return (0, _createClass2["default"])(a, [{
    key: "render",
    value: function render(a) {
      "object" === (0, _typeof2["default"])(a) && (this.config = this.config = (0, _deepMerge["default"])(this.config || {}, a)), this.config = _objectSpread(_objectSpread({}, this.config), {}, {
        getCurrentImgDataFnRef: (0, _classPrivateFieldGet2["default"])(this, _getCurrentImgDataFnRef),
        updateStateFnRef: (0, _classPrivateFieldGet2["default"])(this, _updateStateFnRef)
      }), (0, _classPrivateFieldGet2["default"])(this, _root).render((0, _react.createElement)(_reactFilerobotImageEditor["default"], this.config));
    }
  }, {
    key: "terminate",
    value: function terminate() {
      (0, _classPrivateFieldGet2["default"])(this, _root).unmount();
    }
  }, {
    key: "getCurrentImgData",
    value: function getCurrentImgData(a, b, c) {
      var d, e;
      return (null === (d = (0, _classPrivateFieldGet2["default"])(this, _getCurrentImgDataFnRef)) || void 0 === d || null === (e = d.current) || void 0 === e ? void 0 : e.call(d, a, b, c)) || {};
    }
  }, {
    key: "updateState",
    value: function updateState(a) {
      var b, c;
      null === (b = (0, _classPrivateFieldGet2["default"])(this, _updateStateFnRef)) || void 0 === b || null === (c = b.current) || void 0 === c ? void 0 : c.call(b, a);
    }
  }]), a;
}();

(0, _defineProperty2["default"])(FilerobotImageEditor, "TABS", _reactFilerobotImageEditor.TABS), (0, _defineProperty2["default"])(FilerobotImageEditor, "TOOLS", _reactFilerobotImageEditor.TOOLS), FilerobotImageEditor.TABS = _reactFilerobotImageEditor.TABS, FilerobotImageEditor.TOOLS = _reactFilerobotImageEditor.TOOLS;
var _default = FilerobotImageEditor;
exports["default"] = _default;