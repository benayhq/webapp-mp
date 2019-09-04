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

var ToolBar = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ToolBar, _BaseComponent);

  function ToolBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToolBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__64", "$compid__65", "$compid__66", "$compid__67", "$compid__68", "toolBar", "undefined", "modal"], _this.toggleVisible = function () {
      console.log('onConfirm');
    }, _this.customComponents = ["AtButton", "Modal"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToolBar, [{
    key: "_constructor",
    value: function _constructor() {
      _get(ToolBar.prototype.__proto__ || Object.getPrototypeOf(ToolBar.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        modal: {
          isOpened: false,
          title: '标题',
          content: '内容',
          cancelText: '取消',
          confirmText: '确认',
          closeOnClickOverlay: false
        }
      };
      this.$$refs = [];
    }
  }, {
    key: "handleOrderClick",
    value: function handleOrderClick(event) {
      var self = this;
      switch (event) {
        case "Cancel":
          self.setState({
            modal: {
              isOpened: true,
              title: '标题',
              content: '内容',
              cancelText: '取消',
              confirmText: '确认',
              closeOnClickOverlay: true
            }
          });
          break;
      }
    }
  }, {
    key: "onClose",
    value: function onClose(e) {
      console.log('onClose parent', e);
    }
  }, {
    key: "onConfirm",
    value: function onConfirm() {
      console.log('callback onConfirm');
      this.onCancel();
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      this.setState({
        modal: {
          isOpened: false
        }
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
      var $compid__64 = (0, _index.genCompid)(__prefix + "$compid__64");
      var $compid__65 = (0, _index.genCompid)(__prefix + "$compid__65");
      var $compid__66 = (0, _index.genCompid)(__prefix + "$compid__66");
      var $compid__67 = (0, _index.genCompid)(__prefix + "$compid__67");
      var $compid__68 = (0, _index.genCompid)(__prefix + "$compid__68");

      var toolBar = this.__props.toolBar;


      if (toolBar == null || toolBar == undefined) {}

      if (toolBar && toolBar[0] && toolBar[1]) {
        var $props__64 = {
          "onClick": this.handleOrderClick.bind(this, toolBar[0].event),
          "type": "primary",
          "size": "small"
        };
        var $props__65 = {
          "onClick": this.__props.toolBar.event,
          "type": "primary",
          "size": "small"
        };
        var $props__66 = {
          "title": this.modal.title,
          "content": this.modal.content,
          "isOpened": this.modal.isOpened,
          "cancelText": this.modal.cancelText,
          "confirmText": this.modal.confirmText,
          "closeOnClickOverlay": this.modal.closeOnClickOverlay,
          "onClose": this.onClose,
          "onConfirm": this.onConfirm,
          "onCancel": this.onCancel
        };
        _index.propsManager.set($props__64, $compid__64);
        _index.propsManager.set($props__65, $compid__65);
        _index.propsManager.set($props__66, $compid__66);
      }

      if (toolBar && toolBar[0]) {
        var $props__67 = {
          "onClick": this.__props.toolBar.event,
          "type": "primary",
          "size": "small"
        };
        toolBar && _index.propsManager.set($props__67, $compid__67);
      }

      if (toolBar && toolBar[1]) {
        var $props__68 = {
          "onClick": this.__props.toolBar.event,
          "type": "primary",
          "size": "small"
        };
        toolBar && _index.propsManager.set($props__68, $compid__68);
      }
      Object.assign(this.__state, {
        $compid__64: $compid__64,
        $compid__65: $compid__65,
        $compid__66: $compid__66,
        $compid__67: $compid__67,
        $compid__68: $compid__68,
        toolBar: toolBar,
        undefined: undefined
      });
      return this.__state;
    }
  }]);

  return ToolBar;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/order/toolbar/index", _temp2);
exports.default = ToolBar;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ToolBar));