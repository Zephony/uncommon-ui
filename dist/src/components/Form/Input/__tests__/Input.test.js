"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _styledComponents = require("styled-components");

var _ = _interopRequireDefault(require("../"));

var _theme = _interopRequireDefault(require("../../../../utils/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Input", function () {
  var labelText = "This is a label";
  var props = {
    type: "text",
    label: labelText
  };
  it("should render an input component", function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, /*#__PURE__*/_react.default.createElement(_.default, props))),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it("should contain a label", function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, /*#__PURE__*/_react.default.createElement(_.default, props))),
        getByText = _render2.getByText;

    expect(getByText(labelText)).toBeTruthy();
  });
});

//# sourceMappingURL=Input.test.js.map