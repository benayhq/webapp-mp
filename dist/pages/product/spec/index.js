"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spec = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Spec, _BaseComponent);

  function Spec() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Spec);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Spec.__proto__ || Object.getPrototypeOf(Spec)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["categoryItem", "prefix", "productItems", "isChange", "productId", "activeId", "text", "isOpended", "dispatchDownLoadUrl", "activityName", "products"], _this.jumpUrl = function (url) {
      _index2.default.navigateTo({
        url: url
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Spec, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Spec.prototype.__proto__ || Object.getPrototypeOf(Spec.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        prefix: '.mp-spec',
        isChange: false,
        productId: 0,
        activeId: 0,
        categoryItem: {
          productDocumentLocation: '',
          productName: '',
          productDiscountPrice: '',
          productPrice: '',
          productAdvance: ''
        },
        productItems: [],
        text: '请选择品类',
        isOpended: false
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, props) {
      var _this2 = this;

      console.log('nextProps', nextProps.products[0]);
      var that = this;
      this.setState({
        activeId: nextProps.products[0].activityId
      });

      this.getImgUrl(nextProps.products[0].productLocation).then(function (res) {
        console.log('response3333', res);
        that.setState({
          categoryItem: {
            productDocumentLocation: res,
            productName: nextProps.products[0].productName,
            productDiscountPrice: nextProps.products[0].productDiscountPrice,
            productPrice: nextProps.products[0].productPrice,
            productAdvance: nextProps.products[0].productAdvance,
            productId: nextProps.products[0].productId
          }
        });
      });

      if (nextProps.products && nextProps.products.length > 0) {
        var products = [],
            promises = [];
        nextProps.products.map(function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item, key) {
            var promise;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    promise = _this2.getImgUrl(item.productLocation);

                    promises.push(promise);
                    products.push({
                      productDocumentLocation: '',
                      productName: item.productName,
                      productDiscountPrice: item.productDiscountPrice,
                      productPrice: item.productPrice,
                      productAdvance: item.productAdvance,
                      isChecked: false,
                      productId: item.productId
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, _this2);
          }));

          return function (_x, _x2) {
            return _ref2.apply(this, arguments);
          };
        }());

        Promise.all(promises).then(function (result) {
          if (result) {
            result.map(function (imgUrl, key) {
              products[key].productDocumentLocation = imgUrl;
            });
          }
        }).then(function (response) {
          that.setState({
            productItems: products
          });
        });
      }
    }
  }, {
    key: "getImgUrl",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                payload = {
                  location: location
                };
                _context2.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result.content);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getImgUrl(_x3) {
        return _ref3.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "handleChangeCategory",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(product) {
        var newProducts;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  productId: product.productId,
                  isOpended: false
                });

                newProducts = this.state.productItems.map(function (item) {
                  item.isChecked = product.productId === item.productId;
                  return item;
                });


                this.setState({
                  categoryItem: {
                    productDocumentLocation: product.productDocumentLocation,
                    productName: product.productName,
                    productDiscountPrice: product.productDiscountPrice,
                    productPrice: product.productPrice,
                    productAdvance: product.productAdvance,
                    productItems: newProducts
                  }
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleChangeCategory(_x4) {
        return _ref4.apply(this, arguments);
      }

      return handleChangeCategory;
    }()
  }, {
    key: "handleSubmitOrder",
    value: function handleSubmitOrder(e) {
      var _state = this.state,
          productId = _state.productId,
          activeId = _state.activeId;

      if (productId === 0) {
        wx.showToast({
          title: "请选择商品类目",
          icon: 'none',
          duration: 1000
        });
        this.setState({
          isOpended: true
        });
        return;
      }
      this.setState({
        productId: 0
      });
      _index2.default.navigateTo({
        url: '/pages/order/submit/index?activeId=' + activeId + '&productId=' + productId + '&activityName=' + this.props.activityName
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state2 = this.__state,
          prefix = _state2.prefix,
          categoryItem = _state2.categoryItem,
          productItems = _state2.productItems;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Spec;
}(_index.Component), _class2.$$events = ["handleChangeCategory", "handleSubmitOrder"], _class2.defaultProps = {
  data: {},
  selected: {},
  onSelect: function onSelect() {}
}, _class2.$$componentPath = "pages/product/spec/index", _temp2)) || _class);
exports.default = Spec;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Spec));