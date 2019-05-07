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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["rootClass", "popUpClass", "title", "content", "isRenderFooter", "cancelText", "confirmText", "_isOpened", "isOpened", "closeOnClickOverlay", "__fn_onCancel", "popup", "animationType"], _this.onClose = function (e) {
      if (_this.props.closeOnClickOverlay) {
        _this.onCancel();
      }
    }, _this.onCancel = function (e) {
      _this.setState({
        _isOpened: false
      }, _this.__triggerPropsFn("onCancel", [null].concat([])));
    }, _this.onConfirm = function (e) {
      if ((0, _isFunction3.default)(_this.props.onConfirm)) {
        _this.__triggerPropsFn("onConfirm", [null].concat([]));
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Modal.prototype.__proto__ || Object.getPrototypeOf(Modal.prototype), "_constructor", this).call(this, props);
      this.state = {
        _isOpened: this.props.isOpened
      };
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
      var __runloopRef = arguments[2];
      ;

      var _isOpened = this.__state._isOpened;
      var _props = this.__props,
          content = _props.content,
          title = _props.title,
          cancelText = _props.cancelText,
          confirmText = _props.confirmText,
          popup = _props.popup,
          animationType = _props.animationType;


      var rootClass = (0, _index4.default)('mp-modal', {
        'mp-modal--active': _isOpened
      });

      var isPopUp = false;

      if (popup) {
        isPopUp = true;
        // eslint-disable-next-line no-unused-expressions
        animationType === 'slide-up' ? 'slide-up' : 'slide-down';
      }

      var popUpClass = (0, _index4.default)(_defineProperty({
        'mp-modal__container': !isPopUp,
        'mp-modal__popup': isPopUp
      }, "mp-modal__popup-" + animationType, isPopUp && animationType));

      console.log('popUpClass', popUpClass);

      var isRenderFooter = cancelText || confirmText;

      Object.assign(this.__state, {
        rootClass: rootClass,
        popUpClass: popUpClass,
        title: title,
        content: content,
        isRenderFooter: isRenderFooter,
        cancelText: cancelText,
        confirmText: confirmText
      });
      return this.__state;
    }
  }]);

  return Modal;
}(_index.Component), _class.properties = {
  "isOpened": {
    "type": null,
    "value": null
  },
  "closeOnClickOverlay": {
    "type": null,
    "value": null
  },
  "__fn_onCancel": {
    "type": null,
    "value": null
  },
  "onConfirm": {
    "type": null,
    "value": null
  },
  "__fn_onConfirm": {
    "type": null,
    "value": null
  },
  "content": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "cancelText": {
    "type": null,
    "value": null
  },
  "confirmText": {
    "type": null,
    "value": null
  },
  "popup": {
    "type": null,
    "value": null
  },
  "animationType": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["onClose", "onCancel", "onConfirm"], _temp2);


Modal.defaultProps = {
  closeOnClickOverlay: true
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