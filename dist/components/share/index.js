"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _isFunction2 = require("../../npm/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Share, _BaseComponent);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__1612", "activeId", "isOpened"], _this.customComponents = ["AtFloatLayout"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Share, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Share.prototype.__proto__ || Object.getPrototypeOf(Share.prototype), "_constructor", this).apply(this, arguments);
      this.$$refs = [];
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      if ((0, _isFunction3.default)(this.props.onClose)) {
        this.props.onClose();
      }
    }
  }, {
    key: "handleCreatePosters",
    value: function handleCreatePosters() {
      _index2.default.navigateTo({
        url: "/pages/active/share/index?activeId=" + this.props.activeId
      });
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(ops) {
      // console.log('....share....');
      // debugger;
      _index2.default.showToast({
        title: 'fdsafdsaf'
      });
      // return;
      return {
        title: '测试测试',
        path: '/pages/user/index', // 路径，传递参数到指定页面。
        imageUrl: '', // 分享的封面图
        success: function success(res) {},
        fail: function fail(res) {}
      };
      return;

      var that = this;
      // 设置菜单中的转发按钮触发转发事件时的转发内容
      var shareObj = {
        title: "转发的标题", // 默认是小程序的名称(可以写slogan等)
        path: 'pages/user/index', // 默认是当前页面，必须是以‘/’开头的完整路径
        imageUrl: '', //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
        success: function success(res) {
          // 转发成功之后的回调
          if (res.errMsg == 'shareAppMessage:ok') {}
        },
        fail: function fail() {
          // 转发失败之后的回调
          if (res.errMsg == 'shareAppMessage:fail cancel') {
            // 用户取消转发
          } else if (res.errMsg == 'shareAppMessage:fail') {
            // 转发失败，其中 detail message 为详细失败信息
          }
        }
      };

      if (ops.from === 'button') {
        var eData = options.target.dataset;
        console.log(eData.name); // shareBtn
        // 此处可以修改 shareObj 中的内容
        shareObj.path = 'pages/user/index';
      }
      _index2.default.showToast({
        title: eData.name
      });

      _index2.default.showToast({
        title: shareObj.path
      });
      // 返回shareObj
      return shareObj;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__1612 = (0, _index.genCompid)(__prefix + "$compid__1612");

      var isOpened = this.__props.isOpened;


      var $props__1612 = {
        "isOpened": isOpened,
        "title": "\u5206  \u4EAB",
        "onClose": this.handleClose.bind(this)
      };
      _index.propsManager.set($props__1612, $compid__1612);
      Object.assign(this.__state, {
        $compid__1612: $compid__1612
      });
      return this.__state;
    }
  }]);

  return Share;
}(_index.Component), _class.$$events = ["handleCreatePosters"], _class.$$componentPath = "components/share/index", _temp2);
exports.default = Share;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Share));