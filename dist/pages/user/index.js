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

var _create = require("./common/create.js");

var _create2 = _interopRequireDefault(_create);

var _actionCreators = require("./store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../npm/@tarojs/redux/index.js");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "_$anonymousState__temp2", "loopArray0", "$compid__1", "$compid__2", "$compid__3", "$compid__4", "loaded", "agreement", "userName", "isAgent", "profit", "list", "isShowLoanApp", "showUserText", "avatarUrl", "orders", "flag", "current", "context1", "context2", "context3", "context4", "isOpened", "isAgree", "dispatchReservationCount", "dispatchReservationPlan", "dispatchLoanInfo", "GetAgreeMent", "UpdateUserInfo", "ChangeToAgent", "ChangeToCustomer", "GetUserInfo"], _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.jumpUrl = function (url) {
      _index2.default.navigateTo({
        url: url
      });
    }, _this.customComponents = ["Loading", "AtModal", "AtModalHeader", "AtModalContent", "AtModalAction", "InCome", "UserOrder", "AtList", "AtListItem", "AtCard"], _temp), _possibleConstructorReturn(_this, _ret);
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
        flag: false,
        current: 0,
        userName: '',
        context1: '',
        context2: '',
        context3: '',
        context4: '',
        isOpened: false,
        showUserText: '',
        avatarUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559209366699&di=07cc06c3fdf4cbac5d814dca9cd680b5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658',
        isAgree: false,
        loaded: false,
        agreement: null
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.autoLogin();
      this.initAgreeMent();
    }
  }, {
    key: "initOrderNotice",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(creatorInstance, isAgent) {
        var list, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                list = creatorInstance.factory(isAgent).getList();
                _context.next = 3;
                return this.props.dispatchReservationCount({});

              case 3:
                response = _context.sent;

                if (list && list.length > 0) {
                  list.map(function (item, key) {
                    switch (item.status) {
                      case "UNPAY":
                        item.count = response.content.unpayCount;
                        break;
                      case "BATING":
                        item.count = response.content.batingCount;
                        break;
                      case "CONSUMPTION":
                        item.count = response.content.consumptionCount;
                        break;
                      case "COMMENTING":
                        item.count = response.content.commentingCount;
                        break;
                    }
                  });
                  this.setState({
                    orders: list
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initOrderNotice(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return initOrderNotice;
    }()
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
    key: "initLoanFlag",
    value: function initLoanFlag() {
      var that = this;
      this.props.dispatchLoanInfo().then(function (response) {
        that.setState({
          flag: response.content.flag,
          context1: response.content.context1,
          context2: response.content.context2,
          context3: response.content.context3,
          context4: response.content.context4
        });
      });
    }
  }, {
    key: "initAgreeMent",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.props.GetAgreeMent();

              case 2:
                result = _context2.sent;

                this.setState({
                  agreement: result
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initAgreeMent() {
        return _ref3.apply(this, arguments);
      }

      return initAgreeMent;
    }()
  }, {
    key: "getAuthInfo",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });
                return _context3.abrupt("return", result);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAuthInfo() {
        return _ref4.apply(this, arguments);
      }

      return getAuthInfo;
    }()
  }, {
    key: "autoLogin",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var currentObj;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                currentObj = this;

                wx.login({
                  success: function () {
                    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(res) {
                      var payload, response, result, rstUserInfo, data, isAgent, creatorInstance;
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              payload = { code: res.code };
                              _context4.next = 3;
                              return currentObj.props.WeChatLogin(payload);

                            case 3:
                              response = _context4.sent;

                              if (!(response.result === "success")) {
                                _context4.next = 22;
                                break;
                              }

                              _context4.next = 7;
                              return _index2.default.setStorage({ key: 'sessionId', data: response.content });

                            case 7:
                              result = _context4.sent;

                              if (!(result.errMsg === "setStorage:ok")) {
                                _context4.next = 20;
                                break;
                              }

                              _context4.next = 11;
                              return currentObj.props.GetUserInfo({});

                            case 11:
                              rstUserInfo = _context4.sent;
                              data = rstUserInfo.content, isAgent = data.role === "AGENT" ? true : false, creatorInstance = new _create2.default();

                              _index2.default.setStorage({ key: 'userinfo', data: data });
                              currentObj.checkAuth(data);
                              currentObj.initReservationPlan();
                              currentObj.initLoanFlag();
                              _context4.next = 19;
                              return currentObj.initOrderNotice(creatorInstance, isAgent);

                            case 19:
                              currentObj.setState({
                                loaded: true,
                                showUserText: isAgent ? '切换为用户' : '切换为咨询师',
                                isAgent: isAgent,
                                list: creatorInstance.factory(isAgent).getPanelList(),
                                user: creatorInstance.factory(isAgent).getUserInfo(),
                                avatarUrl: data.profileUrl,
                                userName: data.name
                              });

                            case 20:
                              _context4.next = 23;
                              break;

                            case 22:
                              _index2.default.showToast({
                                title: '网络异常',
                                icon: 'none'
                              });

                            case 23:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, this);
                    }));

                    function success(_x3) {
                      return _ref6.apply(this, arguments);
                    }

                    return success;
                  }()
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function autoLogin() {
        return _ref5.apply(this, arguments);
      }

      return autoLogin;
    }()
  }, {
    key: "initOrderStatus",
    value: function initOrderStatus() {
      var creatorInstance = new _create2.default();
      var list = creatorInstance.factory(false).getList();
      this.setState({
        orders: list
      });
    }
  }, {
    key: "checkAuth",
    value: function checkAuth(data) {
      if (!(data.profileUrl && data.nickname)) {
        _index2.default.navigateTo({
          url: '../../pages/login/index'
        });
      }
    }
  }, {
    key: "handleAuthClick",
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this3 = this;

        var result, errMsg, userInfo, payload;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _index2.default.getUserInfo();

              case 2:
                result = _context6.sent;
                errMsg = result.errMsg, userInfo = result.userInfo;

                if (errMsg === 'getUserInfo:ok') {
                  _index2.default.setStorage({ key: 'authinfo', data: userInfo });
                  payload = {
                    id: userInfo.id,
                    nickname: userInfo.nickName,
                    name: userInfo.nickName,
                    profileUrl: userInfo.avatarUrl
                  };

                  this.setState({
                    avatarUrl: userInfo.avatarUrl,
                    userName: userInfo.nickName
                  });
                  this.props.UpdateUserInfo(payload).then(function (res) {
                    console.log('res', res);
                    _this3.setState({
                      isOpened: false
                    });
                  });
                } else {
                  _index2.default.showToast({
                    title: '授权失败',
                    icon: 'none'
                  });
                }

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function handleAuthClick() {
        return _ref7.apply(this, arguments);
      }

      return handleAuthClick;
    }()
  }, {
    key: "handleChangeState",
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var isAgent, boolAgent, result, creatorInstance;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                isAgent = this.state.isAgent;
                boolAgent = !isAgent;
                _context7.next = 4;
                return this.getAuthInfo();

              case 4:
                result = _context7.sent;

                if (result.agentStatus === 1) {
                  boolAgent ? this.props.ChangeToAgent() : this.props.ChangeToCustomer();
                  this.setState({
                    isAgent: boolAgent,
                    showUserText: boolAgent ? '切换为用户' : '切换为咨询师'
                  });
                  creatorInstance = new _create2.default();

                  this.setState({
                    isAgree: false,
                    isAgent: boolAgent,
                    list: creatorInstance.factory(boolAgent).getPanelList(),
                    orders: this.initOrderNotice(creatorInstance, boolAgent),
                    user: creatorInstance.factory(boolAgent).getUserInfo()
                  });
                } else {
                  this.setState({
                    isAgree: true
                  });
                }

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function handleChangeState() {
        return _ref8.apply(this, arguments);
      }

      return handleChangeState;
    }()
  }, {
    key: "handleUpdateInfo",
    value: function handleUpdateInfo() {
      _index2.default.navigateTo({
        url: 'info/edit?userId=' + this.state.profit.id
      });
    }
  }, {
    key: "handleAppLoan",
    value: function handleAppLoan() {
      _index2.default.navigateTo({
        url: '../../pages/p2p/index'
      });
    }
  }, {
    key: "handleJumpUrl",
    value: function handleJumpUrl(url, event) {
      _index2.default.navigateTo({
        url: '../../' + url
      });
    }
  }, {
    key: "handleContact",
    value: function handleContact(e) {}
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
    }
  }, {
    key: "handlePublish",
    value: function handlePublish() {
      _index2.default.navigateTo({
        url: '../../pages/active/publish/index'
      });
    }
  }, {
    key: "handleCloseAgree",
    value: function handleCloseAgree() {
      console.log('handleCloseAgree');
      this.setState({
        isAgree: false
      });
    }
  }, {
    key: "handleCancelAgree",
    value: function handleCancelAgree() {
      this.setState({
        isAgree: false
      });
    }
  }, {
    key: "handleConfirmAgree",
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var rstUserInfo, data, creatorInstance;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.props.ChangeToAgent();

              case 2:
                _context8.next = 4;
                return this.props.GetUserInfo({});

              case 4:
                rstUserInfo = _context8.sent;
                data = rstUserInfo.content;

                _index2.default.setStorage({ key: 'userinfo', data: data });
                creatorInstance = new _create2.default();

                this.setState({
                  isAgree: false,
                  isAgent: true,
                  showUserText: '切换为用户',
                  list: creatorInstance.factory(true).getPanelList(),
                  orders: this.initOrderNotice(creatorInstance, true),
                  user: creatorInstance.factory(true).getUserInfo()
                });

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function handleConfirmAgree() {
        return _ref9.apply(this, arguments);
      }

      return handleConfirmAgree;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      var _this4 = this;

      var _$anonymousState__temp, _$anonymousState__temp2;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__1"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1 = _genCompid2[0],
          $compid__1 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__2"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__2 = _genCompid4[0],
          $compid__2 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__3"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__3 = _genCompid6[0],
          $compid__3 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__4"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__4 = _genCompid8[0],
          $compid__4 = _genCompid8[1];

      var loopArray0 = void 0;

      var _state = this.__state,
          isAgent = _state.isAgent,
          avatarUrl = _state.avatarUrl,
          userName = _state.userName,
          profit = _state.profit,
          orders = _state.orders,
          loaded = _state.loaded,
          flag = _state.flag,
          isOpened = _state.isOpened,
          showUserText = _state.showUserText,
          list = _state.list,
          isAgree = _state.isAgree,
          agreement = _state.agreement;

      var isShowLoanApp = !isAgent && flag;
      var renderTemplate = null;

      if (!loaded) {} else {
        _$anonymousState__temp = isAgent ? "position:relative;display:" + (isAgent === true ? 'block' : 'none') + ";top:-48px;height:30px;width:564rpx;left:20rpx;text-align:left;opacity: 0.8;padding-left:3px;padding-right:14px;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:32rpx;text-decoration:none;line-height:2.55555556;border-radius:5px;border:none;border:initial;-webkit-tap-highlight-color:transparent;overflow:hidden;color:#000000;background-color:#FFFFFF;" : null;
        _$anonymousState__temp2 = "position:relative;display:" + (isAgent === true ? 'none' : 'block') + ";top:-90rpx;left:6rpx;height:40px;width:520rpx;opacity: 0.8; margin-left:auto;margin-right:auto;padding-left:0px;padding-right:14px;box-sizing:border-box;font-size:32rpx;text-align:left;text-decoration:none;line-height:2.55555556;border-radius:5px;border:none;border:initial;-webkit-tap-highlight-color:transparent;overflow:hidden;color:#000000;background-color:#FFFFFF;";
        loopArray0 = list.length > 0 ? list.map(function (item, _anonIdx) {
          item = {
            $original: (0, _index.internal_get_original)(item)
          };

          var _genCompid9 = (0, _index.genCompid)(__prefix + "azzzzzzzzz" + _anonIdx, true),
              _genCompid10 = _slicedToArray(_genCompid9, 2),
              $prevCompid__0 = _genCompid10[0],
              $compid__0 = _genCompid10[1];

          _index.propsManager.set({
            "title": item.$original.text,
            "arrow": "right",
            "thumb": item.$original.url,
            "onClick": _this4.handleJumpUrl.bind(_this4, item.$original.pageUrl)
          }, $compid__0, $prevCompid__0);
          return {
            $compid__0: $compid__0,
            $original: item.$original
          };
        }) : [];
        _index.propsManager.set({
          "isOpened": isAgree,
          "closeOnClickOverlay": false
        }, $compid__1, $prevCompid__1);
        isAgent && _index.propsManager.set({
          "profit": profit
        }, $compid__2, $prevCompid__2);
        _index.propsManager.set({
          "list": orders,
          "isAgent": isAgent
        }, $compid__3, $prevCompid__3);
        isShowLoanApp === true && _index.propsManager.set({
          "title": this.__state.context1
        }, $compid__4, $prevCompid__4);
      }

      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        _$anonymousState__temp2: _$anonymousState__temp2,
        loopArray0: loopArray0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3,
        $compid__4: $compid__4,
        isShowLoanApp: isShowLoanApp
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = ["handleCloseAgree", "handleConfirmAgree", "handleUpdateInfo", "handlePublish", "handleAppLoan", "handleChangeState"], _class2.multipleSlots = true, _class2.$$componentPath = "pages/user/index", _temp2)) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));