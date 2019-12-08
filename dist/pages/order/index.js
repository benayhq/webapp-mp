"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "$compid__16", "$compid__17", "$compid__18", "$compid__19", "$compid__20", "$compid__21", "$compid__22", "$compid__23", "$compid__24", "$compid__25", "$compid__26", "$compid__27", "$compid__28", "current", "list", "status", "totalPage", "orderStatus", "dispatchOrderList"], _this.config = {
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

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var selectTabIndex = Number(this.$router.params.index);
      console.log('selectTabIndex', selectTabIndex);
      selectTabIndex = this.$router.params.status === "null" ? 0 : selectTabIndex;
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
        case 5:
          this.getAllOrderList('REFUND', 0, 10);
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

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__16"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__16 = _genCompid2[0],
          $compid__16 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__17"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__17 = _genCompid4[0],
          $compid__17 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__18"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__18 = _genCompid6[0],
          $compid__18 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__19"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__19 = _genCompid8[0],
          $compid__19 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__20"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__20 = _genCompid10[0],
          $compid__20 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__21"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__21 = _genCompid12[0],
          $compid__21 = _genCompid12[1];

      var _genCompid13 = (0, _index.genCompid)(__prefix + "$compid__22"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__22 = _genCompid14[0],
          $compid__22 = _genCompid14[1];

      var _genCompid15 = (0, _index.genCompid)(__prefix + "$compid__23"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__23 = _genCompid16[0],
          $compid__23 = _genCompid16[1];

      var _genCompid17 = (0, _index.genCompid)(__prefix + "$compid__24"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__24 = _genCompid18[0],
          $compid__24 = _genCompid18[1];

      var _genCompid19 = (0, _index.genCompid)(__prefix + "$compid__25"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__25 = _genCompid20[0],
          $compid__25 = _genCompid20[1];

      var _genCompid21 = (0, _index.genCompid)(__prefix + "$compid__26"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__26 = _genCompid22[0],
          $compid__26 = _genCompid22[1];

      var _genCompid23 = (0, _index.genCompid)(__prefix + "$compid__27"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__27 = _genCompid24[0],
          $compid__27 = _genCompid24[1];

      var _genCompid25 = (0, _index.genCompid)(__prefix + "$compid__28"),
          _genCompid26 = _slicedToArray(_genCompid25, 2),
          $prevCompid__28 = _genCompid26[0],
          $compid__28 = _genCompid26[1];

      var tabList = [{ title: '全部', status: '' }, { title: '待付款', status: 'UNPAY' }, { title: '待成团', status: 'BATING' }, { title: '待消费', status: 'CONSUMPTION' }, { title: '待评价', status: 'COMMENTING' }, { title: '退款', status: 'COMMENTING' }];

      var _state = this.__state,
          list = _state.list,
          current = _state.current;


      var anonymousState__temp = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp3 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp4 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp5 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      var anonymousState__temp6 = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      _index.propsManager.set({
        "scroll": true,
        "current": current,
        "tabList": tabList,
        "onClick": this.handleClick.bind(this)
      }, $compid__16, $prevCompid__16);
      _index.propsManager.set({
        "current": current,
        "index": 0
      }, $compid__17, $prevCompid__17);
      _index.propsManager.set({
        "list": list
      }, $compid__18, $prevCompid__18);
      _index.propsManager.set({
        "current": current,
        "index": 1
      }, $compid__19, $prevCompid__19);
      _index.propsManager.set({
        "list": list
      }, $compid__20, $prevCompid__20);
      _index.propsManager.set({
        "current": current,
        "index": 2
      }, $compid__21, $prevCompid__21);
      _index.propsManager.set({
        "list": list
      }, $compid__22, $prevCompid__22);
      _index.propsManager.set({
        "current": current,
        "index": 3
      }, $compid__23, $prevCompid__23);
      _index.propsManager.set({
        "list": list
      }, $compid__24, $prevCompid__24);
      _index.propsManager.set({
        "current": current,
        "index": 4
      }, $compid__25, $prevCompid__25);
      _index.propsManager.set({
        "list": list
      }, $compid__26, $prevCompid__26);
      _index.propsManager.set({
        "current": current,
        "index": 5
      }, $compid__27, $prevCompid__27);
      _index.propsManager.set({
        "list": list
      }, $compid__28, $prevCompid__28);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        $compid__16: $compid__16,
        $compid__17: $compid__17,
        $compid__18: $compid__18,
        $compid__19: $compid__19,
        $compid__20: $compid__20,
        $compid__21: $compid__21,
        $compid__22: $compid__22,
        $compid__23: $compid__23,
        $compid__24: $compid__24,
        $compid__25: $compid__25,
        $compid__26: $compid__26,
        $compid__27: $compid__27,
        $compid__28: $compid__28
      });
      return this.__state;
    }
  }]);

  return OrderList;
}(_index.Component), _class2.$$events = ["loadOrderList"], _class2.$$componentPath = "pages/order/index", _temp2)) || _class);
exports.default = OrderList;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderList, true));