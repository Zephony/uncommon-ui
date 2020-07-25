"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  font-size: 14px;\n  color: #585858;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: text-text-bottom;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  color: white;\n  font-size: 14px !important;\n  cursor: ", ";\n  background: ", ";\n  border-radius: 3px;\n  transition: ease 100ms;\n  border: 1px solid\n    ", ";\n  opacity: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HiddenCheckbox = _styledComponents.default.input.attrs({
  type: "checkbox",
  hidden: true
})(_templateObject(), ""
/* Hide checkbox visually but remain accessible to screen readers. */
, ""
/* Source: https://polished.js.org/docs/#hidevisually */
);

var LabelWrapper = _styledComponents.default.label(_templateObject2());

var Icon = _styledComponents.default.i(_templateObject3(), function (props) {
  return props.disabled ? "default" : "pointer";
}, function (props) {
  return props.checked ? props.theme.colors.primary : "white";
}, function (props) {
  return props.checked ? props.theme.colors.primary : "#CACACA";
}, function (props) {
  return props.disabled && props.checked ? "0.3" : "1";
});

var CheckboxContainer = _styledComponents.default.div(_templateObject4());

var Label = _styledComponents.default.span(_templateObject5());
/**
 * "If you don't keep hatred in check it will breed destruction." - Daryl Davis
 */


var Checkbox = function Checkbox(_ref) {
  var _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange,
      labelText = _ref.labelText,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      props = _objectWithoutProperties(_ref, ["checked", "onChange", "labelText", "disabled"]);

  return /*#__PURE__*/_react.default.createElement(LabelWrapper, null, /*#__PURE__*/_react.default.createElement(CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(HiddenCheckbox, _extends({
    checked: checked,
    onChange: disabled ? function () {} : onChange
  }, props)), /*#__PURE__*/_react.default.createElement(Icon, {
    disabled: disabled,
    checked: checked,
    className: "material-icons"
  }, "done")), labelText && /*#__PURE__*/_react.default.createElement(Label, null, labelText));
};

Checkbox.propTypes = {
  /**
   * If checkbox is checked or not
   */
  checked: _propTypes.default.bool,

  /**
   * Disables the checkbox
   */
  disabled: _propTypes.default.bool,

  /**
   * Text to display for label
   */
  labelText: _propTypes.default.string,

  /**
   * Accepts an onChange event
   */
  onChange: _propTypes.default.func
};
var _default = Checkbox;
exports.default = _default;

//# sourceMappingURL=Checkbox.js.map