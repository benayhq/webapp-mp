"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var subscribeToArray_1 = require("./subscribeToArray.js");
var subscribeToPromise_1 = require("./subscribeToPromise.js");
var subscribeToIterable_1 = require("./subscribeToIterable.js");
var subscribeToObservable_1 = require("./subscribeToObservable.js");
var isArrayLike_1 = require("./isArrayLike.js");
var isPromise_1 = require("./isPromise.js");
var isObject_1 = require("./isObject.js");
var iterator_1 = require("../symbol/iterator.js");
var observable_1 = require("../symbol/observable.js");
exports.subscribeTo = function (result) {
  if (!!result && typeof result[observable_1.observable] === 'function') {
    return subscribeToObservable_1.subscribeToObservable(result);
  } else if (isArrayLike_1.isArrayLike(result)) {
    return subscribeToArray_1.subscribeToArray(result);
  } else if (isPromise_1.isPromise(result)) {
    return subscribeToPromise_1.subscribeToPromise(result);
  } else if (!!result && typeof result[iterator_1.iterator] === 'function') {
    return subscribeToIterable_1.subscribeToIterable(result);
  } else {
    var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};
//# sourceMappingURL=subscribeTo.js.map