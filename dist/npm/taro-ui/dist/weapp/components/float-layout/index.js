"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _isFunction2 = require("../../../../../lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

var _utils = require("../../common/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable taro/function-naming */


var AtFloatLayout = function (_AtComponent) {
  _inherits(AtFloatLayout, _AtComponent);

  function AtFloatLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtFloatLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtFloatLayout.__proto__ || Object.getPrototypeOf(AtFloatLayout)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["rootClass", "title", "scrollY", "scrollX", "scrollTop", "scrollLeft", "upperThreshold", "lowerThreshold", "scrollWithAnimation", "_isOpened", "children"], _this.handleClose = function () {
      if ((0, _isFunction3.default)(_this.props.onClose)) {
        _this.__triggerPropsFn("onClose", [null].concat([]));
      }
    }, _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    }, _this.handleTouchMove = function (e) {
      e.stopPropagation();
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtFloatLayout, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtFloatLayout.prototype.__proto__ || Object.getPrototypeOf(AtFloatLayout.prototype), "_constructor", this).apply(this, arguments);

      var isOpened = props.isOpened;

      this.state = {
        _isOpened: isOpened
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;


      if (this.props.isOpened !== isOpened) {
        (0, _utils.handleTouchScroll)(isOpened);
      }

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _isOpened = this.__state._isOpened;
      var _props = this.__props,
          title = _props.title,
          scrollY = _props.scrollY,
          scrollX = _props.scrollX,
          scrollTop = _props.scrollTop,
          scrollLeft = _props.scrollLeft,
          upperThreshold = _props.upperThreshold,
          lowerThreshold = _props.lowerThreshold,
          scrollWithAnimation = _props.scrollWithAnimation;


      var rootClass = (0, _index6.default)('at-float-layout', {
        'at-float-layout--active': _isOpened
      }, this.__props.className);

      Object.assign(this.__state, {
        rootClass: rootClass,
        title: title,
        scrollY: scrollY,
        scrollX: scrollX,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        upperThreshold: upperThreshold,
        lowerThreshold: lowerThreshold,
        scrollWithAnimation: scrollWithAnimation
      });
      return this.__state;
    }
  }, {
    key: "func__yiyze",
    value: function func__yiyze() {
      this.__triggerPropsFn("onScroll", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "func__aCVWo",
    value: function func__aCVWo() {
      this.__triggerPropsFn("onScrollToLower", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "func__FqtWl",
    value: function func__FqtWl() {
      this.__triggerPropsFn("onScrollToUpper", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return AtFloatLayout;
}(_component2.default);

AtFloatLayout.properties = {
  "isOpened": null,
  "onClose": null,
  "__fn_onClose": null,
  "title": null,
  "scrollY": null,
  "scrollX": null,
  "scrollTop": null,
  "scrollLeft": null,
  "upperThreshold": null,
  "lowerThreshold": null,
  "scrollWithAnimation": null,
  "className": null,
  "onScroll": null,
  "__fn_onScroll": null,
  "onScrollToLower": null,
  "__fn_onScrollToLower": null,
  "onScrollToUpper": null,
  "__fn_onScrollToUpper": null
};
AtFloatLayout.$$events = ["handleTouchMove", "close", "func__yiyze", "func__aCVWo", "func__FqtWl"];


AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,

  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false,

  onClose: function onClose() {},
  onScroll: function onScroll() {},
  onScrollToLower: function onScrollToLower() {},
  onScrollToUpper: function onScrollToUpper() {}
};

AtFloatLayout.propType = {
  title: _index4.default.string,
  isOpened: _index4.default.bool,
  scrollY: _index4.default.bool,
  scrollX: _index4.default.bool,
  scrollTop: _index4.default.number,
  scrollLeft: _index4.default.number,
  upperThreshold: _index4.default.number,
  lowerThreshold: _index4.default.number,
  scrollWithAnimation: _index4.default.bool,
  onClose: _index4.default.func,
  onScroll: _index4.default.func,
  onScrollToLower: _index4.default.func,
  onScrollToUpper: _index4.default.func
};
exports.default = AtFloatLayout;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtFloatLayout));