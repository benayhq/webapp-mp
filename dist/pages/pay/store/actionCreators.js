"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchPrePay = undefined;

var _redux = require("../../../utils/redux.js");

var _constants = require("./constants.js");

var _api = require("../../../constants/api.js");

var dispatchPrePay = exports.dispatchPrePay = function dispatchPrePay(payload) {
  return (0, _redux.createAction)({
    type: _constants.PAY_PRE,
    url: _api.API_PRE_PAY + ("?id=" + payload.id),
    fetchOptions: {
      method: 'POST'
    }
  });
};