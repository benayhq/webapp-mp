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

var AtLoadMore = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtLoadMore, _AtComponent);

  function AtLoadMore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtLoadMore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtLoadMore.__proto__ || Object.getPrototypeOf(AtLoadMore)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__78", "$compid__79", "status", "moreText", "noMoreText", "className", "customStyle", "loadingText", "moreBtnStyle", "noMoreTextStyle"], _this.customComponents = ["AtActivityIndicator", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtLoadMore, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtLoadMore.prototype.__proto__ || Object.getPrototypeOf(AtLoadMore.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var _props;

      (_props = this.props).onClick.apply(_props, arguments);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__78 = (0, _index.genCompid)(__prefix + "$compid__78");
      var $compid__79 = (0, _index.genCompid)(__prefix + "$compid__79");

      var _props2 = this.__props,
          className = _props2.className,
          customStyle = _props2.customStyle,
          loadingText = _props2.loadingText,
          moreText = _props2.moreText,
          status = _props2.status,
          moreBtnStyle = _props2.moreBtnStyle,
          noMoreTextStyle = _props2.noMoreTextStyle,
          noMoreText = _props2.noMoreText;


      var component = null;
      if (status === 'loading') {
        var $props__78 = {
          "mode": "center",
          "content": loadingText
        };
        _index.propsManager.set($props__78, $compid__78);
      } else if (status === 'more') {
        var $props__79 = {
          "full": true,
          "onClick": this.onClick.bind(this),
          "customStyle": moreBtnStyle
        };
        _index.propsManager.set($props__79, $compid__79);
      } else {
        _$anonymousState__temp = (0, _index.internal_inline_style)(noMoreTextStyle);
      }

      var anonymousState__temp2 = (0, _index6.default)('at-load-more', className);
      var anonymousState__temp3 = (0, _index.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__78: $compid__78,
        $compid__79: $compid__79,
        status: status,
        moreText: moreText,
        noMoreText: noMoreText
      });
      return this.__state;
    }
  }]);

  return AtLoadMore;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "Users/shawn/entrepreneurship/webapp-mp/node_modules/taro-ui/dist/weapp/components/load-more/index", _temp2);


AtLoadMore.defaultProps = {
  customStyle: '',
  className: '',
  noMoreTextStyle: '',
  moreBtnStyle: '',
  status: 'more',
  loadingText: '加载中',
  moreText: '查看更多',
  noMoreText: '没有更多',
  onClick: function onClick() {}
};

AtLoadMore.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  noMoreTextStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  moreBtnStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  status: _index4.default.oneOf(['more', 'loading', 'noMore']),
  loadingText: _index4.default.string,
  moreText: _index4.default.string,
  noMoreText: _index4.default.string,
  onClick: _index4.default.func
};
exports.default = AtLoadMore;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtLoadMore));