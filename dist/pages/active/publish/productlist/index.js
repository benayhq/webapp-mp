"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ProductList, _BaseComponent);

  function ProductList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProductList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray13", "products"], _this.customComponents = ["AtInput"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProductList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ProductList.prototype.__proto__ || Object.getPrototypeOf(ProductList.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      console.log('handleChange');
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var loopArray13 = this.__props.products != null ? this.__props.products.map(function (item, _anonIdx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $compid__55 = (0, _index.genCompid)(__prefix + "lvAlMXNtkU" + _anonIdx);
        _index.propsManager.set({
          "name": "value",
          "type": "text",
          "value": item.$original.discountPrice,
          "onChange": _this2.handleChange.bind(_this2)
        }, $compid__55);
        return {
          $compid__55: $compid__55,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray13: loopArray13
      });
      return this.__state;
    }
  }]);

  return ProductList;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/active/publish/productlist/index", _temp2);
exports.default = ProductList;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ProductList));