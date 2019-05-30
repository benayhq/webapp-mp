"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeChatLogin = exports.initUserInfo = exports.initWeChat = undefined;

var _api = require("../constants/api.js");

var _redux = require("../utils/redux.js");

var _user = require("../constants/user.js");

var initWeChat = exports.initWeChat = function initWeChat(value) {
  return {
    type: _user.WECHAT_LOGIN,
    code: value
  };
};

var initUserInfo = exports.initUserInfo = function initUserInfo(payload) {
  return (0, _redux.createAction)({
    type: _user.USER_INFO,
    url: _api.API_USER_INFO,
    fetchOptions: {
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded'
    },
    payload: payload
  });
};

var WeChatLogin = exports.WeChatLogin = function WeChatLogin(payload) {
  return (0, _redux.createAction)({
    type: _user.WECHAT_LOGIN,
    url: _api.API_USER_LOGIN,
    fetchOptions: {
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded'
    },
    payload: payload
  });
};