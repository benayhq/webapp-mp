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

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtRate = function (_AtComponent) {
  _inherits(AtRate, _AtComponent);

  function AtRate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtRate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtRate.__proto__ || Object.getPrototypeOf(AtRate)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray0", "classNameArr"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtRate, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtRate.prototype.__proto__ || Object.getPrototypeOf(AtRate.prototype), "_constructor", this).apply(this, arguments);
      if (false) {
        _index2.default.initPxTransform({ designWidth: 750 });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.__triggerPropsFn("onChange", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          value = _props.value,
          max = _props.max,
          size = _props.size,
          margin = _props.margin;


      var iconStyle = {
        marginRight: _index2.default.pxTransform(margin)
      };
      var starIconStyle = {
        fontSize: size ? size + "px" : ''

        // 生成星星颜色 className 数组，方便在jsx中直接map
      };var classNameArr = [];
      var floorValue = Math.floor(value);
      var ceilValue = Math.ceil(value);
      for (var i = 0; i < max; i++) {
        if (floorValue > i) {
          classNameArr.push('at-rate__icon at-rate__icon--on');
        } else if (ceilValue - 1 === i) {
          classNameArr.push('at-rate__icon at-rate__icon--half');
        } else {
          classNameArr.push('at-rate__icon at-rate__icon--off');
        }
      }

      var anonymousState__temp = (0, _index6.default)('at-rate', className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var loopArray0 = classNameArr.map(function (cls, i) {
        cls = {
          $$original: (0, _index.internal_get_original)(cls)
        };
        var $loopState__temp4 = (0, _index.internal_inline_style)(iconStyle);
        var $loopState__temp6 = (0, _index.internal_inline_style)(starIconStyle);
        var $loopState__temp8 = (0, _index.internal_inline_style)(starIconStyle);
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $$original: cls.$$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray0: loopArray0,
        classNameArr: classNameArr
      });
      return this.__state;
    }
  }]);

  return AtRate;
}(_component2.default);

AtRate.properties = {
  "__fn_onChange": null,
  "customStyle": null,
  "className": null,
  "value": null,
  "max": null,
  "size": null,
  "margin": null
};
AtRate.$$events = ["handleClick"];


AtRate.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  size: 0,
  value: 0,
  max: 5,
  margin: 5,
  onChange: function onChange() {}
};

AtRate.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  size: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  value: _index4.default.number,
  max: _index4.default.number,
  margin: _index4.default.number,
  onChange: _index4.default.func
};
exports.default = AtRate;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtRate));