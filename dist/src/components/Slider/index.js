"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Arrow = _interopRequireDefault(require("./Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  background-image: url('", "');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transform: translateX(-", "px);\n  transition: transform ease-out ", "s;\n  height: 100%;\n  width: ", "px;\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", "px;\n  width: ", "px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SliderWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.width;
});

var SliderContent = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.translate;
}, function (props) {
  return props.transition;
}, function (props) {
  return props.width;
});

var Slide = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.content;
});
/**
 * "I know if I rest, I'll slide downhill fast." - Lee Kuan Yew
 */


var Slider = function Slider(_ref) {
  var children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 800 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 400 : _ref$height,
      infinite = _ref.infinite,
      _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? 0 : _ref$initial,
      autoplay = _ref.autoplay,
      _ref$autoplaySpeed = _ref.autoplaySpeed,
      autoplaySpeed = _ref$autoplaySpeed === void 0 ? 3000 : _ref$autoplaySpeed;
  var ref = (0, _react.useRef)();

  var _useState = (0, _react.useState)({
    activeIndex: initial,
    translate: initial * width,
    transition: 0.45
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var translate = state.translate,
      transition = state.transition,
      activeIndex = state.activeIndex;
  var items = children;

  var nextSlide = function nextSlide() {
    // At the last slide
    if (activeIndex === items.length - 1) {
      return setState(_objectSpread({}, state, {
        translate: 0,
        activeIndex: 0
      }));
    }

    setState(_objectSpread({}, state, {
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width
    }));
  };

  var prevSlide = function prevSlide() {
    // At the first slide
    if (activeIndex === 0) {
      return setState(_objectSpread({}, state, {
        translate: (items.length - 1) * width,
        activeIndex: items.length - 1
      }));
    }

    setState(_objectSpread({}, state, {
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width
    }));
  };

  (0, _react.useEffect)(function () {
    if (autoplay) {
      var id = setInterval(function () {
        nextSlide();
      }, autoplaySpeed);
      return function () {
        return clearInterval(id);
      };
    }
  });
  return /*#__PURE__*/_react.default.createElement(SliderWrapper, {
    width: width,
    height: height,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(SliderContent, {
    translate: translate,
    transition: transition,
    width: width * items.length
  }, items.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(Slide, {
      key: i
    }, item);
  })), /*#__PURE__*/_react.default.createElement(_Arrow.default, {
    onClick: prevSlide,
    direction: "left",
    disabled: !infinite && activeIndex === 0
  }), /*#__PURE__*/_react.default.createElement(_Arrow.default, {
    onClick: nextSlide,
    direction: "right",
    disabled: !infinite && activeIndex === items.length - 1
  }));
};

Slider.propTypes = {
  /**
   * The width of the slider which the slides should also have
   */
  width: _propTypes.default.number,

  /**
   * The height of the slider which the slides should also have
   */
  height: _propTypes.default.number,

  /**
   * Initial index to start
   */
  initial: _propTypes.default.number,

  /**
   * Slider has no start or end
   */
  infinite: _propTypes.default.bool,

  /**
   * Slider changes automatically
   */
  autoplay: _propTypes.default.bool,

  /**
   * Speed for autoplay in ms
   */
  autoplaySpeed: _propTypes.default.number,

  /**
   * Usually elements that will be the slides
   */
  children: _propTypes.default.node
};
var _default = Slider;
exports.default = _default;

//# sourceMappingURL=index.js.map