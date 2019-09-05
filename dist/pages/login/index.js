"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionCreators = require("../user/store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../npm/@tarojs/redux/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__457", "GetUserInfo"], _this.config = {
      navigationBarTitleText: '登录'
    }, _this.customComponents = ["AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "HandleAutoLogin",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var global, result, errMsg, userInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                global = this;
                _context2.next = 3;
                return _index2.default.getUserInfo();

              case 3:
                result = _context2.sent;
                errMsg = result.errMsg, userInfo = result.userInfo;

                if (errMsg === 'getUserInfo:ok') {
                  _index2.default.setStorage({ key: 'authinfo', data: userInfo });
                  wx.login({
                    success: function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                        var loginResponse, payload;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return global.props.WeChatLogin({ code: res.code });

                              case 2:
                                loginResponse = _context.sent;

                                console.log('loginResponse ---', loginResponse);

                                if (!(loginResponse.result === "success")) {
                                  _context.next = 8;
                                  break;
                                }

                                global.WeChatLogin(loginResponse);
                                _context.next = 20;
                                break;

                              case 8:
                                if (!(loginResponse.error === "USER_NOT_EXIST")) {
                                  _context.next = 19;
                                  break;
                                }

                                payload = {
                                  code: res.code,
                                  nickName: userInfo.nickName,
                                  profileUrl: userInfo.avatarUrl
                                };
                                _context.next = 12;
                                return global.props.CreateNewUser(payload);

                              case 12:
                                _context.t0 = global;
                                _context.next = 15;
                                return global.props.WeChatLogin({ code: res.code });

                              case 15:
                                _context.t1 = _context.sent;

                                _context.t0.WeChatLogin.call(_context.t0, _context.t1);

                                _context.next = 20;
                                break;

                              case 19:
                                _index2.default.showToast({
                                  title: '授权失败,请重试.',
                                  icon: 'none'
                                });

                              case 20:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));

                      function success(_x) {
                        return _ref3.apply(this, arguments);
                      }

                      return success;
                    }()
                  });
                } else {
                  _index2.default.showToast({
                    title: '授权失败,请重试.',
                    icon: 'none'
                  });
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function HandleAutoLogin() {
        return _ref2.apply(this, arguments);
      }

      return HandleAutoLogin;
    }()
  }, {
    key: "WeChatLogin",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(loginResponse) {
        var result, rstUserInfo, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _index2.default.setStorage({ key: 'sessionId', data: loginResponse.content });

              case 2:
                result = _context3.sent;

                if (!(result.errMsg === "setStorage:ok")) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 6;
                return this.props.GetUserInfo({});

              case 6:
                rstUserInfo = _context3.sent;
                data = rstUserInfo.content;

                _index2.default.setStorage({ key: 'userinfo', data: data });
                _index2.default.navigateTo({
                  url: '../../pages/user/index'
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function WeChatLogin(_x2) {
        return _ref4.apply(this, arguments);
      }

      return WeChatLogin;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__457 = (0, _index.genCompid)(__prefix + "$compid__457");
      var $props__457 = {
        "className": "wechat-login",
        "text": "\u5FAE\u4FE1\u767B\u5F55",
        "openType": "getUserInfo",
        "onGetUserInfo": this.HandleAutoLogin.bind(this),
        "type": "primary",
        "size": "small"
      };
      _index.propsManager.set($props__457, $compid__457);
      Object.assign(this.__state, {
        $compid__457: $compid__457
      });
      return this.__state;
    }
  }]);

  return Login;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/login/index", _temp2)) || _class);
exports.default = Login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Login, true));