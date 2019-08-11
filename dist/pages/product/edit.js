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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditProduct.__proto__ || Object.getPrototypeOf(EditProduct)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__483", "$compid__484", "$compid__485", "$compid__486", "$compid__487", "$compid__488", "multiSelector", "mulitSelectorValues", "initSeletedValue", "files", "selector", "selectorChecked", "selectorValue", "productName", "productPrice", "activePrice", "preAmount", "toastText", "isOpened", "status", "duration", "location", "productId", "firstList", "secondList", "thirdList", "dispatchCategoryList", "dispatchUploadConfig", "dispatchUpdateProductInfo", "dispatchCreateProduct", "dispatchDownLoadUrl", "dispatchQueryProductInfo"], _this.config = {
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
      var _this$state = _this.state,
          firstList = _this$state.firstList,
          secondList = _this$state.secondList,
          thirdList = _this$state.thirdList,
          multiSelector = _this$state.multiSelector;

      if (firstList.length > 0) {
        _this.setState({
          mulitSelectorValues: e.detail.value,
          isOpened: false,
          initSeletedValue: multiSelector[0][e.detail.value[0]]
        });
      }
      if (secondList.length > 0) {
        _this.setState({
          mulitSelectorValues: e.detail.value,
          isOpened: false,
          initSeletedValue: multiSelector[1][e.detail.value[1]]
        });
      }
      if (thirdList.length > 0) {
        _this.setState({
          mulitSelectorValues: e.detail.value,
          isOpened: false,
          initSeletedValue: multiSelector[2][e.detail.value[2]]
        });
      }
    }, _this.customComponents = ["AtMessage", "AtToast", "AtForm", "AtInput", "AtImagePicker"], _temp), _possibleConstructorReturn(_this, _ret);
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
        productId: 0,
        firstList: [],
        secondList: [],
        thirdList: [],
        initSeletedValue: ''
      };

      this.$$refs = [];
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
          // if(index === 0){
          //   category.son.map((categoryChild,index)=>{
          //     secondList.push(categoryChild.name);
          //     if(index ===0 ){
          //       categoryChild.son.map((thirdItem,index)=>{
          //         thirdList.push(thirdItem.name);
          //       });
          //     }
          //   })
          // }
        });
        _this2.setState({
          firstList: firstList,
          secondList: [],
          thirdList: []
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
    key: "handleColumnChange",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var _state2, multiSelector, mulitSelectorValues, list, firsts, seconds, thirds, _state3, firstList, secondList, thirdList;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _state2 = this.state, multiSelector = _state2.multiSelector, mulitSelectorValues = _state2.mulitSelectorValues;
                _context2.next = 3;
                return this.getCategroyList(multiSelector[e.detail.column][e.detail.value]);

              case 3:
                list = _context2.sent;
                firsts = [], seconds = [], thirds = [];
                _state3 = this.state, firstList = _state3.firstList, secondList = _state3.secondList, thirdList = _state3.thirdList;
                _context2.t0 = e.detail.column;
                _context2.next = _context2.t0 === 0 ? 9 : _context2.t0 === 1 ? 12 : _context2.t0 === 2 ? 15 : 16;
                break;

              case 9:
                if (list && list.content.length > 0) {
                  list.content[0].son.map(function (item) {
                    seconds.push(item.name);
                  });
                  this.setState({
                    secondList: seconds
                  });
                }
                this.setState({
                  multiSelector: [firstList, seconds, thirdList]
                });
                return _context2.abrupt("break", 16);

              case 12:
                if (list && list.content.length > 0) {
                  list.content[0].son.map(function (item) {
                    thirds.push(item.name);
                  });
                  this.setState({
                    thirdList: thirds
                  });
                }
                this.setState({
                  multiSelector: [firstList, secondList, thirds]
                });
                return _context2.abrupt("break", 16);

              case 15:
                return _context2.abrupt("break", 16);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleColumnChange(_x) {
        return _ref3.apply(this, arguments);
      }

      return handleColumnChange;
    }()
  }, {
    key: "getCategroyList",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(name) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                payload = {
                  name: name
                };
                _context3.next = 3;
                return this.props.dispatchCategoryList(payload);

              case 3:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCategroyList(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getCategroyList;
    }()
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
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                payload = {
                  location: location
                };
                _context4.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context4.sent;
                return _context4.abrupt("return", result.content);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getImgUrl(_x3) {
        return _ref5.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "initProduct",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this4 = this;

        var productId, payload;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                productId = this.state.productId;

                if (productId > 0) {
                  payload = {
                    productId: productId
                  };

                  this.props.dispatchQueryProductInfo(payload).then(function (response) {
                    var data = response.content;
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
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function initProduct() {
        return _ref6.apply(this, arguments);
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
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__483 = (0, _index.genCompid)(__prefix + "$compid__483");
      var $compid__484 = (0, _index.genCompid)(__prefix + "$compid__484");
      var $compid__485 = (0, _index.genCompid)(__prefix + "$compid__485");
      var $compid__486 = (0, _index.genCompid)(__prefix + "$compid__486");
      var $compid__487 = (0, _index.genCompid)(__prefix + "$compid__487");
      var $compid__488 = (0, _index.genCompid)(__prefix + "$compid__488");

      var _state4 = this.__state,
          productName = _state4.productName,
          productPrice = _state4.productPrice,
          activePrice = _state4.activePrice,
          preAmount = _state4.preAmount,
          files = _state4.files,
          toastText = _state4.toastText,
          isOpened = _state4.isOpened,
          status = _state4.status,
          duration = _state4.duration,
          initSeletedValue = _state4.initSeletedValue;


      var $props__483 = {
        "isOpened": isOpened,
        "text": toastText,
        "status": status,
        "duration": duration,
        "icon": "{icon}"
      };
      var $props__484 = {
        "name": "productName",
        "title": "\u540D\u79F0",
        "type": "text",
        "placeholder": "\u4EA7\u54C1\u540D\u79F0\u54C1\u724C\u89C4\u683C\u4FE1\u606F",
        "value": productName,
        "onChange": this.handleProductChange.bind(this)
      };
      var $props__485 = {
        "name": "productPrice",
        "title": "\u4EF7\u683C",
        "type": "number",
        "placeholder": "\u8BF7\u8F93\u5165\u4EA7\u54C1\u539F\u4EF7",
        "value": productPrice,
        "onChange": this.handlePriceChange.bind(this)
      };
      var $props__486 = {
        "name": "activePrice",
        "title": "\u6D3B\u52A8\u4EF7",
        "type": "number",
        "placeholder": "\u8BF7\u8F93\u5165\u4EA7\u54C1\u6D3B\u52A8\u4EF7\u683C",
        "value": activePrice,
        "onChange": this.handleActivePriceChange.bind(this)
      };
      var $props__487 = {
        "files": files,
        "onChange": this.handleChooseImage.bind(this),
        "onImageClick": this.onImageClick.bind(this)
      };
      var $props__488 = {
        "name": "preAmount",
        "title": "\u9884\u5B9A\u91D1",
        "type": "number",
        "placeholder": "\u8BF7\u8F93\u5165\u9884\u5B9A\u91D1",
        "value": preAmount,
        "onChange": this.handlePreAmountChange.bind(this)
      };
      _index.propsManager.set($props__483, $compid__483);
      _index.propsManager.set($props__484, $compid__484);
      _index.propsManager.set($props__485, $compid__485);
      _index.propsManager.set($props__486, $compid__486);
      _index.propsManager.set($props__487, $compid__487);
      _index.propsManager.set($props__488, $compid__488);
      Object.assign(this.__state, {
        $compid__483: $compid__483,
        $compid__484: $compid__484,
        $compid__485: $compid__485,
        $compid__486: $compid__486,
        $compid__487: $compid__487,
        $compid__488: $compid__488
      });
      return this.__state;
    }
  }]);

  return EditProduct;
}(_index.Component), _class2.$$events = ["handleColumnChange", "handleMulitChange", "handleSaveProduct"], _class2.$$componentPath = "pages/product/edit", _temp2)) || _class);
exports.default = EditProduct;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(EditProduct, true));