"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _user = require("./user.js");

var _user2 = _interopRequireDefault(_user);

var _agent = require("./agent.js");

var _agent2 = _interopRequireDefault(_agent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Creator = function Creator() {
  _classCallCheck(this, Creator);

  this.factory = function (isAgent) {
    return isAgent ? new _agent2.default() : new _user2.default();
  };
};

exports.default = Creator;