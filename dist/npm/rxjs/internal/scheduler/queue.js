"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueueAction_1 = require("./QueueAction.js");
var QueueScheduler_1 = require("./QueueScheduler.js");
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map