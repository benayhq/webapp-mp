"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(OrderList, _BaseComponent);

  function OrderList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["tabList", "current", "list"], _this.config = {
      navigationBarTitleText: '我的订单'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderList, [{
    key: "_constructor",
    value: function _constructor() {
      _get(OrderList.prototype.__proto__ || Object.getPrototypeOf(OrderList.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        current: 0,
        list: [{
          orderId: '0011',
          agentName: '医美管家 vivi',
          orderStatus: '待付款',
          products: [{}]
        }, {
          orderId: '0011',
          agentName: '医美管家 vivi',
          orderStatus: '待成团',
          products: [{}]
        }, {
          orderId: '0011',
          agentName: '医美管家 vivi',
          orderStatus: '待消费',
          products: [{}]
        }, {
          orderId: '0011',
          agentName: '医美管家 vivi',
          orderStatus: '待评价',
          products: [{}]
        }, {
          orderId: '0011',
          agentName: '医美管家 vivi',
          orderStatus: '已取消',
          products: [{}]
        }, {
          orderId: '0011',
          agentName: '医美管家 vivi',
          orderStatus: '拼团失败',
          products: [{}]
        }]
      };
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var tabList = [{ title: '全部' }, { title: '待付款' }, { title: '待成团' }, { title: '待消费' }, { title: '待评价' }];

      Object.assign(this.__state, {
        tabList: tabList
      });
      return this.__state;
    }
  }]);

  return OrderList;
}(_index.Component), _class.properties = {}, _class.$$events = ["handleClick"], _temp2);
exports.default = OrderList;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderList, true));