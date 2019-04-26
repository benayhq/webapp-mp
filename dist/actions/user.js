"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeChatLogin = exports.initWeChat = undefined;

var _user = require("../constants/user.js");

var _api = require("../constants/api.js");

var _redux = require("../utils/redux.js");

var initWeChat = exports.initWeChat = function initWeChat(value) {
  return {
    type: _user.WECHAT_LOGIN,
    code: value
  };
};

var WeChatLogin = exports.WeChatLogin = function WeChatLogin(payload) {
  return (0, _redux.createAction)({
    url: _api.API_CHECK_LOGIN,
    type: _user.WECHATLOGIIN,
    payload: payload
  });
};