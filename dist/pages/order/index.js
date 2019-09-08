"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionCreators = require("./store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _style = require("../../utils/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderList = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(OrderList, _BaseComponent);

  function OrderList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "$compid__1118", "$compid__1119", "$compid__1120", "$compid__1121", "$compid__1122", "$compid__1123", "$compid__1124", "$compid__1125", "$compid__1126", "$compid__1127", "$compid__1128", "current", "list", "status", "totalPage", "orderStatus", "dispatchOrderList"], _this.config = {
      navigationBarTitleText: '我的订单'
    }, _this.state = {
      current: 1,
      list: [],
      status: 'more',
      totalPage: 1,
      orderStatus: ''
    }, _this.loadOrderList = function () {
      console.log('loadOrderList');
    }, _this.customComponents = ["AtTabs", "AtTabsPane", "OrderItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(OrderList.prototype.__proto__ || Object.getPrototypeOf(OrderList.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var selectTabIndex = Number(this.$router.params.index);
      this.setState({
        orderStatus: this.$router.params.status,
        current: selectTabIndex
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAllOrderList(this.state.orderStatus, 0, 10);
    }
  }, {
    key: "getAllOrderList",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(statusVo, pageNo, pageSize) {
        var payload, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  statusVo: statusVo,
                  pageNo: pageNo,
                  pageSize: pageSize
                };
                _context.next = 3;
                return this.props.dispatchOrderList(payload);

              case 3:
                response = _context.sent;

                this.setState({
                  list: response.content
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllOrderList(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return getAllOrderList;
    }()
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value,
        list: []
      });
      switch (value) {
        case 0:
          this.getAllOrderList('', 0, 10);
          break;
        case 1:
          this.getAllOrderList('UNPAY', 0, 10);
          break;
        case 2:
          this.getAllOrderList('BATING', 0, 10);
          break;
        case 3:
          this.getAllOrderList('CONSUMPTION', 0, 10);
          break;
        case 4:
          this.getAllOrderList('COMMENTING', 0, 10);
          break;
      }
    }
  }, {
    key: "handleLoadMore",
    value: function handleLoadMore(status) {
      var _this2 = this;

      this.setState(function (prevState, props) {
        return {
          totalPage: prevState.totalPage + 1,
          status: 'loading'
        };
      }, function () {
        var pageNo = _this2.state.totalPage * 10;
        _this2.getAllOrderList(status, 0, pageNo);
        _this2.setState({
          status: 'noMore'
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
      var $compid__1118 = (0, _index.genCompid)(__prefix + "$compid__1118");
      var $compid__1119 = (0, _index.genCompid)(__prefix + "$compid__1119");
      var $compid__1120 = (0, _index.genCompid)(__prefix + "$compid__1120");
      var $compid__1121 = (0, _index.genCompid)(__prefix + "$compid__1121");
      var $compid__1122 = (0, _index.genCompid)(__prefix + "$compid__1122");
      var $compid__1123 = (0, _index.genCompid)(__prefix + "$compid__1123");
      var $compid__1124 = (0, _index.genCompid)(__prefix + "$compid__1124");
      var $compid__1125 = (0, _index.genCompid)(__prefix + "$compid__1125");
      var $compid__1126 = (0, _index.genCompid)(__prefix + "$compid__1126");
      var $compid__1127 = (0, _index.genCompid)(__prefix + "$compid__1127");
      var $compid__1128 = (0, _index.genCompid)(__prefix + "$compid__1128");

      var tabList = [{ title: '全部', status: '' }, { title: '待付款', status: 'UNPAY' }, { title: '待成团', status: 'BATING' }, { title: '待消费', status: 'CONSUMPTION' }, { title: '待评价', status: 'COMMENTING' }];
      var _state = this.__state,
          list = _state.list,
          current = _state.current;

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp3 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp4 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp5 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var $props__1118 = {
        "current": current,
        "tabList": tabList,
        "onClick": this.handleClick.bind(this)
      };
      var $props__1119 = {
        "current": current,
        "index": 0
      };
      var $props__1120 = {
        "list": list
      };
      var $props__1121 = {
        "current": current,
        "index": 1
      };
      var $props__1122 = {
        "list": list
      };
      var $props__1123 = {
        "current": current,
        "index": 2
      };
      var $props__1124 = {
        "list": list
      };
      var $props__1125 = {
        "current": current,
        "index": 3
      };
      var $props__1126 = {
        "list": list
      };
      var $props__1127 = {
        "current": current,
        "index": 4
      };
      var $props__1128 = {
        "list": list
      };
      _index.propsManager.set($props__1118, $compid__1118);
      _index.propsManager.set($props__1119, $compid__1119);
      _index.propsManager.set($props__1120, $compid__1120);
      _index.propsManager.set($props__1121, $compid__1121);
      _index.propsManager.set($props__1122, $compid__1122);
      _index.propsManager.set($props__1123, $compid__1123);
      _index.propsManager.set($props__1124, $compid__1124);
      _index.propsManager.set($props__1125, $compid__1125);
      _index.propsManager.set($props__1126, $compid__1126);
      _index.propsManager.set($props__1127, $compid__1127);
      _index.propsManager.set($props__1128, $compid__1128);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        $compid__1118: $compid__1118,
        $compid__1119: $compid__1119,
        $compid__1120: $compid__1120,
        $compid__1121: $compid__1121,
        $compid__1122: $compid__1122,
        $compid__1123: $compid__1123,
        $compid__1124: $compid__1124,
        $compid__1125: $compid__1125,
        $compid__1126: $compid__1126,
        $compid__1127: $compid__1127,
        $compid__1128: $compid__1128
      });
      return this.__state;
    }
  }]);

  return OrderList;
}(_index.Component), _class2.$$events = ["loadOrderList"], _class2.$$componentPath = "pages/order/index", _temp2)) || _class);
exports.default = OrderList;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderList, true));