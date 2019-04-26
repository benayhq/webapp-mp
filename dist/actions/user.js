"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeChatLogin = exports.initWeChat = undefined;

var _user = require("../constants/user.js");

var initWeChat = exports.initWeChat = function initWeChat(value) {
  return {
    type: _user.WECHAT_LOGIN,
    code: value
  };
};

var WeChatLogin = exports.WeChatLogin = function WeChatLogin(value) {
  return function (dispatch) {
    var action = initWeChat(value);
    dispatch(action);
  };
};