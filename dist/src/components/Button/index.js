"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  min-width: ", ";\n  width: auto;\n  height: 40px;\n  padding: 8px 35px;\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  ", ";\n  ", ";\n  ", ";\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: initial;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  color: ", ";\n  padding: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  color: ", ";\n  border: 1px solid ", ";\n  &:hover:enabled,\n  &:focus:enabled {\n    background-color: ", ";\n    color: #fff;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: #fff;\n  border: 1px solid ", ";\n  &:hover:enabled,\n  &:focus:enabled {\n    background-color: #fff;\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles for a primary button
var primary = (0, _styledComponents.css)(_templateObject(), function (props) {
  var _props$theme$colors$p, _props$theme, _props$theme$colors;

  return (_props$theme$colors$p = (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$colors = _props$theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.primary) !== null && _props$theme$colors$p !== void 0 ? _props$theme$colors$p : "#e2863d";
}, function (props) {
  var _props$theme$colors$p2, _props$theme2, _props$theme2$colors;

  return (_props$theme$colors$p2 = (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$colors = _props$theme2.colors) === null || _props$theme2$colors === void 0 ? void 0 : _props$theme2$colors.primary) !== null && _props$theme$colors$p2 !== void 0 ? _props$theme$colors$p2 : "#e2863d";
}, function (props) {
  var _props$theme$colors$p3, _props$theme3, _props$theme3$colors;

  return (_props$theme$colors$p3 = (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : (_props$theme3$colors = _props$theme3.colors) === null || _props$theme3$colors === void 0 ? void 0 : _props$theme3$colors.primary) !== null && _props$theme$colors$p3 !== void 0 ? _props$theme$colors$p3 : "#e2863d";
}, function (props) {
  var _props$theme$colors$p4, _props$theme4, _props$theme4$colors;

  return (_props$theme$colors$p4 = (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : (_props$theme4$colors = _props$theme4.colors) === null || _props$theme4$colors === void 0 ? void 0 : _props$theme4$colors.primary) !== null && _props$theme$colors$p4 !== void 0 ? _props$theme$colors$p4 : "#e2863d";
}); // Styles for a secondary button

var secondary = (0, _styledComponents.css)(_templateObject2(), function (props) {
  var _props$theme$colors$p5, _props$theme5, _props$theme5$colors;

  return (_props$theme$colors$p5 = (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : (_props$theme5$colors = _props$theme5.colors) === null || _props$theme5$colors === void 0 ? void 0 : _props$theme5$colors.primary) !== null && _props$theme$colors$p5 !== void 0 ? _props$theme$colors$p5 : "#e2863d";
}, function (props) {
  var _props$theme$colors$p6, _props$theme6, _props$theme6$colors;

  return (_props$theme$colors$p6 = (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : (_props$theme6$colors = _props$theme6.colors) === null || _props$theme6$colors === void 0 ? void 0 : _props$theme6$colors.primary) !== null && _props$theme$colors$p6 !== void 0 ? _props$theme$colors$p6 : "#e2863d";
}, function (props) {
  var _props$theme$colors$p7, _props$theme7, _props$theme7$colors;

  return (_props$theme$colors$p7 = (_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : (_props$theme7$colors = _props$theme7.colors) === null || _props$theme7$colors === void 0 ? void 0 : _props$theme7$colors.primary) !== null && _props$theme$colors$p7 !== void 0 ? _props$theme$colors$p7 : "#e2863d";
});
var link = (0, _styledComponents.css)(_templateObject3(), function (props) {
  var _props$theme$colors$p8, _props$theme8, _props$theme8$colors;

  return (_props$theme$colors$p8 = (_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : (_props$theme8$colors = _props$theme8.colors) === null || _props$theme8$colors === void 0 ? void 0 : _props$theme8$colors.primary) !== null && _props$theme$colors$p8 !== void 0 ? _props$theme$colors$p8 : "#e2863d";
});

var StyledButton = _styledComponents.default.button(_templateObject4(), function (props) {
  return props.width;
}, function (props) {
  return props.type === "primary" ? primary : undefined;
}, function (props) {
  return props.type === "secondary" ? secondary : undefined;
}, function (props) {
  return props.type === "link" ? link : undefined;
});
/**
 * "A poet can write about a man slaying a dragon, but not about a man pushing a button that releases a bomb." - W. H. Auden
 */


var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "primary" : _ref$type,
      children = _ref.children,
      onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "121px" : _ref$width,
      props = _objectWithoutProperties(_ref, ["type", "children", "onClick", "disabled", "className", "width"]);

  return /*#__PURE__*/_react.default.createElement(StyledButton, _extends({
    className: className,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, props), children);
}; // Button.defaultProps = {
//   theme: {
//     colors: {
//       primary: "#e2863d"
//     }
//   }
// };


Button.propTypes = {
  /**
   * Type of the button
   */
  type: _propTypes.default.oneOf(["primary", "secondary", "link"]),

  /**
   * Disables the button
   */
  disabled: _propTypes.default.bool,

  /**
   * Accepts an onClick event
   */
  onClick: _propTypes.default.func,

  /*
   * Text of button
   */
  children: _propTypes.default.node
};
var _default = Button;
exports.default = _default;

//# sourceMappingURL=index.js.map