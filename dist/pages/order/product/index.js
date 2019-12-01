"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

require("../../../npm/@tarojs/async-await/index.js");

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index2 = require("../../../npm/@tarojs/redux/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getLocalTime(timestamp) {
  var d = new Date(timestamp);
  var date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  return date;
}

var OrderProduct = (_dec = (0, _index2.connect)(function (state) {
  return state;
}, actions), _dec(_class = function (_BaseComponent) {
  _inherits(OrderProduct, _BaseComponent);

  function OrderProduct() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderProduct);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderProduct.__proto__ || Object.getPrototypeOf(OrderProduct)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "profileUrl", "content"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderProduct, [{
    key: "_constructor",
    value: function _constructor() {
      _get(OrderProduct.prototype.__proto__ || Object.getPrototypeOf(OrderProduct.prototype), "_constructor", this).call(this);
      this.state = {
        profileUrl: ''
      };
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        console.log('this.props.content.activityProductLocationeee', _this2.props.content);
        if (_this2.props.content) {
          _this2.getImgUrl(_this2.props.content.activityProductLocation).then(function (response) {
            console.log('response', response);
            _this2.setState({
              profileUrl: response
            });
          });
        }
      }, 1000);
    }
  }, {
    key: "handleMakeCall",
    value: function handleMakeCall(cellphone, e) {
      e.stopPropagation();
      var params = {
        phoneNumber: cellphone
      };
      Taro.makePhoneCall(params).then(function (res) {
        console.log('res', res);
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var profileUrl = this.__state.profileUrl;


      var anonymousState__temp = this.__props.content && getLocalTime(this.__props.content.createdD);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return OrderProduct;
}(_index.Component)) || _class);
OrderProduct.properties = {
  "dispatchCreateOrderDownLoadUrl": null,
  "content": null
};
OrderProduct.$$events = ["handleMakeCall"];
exports.default = OrderProduct;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderProduct));