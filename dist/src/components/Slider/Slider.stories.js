"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoplay = exports.initialIndex = exports.infiniteSlider = exports.defaultSlider = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = _interopRequireDefault(require("./"));

var _Arrow = _interopRequireDefault(require("./Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 600px;\n  height: 300px;\n  background: #5f9ea0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  color: black;\n  font-size: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var Item = _styledComponents.default.div(_templateObject2());

var Random = _styledComponents.default.div(_templateObject3());

var _default = {
  title: "Slider",
  parameters: {
    component: _.default,
    subcomponents: {
      Arrow: _Arrow.default
    }
  }
};
exports.default = _default;

var defaultSlider = function defaultSlider() {
  var settings = {
    width: 800 // Slider width

  };
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(_.default, settings, /*#__PURE__*/_react.default.createElement(Item, null, "Slide Content"), /*#__PURE__*/_react.default.createElement("img", {
    width: 800,
    src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    alt: "A bridge"
  }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(Random, {
    width: "600px",
    height: "300px"
  }))));
};

exports.defaultSlider = defaultSlider;

var infiniteSlider = function infiniteSlider() {
  var settings = {
    width: 800,
    // Slider width
    infinite: true
  };
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(_.default, settings, /*#__PURE__*/_react.default.createElement(Item, null, "Slide Content"), /*#__PURE__*/_react.default.createElement("img", {
    width: 800,
    src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    alt: "A bridge"
  }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(Random, {
    width: "600px",
    height: "300px"
  }))));
};

exports.infiniteSlider = infiniteSlider;

var initialIndex = function initialIndex() {
  var settings = {
    width: 800,
    // Slider width
    infinite: true,
    initial: 1
  };
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(_.default, settings, /*#__PURE__*/_react.default.createElement(Item, null, "Slide Content"), /*#__PURE__*/_react.default.createElement("img", {
    width: 800,
    src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    alt: "A bridge"
  }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(Random, {
    width: "600px",
    height: "300px"
  }))));
};

exports.initialIndex = initialIndex;

var autoplay = function autoplay() {
  var settings = {
    width: 800,
    // Slider width
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(_.default, settings, /*#__PURE__*/_react.default.createElement(Item, null, "Slide Content"), /*#__PURE__*/_react.default.createElement("img", {
    width: 800,
    src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    alt: "A bridge"
  }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(Random, {
    width: "600px",
    height: "300px"
  }))));
};

exports.autoplay = autoplay;

//# sourceMappingURL=Slider.stories.js.map