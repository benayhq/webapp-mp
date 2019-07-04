"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchOrderDetail = exports.dispatchCreateComment = exports.dispatchUploadConfig = exports.dispatchOrderList = exports.dispatchCreateOrderDownLoadUrl = exports.dispatchCreateReseverOrder = exports.dispatchCreateOrder = exports.dispatchQueryProductInfo = undefined;

var _redux = require("../../../utils/redux.js");

var _constants = require("./constants.js");

var _api = require("../../../constants/api.js");

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

var dispatchCreateOrder = exports.dispatchCreateOrder = function dispatchCreateOrder(payload) {
  return (0, _redux.createAction)({
    type: _constants.CREATE_ORDER,
    url: _api.API_CREATE_ORDER,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchCreateReseverOrder = exports.dispatchCreateReseverOrder = function dispatchCreateReseverOrder(payload) {
  return (0, _redux.createAction)({
    type: _constants.CREATE_RESEVER_ORDER,
    url: _api.API_CREATE_RESEVER_ORDER,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchCreateOrderDownLoadUrl = exports.dispatchCreateOrderDownLoadUrl = function dispatchCreateOrderDownLoadUrl(payload) {
  return (0, _redux.createAction)({
    type: _constants.ORDER_ACTION_UPLOAD_DOWN,
    url: _api.API_UPLOAD_FILE,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};

var dispatchOrderList = exports.dispatchOrderList = function dispatchOrderList(payload) {
  return (0, _redux.createAction)({
    type: _constants.ORDER_LIST,
    url: _api.API_ORDER_LIST,
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

var dispatchCreateComment = exports.dispatchCreateComment = function dispatchCreateComment(payload) {
  return (0, _redux.createAction)({
    type: _constants.CREATE_COMMENT_IMAGE,
    url: _api.API_PUBLISH_COMMENT,
    fetchOptions: {
      method: 'POST'
    },
    payload: payload
  });
};

var dispatchOrderDetail = exports.dispatchOrderDetail = function dispatchOrderDetail(payload) {
  return (0, _redux.createAction)({
    type: _constants.ACTION_ORDER_DETAIL,
    url: _api.API_ORDER_DETAIL,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};