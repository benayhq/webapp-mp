"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable.js");
var from_1 = require("./from.js");
var isArray_1 = require("../util/isArray.js");
var empty_1 = require("./empty.js");
function onErrorResumeNext() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  if (sources.length === 0) {
    return empty_1.EMPTY;
  }
  var first = sources[0],
      remainder = sources.slice(1);
  if (sources.length === 1 && isArray_1.isArray(first)) {
    return onErrorResumeNext.apply(undefined, first);
  }
  return new Observable_1.Observable(function (subscriber) {
    var subNext = function () {
      return subscriber.add(onErrorResumeNext.apply(undefined, remainder).subscribe(subscriber));
    };
    return from_1.from(first).subscribe({
      next: function (value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map