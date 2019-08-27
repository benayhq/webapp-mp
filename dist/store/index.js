"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = configStore;

var _redux = require("../npm/redux/lib/redux.js");

var _index = require("../npm/redux-thunk/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../pages/user/store/index.js");

var _index4 = require("../pages/product/store/index.js");

var _index5 = require("../pages/order/store/index.js");

var _index6 = require("../pages/active/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;

var middlewares = [_index2.default];
// if (process.env.NODE_ENV === 'development') {
//       middlewares.push(require('redux-logger').createLogger())
// }

var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares)
// other store enhancers if any
);

var reducer = (0, _redux.combineReducers)({
  user: _index3.reducer,
  product: _index4.reducer,
  order: _index5.reducer,
  active: _index6.reducer
});

function configStore() {
  var store = (0, _redux.createStore)(reducer, enhancer);
  return store;
}