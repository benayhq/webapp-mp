"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchReservationPlan = exports.dispatchUploadConfig = exports.ChangeToAgent = exports.WeChatLogin = exports.UpdateUserInfo = undefined;

var _constants = require("./constants.js");

var _redux = require("../../../utils/redux.js");

var _api = require("../../../constants/api.js");

var UpdateUserInfo = exports.UpdateUserInfo = function UpdateUserInfo(payload) {
  return (0, _redux.createAction)({
    type: _constants.UPDATE_USER_INFO,
    url: _api.API_USER_INFO,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var WeChatLogin = exports.WeChatLogin = function WeChatLogin(payload) {
  return (0, _redux.createAction)({
    type: _constants.WX_USER_LOGIN,
    url: _api.API_USER_LOGIN,
    fetchOptions: {
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded'
    },
    payload: payload
  });
};

var ChangeToAgent = exports.ChangeToAgent = function ChangeToAgent(payload) {
  return (0, _redux.createAction)({
    type: _constants.USER_AGENT_TRUE,
    url: _api.API_USER_AGENT,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchUploadConfig = exports.dispatchUploadConfig = function dispatchUploadConfig(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_UPLOAD_CONFIG,
    url: _api.API_UPLOAD_CONFIG,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchReservationPlan = exports.dispatchReservationPlan = function dispatchReservationPlan() {
  return (0, _redux.createAction)({
    type: _constants.ACTION_USER_AMOUNT,
    url: _api.API_INIT_AMOUNT,
    fetchOptions: {
      method: 'POST'
    }
  });
};