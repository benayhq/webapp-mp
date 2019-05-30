"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("./of.js");
var concatAll_1 = require("../operators/concatAll.js");
function concat() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return concatAll_1.concatAll()(of_1.of.apply(undefined, observables));
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map