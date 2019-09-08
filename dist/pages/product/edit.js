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
var imgArraySrc = [],
    columnIndex = 0,
    firstValue = 0,
    secondValue = 0;

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditProduct.__proto__ || Object.getPrototypeOf(EditProduct)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__1112", "$compid__1113", "$compid__1114", "$compid__1115", "$compid__1116", "$compid__1117", "multiSelector", "mulitSelectorValues", "initSeletedValue", "files", "selector", "selectorChecked", "selectorValue", "productName", "productPrice", "activePrice", "preAmount", "toastText", "isOpened", "status", "duration", "location", "productId", "firstList", "secondList", "thirdList", "initCategoryId", "pid", "dispatchCategoryList", "dispatchUploadConfig", "dispatchUpdateProductInfo", "dispatchCreateProduct", "dispatchDownLoadUrl", "dispatchQueryProductInfo"], _this.config = {
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
        initSeletedValue: '',
        initCategoryId: 0,
        pid: 0
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
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var payload, that, response, list, firstList, secondList, thirdList, parentId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  pid: 0
                };
                that = this;
                _context.next = 4;
                return this.props.dispatchCategoryList(payload);

              case 4:
                response = _context.sent;
                list = response.content;

                console.log('response list', list.subProjectNames);
                firstList = ['--请选择--'], secondList = [], thirdList = [];
                parentId = list === null ? 0 : list.pid;

                this.setState({
                  pid: parentId
                });
                list.subProjectNames.map(function (category, index) {
                  firstList.push(category);
                });
                this.setState({
                  firstList: firstList,
                  secondList: [],
                  thirdList: []
                });
                this.setState({
                  multiSelector: [firstList, secondList, thirdList]
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initCategory() {
        return _ref2.apply(this, arguments);
      }

      return initCategory;
    }()
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
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var _state, productName, productPrice, activePrice, files, preAmount, initSeletedValue, mulitSelectorValues, location, productId, pid, result, payload;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _state = this.state, productName = _state.productName, productPrice = _state.productPrice, activePrice = _state.activePrice, files = _state.files, preAmount = _state.preAmount, initSeletedValue = _state.initSeletedValue, mulitSelectorValues = _state.mulitSelectorValues, location = _state.location, productId = _state.productId, pid = _state.pid;

                if (!(initSeletedValue === '' || initSeletedValue === '--请选择--')) {
                  _context2.next = 4;
                  break;
                }

                this.handleAlert('error', '请选择分类');
                return _context2.abrupt("return");

              case 4:
                if (!(productName === '')) {
                  _context2.next = 7;
                  break;
                }

                this.handleAlert('error', '名称不能为空');
                return _context2.abrupt("return");

              case 7:
                if (!(productPrice === '')) {
                  _context2.next = 10;
                  break;
                }

                this.handleAlert('error', '价格不能为空');
                return _context2.abrupt("return");

              case 10:
                if (!(activePrice === '')) {
                  _context2.next = 13;
                  break;
                }

                this.handleAlert('error', '活动价不能为空');
                return _context2.abrupt("return");

              case 13:
                if (!(imgArraySrc.length === 0)) {
                  _context2.next = 16;
                  break;
                }

                this.handleAlert('error', '请上传产品图片');
                return _context2.abrupt("return");

              case 16:
                if (!(preAmount === '')) {
                  _context2.next = 19;
                  break;
                }

                this.handleAlert('error', '请输入不少于5元的预定金');
                return _context2.abrupt("return");

              case 19:
                if (!(preAmount < 5)) {
                  _context2.next = 22;
                  break;
                }

                this.handleAlert('error', '预定金不能少于5元');
                return _context2.abrupt("return");

              case 22:
                _context2.next = 24;
                return (0, _storage.getAuthInfo)();

              case 24:
                result = _context2.sent;
                payload = {
                  "advance": preAmount,
                  "agentId": result.id,
                  "discountPrice": activePrice,
                  "id": productId,
                  "location": imgArraySrc[0],
                  "name": productName,
                  "price": productPrice,
                  "projectId": pid,
                  "projectLevel": 0,
                  "projectName": productName
                };


                if (productId > 0) {
                  console.log('payload', payload);
                  this.props.dispatchUpdateProductInfo(payload).then(function (res) {
                    if (res.result === 'success') {
                      _this2.setState({
                        isOpened: true,
                        toastText: '保存成功',
                        status: 'success'
                      });
                      _index2.default.navigateTo({
                        url: '/pages/product/index'
                      });
                    }
                  });
                } else {
                  this.props.dispatchCreateProduct(payload).then(function (res) {
                    if (res.result === 'success') {
                      _this2.setState({
                        isOpened: true,
                        toastText: '保存成功',
                        status: 'success'
                      });
                      _index2.default.navigateTo({
                        url: '/pages/product/index'
                      });
                    } else {
                      _this2.handleAlert('error', res.content);
                    }
                  });
                }

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSaveProduct() {
        return _ref3.apply(this, arguments);
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
    key: "handleMulitChange",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        var _state2, firstList, secondList, thirdList, multiSelector, pid, listAll;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _state2 = this.state, firstList = _state2.firstList, secondList = _state2.secondList, thirdList = _state2.thirdList, multiSelector = _state2.multiSelector, pid = _state2.pid;

                console.log('pid', pid);
                console.log('multiSelector[0][e.detail.value[0]]', multiSelector[0][e.detail.value[0]]);

                if (!(multiSelector[0][e.detail.value[0]] === '--请选择--')) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                _context3.next = 7;
                return this.getCategroyList(multiSelector[0][e.detail.value[0]], 0);

              case 7:
                listAll = _context3.sent;

                console.log('listall', listAll);

                if (firstList.length > 0) {
                  this.setState({
                    mulitSelectorValues: e.detail.value,
                    isOpened: false,
                    initSeletedValue: multiSelector[0][e.detail.value[0]]
                  });
                }
                if (secondList.length > 0) {
                  this.setState({
                    mulitSelectorValues: e.detail.value,
                    isOpened: false,
                    initSeletedValue: multiSelector[1][e.detail.value[1]]
                  });
                }
                if (thirdList.length > 0) {
                  this.setState({
                    mulitSelectorValues: e.detail.value,
                    isOpened: false,
                    initSeletedValue: multiSelector[2][e.detail.value[2]]
                  });
                }

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleMulitChange(_x) {
        return _ref4.apply(this, arguments);
      }

      return handleMulitChange;
    }()
  }, {
    key: "handleColumnChange",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
        var list, _state3, multiSelector, mulitSelectorValues, pid, selectedValue, listAll, firsts, seconds, thirds, _state4, firstList, secondList, thirdList, _state5, _multiSelector, _mulitSelectorValues, _pid, _selectedValue, _state6, _firstList, _secondList, _thirdList, _state7, _multiSelector2, _mulitSelectorValues2, _pid2, _selectedValue2;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('handleColumnChange');
                list = null;

                if (!(e.detail.column === 0)) {
                  _context4.next = 19;
                  break;
                }

                _state3 = this.state, multiSelector = _state3.multiSelector, mulitSelectorValues = _state3.mulitSelectorValues, pid = _state3.pid;
                selectedValue = multiSelector[e.detail.column][e.detail.value];
                _context4.next = 7;
                return this.getCategroyList(selectedValue, 0);

              case 7:
                listAll = _context4.sent;

                console.log('pid', pid);
                console.log('selectedValue', selectedValue);
                console.log('e.detail.column', e.detail.column);

                firsts = [], seconds = [], thirds = [];
                _state4 = this.state, firstList = _state4.firstList, secondList = _state4.secondList, thirdList = _state4.thirdList;

                list = listAll.content === null ? [] : listAll.content.subProjectNames;
                console.log('listAll.content.pid', listAll.content.pid);
                console.log('columnIndex', columnIndex);
                firstValue = listAll.content === null ? 0 : listAll.content.pid;

                // this.setState({
                //   pid:parentId
                // });
                // console.log('parentId',parentId);
                // columnIndex = e.detail.column;

                if (list && list.length > 0) {
                  list.map(function (item) {
                    seconds.push(item);
                  });
                  thirds = [];
                  this.setState({
                    secondList: seconds,
                    thirdList: thirds
                  });
                } else {
                  seconds = [];
                  thirds = [];
                  this.setState({
                    secondList: [],
                    thirdList: thirds
                  });
                }
                this.setState({
                  pid: listAll.content.pid,
                  multiSelector: [firstList, seconds, thirdList]
                });

              case 19:
                if (!(e.detail.column === 1)) {
                  _context4.next = 36;
                  break;
                }

                _state5 = this.state, _multiSelector = _state5.multiSelector, _mulitSelectorValues = _state5.mulitSelectorValues, _pid = _state5.pid;
                _selectedValue = _multiSelector[e.detail.column][e.detail.value];
                _context4.next = 24;
                return this.getCategroyList(_selectedValue, firstValue);

              case 24:
                listAll = _context4.sent;

                console.log('pid', _pid);
                console.log('selectedValue', _selectedValue);
                console.log('e.detail.column', e.detail.column);
                firsts = [], seconds = [], thirds = [];
                _state6 = this.state, _firstList = _state6.firstList, _secondList = _state6.secondList, _thirdList = _state6.thirdList;

                list = listAll.content === null ? [] : listAll.content.subProjectNames;
                secondValue = listAll.content === null ? 0 : listAll.content.pid;
                console.log('listAll.content.pid', listAll.content.pid);
                console.log('columnIndex', columnIndex);
                if (list && list.length > 0) {
                  list.map(function (item) {
                    thirds.push(item);
                  });
                  this.setState({
                    thirdList: thirds
                  });
                } else {
                  thirds = [];
                  this.setState({
                    thirdList: []
                  });
                }
                this.setState({
                  pid: listAll.content.pid,
                  multiSelector: [_firstList, _secondList, thirds]
                });

              case 36:
                if (!(e.detail.column === 2)) {
                  _context4.next = 50;
                  break;
                }

                _state7 = this.state, _multiSelector2 = _state7.multiSelector, _mulitSelectorValues2 = _state7.mulitSelectorValues, _pid2 = _state7.pid;
                _selectedValue2 = _multiSelector2[e.detail.column][e.detail.value];
                _context4.next = 41;
                return this.getCategroyList(_selectedValue2, secondValue);

              case 41:
                listAll = _context4.sent;

                console.log('pid', _pid2);
                console.log('selectedValue', _selectedValue2);
                console.log('e.detail.column', e.detail.column);
                firsts = [], seconds = [], thirds = [];

                list = listAll.content === null ? [] : listAll.content.subProjectNames;
                console.log('listAll.content.pid', listAll.content.pid);
                console.log('columnIndex', columnIndex);
                this.setState({
                  pid: listAll.content.pid
                });

              case 50:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleColumnChange(_x2) {
        return _ref5.apply(this, arguments);
      }

      return handleColumnChange;
    }()
  }, {
    key: "getCategroyList",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(name, pid) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                payload = {
                  name: name,
                  pid: pid
                };
                _context5.next = 3;
                return this.props.dispatchCategoryList(payload);

              case 3:
                result = _context5.sent;
                return _context5.abrupt("return", result);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCategroyList(_x3, _x4) {
        return _ref6.apply(this, arguments);
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
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                payload = {
                  location: location
                };
                _context6.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context6.sent;
                return _context6.abrupt("return", result.content);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getImgUrl(_x5) {
        return _ref7.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "initProduct",
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _this3 = this;

        var productId, payload;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                productId = this.state.productId;

                if (productId > 0) {
                  payload = {
                    productId: productId
                  };


                  this.props.dispatchQueryProductInfo(payload).then(function (response) {
                    var data = response.content;
                    if (data) {
                      _this3.getImgUrl(data.location).then(function (response) {
                        _this3.setState({
                          files: [{ url: response }]
                        });
                        imgArraySrc.push(data.location);
                      });
                      _this3.setState({
                        productName: data.name,
                        productPrice: data.discountPrice,
                        activePrice: data.price,
                        preAmount: data.advance,
                        initSeletedValue: data.projectName,
                        pid: data.projectId
                      });
                    }
                  });
                }

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function initProduct() {
        return _ref8.apply(this, arguments);
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
      var $compid__1112 = (0, _index.genCompid)(__prefix + "$compid__1112");
      var $compid__1113 = (0, _index.genCompid)(__prefix + "$compid__1113");
      var $compid__1114 = (0, _index.genCompid)(__prefix + "$compid__1114");
      var $compid__1115 = (0, _index.genCompid)(__prefix + "$compid__1115");
      var $compid__1116 = (0, _index.genCompid)(__prefix + "$compid__1116");
      var $compid__1117 = (0, _index.genCompid)(__prefix + "$compid__1117");

      var _state8 = this.__state,
          productName = _state8.productName,
          productPrice = _state8.productPrice,
          activePrice = _state8.activePrice,
          preAmount = _state8.preAmount,
          files = _state8.files,
          toastText = _state8.toastText,
          isOpened = _state8.isOpened,
          status = _state8.status,
          duration = _state8.duration,
          initSeletedValue = _state8.initSeletedValue;


      var $props__1112 = {
        "isOpened": isOpened,
        "text": toastText,
        "status": status,
        "duration": duration,
        "icon": "{icon}"
      };
      var $props__1113 = {
        "name": "productName",
        "title": "\u540D\u79F0",
        "type": "text",
        "placeholder": "\u4EA7\u54C1\u540D\u79F0\u54C1\u724C\u89C4\u683C\u4FE1\u606F",
        "value": productName,
        "onChange": this.handleProductChange.bind(this)
      };
      var $props__1114 = {
        "name": "productPrice",
        "title": "\u4EF7\u683C",
        "type": "number",
        "placeholder": "\u8BF7\u8F93\u5165\u4EA7\u54C1\u539F\u4EF7",
        "value": productPrice,
        "onChange": this.handlePriceChange.bind(this)
      };
      var $props__1115 = {
        "name": "activePrice",
        "title": "\u6D3B\u52A8\u4EF7",
        "type": "number",
        "placeholder": "\u8BF7\u8F93\u5165\u4EA7\u54C1\u6D3B\u52A8\u4EF7\u683C",
        "value": activePrice,
        "onChange": this.handleActivePriceChange.bind(this)
      };
      var $props__1116 = {
        "files": files,
        "onChange": this.handleChooseImage.bind(this),
        "onImageClick": this.onImageClick.bind(this)
      };
      var $props__1117 = {
        "name": "preAmount",
        "title": "\u9884\u5B9A\u91D1",
        "type": "number",
        "placeholder": "\u8BF7\u8F93\u5165\u4E0D\u5C11\u4E8E5\u5143\u7684\u9884\u5B9A\u91D1",
        "value": preAmount,
        "onChange": this.handlePreAmountChange.bind(this)
      };
      _index.propsManager.set($props__1112, $compid__1112);
      _index.propsManager.set($props__1113, $compid__1113);
      _index.propsManager.set($props__1114, $compid__1114);
      _index.propsManager.set($props__1115, $compid__1115);
      _index.propsManager.set($props__1116, $compid__1116);
      _index.propsManager.set($props__1117, $compid__1117);
      Object.assign(this.__state, {
        $compid__1112: $compid__1112,
        $compid__1113: $compid__1113,
        $compid__1114: $compid__1114,
        $compid__1115: $compid__1115,
        $compid__1116: $compid__1116,
        $compid__1117: $compid__1117
      });
      return this.__state;
    }
  }]);

  return EditProduct;
}(_index.Component), _class2.$$events = ["handleColumnChange", "handleMulitChange", "handleSaveProduct"], _class2.$$componentPath = "pages/product/edit", _temp2)) || _class);
exports.default = EditProduct;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(EditProduct, true));