"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowHeight = getWindowHeight;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowHeight() {
  var showTabBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var info = _index2.default.getSystemInfoSync();

  var windowHeight = info.windowHeight,
      statusBarHeight = info.statusBarHeight,
      titleBarHeight = info.titleBarHeight;


  return windowHeight + "px";
}