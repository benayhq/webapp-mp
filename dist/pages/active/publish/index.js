"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["files", "selector", "selectorChecked", "groupItemChecked", "groupItem", "dateStart", "dateSel"], _this.onDateStartChange = function (e) {
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
        dateSel: '2018-04-22'
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
    value: function onPublish(e) {
      _index2.default.navigateTo({
        url: '/pages/active/share/index'
      });
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
}(_index.Component), _class.properties = {}, _class.$$events = ["handlePickerSelectGroupChange", "onDateStartChange", "onDateEndChange", "onChange", "onPublish"], _temp2);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));