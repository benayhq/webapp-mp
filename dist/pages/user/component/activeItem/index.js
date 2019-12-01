"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveItem = function (_BaseComponent) {
  _inherits(ActiveItem, _BaseComponent);

  function ActiveItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActiveItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActiveItem.__proto__ || Object.getPrototypeOf(ActiveItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "item", "actives"], _this.state = {
      actives: []
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActiveItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ActiveItem.prototype.__proto__ || Object.getPrototypeOf(ActiveItem.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      console.log('handleChange');
    }
  }, {
    key: "HandleActiveClick",
    value: function HandleActiveClick(item, e) {
      _index2.default.navigateTo({
        url: "../../../packageA/pages/product/detail?activeId=" + item.id + "&referId=" + item.agentId
      });
    }
  }, {
    key: "HandleCloseActive",
    value: function HandleCloseActive(item, e) {
      e.stopPropagation();
      console.log('item', item.id);
      this.props.handleCloseActive(item.id);
    }
  }, {
    key: "HandleShareActive",
    value: function HandleShareActive(item, e) {
      e.stopPropagation();
      console.log('item', item.id);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var item = this.__props.item;


      var anonymousState__temp = (0, _index.internal_inline_style)(item.status === "NORMAL" ? 'color:#7DD6D0' : 'color:#919191');
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        item: item
      });
      return this.__state;
    }
  }]);

  return ActiveItem;
}(_index.Component);

ActiveItem.properties = {
  "handleCloseActive": null,
  "item": null
};
ActiveItem.$$events = ["HandleActiveClick", "HandleCloseActive"];
exports.default = ActiveItem;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ActiveItem));