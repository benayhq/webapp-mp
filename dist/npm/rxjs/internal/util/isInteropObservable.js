"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("../symbol/observable.js");
function isInteropObservable(input) {
  return input && typeof input[observable_1.observable] === 'function';
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map