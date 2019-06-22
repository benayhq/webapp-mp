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

var _lodash = require("../../../npm/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edit = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Edit, _BaseComponent);

  function Edit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["nickName", "userName", "selector", "selectorChecked", "timeSel", "dateSel", "files", "cellPhone", "weixin", "serviceAddress", "address", "qrCode", "value6", "value1", "UpdateUserInfo"], _this.config = {
      navigationBarTitleText: '个人信息'
    }, _this.handleAlert = function (type, message) {
      _index2.default.atMessage({
        'message': message,
        'type': type
      });
    }, _this.handleSaveUserInfo = function () {
      var nickName = _this.state.nickName;


      if (_lodash2.default.isEmpty(nickName)) {
        _this.handleAlert('error', '呢称不能为空');
      }

      return;

      _this.getAuthInfo().then(function (userinfo) {
        var _payload;

        console.log('res', userinfo);
        var payload = (_payload = {
          nickname: 'eee',
          openId: 'eee',
          wechatId: 'eee',
          cellphone: 'e',
          address: 'eee',
          wechatQrcode: 'eee'
        }, _defineProperty(_payload, "address", 'eee'), _defineProperty(_payload, "id", userinfo.id), _payload);
        _this.props.UpdateUserInfo(payload).then(function (res) {
          console.log('response', res);
        });
      });
      return;
      console.log('handleSaveUserInfo');
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Edit, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Edit.prototype.__proto__ || Object.getPrototypeOf(Edit.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        selector: ['美国', '中国', '巴西', '日本'],
        selectorChecked: '美国',
        timeSel: '12:01',
        dateSel: '2018-04-22',
        files: [],
        nickName: '',
        userName: '',
        cellPhone: '',
        weixin: '',
        serviceAddress: '',
        address: '',
        qrCode: ''
      };
    }
  }, {
    key: "onChange",
    value: function onChange(files) {
      this.setState({
        files: files
      });
    }
  }, {
    key: "onFail",
    value: function onFail(mes) {
      console.log(mes);
    }
  }, {
    key: "onImageClick",
    value: function onImageClick(index, file) {
      console.log(index, file);
    }
  }, {
    key: "getAuthInfo",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });

              case 2:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAuthInfo() {
        return _ref2.apply(this, arguments);
      }

      return getAuthInfo;
    }()
  }, {
    key: "handleNickNameChange",
    value: function handleNickNameChange(nickName) {
      this.setState({
        nickName: nickName
      });
      return nickName;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var nickName = this.__state.nickName;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Edit;
}(_index.Component), _class2.properties = {
  "UpdateUserInfo": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleNickNameChange", "handleUserNameChange", "handleChange", "onChange", "handleSaveUserInfo"], _temp2)) || _class);
exports.default = Edit;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Edit, true));