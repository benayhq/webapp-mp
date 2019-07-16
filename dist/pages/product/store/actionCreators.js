"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchUpdateProductInfo = exports.dispatchQueryProductInfo = exports.dispatchDeleteProduct = exports.UpdateUserInfo = exports.WeChatLogin = exports.dispatchSelectProduct = exports.dispatchCategoryList = exports.dispatchActiveInfo = exports.dispatchDownLoadUrl = exports.dispatchUploadConfig = exports.dispatchCreateProduct = exports.dispatchProductList = undefined;

var _constants = require("./constants.js");

var _redux = require("../../../utils/redux.js");

var _api = require("../../../constants/api.js");

var dispatchProductList = exports.dispatchProductList = function dispatchProductList(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_PRODUCT_LIST,
    url: _api.API_PRODUCT_OWNER,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchCreateProduct = exports.dispatchCreateProduct = function dispatchCreateProduct(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_PRODUCT_CREATE,
    url: _api.API_PORDUCT_CREATE,
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

var dispatchActiveInfo = exports.dispatchActiveInfo = function dispatchActiveInfo(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTIVE_INFO_ACTION,
    url: _api.API_ACTIVE_INFO,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchCategoryList = exports.dispatchCategoryList = function dispatchCategoryList(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_PRODUCT_CATEOGRY,
    url: _api.API_PRODUCT_CATEGORY,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchSelectProduct = exports.dispatchSelectProduct = function dispatchSelectProduct(payload) {
  return function (dispatch) {
    dispatch({ type: _constants.ACTION_SELECT_PRODUCT, value: payload });
  };
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

var dispatchDeleteProduct = exports.dispatchDeleteProduct = function dispatchDeleteProduct(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_PRODUCT_DELETE,
    url: _api.API_DELETE_PRODUCT + "?productId=" + payload.productId,
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

var dispatchUpdateProductInfo = exports.dispatchUpdateProductInfo = function dispatchUpdateProductInfo(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_PRODUCT_INFO,
    url: _api.API_PRODUCT_UPDATE,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};