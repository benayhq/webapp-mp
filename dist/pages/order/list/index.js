"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _payment = require("../../../utils/payment.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderItem = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(OrderItem, _BaseComponent);

  function OrderItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderItem.__proto__ || Object.getPrototypeOf(OrderItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray15", "OrderList", "OrderState", "ProductImg", "isOpended", "text", "dispatchCreateOrderDownLoadUrl", "dispatchPrePay", "list"], _this.state = {
      OrderState: '待付款',
      ProductImg: '',
      OrderList: [],
      isOpended: false,
      text: ''
    }, _this.handleAlert = function (type, message) {
      _index2.default.atMessage({
        'message': message,
        'type': type
      });
    }, _this.handleRefund = function (orderId) {
      _index2.default.navigateTo({
        url: '/pages/order/refund/index?orderId=' + orderId
      });
    }, _this.customComponents = ["Title", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(OrderItem.prototype.__proto__ || Object.getPrototypeOf(OrderItem.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "getImgUrl",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  location: location
                };
                _context.next = 3;
                return this.props.dispatchCreateOrderDownLoadUrl(payload);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.content);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getImgUrl(_x) {
        return _ref2.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "jumpUrl",
    value: function jumpUrl(orderId) {
      _index2.default.navigateTo({
        url: '/pages/order/comment/index?orderId=' + orderId
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props, nextProps) {
      var _this2 = this;

      if (props.list.length > 0) {
        var cacheList = [];
        props.list.map(function (item, key) {
          _this2.getImgUrl(item.activityProductLocation).then(function (response) {
            cacheList.push({
              id: item.id,
              status: item.status,
              displayStatusDes: item.displayStatusDes,
              customerName: item.customerName,
              activityName: item.activityName,
              activityProductName: item.activityProductName,
              productDiscountPrice: item.productDiscountPrice,
              imgUrl: response,
              number: item.number
            });
            if (props.list.length === cacheList.length) {
              _this2.setState({
                OrderList: cacheList
              });
            }
          });
        });
      } else {
        this.setState({
          OrderList: []
        });
      }
    }
  }, {
    key: "handleWeChatPay",
    value: function handleWeChatPay(orderId) {
      var _this3 = this;

      var payload = {
        id: orderId
      };
      this.props.dispatchPrePay(payload).then(function (response) {
        if (response.content && response.content != null) {
          (0, _payment.WeChatPay)(response.content, _this3.payNotice.bind(_this3));
        } else {
          _this3.handleAlert('error', response.error);
        }
      });
    }
  }, {
    key: "payNotice",
    value: function payNotice(type, response) {
      console.log('payNoticeLog type', type);
      console.log('payNoticeLog response', response);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var loopArray15 = void 0;

      var OrderList = this.__state.OrderList;


      var template = null;

      if (OrderList.length > 0) {
        loopArray15 = OrderList.map(function (item, _anonIdx) {
          item = {
            $original: (0, _index.internal_get_original)(item)
          };

          var _genCompid = (0, _index.genCompid)(__prefix + "gzzzzzzzzz" + _anonIdx, true),
              _genCompid2 = _slicedToArray(_genCompid, 2),
              $prevCompid__69 = _genCompid2[0],
              $compid__69 = _genCompid2[1];

          _index.propsManager.set({
            "OrderId": item.$original.id,
            "displayStatusDes": item.$original.displayStatusDes,
            "AgentName": item.$original.customerName
          }, $compid__69, $prevCompid__69);

          var _genCompid3 = (0, _index.genCompid)(__prefix + "hzzzzzzzzz" + _anonIdx, true),
              _genCompid4 = _slicedToArray(_genCompid3, 2),
              $prevCompid__70 = _genCompid4[0],
              $compid__70 = _genCompid4[1];

          item.$original.status == "UNPAY" && _index.propsManager.set({
            "type": "primary",
            "onClick": _this4.handleWeChatPay.bind(_this4, item.$original.id),
            "size": "small"
          }, $compid__70, $prevCompid__70);

          var _genCompid5 = (0, _index.genCompid)(__prefix + "izzzzzzzzz" + _anonIdx, true),
              _genCompid6 = _slicedToArray(_genCompid5, 2),
              $prevCompid__71 = _genCompid6[0],
              $compid__71 = _genCompid6[1];

          item.$original.status == "PAID" && _index.propsManager.set({
            "type": "primary",
            "size": "small",
            "onClick": _this4.jumpUrl.bind(_this4, item.$original.id)
          }, $compid__71, $prevCompid__71);

          var _genCompid7 = (0, _index.genCompid)(__prefix + "jzzzzzzzzz" + _anonIdx, true),
              _genCompid8 = _slicedToArray(_genCompid7, 2),
              $prevCompid__72 = _genCompid8[0],
              $compid__72 = _genCompid8[1];

          item.$original.status == "COMMENTING" && _index.propsManager.set({
            "type": "primary",
            "size": "small"
          }, $compid__72, $prevCompid__72);

          var _genCompid9 = (0, _index.genCompid)(__prefix + "bazzzzzzzz" + _anonIdx, true),
              _genCompid10 = _slicedToArray(_genCompid9, 2),
              $prevCompid__73 = _genCompid10[0],
              $compid__73 = _genCompid10[1];

          item.$original.status == "CONSUMPTION" && _index.propsManager.set({
            "type": "primary",
            "size": "small"
          }, $compid__73, $prevCompid__73);
          return {
            $compid__69: $compid__69,
            $compid__70: $compid__70,
            $compid__71: $compid__71,
            $compid__72: $compid__72,
            $compid__73: $compid__73,
            $original: item.$original
          };
        });
      } else {}
      Object.assign(this.__state, {
        loopArray15: loopArray15
      });
      return this.__state;
    }
  }]);

  return OrderItem;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/order/list/index", _temp2)) || _class);
exports.default = OrderItem;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderItem));