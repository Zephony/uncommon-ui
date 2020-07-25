"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.26);\n  position: absolute;\n  top: 21px;\n  left: 12px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n  letter-spacing: 0;\n  line-height: 18px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      padding-left: 42px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: 50px;\n  border-radius: 6px;\n  border: solid 1px\n    ", ";\n  padding: 14px 10px;\n  font-size: 15px;\n  letter-spacing: 0;\n  line-height: 22px;\n  box-sizing: border-box;\n  margin: 5px 0;\n  ", "\n\n  &:focus {\n    outline: none !important;\n    border-color: ", ";\n  }\n\n  &::placeholder {\n    opacity: 0.5;\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 14px;\n  color: ", ";\n  font-weight: 500;\n  line-height: 21px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var Label = _styledComponents.default.label(_templateObject2(), function (props) {
  return props.theme.colors.secondary;
});

var StyledInput = _styledComponents.default.input(_templateObject3(), function (props) {
  return props.width || "400px";
}, function (props) {
  return props.error ? props.theme.colors.error : "#DADADA";
}, function (props) {
  return props.icon && (0, _styledComponents.css)(_templateObject4());
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.secondary;
});

var Error = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.error;
});

var Icon = _styledComponents.default.i(_templateObject6());
/**
 * "You can much better have an influence on the debate when you sit at the bargaining table and you can give input." - Angela Merkel
 */


var Input = function Input(_ref) {
  var label = _ref.label,
      width = _ref.width,
      error = _ref.error,
      style = _ref.style,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      props = _objectWithoutProperties(_ref, ["label", "width", "error", "style", "icon", "iconClassName"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input"
  }, label && /*#__PURE__*/_react.default.createElement(Label, null, label), /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(StyledInput, _extends({
    style: _objectSpread({}, style),
    error: error,
    width: width,
    icon: icon
  }, props)), icon && /*#__PURE__*/_react.default.createElement(Icon, {
    className: "".concat(iconClassName, " material-icons")
  }, icon), error && /*#__PURE__*/_react.default.createElement(Error, null, error)));
};

Input.propTypes = {
  /**
   * Label for the input
   */
  label: _propTypes.default.string,

  /**
   * Any CSS width value
   */
  width: _propTypes.default.string,

  /**
   * An error message that sets the input to error state
   */
  error: _propTypes.default.string,

  /**
   * Material icon name
   */
  icon: _propTypes.default.string
};
var _default = Input;
exports.default = _default;

//# sourceMappingURL=index.js.map