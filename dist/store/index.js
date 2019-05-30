"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = require("../npm/redux/lib/redux.js");

var _index = require("../npm/redux-thunk/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _reduxLogger = require("../npm/redux-logger/dist/redux-logger.js");

var _index3 = require("../pages/user/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_index2.default, (0, _reduxLogger.createLogger)()];

var reducer = (0, _redux.combineReducers)({
  user: _index3.reducer
});

function configStore() {
  var store = (0, _redux.createStore)(reducer, _redux.applyMiddleware.apply(undefined, middlewares));
  return store;
}