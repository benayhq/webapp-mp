"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchAdvertQuery = exports.dispatchQueryQrCode = exports.dispatchDownLoadUrl = exports.dispatchUploadConfig = exports.dispatchUploadFile = exports.dispatchQueryProductInfo = exports.dispatchCreateActive = exports.UpdateUserInfo = exports.dispatchPublishProduct = undefined;

var _redux = require("../../../utils/redux.js");

var _constants = require("./constants.js");

var _api = require("../../../constants/api.js");

var dispatchPublishProduct = exports.dispatchPublishProduct = function dispatchPublishProduct(payload) {
  return (0, _redux.createAction)({
    type: _constants.PRODUCT_PUBLISH_INFO,
    url: _api.API_PORDUCT_CREATE,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

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

var dispatchCreateActive = exports.dispatchCreateActive = function dispatchCreateActive(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTIVE_CREATE_ACTION,
    url: _api.API_ACTIVE_CREATE,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchQueryProductInfo = exports.dispatchQueryProductInfo = function dispatchQueryProductInfo(payload) {
  return (0, _redux.createAction)({
    type: _constants.PRODUCT_QUERY_INFO,
    url: _api.API_PRODUCT_INFO,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchUploadFile = exports.dispatchUploadFile = function dispatchUploadFile(payload) {
  return (0, _redux.createAction)({
    type: _constants.UPLOAD_FILE_IMAGE,
    url: _api.API_UPLOAD_FILE,
    fetchOptions: {
      method: 'GET'
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

var dispatchDownLoadUrl = exports.dispatchDownLoadUrl = function dispatchDownLoadUrl(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_UPLOAD_DOWN,
    url: _api.API_UPLOAD_FILE,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchQueryQrCode = exports.dispatchQueryQrCode = function dispatchQueryQrCode(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_QRCODE,
    url: _api.API_QRCODE,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchAdvertQuery = exports.dispatchAdvertQuery = function dispatchAdvertQuery(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_ADVERT_DATA,
    url: _api.API_ADVERT_LIST,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};