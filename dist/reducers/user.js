"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("../constants/user.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = {
  code: 'shawn'
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case _user.WECHAT_LOGIN:
      return [].concat(_toConsumableArray(state), [{
        code: action.code
      }]);
    default:
      return state;
  }
};

exports.default = userReducer;