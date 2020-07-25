"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisabledButtons = exports.Buttons = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 500px;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var _default = {
  title: "Button",
  parameters: {
    component: _.default
  }
};
exports.default = _default;

var Buttons = function Buttons() {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(_.default, {
    onClick: (0, _addonActions.action)("Clicked"),
    type: "primary"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_.default, {
    onClick: (0, _addonActions.action)("Clicked"),
    type: "secondary"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_.default, {
    onClick: (0, _addonActions.action)("Clicked"),
    type: "link"
  }, "Link"));
};

exports.Buttons = Buttons;

var DisabledButtons = function DisabledButtons() {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(_.default, {
    onClick: (0, _addonActions.action)("Clicked"),
    type: "primary",
    disabled: true
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_.default, {
    onClick: (0, _addonActions.action)("Clicked"),
    type: "secondary",
    disabled: true
  }, "Secondary"));
};

exports.DisabledButtons = DisabledButtons;

//# sourceMappingURL=Button.stories.js.map