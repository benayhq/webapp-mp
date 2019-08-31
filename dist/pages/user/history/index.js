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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["actives", "dispatchDownLoadUrl", "dispatchActiveHistory"], _this.config = {
      navigationBarTitleText: '浏览历史'
    }, _this.customComponents = ["Empty"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        actives: []
      };
      this.$$refs = [];
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
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var historys, that, promises, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                historys = [], that = this, promises = [];
                _context2.next = 3;
                return this.props.dispatchActiveHistory({});

              case 3:
                response = _context2.sent;


                console.log('response.content', response.content);

                if (response.content) {
                  response.content.map(function (item, index) {
                    var promise = that.getImgUrl(item.displayLocation);
                    promises.push(promise);
                    historys.push(item);
                  });
                }

                Promise.all(promises).then(function (result) {
                  if (result) {
                    result.map(function (item, key) {
                      historys[key].displayLocation = item;
                    });
                  }
                }).then(function (response) {
                  that.setState({
                    actives: historys
                  });
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _ref3.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "HandleActiveClick",
    value: function HandleActiveClick(item) {
      _index2.default.navigateTo({
        url: "/pages/product/detail?activeId=" + item.id + "&referId=" + item.agentId
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

      var actives = this.__state.actives;


      var renderTemplate = null;

      if (actives.length === 0) {} else {}

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = ["HandleActiveClick"], _class2.multipleSlots = true, _class2.$$componentPath = "pages/user/history/index", _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));