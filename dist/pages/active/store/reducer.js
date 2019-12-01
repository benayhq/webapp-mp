'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants.js');

var defaultState = {
  product: [],
  activeName: '',
  groupCount: '',
  startTime: '',
  endTime: '',
  activePrice: '',
  imgs: [],
  tempfiles: [],
  address: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  console.log('action', action.value);
  switch (action.type) {
    case _constants.PRODUCT_PUBLISH_INFO:
      return _extends({}, state, {
        product: action.value
      });
    case _constants.ACTION_ACTIVE_NAME:
      return _extends({}, state, {
        activeName: action.value
      });
    case _constants.ACTION_GROUP_COUNT:
      return _extends({}, state, {
        groupCount: action.value
      });
    case _constants.ACTION_START_TIME:
      return _extends({}, state, {
        startTime: action.value
      });
    case _constants.ACTION_END_TIME:
      return _extends({}, state, {
        endTime: action.value
      });
    case _constants.ACTION_PRODUCT_PRICE:
      return _extends({}, state, {
        activePrice: action.value
      });
    case _constants.ACTION_SAVE_UPLOADIMG:
      return _extends({}, state, {
        imgs: action.value
      });
    case _constants.ACTION_SAVE_TEMPFILES:
      return _extends({}, state, {
        tempfiles: action.value
      });
    case _constants.ACTION_SERVICE_ADDRESS:
      console.log('action.value ACTION_SERVICE_ADDRESS', action.value);
      return _extends({}, state, {
        address: action.value
      });
    default:
      return state;
  }
};