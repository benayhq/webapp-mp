"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _style = require("../../utils/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "bContact", "bSpec", "showOrderDialog", "isOpened", "categoryDialog", "visible"], _this.config = {
      navigationBarTitleText: '活动详情'
    }, _this.toggleVisible = function () {
      _this.setState({
        visible: !_this.state.visible
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isOpened: false,
        categoryDialog: false,
        visible: true,
        bSpec: true,
        bContact: false,
        showOrderDialog: false
      };
    }
  }, {
    key: "openDialog",
    value: function openDialog() {
      this.setState({
        visible: true,
        bContact: true,
        bSpec: false,
        showOrderDialog: false
      });
    }
  }, {
    key: "openCategoryDialog",
    value: function openCategoryDialog() {
      this.setState({
        visible: true,
        bSpec: true,
        bContact: false,
        showOrderDialog: false
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "showMpDialog",
    value: function showMpDialog() {
      this.setState({
        showOrderDialog: true
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var height = (0, _style.getWindowHeight)(false);

      var _state = this.__state,
          isOpened = _state.isOpened,
          bSpec = _state.bSpec,
          bContact = _state.bContact,
          showOrderDialog = _state.showOrderDialog;


      var popupStyle = { transform: "translateY(" + _index2.default.pxTransform(-100) + ")" };

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: height });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class.properties = {}, _class.$$events = ["showMpDialog", "openDialog", "openCategoryDialog", "toggleVisible"], _temp2);
exports.default = Detail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));