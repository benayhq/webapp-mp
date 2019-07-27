"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _jump = require("../../utils/jump.js");

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Title, _BaseComponent);

  function Title() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Title);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Title.__proto__ || Object.getPrototypeOf(Title)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["OrderId", "AgentName", "displayStatusDes"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Title, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Title.prototype.__proto__ || Object.getPrototypeOf(Title.prototype), "_constructor", this).apply(this, arguments);
      this.$$refs = [];
    }
  }, {
    key: "jumpUrl",
    value: function jumpUrl(url, OrderId) {
      console.log('this.props.number', OrderId);
      (0, _jump2.default)({ url: url + ("?orderId=" + OrderId) });
    }
  }, {
    key: "getOrderTextByStatus",
    value: function getOrderTextByStatus(OrderState) {
      console.log('OrderState', OrderState);

      var showOrderText = "";
      if (OrderState === "UNPAY") {
        showOrderText = "待付款";
      } else if (OrderState === "BATING") {
        showOrderText = "待成团";
      } else if (OrderState === "CONSUMPTION") {
        showOrderText = "待消费";
      } else if (OrderState === "COMMENTING") {
        showOrderText = "待评价";
      }
      return showOrderText;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          OrderId = _props.OrderId,
          AgentName = _props.AgentName,
          displayStatusDes = _props.displayStatusDes;

      Object.assign(this.__state, {
        OrderId: OrderId,
        AgentName: AgentName,
        displayStatusDes: displayStatusDes
      });
      return this.__state;
    }
  }]);

  return Title;
}(_index.Component), _class.$$events = ["jumpUrl"], _class.$$componentPath = "pages/order/title/index", _temp2);
exports.default = Title;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Title));