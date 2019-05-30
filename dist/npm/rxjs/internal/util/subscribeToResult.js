"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InnerSubscriber_1 = require("../InnerSubscriber.js");
var subscribeTo_1 = require("./subscribeTo.js");
var Observable_1 = require("../Observable.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
  if (destination === undefined) {
    destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }
  if (destination.closed) {
    return undefined;
  }
  if (result instanceof Observable_1.Observable) {
    return result.subscribe(destination);
  }
  return subscribeTo_1.subscribeTo(result)(destination);
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map