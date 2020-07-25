"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../utils/helpers");

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

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px !important;\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  color: #eaf1fd;\n  cursor: pointer;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 0;\n  line-height: 24px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  border-radius: 4px;\n  position: absolute;\n  background-color: rgba(52, 52, 52, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      position: absolute;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  border-radius: 4px;\n  border: ", ";\n  background-image: url('", "');\n  background-size: ", ";\n  background-repeat: no-repeat;\n  background-position: ", ";\n  margin-right: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  ", "\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var ThumbnailWrapper = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.maintainAspectRatio ? "100%" : props.width;
}, function (props) {
  return props.maintainAspectRatio ? "400px" : props.height;
});

var Thumbnail = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.maintainAspectRatio ? "100%" : props.width;
}, function (props) {
  return props.maintainAspectRatio ? "400px" : props.height;
}, function (props) {
  return props.hasFocus ? "2px solid ".concat(props.theme.colors.primary) : "none";
}, function (props) {
  return props.src;
}, function (props) {
  return props.maintainAspectRatio ? "contain" : "cover";
}, function (props) {
  return props.maintainAspectRatio ? "left" : "center";
}, function (props) {
  return props.isAbsolute && (0, _styledComponents.css)(_templateObject4());
});

var OverlayWrapper = _styledComponents.default.div(_templateObject5());

var Overlay = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var Count = _styledComponents.default.div(_templateObject7());

var CloseIcon = _styledComponents.default.i(_templateObject8());

var getTilesCount = function getTilesCount(imageWidth, wrapperWidth, images) {
  var count = 0;
  var totalImageWidth = imageWidth + 10;
  images.forEach(function (image) {
    if (totalImageWidth > wrapperWidth) {
      return count;
    } else {
      totalImageWidth = totalImageWidth + imageWidth + 10;
      count = count + 1;
    }
  });
  return count;
};
/**
 * "When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence." - Ansel Adams
 */


var ImageTile = function ImageTile(_ref) {
  var images = _ref.images,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "150px" : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "150px" : _ref$height,
      count = _ref.count,
      onMoreClick = _ref.onMoreClick,
      onImageClick = _ref.onImageClick,
      thumbnailStyle = _ref.thumbnailStyle,
      hasFocus = _ref.hasFocus,
      autoCount = _ref.autoCount,
      onClose = _ref.onClose;
  var componentRef = (0, _react.useRef)(); // Get width of the wrapper component

  var _useResize = (0, _helpers.useResize)(componentRef),
      wrapperWidth = _useResize.width;

  var imageWidth = parseInt(width.match(/\d/g, "").join(""));

  var _useState = (0, _react.useState)(hasFocus),
      _useState2 = _slicedToArray(_useState, 2),
      currentFocus = _useState2[0],
      setCurrentFocus = _useState2[1]; // If count not specified


  var tileCount = autoCount ? getTilesCount(imageWidth, wrapperWidth, images) : count || images.length + 1;
  (0, _react.useEffect)(function () {
    setCurrentFocus(hasFocus);
  }, [hasFocus]);

  var onThumbnailClick = function onThumbnailClick(image, i) {
    // What the user passes
    onImageClick(image, i);
    setCurrentFocus(i);
  };

  console.log("Tile Count", tileCount);
  console.log("Image Count", images.length);
  var imageList = images.length > tileCount ? images.slice(0, tileCount - 1) : images;
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    ref: componentRef
  }, imageList.map(function (image, i) {
    return /*#__PURE__*/_react.default.createElement(ThumbnailWrapper, null, /*#__PURE__*/_react.default.createElement(Thumbnail, {
      key: i,
      onClick: function onClick() {
        return onThumbnailClick(image, i);
      },
      src: image,
      width: width,
      height: height,
      style: _objectSpread({}, thumbnailStyle),
      hasFocus: typeof hasFocus === "number" && currentFocus === i,
      maintainAspectRatio: images.length === 1
    }), onClose && /*#__PURE__*/_react.default.createElement(CloseIcon, {
      onClick: onClose,
      className: "material-icons"
    }, "cancel"));
  }), images.length > tileCount && /*#__PURE__*/_react.default.createElement(OverlayWrapper, {
    onClick: onMoreClick
  }, /*#__PURE__*/_react.default.createElement(Thumbnail, {
    src: images[tileCount - 1],
    width: width,
    height: height,
    isAbsolute: true,
    style: _objectSpread({}, thumbnailStyle)
  }), /*#__PURE__*/_react.default.createElement(Overlay, {
    width: width,
    height: height,
    style: _objectSpread({}, thumbnailStyle)
  }, /*#__PURE__*/_react.default.createElement(Count, null, "+", images.length - tileCount))));
};

ImageTile.propTypes = {
  /**
   * The width of each thumbnail
   */
  width: _propTypes.default.string,

  /**
   * The height of each thumbnail
   */
  height: _propTypes.default.string,

  /**
   * Array of image urls
   */
  images: _propTypes.default.array.isRequired,

  /**
   * Count of tiles to show
   */
  count: _propTypes.default.number,

  /**
   * Sets tiles based on the width of wrapper element
   */
  autoCount: _propTypes.default.bool,

  /**
   * Click event handler when one of the thumbnails is clicked
   */
  onImageClick: _propTypes.default.func,

  /**
   * Click event handler when more images is clicked
   */
  onMoreClick: _propTypes.default.func,

  /**
   * Click event handler for a close icon
   */
  onClose: _propTypes.default.func,

  /**
   * Override thumbnail styles
   */
  thumbnailStyle: _propTypes.default.object,

  /**
   * Accepts the index that it should start focus with
   */
  hasFocus: _propTypes.default.number
};
var _default = ImageTile;
exports.default = _default;

//# sourceMappingURL=ImageTile.js.map