"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagFilterWithWrapper = exports.DefaultTagFilter = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 600px;\n    position: fixed;\n    top: 200px;\n    left: 50%;\n    transform: translate(-50%, 0);\n    border-radius: 4px;\n    background-color: #ffffff;\n    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: "Tag Filter",
  parameters: {
    component: _.default
  }
};
exports.default = _default;
var items = [{
  id: "cbse",
  name: "CBSE",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "icse",
  name: "ICSE",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "jk",
  name: "J&K State Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "jharkand",
  name: "Jharkand",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "manipur",
  name: "Manipur Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "meghalaya",
  name: "Meghalaya Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "mizoram",
  name: "Mizoram Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "tn",
  name: "TN State Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "maharashtra",
  name: "Maharashtra State Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "punjab",
  name: "Punjab Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "goa",
  name: "Goa Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "mizoram",
  name: "Mizoram Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "tn",
  name: "TN State Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "maharashtra",
  name: "Maharashtra State Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "punjab",
  name: "Punjab Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "goa",
  name: "Goa Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "punjab",
  name: "Punjab Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "goa",
  name: "Goa Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "mizoram",
  name: "Mizoram Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "tn",
  name: "TN State Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "maharashtra",
  name: "Maharashtra State Board",
  category: {
    name: "Title 2",
    id: "title-2"
  }
}, {
  id: "punjab",
  name: "Punjab Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}, {
  id: "goa",
  name: "Goa Board",
  category: {
    name: "Title 1",
    id: "title-1"
  }
}];

var DefaultTagFilter = function DefaultTagFilter() {
  var _useState = (0, _react.useState)(items.map(function (item) {
    return _objectSpread({}, item, {
      isChecked: false
    });
  })),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_.default, {
    data: data,
    setData: setData,
    onCancel: (0, _addonActions.action)("Cancel"),
    onSubmit: (0, _addonActions.action)("Submit"),
    onClear: (0, _addonActions.action)("Clear")
  });
};

exports.DefaultTagFilter = DefaultTagFilter;

var TagFilterWithWrapper = function TagFilterWithWrapper() {
  var _useState3 = (0, _react.useState)(items.map(function (item) {
    return _objectSpread({}, item, {
      isChecked: false
    });
  })),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var Wrapper = _styledComponents.default.div(_templateObject());

  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(_.default, {
    data: data,
    setData: setData,
    onCancel: (0, _addonActions.action)("Cancel"),
    onSubmit: (0, _addonActions.action)("Submit"),
    onClear: (0, _addonActions.action)("Clear")
  }));
};

exports.TagFilterWithWrapper = TagFilterWithWrapper;

//# sourceMappingURL=TagFilter.stories.js.map