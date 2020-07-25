"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.images = exports.useKeyPress = exports.useResize = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Custom Hook for resize
var useResize = function useResize(myRef) {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  (0, _react.useEffect)(function () {
    if (myRef.current) {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    }

    var handleResize = function handleResize() {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);
  return {
    width: width,
    height: height
  };
}; // Custom hook for detecting keypress
// https://usehooks.com/useKeyPress/


exports.useResize = useResize;

var useKeyPress = function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      keyPressed = _useState6[0],
      setKeyPressed = _useState6[1]; // If pressed key is our target key then set to true


  function downHandler(_ref) {
    var key = _ref.key;

    if (key === targetKey) {
      setKeyPressed(true);
    }
  } // If released key is our target key then set to false


  var upHandler = function upHandler(_ref2) {
    var key = _ref2.key;

    if (key === targetKey) {
      setKeyPressed(false);
    }
  }; // Add event listeners


  (0, _react.useEffect)(function () {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};

exports.useKeyPress = useKeyPress;
var images = ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80", "https://images.unsplash.com/photo-1595064642091-3b0e22d8de27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80", "https://images.unsplash.com/photo-1594992029224-c7948d15c175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80", "https://images.unsplash.com/photo-1594936702539-125edeb46186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80", "https://images.unsplash.com/photo-1595054607409-0f03050ec7c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80", "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80", "https://images.unsplash.com/photo-1594997756045-a359e2b54c4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2801&q=80"];
exports.images = images;

//# sourceMappingURL=helpers.js.map