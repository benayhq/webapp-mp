"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _actionCreators = require("./store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _storage = require("../../utils/storage.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uploadImage = require('./../../utils/uploadFile.js');
var util = require('../../utils/util.js');
var imgArraySrc = [];

var EditProduct = (_dec = (0, _index3.connect)(function (state) {
  return state.product;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(EditProduct, _BaseComponent);

  function EditProduct() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditProduct);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditProduct.__proto__ || Object.getPrototypeOf(EditProduct)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["isOpened", "toastText", "status", "duration", "multiSelector", "mulitSelectorValues", "productName", "productPrice", "activePrice", "files", "preAmount", "selector", "selectorChecked", "selectorValue", "location", "productId", "dispatchCategoryList", "dispatchUploadConfig", "dispatchUpdateProductInfo", "dispatchCreateProduct", "dispatchDownLoadUrl", "dispatchQueryProductInfo"], _this.config = {
      navigationBarTitleText: '产品'
    }, _this.handleAlert = function (type, message) {
      _index2.default.atMessage({
        'message': message,
        'type': type
      });
    }, _this.handleChooseImage = function (files) {
      _this.setState({
        files: files
      });
      var that = _this;
      var tempFilePaths = files;
      var nowTime = util.formatTime(new Date());
      //支持多图上传

      var _loop = function _loop() {
        //显示消息提示框
        wx.showLoading({
          title: '上传中' + (i + 1) + '/' + tempFilePaths.length,
          mask: true
        });

        var file = tempFilePaths[i].url;

        payload = {
          documentType: 'ACTIVITY',
          fileName: 'ACTIVITY.png'
        };


        _this.props.dispatchUploadConfig(payload).then(function (response) {
          uploadImage(file, response.content.location, function (result) {
            imgArraySrc.push(result);
            console.log("======上传成功图片地址为：", result);
            wx.hideLoading();
          }, function (result) {
            imgArraySrc = [];
            console.log("======上传失败======", result);
            wx.hideLoading();
          });
        });
      };

      for (var i = 0; i < tempFilePaths.length; i++) {
        var payload;

        _loop();
      }
    }, _this.handleMulitChange = function (e) {
      _this.setState({
        mulitSelectorValues: e.detail.value,
        isOpened: false
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditProduct, [{
    key: "_constructor",
    value: function _constructor() {
      this.state = {
        files: [],
        selector: ['美国', '中国', '巴西', '日本'],
        selectorChecked: '美国',
        multiSelector: [],
        selectorValue: 0,
        mulitSelectorValues: [0, 0, 0],
        productName: '',
        productPrice: '',
        activePrice: '',
        preAmount: '',
        toastText: '',
        isOpened: false,
        status: '',
        duration: 2000,
        location: '',
        productId: 0
      };
    }
  }, {
    key: "init",
    value: function init() {
      this.initCategory();
      this.initProduct();
    }
  }, {
    key: "initCategory",
    value: function initCategory() {
      var _this2 = this;

      var payload = {};
      var that = this;
      this.props.dispatchCategoryList(payload).then(function (response) {

        var list = response.content;
        var firstList = [],
            secondList = [],
            thirdList = [];

        list.map(function (category, index) {
          firstList.push(category.name);

          if (category.son && category.son.length > 0) {
            category.son.map(function (categoryChild, index) {
              secondList.push(categoryChild.name);
              if (categoryChild.son && categoryChild.son.length > 0) {
                categoryChild.son.map(function (child, index) {
                  thirdList.push(child.name);
                });
              }
            });
          }
        });
        _this2.setState({
          multiSelector: [firstList, secondList, thirdList]
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        productId: this.$router.params.productId
      });
    }
  }, {
    key: "handleSaveProduct",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this3 = this;

        var _state, productName, productPrice, activePrice, files, preAmount, mulitSelectorValues, location, productId, result, payload;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _state = this.state, productName = _state.productName, productPrice = _state.productPrice, activePrice = _state.activePrice, files = _state.files, preAmount = _state.preAmount, mulitSelectorValues = _state.mulitSelectorValues, location = _state.location, productId = _state.productId;

                if (!(productName === '')) {
                  _context.next = 4;
                  break;
                }

                this.handleAlert('error', '名称不能为空');
                return _context.abrupt("return");

              case 4:
                if (!(productPrice === '')) {
                  _context.next = 7;
                  break;
                }

                this.handleAlert('error', '价格不能为空');
                return _context.abrupt("return");

              case 7:
                if (!(activePrice === '')) {
                  _context.next = 10;
                  break;
                }

                this.handleAlert('error', '活动价不能为空');
                return _context.abrupt("return");

              case 10:
                if (!(imgArraySrc.length === 0)) {
                  _context.next = 13;
                  break;
                }

                this.handleAlert('error', '请上传产品图片');
                return _context.abrupt("return");

              case 13:
                if (!(preAmount === '')) {
                  _context.next = 16;
                  break;
                }

                this.handleAlert('error', '请输入预定金');
                return _context.abrupt("return");

              case 16:
                _context.next = 18;
                return (0, _storage.getAuthInfo)();

              case 18:
                result = _context.sent;
                payload = {
                  "advance": preAmount,
                  "agentId": result.id,
                  "discountPrice": activePrice,
                  "id": productId,
                  "location": imgArraySrc[0],
                  "name": productName,
                  "price": productPrice,
                  "projectId": 1,
                  "projectLevel": 0,
                  "projectName": productName
                };


                if (productId > 0) {
                  console.log('payload', payload);
                  this.props.dispatchUpdateProductInfo(payload).then(function (res) {
                    if (res.result === 'success') {
                      _this3.setState({
                        isOpened: true,
                        toastText: '保存成功',
                        status: 'success'
                      });
                      _index2.default.navigateTo({
                        url: '/pages/product/index'
                      });
                    } else {
                      _this3.setState({
                        isOpened: true,
                        toastText: res.error,
                        status: 'error'
                      });
                    }
                  });
                } else {
                  this.props.dispatchCreateProduct(payload).then(function (res) {
                    if (res.result === 'success') {
                      _this3.setState({
                        isOpened: true,
                        toastText: '保存成功',
                        status: 'success'
                      });
                      _index2.default.navigateTo({
                        url: '/pages/product/index'
                      });
                    } else {
                      _this3.setState({
                        isOpened: true,
                        toastText: res.error,
                        status: 'error'
                      });
                    }
                  });
                }

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSaveProduct() {
        return _ref2.apply(this, arguments);
      }

      return handleSaveProduct;
    }()
  }, {
    key: "handleProductChange",
    value: function handleProductChange(productName) {
      this.setState({
        productName: productName
      });
      return productName;
    }
  }, {
    key: "handlePriceChange",
    value: function handlePriceChange(productPrice) {
      this.setState({
        productPrice: productPrice
      });
      return productPrice;
    }
  }, {
    key: "handleActivePriceChange",
    value: function handleActivePriceChange(activePrice) {
      this.setState({
        activePrice: activePrice
      });
      return activePrice;
    }
  }, {
    key: "handlePreAmountChange",
    value: function handlePreAmountChange(preAmount) {
      this.setState({
        preAmount: preAmount
      });
      return preAmount;
    }
  }, {
    key: "onFail",
    value: function onFail(mes) {
      console.log(mes);
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

      function getImgUrl(_x) {
        return _ref3.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "initProduct",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this4 = this;

        var productId, payload;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                productId = this.state.productId;

                if (productId > 0) {
                  payload = {
                    productId: productId
                  };

                  this.props.dispatchQueryProductInfo(payload).then(function (response) {
                    var data = response.content;
                    console.log('productinfo', data);
                    if (data) {
                      _this4.getImgUrl(data.location).then(function (response) {
                        _this4.setState({
                          files: [{ url: response }]
                        });
                        imgArraySrc.push(data.location);
                      });
                      _this4.setState({
                        productName: data.name,
                        productPrice: data.discountPrice,
                        activePrice: data.price,
                        preAmount: data.advance
                      });
                    }
                  });
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function initProduct() {
        return _ref4.apply(this, arguments);
      }

      return initProduct;
    }()
  }, {
    key: "onImageClick",
    value: function onImageClick(index, file) {
      this.setState({
        files: []
      });
      imgArraySrc = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state2 = this.__state,
          productName = _state2.productName,
          productPrice = _state2.productPrice,
          activePrice = _state2.activePrice,
          preAmount = _state2.preAmount,
          files = _state2.files,
          toastText = _state2.toastText,
          isOpened = _state2.isOpened,
          status = _state2.status,
          duration = _state2.duration;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return EditProduct;
}(_index.Component), _class2.properties = {
  "dispatchCategoryList": {
    "type": null,
    "value": null
  },
  "dispatchUploadConfig": {
    "type": null,
    "value": null
  },
  "dispatchUpdateProductInfo": {
    "type": null,
    "value": null
  },
  "dispatchCreateProduct": {
    "type": null,
    "value": null
  },
  "dispatchDownLoadUrl": {
    "type": null,
    "value": null
  },
  "dispatchQueryProductInfo": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleMulitChange", "handleProductChange", "handlePriceChange", "handleActivePriceChange", "handleChooseImage", "onImageClick", "handlePreAmountChange", "handleSaveProduct"], _temp2)) || _class);
exports.default = EditProduct;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(EditProduct, true));