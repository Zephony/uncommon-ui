"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Arrow = _interopRequireDefault(require("../Slider/Arrow"));

var _ImageTile = require("../ImageTile");

var _helpers = require("../../utils/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 25px !important;\n  color: #fafafa;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  background-color: ", ";\n  border-radius: 50px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100px;\n  width: 75%;\n  height: 60%;\n  background-image: url('", "');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Overlay = _styledComponents.default.div(_templateObject());

var Image = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.src;
});

var ImageTileWrapper = _styledComponents.default.div(_templateObject3());

var CloseWrapper = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.secondary;
});

var Close = _styledComponents.default.i(_templateObject5());

var CloseIcon = function CloseIcon(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(CloseWrapper, {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(Close, {
    className: "material-icons"
  }, "close"));
};
/**
 * "History is a gallery of pictures in which there are few originals and many copies." - Alexis de Tocqueville
 */


var Gallery = function Gallery(_ref2) {
  var images = _ref2.images,
      onClose = _ref2.onClose,
      _ref2$initialIndex = _ref2.initialIndex,
      initialIndex = _ref2$initialIndex === void 0 ? 0 : _ref2$initialIndex;

  var _useState = (0, _react.useState)(initialIndex),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var leftPress = (0, _helpers.useKeyPress)("ArrowLeft");
  var rightPress = (0, _helpers.useKeyPress)("ArrowRight");
  var escPress = (0, _helpers.useKeyPress)("Escape");
  (0, _react.useEffect)(function () {
    if (leftPress) {
      prevImage();
    } else if (rightPress) {
      nextImage();
    } else if (escPress) {
      onClose();
    }
  }, [leftPress, rightPress, escPress]);

  var nextImage = function nextImage() {
    // If at the last image
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  var prevImage = function prevImage() {
    // If at the first image
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  var onThumbnailClick = function onThumbnailClick(i) {
    setCurrentIndex(i);
  };

  return /*#__PURE__*/_react.default.createElement(Overlay, null, /*#__PURE__*/_react.default.createElement(Image, {
    src: images[currentIndex]
  }), /*#__PURE__*/_react.default.createElement(_Arrow.default, {
    onClick: prevImage,
    direction: "left",
    color: "#fff",
    fontSize: "65px",
    hideBorder: true
  }), /*#__PURE__*/_react.default.createElement(_Arrow.default, {
    onClick: nextImage,
    direction: "right",
    color: "#fff",
    fontSize: "65px",
    hideBorder: true
  }), /*#__PURE__*/_react.default.createElement(CloseIcon, {
    onClick: onClose
  }), /*#__PURE__*/_react.default.createElement(ImageTileWrapper, null, /*#__PURE__*/_react.default.createElement(_ImageTile.ImageTile, {
    images: images,
    width: "62px",
    height: "62px",
    onImageClick: function onImageClick(image, i) {
      return onThumbnailClick(i);
    },
    hasFocus: currentIndex
  })));
};

Gallery.propTypes = {
  /**
   * Initial image to start with
   */
  initialIndex: _propTypes.default.number,

  /**
   * Array of image urls
   */
  images: _propTypes.default.array.isRequired,

  /**
   * Event when close button is clicked
   */
  onClose: _propTypes.default.func.isRequired
};
var _default = Gallery;
exports.default = _default;

//# sourceMappingURL=Gallery.js.map