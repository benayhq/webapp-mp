"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = function () {
  function Scheduler(SchedulerAction, now) {
    if (now === undefined) {
      now = Scheduler.now;
    }
    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }
  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === undefined) {
      delay = 0;
    }
    return new this.SchedulerAction(this, work).schedule(state, delay);
  };
  Scheduler.now = function () {
    return Date.now();
  };
  return Scheduler;
}();
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map