"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defer_1 = require("./defer.js");
var empty_1 = require("./empty.js");
function iif(condition, trueResult, falseResult) {
  if (trueResult === undefined) {
    trueResult = empty_1.EMPTY;
  }
  if (falseResult === undefined) {
    falseResult = empty_1.EMPTY;
  }
  return defer_1.defer(function () {
    return condition() ? trueResult : falseResult;
  });
}
exports.iif = iif;
//# sourceMappingURL=iif.js.map