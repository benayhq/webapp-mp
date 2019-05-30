"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require("./constants.js");

var contants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultState = {
  userInfo: {},
  updateUser: {},
  changeAgent: {}
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  console.log('action.type', action);
  switch (action.type) {
    case contants.UPDATE_USER_INFO:
      return _extends({}, state, { updateUser: action.payload.content });
    case contants.WX_USER_LOGIN:
      return _extends({}, state, { userInfo: action.payload.content });
    case contants.USER_AGENT_TRUE:
      return _extends({}, state, { changeAgent: action.payload.content });
    default:
      return state;
  }
};