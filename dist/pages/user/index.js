"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _create = require("./common/create.js");

var _create2 = _interopRequireDefault(_create);

var _actionCreators = require("./store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _jump = require("../utils/jump.js");

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["avatarUrl", "profit", "isAgent", "userName", "list", "orders", "showUserText", "dispatchReservationPlan", "UpdateUserInfo", "ChangeToAgent"], _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.jumpUrl = function (url) {
      _index2.default.navigateTo({
        url: url
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        isAgent: false,
        list: [],
        orders: [],
        profit: {},
        userName: '',
        showUserText: '切换为咨询师',
        avatarUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559209366699&di=07cc06c3fdf4cbac5d814dca9cd680b5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658'
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
      var that = this;
      _index2.default.getStorage({ key: 'authinfo' }).then(function (res) {
        console.log('res.data.avatarUrl', res.data.avatarUrl);
        that.setState({
          avatarUrl: res.data.avatarUrl,
          userName: res.data.nickName
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.autoLogin();
      this.bindEvent();
      this.initReservationPlan();
      var creatorInstance = new _create2.default();
      this.setState({
        isAgent: false,
        list: creatorInstance.factory(false).getPanelList(),
        orders: creatorInstance.factory(false).getList(),
        user: creatorInstance.factory(false).getUserInfo()
      });
    }
  }, {
    key: "initReservationPlan",
    value: function initReservationPlan() {
      var _this2 = this;

      this.props.dispatchReservationPlan().then(function (response) {
        _this2.setState({
          profit: response.content
        });
      });
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      this.handleChangeState = this.handleChangeState.bind(this);
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
                result = _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });
                return _context.abrupt("return", result);

              case 2:
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
    key: "autoLogin",
    value: function autoLogin() {
      var currentObj = this;
      wx.login({
        success: function success(res) {
          var payload = {
            code: res.code
          };
          currentObj.props.WeChatLogin(payload).then(function (res) {
            _index2.default.setStorage({ key: 'userinfo', data: res.content });
          });
        }
      });
    }
  }, {
    key: "getJpushAuthInfo",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = _index2.default.getStorage({ key: 'jpushAuth' }).then(function (res) {
                  return res.data;
                }).catch(function () {
                  return '';
                });
                return _context2.abrupt("return", result);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getJpushAuthInfo() {
        return _ref3.apply(this, arguments);
      }

      return getJpushAuthInfo;
    }()
  }, {
    key: "handleAuthClick",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _index2.default.getUserInfo().then(function (res) {
                  var errMsg = res.errMsg,
                      userInfo = res.userInfo;

                  if (errMsg === 'getUserInfo:ok') {
                    _index2.default.setStorage({ key: 'authinfo', data: userInfo });

                    console.log('userInfo', userInfo);

                    var payload = {
                      id: userInfo.id,
                      nickname: userInfo.nickName,
                      name: userInfo.nickName
                    };

                    _this3.setState({
                      avatarUrl: userInfo.avatarUrl,
                      userName: userInfo.nickName
                    });

                    _this3.props.UpdateUserInfo(payload).then(function (res) {
                      if (res.result === "success") {
                        (0, _jump2.default)({ url: '/pages/active/publish/index' });
                      }
                    });
                  } else {
                    _index2.default.showToast({
                      title: '授权失败',
                      icon: 'none'
                    });
                  }
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleAuthClick() {
        return _ref4.apply(this, arguments);
      }

      return handleAuthClick;
    }()
  }, {
    key: "handleChangeState",
    value: function handleChangeState() {
      this.props.ChangeToAgent({});
      var isAgent = this.state.isAgent;

      console.log('isAgent', isAgent);
      var creatorInstance = new _create2.default();
      this.setState({
        isAgent: !isAgent,
        list: creatorInstance.factory(!isAgent).getPanelList(),
        orders: creatorInstance.factory(!isAgent).getList(),
        user: creatorInstance.factory(!isAgent).getUserInfo()
      });
      this.setState({
        isAgent: !isAgent,
        showUserText: !isAgent ? '切换为用户' : '切换为咨询师'
      });
    }
  }, {
    key: "handleUpdateInfo",
    value: function handleUpdateInfo() {
      _index2.default.navigateTo({
        url: 'info/edit?userId=' + this.state.profit.id
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          isAgent = _state.isAgent,
          avatarUrl = _state.avatarUrl,
          userName = _state.userName,
          profit = _state.profit;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "dispatchReservationPlan": {
    "type": null,
    "value": null
  },
  "UpdateUserInfo": {
    "type": null,
    "value": null
  },
  "ChangeToAgent": {
    "type": null,
    "value": null
  },
  "list": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleUpdateInfo", "handleAuthClick", "handleChangeState"], _temp2)) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));