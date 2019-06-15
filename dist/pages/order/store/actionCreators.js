"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchDownLoadUrl = exports.dispatchCreateReseverOrder = exports.dispatchCreateOrder = exports.dispatchQueryProductInfo = undefined;

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

var dispatchDownLoadUrl = exports.dispatchDownLoadUrl = function dispatchDownLoadUrl(payload) {
  return (0, _redux.createAction)({
    type: _constants.ORDER_ACTION_UPLOAD_DOWN,
    url: _api.API_UPLOAD_FILE,
    fetchOptions: {
      method: 'GET'
    },
    payload: payload
  });
};