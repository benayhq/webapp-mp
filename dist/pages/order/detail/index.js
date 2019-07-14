"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index2 = require("../../../npm/@tarojs/redux/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderDetail = (_dec = (0, _index2.connect)(function (state) {
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["order", "content", "dispatchOrderDetail"], _this.config = {
      navigationBarTitleText: '订单详情'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderDetail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(OrderDetail.prototype.__proto__ || Object.getPrototypeOf(OrderDetail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        order: {
          agentName: '医美管家 vivi'
        },
        content: {}
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.$router.params.status = '待付款';

      var payload = {
        id: 3
      };

      this.props.dispatchOrderDetail(payload).then(function (response) {
        console.log('response22', response.content);
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
      var __runloopRef = arguments[2];
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return OrderDetail;
}(_index.Component), _class2.properties = {
  "dispatchOrderDetail": {
    "type": null,
    "value": null
  }
}, _class2.$$events = [], _temp2)) || _class);
exports.default = OrderDetail;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderDetail, true));