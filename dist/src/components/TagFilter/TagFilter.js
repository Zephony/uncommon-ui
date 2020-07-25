"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Form = require("../Form");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: 10px;\n  padding-right: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  height: 205px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  border-top: 1px solid #ededed;\n  border-bottom: 1px solid #ededed;\n  overflow-x: scroll;\n  scrollbar-width: thin;\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 2.5px;\n    background-color: #B3B3B3;\n    width: 5px;\n}\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 75px;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var Header = _styledComponents.default.div(_templateObject2());

var Content = _styledComponents.default.div(_templateObject3());

var Footer = _styledComponents.default.div(_templateObject4());

var ButtonWrapper = _styledComponents.default.div(_templateObject5());

var CheckboxWrapper = _styledComponents.default.div(_templateObject6());
/**
 * "There is a time and a place for things. Sometimes one needs to put a filter on oneself. That can be a good thing." - Tori Amos
 */


var TagFilter = function TagFilter(_ref) {
  var data = _ref.data,
      setData = _ref.setData,
      onCancel = _ref.onCancel,
      onSubmit = _ref.onSubmit,
      onClear = _ref.onClear;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(data),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredData = _useState4[0],
      setFilteredData = _useState4[1];

  var handleCheckboxChange = function handleCheckboxChange(e, id) {
    var updatedData = _toConsumableArray(data);

    updatedData[updatedData.findIndex(function (el) {
      return el.id === id;
    })].isChecked = e.target.checked;
    setData(updatedData);
  };

  var onSearchChange = function onSearchChange(e) {
    setValue(e.target.value);
    var value = e.target.value;
    var filteredData = data.filter(function (el) {
      return el.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  var onClearClick = function onClearClick() {
    setFilteredData(data);
    setValue("");
  };

  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Header, null, /*#__PURE__*/_react.default.createElement(_Form.Input, {
    type: "text",
    value: value,
    onChange: onSearchChange,
    icon: "search",
    width: "300px",
    className: "tag-input" // To override input styles
    ,
    iconClassName: "tag-input-icon" // To override icon styles
    ,
    placeholder: "Search Tags"
  })), /*#__PURE__*/_react.default.createElement(Content, null, filteredData.map(function (_ref2) {
    var name = _ref2.name,
        id = _ref2.id,
        isChecked = _ref2.isChecked;
    return /*#__PURE__*/_react.default.createElement(CheckboxWrapper, {
      key: id
    }, /*#__PURE__*/_react.default.createElement(_Form.Checkbox, {
      checked: isChecked,
      labelText: name,
      onChange: function onChange(e) {
        return handleCheckboxChange(e, id);
      }
    }));
  })), /*#__PURE__*/_react.default.createElement(Footer, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: onClear || onClearClick,
    type: "link"
  }, "Clear All"), /*#__PURE__*/_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: onCancel,
    type: "primary"
  }, "Cancel")), /*#__PURE__*/_react.default.createElement(ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: onSubmit,
    type: "secondary"
  }, "Submit"))));
};

TagFilter.propTypes = {
  /**
   * Data to be displayed
   */
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    name: _propTypes.default.string
  })).isRequired,

  /**
   * To update the state of data
   */
  setData: _propTypes.default.func.isRequired,

  /**
   * Accepts an event when cancel button is clicked
   */
  onCancel: _propTypes.default.func,

  /**
   * Accepts an event when submit button is clicked
   */
  onSubmit: _propTypes.default.func,

  /**
   * Accepts an event when clear button is clicked
   */
  onClear: _propTypes.default.func
};
var _default = TagFilter;
exports.default = _default;

//# sourceMappingURL=TagFilter.js.map