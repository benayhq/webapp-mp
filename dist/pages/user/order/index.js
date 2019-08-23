"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _jump = require("../../utils/jump.js");

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserOrder = (_temp2 = _class = function (_BaseComponent) {
  _inherits(UserOrder, _BaseComponent);

  function UserOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserOrder.__proto__ || Object.getPrototypeOf(UserOrder)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray13", "list", "undefined"], _this.customComponents = ["AtBadge"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserOrder, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UserOrder.prototype.__proto__ || Object.getPrototypeOf(UserOrder.prototype), "_constructor", this).apply(this, arguments);
      this.$$refs = [];
    }
  }, {
    key: "jumpUrl",
    value: function jumpUrl(url) {
      (0, _jump2.default)({ url: url });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var list = this.__props.list;


      console.log('list', list);

      var loopArray13 = list != undefined ? list.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $compid__69 = (0, _index.genCompid)(__prefix + "dlreFSyuGt" + index);
        item.$original.count > 0 && _index.propsManager.set({
          "value": item.$original.count,
          "maxValue": 99
        }, $compid__69);
        return {
          $compid__69: $compid__69,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray13: loopArray13,
        list: list,
        undefined: undefined
      });
      return this.__state;
    }
  }]);

  return UserOrder;
}(_index.Component), _class.$$events = ["jumpUrl"], _class.$$componentPath = "pages/user/order/index", _temp2);
exports.default = UserOrder;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(UserOrder));