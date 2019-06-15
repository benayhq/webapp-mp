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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditProduct.__proto__ || Object.getPrototypeOf(EditProduct)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["isOpened", "toastText", "status", "duration", "multiSelector", "mulitSelectorValues", "productName", "productPrice", "activePrice", "files", "preAmount", "selector", "selectorChecked", "selectorValue", "location", "dispatchCreateProduct"], _this.config = {
      navigationBarTitleText: '新增产品'
    }, _this.handleAlert = function (type, message) {
      _index2.default.atMessage({
        'message': message,
        'type': type
      });
    }, _this.handleChooseImage = function () {
      var that = _this;

      wx.chooseImage({
        count: 1, // 默认最多一次选择9张图
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          var nowTime = util.formatTime(new Date());

          //支持多图上传

          var _loop = function _loop() {
            //显示消息提示框
            wx.showLoading({
              title: '上传中' + (i + 1) + '/' + res.tempFilePaths.length,
              mask: true
            });

            var file = res.tempFilePaths[i];

            payload = {
              documentType: 'PRODUCT',
              fileName: 'PRODUCT.png'
            };


            that.props.dispatchUploadConfig(payload).then(function (response) {
              uploadImage(file, response.content.location, function (result) {
                that.setState({
                  location: result
                });
                console.log("======上传成功图片地址为：", result);
                wx.hideLoading();
              }, function (result) {
                console.log("======上传失败======", result);
                wx.hideLoading();
              });
            });
          };

          for (var i = 0; i < res.tempFilePaths.length; i++) {
            var payload;

            _loop();
          }
        }
      });
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
        multiSelector: [['饭', '粥', '粉'], ['猪肉', '牛肉']],
        selectorValue: 0,
        mulitSelectorValues: [0, 0],
        productName: '',
        productPrice: '',
        activePrice: '',
        preAmount: '',
        toastText: '',
        isOpened: false,
        status: '',
        duration: 2000,
        location: ''
      };
    }
  }, {
    key: "handleSaveProduct",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var _state, productName, productPrice, activePrice, files, preAmount, mulitSelectorValues, location, result, payload;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _state = this.state, productName = _state.productName, productPrice = _state.productPrice, activePrice = _state.activePrice, files = _state.files, preAmount = _state.preAmount, mulitSelectorValues = _state.mulitSelectorValues, location = _state.location;

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
                if (!(location === '')) {
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


                console.log('files', files);
                console.log('mulitSelectorValues[0]', 1);

                payload = {
                  "advance": preAmount,
                  "agentId": result.id,
                  "discountPrice": activePrice,
                  "id": 0,
                  "location": location,
                  "name": productName,
                  "price": productPrice,
                  "projectId": 1,
                  "projectLevel": 0,
                  "projectName": productName,
                  "status": "string"
                };


                console.log('payload', payload);

                this.props.dispatchCreateProduct(payload).then(function (res) {
                  if (res.result === 'success') {
                    _this2.setState({
                      isOpened: true,
                      toastText: '添加成功',
                      status: 'success'
                    });
                    // Taro.navigateTo({
                    //   url:'/pages/product/index'
                    // })
                  } else {
                    _this2.setState({
                      isOpened: true,
                      toastText: res.error,
                      status: 'error'
                    });
                  }
                });

              case 24:
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
    key: "onChange",
    value: function onChange(files) {
      this.setState({
        files: files
      });
    }
  }, {
    key: "onFail",
    value: function onFail(mes) {
      console.log(mes);
    }
  }, {
    key: "onImageClick",
    value: function onImageClick(index, file) {
      console.log(index, file);
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
  "dispatchCreateProduct": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleMulitChange", "handleProductChange", "handlePriceChange", "handleActivePriceChange", "onChange", "handlePreAmountChange", "handleChooseImage", "handleSaveProduct"], _temp2)) || _class);
exports.default = EditProduct;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(EditProduct, true));