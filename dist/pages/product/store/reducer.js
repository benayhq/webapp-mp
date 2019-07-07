"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require("./constants.js");

var defaultState = {
  productList: [],
  createProduct: {},
  selectedProduct: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.ACTION_PRODUCT_LIST:
      return _extends({}, state, {
        productList: action.value
      });
    case _constants.ACTION_PRODUCT_CREATE:
      return _extends({}, state, {
        createProduct: action.value
      });
    case _constants.ACTION_SELECT_PRODUCT:
      return _extends({}, state, {
        selectedProduct: action.payload
      });
    default:
      return state;
  }
};