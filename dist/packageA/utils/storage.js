"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuthInfo = undefined;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAuthInfo = exports.getAuthInfo = function getAuthInfo() {
  var result = _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
    return res.data;
  });
  return result;
};