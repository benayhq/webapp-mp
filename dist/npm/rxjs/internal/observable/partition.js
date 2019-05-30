"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var not_1 = require("../util/not.js");
var subscribeTo_1 = require("../util/subscribeTo.js");
var filter_1 = require("../operators/filter.js");
var Observable_1 = require("../Observable.js");
function partition(source, predicate, thisArg) {
  return [filter_1.filter(predicate, thisArg)(new Observable_1.Observable(subscribeTo_1.subscribeTo(source))), filter_1.filter(not_1.not(predicate, thisArg))(new Observable_1.Observable(subscribeTo_1.subscribeTo(source)))];
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map