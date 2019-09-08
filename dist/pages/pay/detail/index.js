"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionCreators = require("../../product/store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayDetail = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(PayDetail, _BaseComponent);

  function PayDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PayDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PayDetail.__proto__ || Object.getPrototypeOf(PayDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__1142", "activeId", "isOpened", "referId", "img", "bannerList", "dispatchDownLoadUrl", "dispatchActiveInfo"], _this.config = {
      navigationBarTitleText: '交易成功提示'
    }, _this.state = {
      activeId: 0,
      isOpened: false,
      referId: 0,
      img: '',
      bannerList: []
    }, _this.customComponents = ["Share"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PayDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(PayDetail.prototype.__proto__ || Object.getPrototypeOf(PayDetail.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        activeId: this.$router.params.activeId
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "handleInvertFirend",
    value: function handleInvertFirend() {
      this.setState({
        isOpened: true
      });
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
                return this.props.dispatchDownLoadUrl(payload);

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
    key: "loadData",
    value: function loadData() {
      var payload = {
        activityId: this.state.activeId
      };

      var that = this;

      this.props.dispatchActiveInfo(payload).then(function (res) {
        var bannerItemList = [];
        // 获取banner 图片.
        if (res.content && res.content.docInfo && res.content.docInfo.length > 0) {
          res.content.docInfo.map(function (item) {
            that.getImgUrl(item.location).then(function (response) {
              console.log('response getImgUrl', response);
              bannerItemList.push(response);
            }).then(function () {
              that.setState({
                activityName: res.content.activityName,
                referId: res.content.agentId,
                img: bannerItemList[0]
              });
            });
          });
        }
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
      var $compid__1142 = (0, _index.genCompid)(__prefix + "$compid__1142");

      var _state = this.__state,
          isOpened = _state.isOpened,
          activeId = _state.activeId,
          referId = _state.referId,
          img = _state.img,
          activityName = _state.activityName;


      var anonymousState__temp = "/pages/product/detail?activeId=" + activeId + "&refId=" + referId;
      var $props__1142 = {
        "isOpened": isOpened,
        "path": anonymousState__temp,
        "activeId": activeId,
        "activityName": activityName,
        "referId": referId,
        "img": img,
        "onClose": this.handleClose
      };
      _index.propsManager.set($props__1142, $compid__1142);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__1142: $compid__1142
      });
      return this.__state;
    }
  }]);

  return PayDetail;
}(_index.Component), _class2.$$events = ["handleInvertFirend"], _class2.$$componentPath = "pages/pay/detail/index", _temp2)) || _class);
exports.default = PayDetail;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PayDetail, true));