"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _storage = require("../../../utils/storage.js");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["files", "selector", "selectorChecked", "groupItemChecked", "groupItem", "dateStart", "dateSel", "value", "dispatchPublishProduct"], _this.onDateStartChange = function (e) {
      _this.setState({
        dateStart: e.detail.value
      });
    }, _this.onDateEndChange = function (e) {
      _this.setState({
        dateSel: e.detail.value
      });
    }, _this.config = {
      navigationBarTitleText: '新增活动'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        files: [{
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
        }, {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
        }, {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
        }],
        selector: [['请选择', '美国', '中国', '巴西', '日本'], ['请选择', '美国', '中国', '巴西', '日本       ']],
        selectorChecked: '请选择',
        groupItemChecked: '请选择',
        groupItem: [],
        dateStart: '2018-04-21',
        dateSel: '2018-04-22',
        value: ''
      };
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.initGroup();
    }
  }, {
    key: "initGroup",
    value: function initGroup() {
      var groups = [];
      for (var i = 1; i < 15; i++) {
        groups.push(i);
      }

      this.setState({
        groupItem: groups
      });
    }
  }, {
    key: "onChange",
    value: function onChange(files) {
      this.setState({
        files: files
      });
    }
  }, {
    key: "handlePickerViewChange",
    value: function handlePickerViewChange(e) {
      var val = e.detail.value;
      console.log("val", val);
    }
  }, {
    key: "handlePickerChange",
    value: function handlePickerChange(e) {
      var selectedValue = this.state.selector[0][e.detail.value[0]] + " / " + this.state.selector[0][e.detail.value[1]];

      this.setState({
        selectorChecked: selectedValue
      });
    }
  }, {
    key: "handlePickerSelectGroupChange",
    value: function handlePickerSelectGroupChange(e) {
      this.setState({
        groupItemChecked: e.detail.value
      });
    }
  }, {
    key: "handlePickerColumnChange",
    value: function handlePickerColumnChange(e) {
      console.log('e', e);
    }
  }, {
    key: "onPublish",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var result, payload;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _storage.getAuthInfo)();

              case 2:
                result = _context.sent;
                payload = {
                  "advance": 0,
                  "discountPrice": 0,
                  "id": 0,
                  "location": "string",
                  "name": "string",
                  "price": 0,
                  "projectId": 0,
                  "projectLevel": 0,
                  "projectName": "string",
                  "userId": result.id
                };

                this.props.dispatchPublishProduct(payload).then(function (res) {
                  console.log('res', res);
                });
                return _context.abrupt("return");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onPublish(_x) {
        return _ref2.apply(this, arguments);
      }

      return onPublish;
    }()
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      });
      // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
      return value;
    }
  }, {
    key: "createProduct",
    value: function createProduct() {
      _index2.default.navigateTo({
        url: '/pages/product/add'
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "dispatchPublishProduct": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleChange", "handlePickerSelectGroupChange", "onDateStartChange", "onDateEndChange", "onChange", "onPublish"], _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));