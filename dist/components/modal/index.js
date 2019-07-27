"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../npm/prop-types/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Modal, _BaseComponent);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "rootClass", "popUpClass", "title", "isRenderFooter", "cancelText", "confirmText", "_isOpened", "isOpened", "closeOnClickOverlay", "content", "popup", "animationType", "height", "children"], _this.onClose = function (e) {
      if (_this.props.closeOnClickOverlay) {
        _this.onCancel();
      }
    }, _this.onCancel = function (e) {
      _this.setState({
        _isOpened: false
      }, _this.props.onCancel());
    }, _this.onConfirm = function (e) {
      _this.props.onConfirm();
    }, _this.handleTouchMove = function (e) {
      e.stopPropagation();
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Modal.prototype.__proto__ || Object.getPrototypeOf(Modal.prototype), "_constructor", this).call(this, props);
      this.state = {
        _isOpened: this.props.isOpened
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _isOpened = this.state._isOpened;


      if (_isOpened != nextProps.isOpened) {
        this.setState({
          _isOpened: nextProps.isOpened
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _isOpened = this.__state._isOpened;
      var _props = this.__props,
          content = _props.content,
          title = _props.title,
          cancelText = _props.cancelText,
          confirmText = _props.confirmText,
          popup = _props.popup,
          animationType = _props.animationType,
          height = _props.height;


      var rootClass = (0, _index4.default)('mp-modal', {
        'mp-modal--active': _isOpened
      });

      var isPopUp = false;

      if (popup) {
        isPopUp = true;
        // eslint-disable-next-line no-unused-expressions
        animationType === 'slide-up' ? 'slide-up' : 'slide-down';
      }

      var contentHeight = "height:" + height + "px";

      var popUpClass = (0, _index4.default)(_defineProperty({
        'mp-modal__container': !isPopUp,
        'mp-modal__popup': isPopUp
      }, "mp-modal__popup-" + animationType, isPopUp && animationType));

      var isRenderFooter = cancelText || confirmText;

      var anonymousState__temp = (0, _index.internal_inline_style)(contentHeight);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        rootClass: rootClass,
        popUpClass: popUpClass,
        title: title,
        isRenderFooter: isRenderFooter,
        cancelText: cancelText,
        confirmText: confirmText
      });
      return this.__state;
    }
  }]);

  return Modal;
}(_index.Component), _class.$$events = ["handleTouchMove", "onClose", "onCancel", "onConfirm"], _class.$$componentPath = "components/modal/index", _temp2);


Modal.defaultProps = {
  closeOnClickOverlay: true,
  height: 228
};

Modal.propTypes = {
  title: _index6.default.string,
  isOpened: _index6.default.bool,
  onClose: _index6.default.func,
  onCancel: _index6.default.func,
  onConfirm: _index6.default.func,
  cancelText: _index6.default.string,
  confirmText: _index6.default.string
};
exports.default = Modal;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Modal));