"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchPublishProduct = undefined;

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