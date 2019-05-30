"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeMap_1 = require("./mergeMap.js");
var identity_1 = require("../util/identity.js");
function mergeAll(concurrent) {
  if (concurrent === undefined) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map