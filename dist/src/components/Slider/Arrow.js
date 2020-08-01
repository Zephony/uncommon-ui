"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      border: none;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          right: 10px;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          left: 10px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  cursor: ", ";\n  display: flex;\n  align-items: center;\n  color: ", ";\n  border: ", ";\n  border-radius: 50px;\n  ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.disabled ? "default" : "pointer";
}, function (props) {
  return props.disabled ? "#eee" : props.color;
}, function (props) {
  return props.disabled ? "1px solid #eee" : "1px solid #000";
}, function (props) {
  return props.direction === "left" ? (0, _styledComponents.css)(_templateObject2()) : (0, _styledComponents.css)(_templateObject3());
}, function (props) {
  return props.hideBorder && (0, _styledComponents.css)(_templateObject4());
});

var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#000" : _ref$color,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 40 : _ref$fontSize,
      hideBorder = _ref.hideBorder;
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    onClick: disabled ? function () {} : onClick,
    direction: direction,
    disabled: disabled,
    color: color,
    hideBorder: hideBorder
  }, direction === "left" ? /*#__PURE__*/_react.default.createElement(_ChevronLeft.default, {
    style: {
      fontSize: fontSize
    }
  }) : /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    style: {
      fontSize: fontSize
    }
  }));
};

Arrow.propTypes = {
  /**
   * The direction of the arrow
   */
  direction: _propTypes.default.oneOf(["left", "right"]),

  /**
   * Accepts an onClick event
   */
  onClick: _propTypes.default.func,

  /**
   * Disables the arrow
   */
  disabled: _propTypes.default.bool,

  /**
   * Size of the arrow
   */
  fontSize: _propTypes.default.number
};
var _default = Arrow;
exports.default = _default;

//# sourceMappingURL=Arrow.js.map