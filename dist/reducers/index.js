"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _user = require("./user.js");

var _user2 = _interopRequireDefault(_user);

var _product = require("./product.js");

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  user: _user2.default,
  productList: _product2.default
});