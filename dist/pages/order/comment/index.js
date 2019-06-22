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

var Comment = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Comment, _BaseComponent);

  function Comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["envValue", "serveValue", "profValue", "effectValue", "commentValue", "files"], _this.config = {
      navigationBarTitleText: '发表评价'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Comment.prototype.__proto__ || Object.getPrototypeOf(Comment.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        commentValue: '',
        envValue: 0,
        serveValue: 0,
        profValue: 0,
        effectValue: 0,
        files: []
      };
    }
  }, {
    key: "onChange",
    value: function onChange(files) {
      this.setState({
        files: files
      });
    }
  }, {
    key: "onFail",
    value: function onFail(mes) {
      console.log(mes);
    }
  }, {
    key: "onImageClick",
    value: function onImageClick(index, file) {
      console.log(index, file);
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleEnvChange",
    value: function handleEnvChange(event) {
      this.setState({
        envValue: event.target.value
      });
    }
  }, {
    key: "handleServeChange",
    value: function handleServeChange(event) {
      this.setState({
        serveValue: event.target.value
      });
    }
  }, {
    key: "handleProfChange",
    value: function handleProfChange(event) {
      this.setState({
        profValue: event.target.value
      });
    }
  }, {
    key: "handleEffectChange",
    value: function handleEffectChange(event) {
      this.setState({
        effectValue: event.target.value
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          rateValue = _state.rateValue,
          commentValue = _state.commentValue;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Comment;
}(_index.Component), _class.properties = {}, _class.$$events = ["handleEnvChange", "handleServeChange", "handleProfChange", "handleEffectChange", "handleChange", "onChange"], _temp2);
exports.default = Comment;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Comment, true));