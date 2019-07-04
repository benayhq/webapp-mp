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

var _storage = require("../../../utils/storage.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var productIds = [];
var uploadImage = require('./../../../utils/uploadFile.js');
var util = require('../../../utils/util.js');
var imgArraySrc = [];

var Index = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["activeName", "products", "isOpened", "weChatNumber", "dateStart", "dateEnd", "files", "selector", "selectorChecked", "groupItemChecked", "groupItem", "location", "dispatchDownLoadUrl", "dispatchQueryProductInfo", "dispatchUploadConfig", "dispatchUploadFile", "dispatchCreateActive"], _this.handleUploadLoader = function () {

      var payload = {
        documentType: 'PRODUCT',
        fileName: 'name'
      };

      _this.props.dispatchUploadFile(payload).then(function (res) {
        console.log('res', res);
      });
      return;
    }, _this.onDateStartChange = function (e) {
      _this.setState({
        dateStart: e.detail.value
      });
    }, _this.onDateEndChange = function (e) {
      _this.setState({
        dateEnd: e.detail.value
      });
    }, _this.config = {
      navigationBarTitleText: '新增活动'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        files: [],
        selector: [['请选择', '美国', '中国', '巴西', '日本'], ['请选择', '美国', '中国', '巴西', '日本       ']],
        selectorChecked: '请选择',
        groupItemChecked: '请选择',
        groupItem: [],
        dateStart: '请选择',
        dateEnd: '请选择',
        products: [],
        activeName: '',
        weChatNumber: '',
        isOpened: false,
        location: []
      };
      this.init();
    }
  }, {
    key: "getImgUrl",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  location: location
                };
                _context.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result.content);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getImgUrl(_x) {
        return _ref2.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var productList = [];

      console.log('this.props', this.props);

      console.log('this.$router.params.ids', this.$router.params.ids);
      if (this.$router.params.ids != undefined) {
        productIds = this.$router.params.ids.split(',');
      }

      if (productIds.length > 0) {
        productIds.map(function (item, index) {
          console.log('item', item);
          var payload = {
            productId: item
          };
          _this2.props.dispatchQueryProductInfo(payload).then(function (res) {
            if (res.result === "success") {

              _this2.getImgUrl(res.content.location).then(function (response) {
                res.content.location = response;
                productList.push(res.content);
                _this2.setState({
                  products: productList
                });

                console.log('res.contenteee', res.content);
              });

              // location
            }
          });
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "init",
    value: function init() {
      this.initGroup();
    }
  }, {
    key: "initGroup",
    value: function initGroup() {
      var groups = [];
      for (var i = 1; i < 15; i++) {
        groups.push(i);
      }
      this.setState({
        groupItem: groups
      });
    }
  }, {
    key: "HandlePickerChange",
    value: function HandlePickerChange(files) {
      var _this3 = this;

      this.setState({
        files: files
      });
      var that = this;
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


        _this3.props.dispatchUploadConfig(payload).then(function (response) {
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
    }
  }, {
    key: "choose",
    value: function choose() {
      var that = this;
      wx.chooseImage({
        count: 1, // 默认最多一次选择9张图
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          var nowTime = util.formatTime(new Date());

          //支持多图上传

          var _loop2 = function _loop2() {
            //显示消息提示框
            wx.showLoading({
              title: '上传中' + (i + 1) + '/' + res.tempFilePaths.length,
              mask: true
            });

            var file = res.tempFilePaths[i];

            payload = {
              documentType: 'ACTIVITY',
              fileName: 'ACTIVITY.png'
            };


            that.props.dispatchUploadConfig(payload).then(function (response) {
              console.log('dispatchUploadConfig', response.content.location);
              //上传图片
              //图片路径可自行修改
              uploadImage(file, response.content.location, function (result) {
                that.setState({
                  location: [result]
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

            _loop2();
          }
        }
      });
    }
  }, {
    key: "handlePickerViewChange",
    value: function handlePickerViewChange(e) {
      var val = e.detail.value;
      console.log("val", val);
    }
  }, {
    key: "handlePickerChange",
    value: function handlePickerChange(e) {
      var selectedValue = this.state.selector[0][e.detail.value[0]] + " / " + this.state.selector[0][e.detail.value[1]];
      this.setState({
        selectorChecked: selectedValue
      });
    }
  }, {
    key: "handlePickerSelectGroupChange",
    value: function handlePickerSelectGroupChange(e) {
      this.setState({
        groupItemChecked: parseInt(e.detail.value) + 1
      });
    }
  }, {
    key: "handlePickerColumnChange",
    value: function handlePickerColumnChange(e) {
      console.log('e', e);
    }
  }, {
    key: "handleToUpload",
    value: function handleToUpload() {
      console.log('handleToUpload');
    }
  }, {
    key: "handleAlert",
    value: function handleAlert(type, message) {
      _index2.default.atMessage({
        'message': message,
        'type': type
      });
    }
  }, {
    key: "onPublish",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var _this4 = this;

        var _state, activeName, groupItemChecked, dateStart, dateEnd, location, weChatNumber, fileArray, result, payload;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _state = this.state, activeName = _state.activeName, groupItemChecked = _state.groupItemChecked, dateStart = _state.dateStart, dateEnd = _state.dateEnd, location = _state.location, weChatNumber = _state.weChatNumber;

                if (!(activeName === '')) {
                  _context2.next = 4;
                  break;
                }

                this.handleAlert('error', '请填写活动名称');
                return _context2.abrupt("return");

              case 4:
                if (!(groupItemChecked === '请选择')) {
                  _context2.next = 7;
                  break;
                }

                this.handleAlert('error', '请选择成团人数');
                return _context2.abrupt("return");

              case 7:
                if (!(dateStart == '请选择')) {
                  _context2.next = 10;
                  break;
                }

                this.handleAlert('error', '请选择开始时间');
                return _context2.abrupt("return");

              case 10:
                if (!(dateEnd == '请选择')) {
                  _context2.next = 13;
                  break;
                }

                this.handleAlert('error', '请选择结束时间');
                return _context2.abrupt("return");

              case 13:
                if (!(location.length <= 0)) {
                  _context2.next = 16;
                  break;
                }

                this.handleAlert('error', '请选择上传主图');
                return _context2.abrupt("return");

              case 16:
                fileArray = [];
                _context2.next = 19;
                return (0, _storage.getAuthInfo)();

              case 19:
                result = _context2.sent;
                payload = {
                  "areaCode": "string",
                  "docLocations": this.state.location,
                  "endD": dateEnd,
                  "id": 0,
                  "name": activeName,
                  "people": groupItemChecked,
                  "productIds": productIds,
                  "startD": dateStart,
                  "userId": result.id,
                  "wechatId": weChatNumber
                };

                if (!(result.wechatId === 0 || result.wechatId === null)) {
                  _context2.next = 24;
                  break;
                }

                this.setState({
                  isOpened: true
                });
                return _context2.abrupt("return");

              case 24:

                console.log('payload', payload);

                this.props.dispatchCreateActive(payload).then(function (res) {
                  console.log('res', res);
                  if (res && res.result === "success") {
                    _index2.default.navigateTo({
                      url: '/pages/active/share/index'
                    });
                  } else {
                    _this4.handleAlert('error', '发布活动失败');
                  }
                });

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onPublish(_x2) {
        return _ref3.apply(this, arguments);
      }

      return onPublish;
    }()
  }, {
    key: "handleActiveChange",
    value: function handleActiveChange(activeName) {
      this.setState({
        activeName: activeName
      });
      return activeName;
    }
  }, {
    key: "createProduct",
    value: function createProduct() {
      _index2.default.navigateTo({
        url: '/pages/product/add'
      });
    }
  }, {
    key: "handleWeChatChange",
    value: function handleWeChatChange(weChatNumber) {
      this.setState({
        weChatNumber: weChatNumber
      });
      return weChatNumber;
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state2 = this.__state,
          activeName = _state2.activeName,
          dateEnd = _state2.dateEnd,
          dateStart = _state2.dateStart,
          products = _state2.products,
          weChatNumber = _state2.weChatNumber,
          isOpened = _state2.isOpened;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "dispatchDownLoadUrl": {
    "type": null,
    "value": null
  },
  "dispatchQueryProductInfo": {
    "type": null,
    "value": null
  },
  "dispatchUploadConfig": {
    "type": null,
    "value": null
  },
  "dispatchUploadFile": {
    "type": null,
    "value": null
  },
  "dispatchCreateActive": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleActiveChange", "handlePickerSelectGroupChange", "onDateStartChange", "onDateEndChange", "HandlePickerChange", "onPublish", "handleWeChatChange", "handleCancel", "handleConfirm"], _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));