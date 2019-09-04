"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderDetail = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(OrderDetail, _BaseComponent);

  function OrderDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__107", "$compid__108", "$compid__109", "$compid__110", "$compid__111", "order", "content", "id", "dispatchOrderDetail"], _this.config = {
      navigationBarTitleText: '订单详情'
    }, _this.customComponents = ["Header", "Assemble", "OrderProduct", "Footer", "ToolBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderDetail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(OrderDetail.prototype.__proto__ || Object.getPrototypeOf(OrderDetail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        order: {
          agentName: '医美管家 vivi'
        },
        content: {},
        id: 0
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        id: this.$router.params.orderId
      });
      console.log('this.state.id ', this.$router.params.orderId);
      if (this.$router.params.orderId === undefined || this.$router.params.orderId === null) {
        _index2.default.navigateTo({
          url: '/pages/user/index'
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var payload = {
        id: this.state.id
      };

      this.props.dispatchOrderDetail(payload).then(function (response) {
        _this2.setState({
          content: response.content
        });
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__107 = (0, _index.genCompid)(__prefix + "$compid__107");
      var $compid__108 = (0, _index.genCompid)(__prefix + "$compid__108");
      var $compid__109 = (0, _index.genCompid)(__prefix + "$compid__109");
      var $compid__110 = (0, _index.genCompid)(__prefix + "$compid__110");
      var $compid__111 = (0, _index.genCompid)(__prefix + "$compid__111");

      var _state = this.__state,
          content = _state.content,
          order = _state.order;


      var $props__107 = {
        "content": content
      };
      var $props__108 = {
        "content": content
      };
      var $props__109 = {
        "order": order,
        "content": content
      };
      var $props__110 = {
        "content": content,
        "qrCode": content ? content.qrCode : ""
      };
      var $props__111 = {
        "toolBar": content ? content.toolBar : ""
      };
      _index.propsManager.set($props__107, $compid__107);
      _index.propsManager.set($props__108, $compid__108);
      _index.propsManager.set($props__109, $compid__109);
      _index.propsManager.set($props__110, $compid__110);
      _index.propsManager.set($props__111, $compid__111);
      Object.assign(this.__state, {
        $compid__107: $compid__107,
        $compid__108: $compid__108,
        $compid__109: $compid__109,
        $compid__110: $compid__110,
        $compid__111: $compid__111
      });
      return this.__state;
    }
  }]);

  return OrderDetail;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/order/detail/index", _temp2)) || _class);
exports.default = OrderDetail;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderDetail, true));