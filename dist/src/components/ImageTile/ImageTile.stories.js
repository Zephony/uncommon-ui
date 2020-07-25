"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoCountWithWrapper = exports.overrideThumbnailStyles = exports.withoutCount = exports.customDimensions = exports.tilesWithClose = exports.defaultTiles = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("./"));

var _helpers = require("../../utils/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 800px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = {
  title: "Image Tile",
  parameters: {
    component: _.default
  }
};
exports.default = _default;

var Wrapper = _styledComponents.default.div(_templateObject());

var defaultTiles = function defaultTiles() {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    images: _helpers.images,
    count: 4,
    onMoreClick: (0, _addonActions.action)("Clicked"),
    onImageClick: (0, _addonActions.action)("Clicked")
  });
};

exports.defaultTiles = defaultTiles;

var tilesWithClose = function tilesWithClose() {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    images: _helpers.images,
    count: 4,
    onMoreClick: (0, _addonActions.action)("Clicked"),
    onClose: (0, _addonActions.action)("Clicked")
  });
};

exports.tilesWithClose = tilesWithClose;

var customDimensions = function customDimensions() {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    images: _helpers.images,
    width: "300px",
    height: "400px",
    count: 3,
    onMoreClick: (0, _addonActions.action)("Clicked")
  });
};

exports.customDimensions = customDimensions;

var withoutCount = function withoutCount() {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    images: _helpers.images,
    width: "200px",
    height: "200px",
    onMoreClick: (0, _addonActions.action)("Clicked")
  });
};

exports.withoutCount = withoutCount;

var overrideThumbnailStyles = function overrideThumbnailStyles() {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    images: _helpers.images,
    count: 4,
    onMoreClick: (0, _addonActions.action)("Clicked"),
    onImageClick: (0, _addonActions.action)("Clicked"),
    thumbnailStyle: {
      borderRadius: "15px"
    }
  });
};

exports.overrideThumbnailStyles = overrideThumbnailStyles;

var autoCountWithWrapper = function autoCountWithWrapper() {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(_.default, {
    images: _helpers.images.slice(0, 2),
    width: "200px",
    height: "200px",
    onMoreClick: (0, _addonActions.action)("Clicked"),
    autoCount: true
  }));
};

exports.autoCountWithWrapper = autoCountWithWrapper;

//# sourceMappingURL=ImageTile.stories.js.map