"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountDown = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CountDown, _BaseComponent);

  function CountDown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CountDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["day", "hour", "minute", "second", "endTime"], _this.state = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }, _this.countFun = function (time) {
      var end_time = new Date(time).getTime(),
          sys_second = end_time - new Date().getTime();
      _this.timer = setInterval(function () {
        //防止倒计时出现负数
        if (sys_second > 1000) {
          sys_second -= 1000;
          var day = Math.floor(sys_second / 1000 / 3600 / 24);
          var hour = Math.floor(sys_second / 1000 / 3600 % 24);
          var minute = Math.floor(sys_second / 1000 / 60 % 60);
          var second = Math.floor(sys_second / 1000 % 60);
          _this.setState({
            day: day,
            hour: hour < 10 ? "0" + hour : hour,
            minute: minute < 10 ? "0" + minute : minute,
            second: second < 10 ? "0" + second : second
          });
        } else {
          clearInterval(_this.timer);
          //倒计时结束时触发父组件的方法
          //this.props.timeEnd();
        }
      }, 1000);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CountDown, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CountDown.prototype.__proto__ || Object.getPrototypeOf(CountDown.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.endTime) {
        var endTime = this.props.endTime.replace(/-/g, "/");
        this.countFun(endTime);
      }
    }

    //组件卸载取消倒计时

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return CountDown;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "packageA/pages/product/component/index", _temp2);
exports.default = CountDown;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CountDown));