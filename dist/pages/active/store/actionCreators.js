"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUserInfo = exports.dispatchWeixinDecrypt = exports.dispatchCacheTempFiles = exports.dispatchSaveImg = exports.dispatchActivePrice = exports.disptachServiceAddress = exports.dispatchEndTime = exports.dispatchStartTime = exports.dispatchGroupCount = exports.disptachActiveName = exports.dispatchAdvertQuery = exports.dispatchQueryQrCode = exports.dispatchDownLoadUrl = exports.dispatchUploadConfig = exports.dispatchUploadFile = exports.dispatchQueryProductInfo = exports.dispatchCreateActive = exports.UpdateUserInfo = exports.dispatchPublishProduct = undefined;

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

var disptachActiveName = exports.disptachActiveName = function disptachActiveName(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_ACTIVE_NAME, value: payload });
  };
};

var dispatchGroupCount = exports.dispatchGroupCount = function dispatchGroupCount(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_GROUP_COUNT, value: payload });
  };
};

var dispatchStartTime = exports.dispatchStartTime = function dispatchStartTime(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_START_TIME, value: payload });
  };
};

var dispatchEndTime = exports.dispatchEndTime = function dispatchEndTime(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_END_TIME, value: payload });
  };
};

var disptachServiceAddress = exports.disptachServiceAddress = function disptachServiceAddress(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_SERVICE_ADDRESS, value: payload });
  };
};

var dispatchActivePrice = exports.dispatchActivePrice = function dispatchActivePrice(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_PRODUCT_PRICE, value: payload });
  };
};

var dispatchSaveImg = exports.dispatchSaveImg = function dispatchSaveImg(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_SAVE_UPLOADIMG, value: payload });
  };
};

var dispatchCacheTempFiles = exports.dispatchCacheTempFiles = function dispatchCacheTempFiles(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_SAVE_TEMPFILES, value: payload });
  };
};

var dispatchWeixinDecrypt = exports.dispatchWeixinDecrypt = function dispatchWeixinDecrypt(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_WEIXIN_DECRYPT,
    url: _api.API_WEIXIN_DECRYPT,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var GetUserInfo = exports.GetUserInfo = function GetUserInfo(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_GET_USER_INFO,
    url: _api.API_GET_USER_INFO,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};