"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

require("../../../npm/@tarojs/async-await/index.js");

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _style = require("../../../utils/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RECOMMEND_SIZE = 0,
    globalLastItem = 0;

var Index = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "pageLoaded", "activeList", "agentId", "hasMore", "loading"], _this.state = {
      activeList: [],
      agentId: 0,
      hasMore: true,
      loading: false,
      pageLoaded: false
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
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
    key: "getImgUrl",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                payload = {
                  location: location
                };
                _context2.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result.content);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getImgUrl(_x) {
        return _ref3.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadMore();
    }
  }, {
    key: "handleClick",
    value: function handleClick(item) {
      _index2.default.navigateTo({
        url: "../../../packageA/pages/product/detail?activeId=" + item.id + "&referId=" + item.agentId
      });
    }
  }, {
    key: "handleSwithActive",
    value: function handleSwithActive(item) {
      console.log('item', item);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {

      globalLastItem = 0;
      RECOMMEND_SIZE = 0;
      if (this.$router.params.agentId) {
        this.setState({
          agentId: this.$router.params.agentId
        });
      }
    }
  }, {
    key: "loadMore",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this2 = this;

        var result, agentId, that, payload, list, response, promises;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAuthInfo();

              case 2:
                result = _context3.sent;
                agentId = this.state.agentId;


                RECOMMEND_SIZE = RECOMMEND_SIZE + 12;

                that = this;

                this.setState({ loading: true });
                payload = {
                  pageNo: 0,
                  pageSize: RECOMMEND_SIZE,
                  agentId: agentId === 0 ? result.id : agentId
                }, list = [];
                _context3.next = 10;
                return this.props.dispatchOwnerActiveHistory(payload);

              case 10:
                response = _context3.sent;

                if (!(globalLastItem == response.content.length)) {
                  _context3.next = 16;
                  break;
                }

                this.setState({
                  loading: false,
                  hasMore: false
                });
                return _context3.abrupt("return");

              case 16:
                globalLastItem = response.content.length;

              case 17:
                promises = [];


                if (response.content.length > 0) {
                  response.content.map(function (item) {
                    var promise = _this2.getImgUrl(item.displayLocation);
                    promises.push(promise);
                    list.push({
                      name: item.name,
                      people: item.people,
                      endD: item.endD,
                      url: '',
                      agentId: item.agentId,
                      id: item.id,
                      status: item.status
                    });
                  });
                  Promise.all(promises).then(function (result) {
                    if (result) {
                      result.map(function (item, key) {
                        list[key].url = item;
                      });
                    }
                  }).then(function () {
                    that.setState({
                      activeList: list,
                      loading: false,
                      pageLoaded: true,
                      hasMore: true
                    });
                  }).catch(function (response) {
                    that.setState({
                      loading: false,
                      pageLoaded: true,
                      hasMore: false
                    });
                  });
                }

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadMore() {
        return _ref4.apply(this, arguments);
      }

      return loadMore;
    }()
  }, {
    key: "handleCloseActive",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('handleCloseActive id', id);
                payload = { id: id };
                _context4.next = 4;
                return this.props.CloseAction(payload);

              case 4:
                result = _context4.sent;

                this.loadMore();
                console.log('result', result);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleCloseActive(_x2) {
        return _ref5.apply(this, arguments);
      }

      return handleCloseActive;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _state = this.__state,
          activeList = _state.activeList,
          pageLoaded = _state.pageLoaded;

      var renderTemplate = null;
      if (!pageLoaded) {} else if (activeList.length > 0) {} else {}

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: (0, _style.getWindowHeight)() });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component)) || _class);
Index.properties = {
  "dispatchDownLoadUrl": null,
  "dispatchOwnerActiveHistory": null,
  "CloseAction": null
};
Index.$$events = ["loadMore"];
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));