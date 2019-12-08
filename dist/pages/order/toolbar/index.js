"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__76", "$compid__77", "$compid__78", "$compid__79", "$compid__80", "toolBar", "undefined", "modal"], _this.toggleVisible = function () {
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
      this.$$refs = new _index2.default.RefsArray();
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

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__76"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__76 = _genCompid2[0],
          $compid__76 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__77"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__77 = _genCompid4[0],
          $compid__77 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__78"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__78 = _genCompid6[0],
          $compid__78 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__79"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__79 = _genCompid8[0],
          $compid__79 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__80"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__80 = _genCompid10[0],
          $compid__80 = _genCompid10[1];

      var toolBar = this.__props.toolBar;


      if (toolBar == null || toolBar == undefined) {}

      if (toolBar && toolBar[0] && toolBar[1]) {
        _index.propsManager.set({
          "onClick": this.handleOrderClick.bind(this, toolBar[0].event),
          "type": "primary",
          "size": "small"
        }, $compid__76, $prevCompid__76);
        _index.propsManager.set({
          "onClick": this.__props.toolBar.event,
          "type": "primary",
          "size": "small"
        }, $compid__77, $prevCompid__77);
        _index.propsManager.set({
          "title": this.modal.title,
          "content": this.modal.content,
          "isOpened": this.modal.isOpened,
          "cancelText": this.modal.cancelText,
          "confirmText": this.modal.confirmText,
          "closeOnClickOverlay": this.modal.closeOnClickOverlay,
          "onClose": this.onClose,
          "onConfirm": this.onConfirm,
          "onCancel": this.onCancel
        }, $compid__78, $prevCompid__78);
      }

      if (toolBar && toolBar[0]) {
        toolBar && _index.propsManager.set({
          "onClick": this.__props.toolBar.event,
          "type": "primary",
          "size": "small"
        }, $compid__79, $prevCompid__79);
      }

      if (toolBar && toolBar[1]) {
        toolBar && _index.propsManager.set({
          "onClick": this.__props.toolBar.event,
          "type": "primary",
          "size": "small"
        }, $compid__80, $prevCompid__80);
      }
      Object.assign(this.__state, {
        $compid__76: $compid__76,
        $compid__77: $compid__77,
        $compid__78: $compid__78,
        $compid__79: $compid__79,
        $compid__80: $compid__80,
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