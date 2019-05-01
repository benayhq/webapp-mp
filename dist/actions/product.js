"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProdcutList = undefined;

var _redux = require("../utils/redux.js");

var _product = require("../constants/product.js");

var _api = require("../constants/api.js");

var GetProdcutList = exports.GetProdcutList = function GetProdcutList(payload) {
  return (0, _redux.createAction)({
    type: _product.PRODUCT_OWNER,
    url: _api.API_PRODUCT_OWNER,
    payload: payload
  });
};