"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

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

var AtActivityIndicator = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtActivityIndicator, _AtComponent);

  function AtActivityIndicator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtActivityIndicator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtActivityIndicator.__proto__ || Object.getPrototypeOf(AtActivityIndicator)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__83", "rootClass", "content", "color", "size", "mode", "className"], _this.customComponents = ["AtLoading"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtActivityIndicator, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtActivityIndicator.prototype.__proto__ || Object.getPrototypeOf(AtActivityIndicator.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__83 = (0, _index.genCompid)(__prefix + "$compid__83");

      var _props = this.__props,
          color = _props.color,
          size = _props.size,
          mode = _props.mode,
          content = _props.content;


      var rootClass = (0, _index6.default)('at-activity-indicator', {
        'at-activity-indicator--center': mode === 'center'
      }, this.__props.className);

      var $props__83 = {
        "size": size,
        "color": color
      };
      _index.propsManager.set($props__83, $compid__83);
      Object.assign(this.__state, {
        $compid__83: $compid__83,
        rootClass: rootClass,
        content: content
      });
      return this.__state;
    }
  }]);

  return AtActivityIndicator;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "Users/shawn/entrepreneurship/webapp-mp/node_modules/taro-ui/dist/weapp/components/activity-indicator/index", _temp2);


AtActivityIndicator.defaultProps = {
  size: 0,
  mode: '',
  color: '',
  content: '',
  className: ''
};

AtActivityIndicator.propTypes = {
  size: _index4.default.number,
  mode: _index4.default.string,
  color: _index4.default.string,
  content: _index4.default.string,
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string])
};
exports.default = AtActivityIndicator;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtActivityIndicator));