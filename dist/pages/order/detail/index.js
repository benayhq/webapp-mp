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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__29", "$compid__30", "$compid__31", "$compid__32", "$compid__33", "$compid__34", "content", "order", "id", "dispatchOrderDetail"], _this.config = {
      navigationBarTitleText: '订单详情'
    }, _this.customComponents = ["Header", "Customer", "Assemble", "OrderProduct", "Footer", "ToolBar"], _temp), _possibleConstructorReturn(_this, _ret);
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
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "init",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var payload, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  id: this.state.id
                };
                _context.next = 3;
                return this.props.dispatchOrderDetail(payload);

              case 3:
                response = _context.sent;


                console.log('response.content', response.content);
                this.setState({
                  content: response.content
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref2.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        id: this.$router.params.orderId
      });
      // this.init();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__29"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__29 = _genCompid2[0],
          $compid__29 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__30"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__30 = _genCompid4[0],
          $compid__30 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__31"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__31 = _genCompid6[0],
          $compid__31 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__32"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__32 = _genCompid8[0],
          $compid__32 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__33"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__33 = _genCompid10[0],
          $compid__33 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__34"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__34 = _genCompid12[0],
          $compid__34 = _genCompid12[1];

      var _state = this.__state,
          _state$content = _state.content,
          content = _state$content === undefined ? [] : _state$content,
          order = _state.order;


      _index.propsManager.set({
        "content": content
      }, $compid__29, $prevCompid__29);
      content.customerName && _index.propsManager.set({
        "content": content
      }, $compid__30, $prevCompid__30);
      content.batchUsers && _index.propsManager.set({
        "content": content
      }, $compid__31, $prevCompid__31);
      _index.propsManager.set({
        "order": order,
        "content": content
      }, $compid__32, $prevCompid__32);
      _index.propsManager.set({
        "content": content,
        "qrCode": content ? content.qrCode : ""
      }, $compid__33, $prevCompid__33);
      _index.propsManager.set({
        "toolBar": content ? content.toolBar : ""
      }, $compid__34, $prevCompid__34);
      Object.assign(this.__state, {
        $compid__29: $compid__29,
        $compid__30: $compid__30,
        $compid__31: $compid__31,
        $compid__32: $compid__32,
        $compid__33: $compid__33,
        $compid__34: $compid__34
      });
      return this.__state;
    }
  }]);

  return OrderDetail;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/order/detail/index", _temp2)) || _class);
exports.default = OrderDetail;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderDetail, true));