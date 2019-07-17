"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateProduct = (_dec = (0, _index3.connect)(function (state) {
  return state.product;
}, null), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(CreateProduct, _BaseComponent);

  function CreateProduct() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreateProduct);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateProduct.__proto__ || Object.getPrototypeOf(CreateProduct)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["productList"], _this.config = {
      navigationBarTitleText: '新增产品'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreateProduct, [{
    key: "_constructor",
    value: function _constructor() {
      this.state = {
        productList: []
      };
      this.handleEditProduct = this.handleEditProduct.bind(this);
    }
  }, {
    key: "handleEditProduct",
    value: function handleEditProduct() {
      console.log('handleEditProduct');
      _index2.default.navigateTo({
        url: '/pages/product/edit'
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var productList = this.__state.productList;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return CreateProduct;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["handleEditProduct"], _temp2)) || _class);
exports.default = CreateProduct;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CreateProduct, true));