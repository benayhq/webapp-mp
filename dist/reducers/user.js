"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _user = require("../constants/user.js");

var INITIAL_STATE = {
  userInfo: {}
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _user.WECHAT_LOGIN:
      return _extends({}, state, {
        userInfo: _extends({}, action.payload, {
          login: true
        })
      });
    case _user.USER_INFO:
      return _extends({}, state, {
        userInfo: _extends({}, action.payload)
      });
    default:
      return state;
  }
};

exports.default = userReducer;