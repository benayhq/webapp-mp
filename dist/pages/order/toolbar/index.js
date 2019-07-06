"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["toolBar", "undefined", "modal", "__fn_onClick"], _this.toggleVisible = function () {
      console.log('onConfirm');
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
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
      var __runloopRef = arguments[2];
      var modal = this.modal;
      var toolBar = this.__props.toolBar;


      if (toolBar == null || toolBar == undefined) {}

      if (toolBar && toolBar[0] && toolBar[1]) {}

      if (toolBar && toolBar[0]) {}

      if (toolBar && toolBar[1]) {}
      Object.assign(this.__state, {
        toolBar: toolBar,
        undefined: undefined
      });
      return this.__state;
    }
  }, {
    key: "funPrivateCGAXz",
    value: function funPrivateCGAXz() {
      this.__triggerPropsFn("toolBar.event", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return ToolBar;
}(_index.Component), _class.properties = {
  "toolBar": {
    "type": null,
    "value": null
  },
  "toolBar.event": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleOrderClick", "funPrivateCGAXz", "onClose", "onConfirm", "onCancel"], _temp2);
exports.default = ToolBar;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ToolBar));