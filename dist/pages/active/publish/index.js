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
  return state.active;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__10", "$compid__11", "$compid__12", "$compid__13", "dateStart", "dateEnd", "files", "selector", "selectorChecked", "groupItemChecked", "groupItem", "products", "activeAllName", "weChatNumber", "isOpened", "docLocations", "activeAllPrice", "dispatchDownLoadUrl", "dispatchQueryProductInfo", "groupCount", "activeName", "startTime", "endTime", "activePrice", "tempfiles", "imgs", "dispatchCacheTempFiles", "dispatchUploadConfig", "dispatchUploadFile", "dispatchGroupCount", "dispatchStartTime", "dispatchActivePrice", "dispatchCreateActive", "dispatchWeixinDecrypt", "UpdateUserInfo", "disptachActiveName", "dispatchEndTime"], _this.config = {
      navigationBarTitleText: '新增活动'
    }, _this.handleUploadLoader = function () {

      var payload = {
        documentType: 'PRODUCT',
        fileName: 'name'
      };

      _this.props.dispatchUploadFile(payload).then(function (res) {
        console.log('res', res);
      });
    }, _this.onDateStartChange = function (e) {
      _this.setState({
        dateStart: e.detail.value
      });
      _this.props.dispatchStartTime(e.detail.value);
    }, _this.onChangeActivePrice = function (val) {
      _this.setState({
        activePrice: val
      });
      _this.props.dispatchActivePrice(val);
    }, _this.onDateEndChange = function (e) {
      _this.setState({
        dateEnd: e.detail.value
      });
      _this.props.dispatchEndTime(e.detail.value);
    }, _this.customComponents = ["AtMessage", "AtInput", "AtImagePicker", "ProductList", "AtModal", "AtModalHeader", "AtModalContent"], _temp), _possibleConstructorReturn(_this, _ret);
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
        activeAllName: '',
        weChatNumber: '',
        isOpened: false,
        docLocations: [],
        activeAllPrice: ''
      };
      this.init();
      this.$$refs = [];
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
      // console.log('this.$router.params.ids',this.$router.params.ids);
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
              });
            }
          });
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.groupCount !== '') {
        this.setState({
          groupItemChecked: this.props.groupCount
        });
      }

      if (this.props.activeName !== '') {
        this.setState({
          activeName: this.props.activeName
        });
      }

      if (this.props.startTime !== '') {
        this.setState({
          dateStart: this.props.startTime
        });
      }

      if (this.props.endTime !== '') {
        this.setState({
          dateEnd: this.props.endTime
        });
      }

      if (this.props.activePrice !== '') {
        this.setState({
          activePrice: this.props.activePrice
        });
      }

      if (this.props.tempfiles.length > 0) {
        this.setState({
          files: this.props.tempfiles
        });
      }

      if (this.props.imgs.length > 0) {
        var docLocations = [];
        this.props.imgs.map(function (item, key) {
          docLocations.push(item);
        });
        this.setState({
          docLocations: docLocations
        });
      }
    }
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

      this.setState({ files: files });
      this.props.dispatchCacheTempFiles(files);

      var that = this;
      var tempFilePaths = files;
      var nowTime = util.formatTime(new Date());
      //支持多图上传

      var _loop = function _loop() {
        //显示消息提示框
        // TODO: bug 修复.
        // wx.showLoading({
        //   title: '上传中' + (i + 1) + '/' +tempFilePaths.length,
        //   mask: true
        // });
        var file = tempFilePaths[i].url;

        payload = {
          documentType: 'ACTIVITY',
          fileName: 'ACTIVITY.png'
        };
        that = _this3;


        _this3.props.dispatchUploadConfig(payload).then(function (response) {
          uploadImage(file, response.content.location, function (result) {
            imgArraySrc.push(result);
            that.setState({
              docLocations: imgArraySrc
            });
            that.props.dispatchSaveImg(imgArraySrc);
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
        var that;

        _loop();
      }
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
      this.props.dispatchGroupCount(parseInt(e.detail.value) + 1);
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

        var _state, activeName, groupItemChecked, dateStart, dateEnd, docLocations, weChatNumber, result, payload;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _state = this.state, activeName = _state.activeName, groupItemChecked = _state.groupItemChecked, dateStart = _state.dateStart, dateEnd = _state.dateEnd, docLocations = _state.docLocations, weChatNumber = _state.weChatNumber;

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
                if (!(docLocations.length <= 0)) {
                  _context2.next = 16;
                  break;
                }

                this.handleAlert('error', '请选择上传主图');
                return _context2.abrupt("return");

              case 16:
                _context2.next = 18;
                return (0, _storage.getAuthInfo)();

              case 18:
                result = _context2.sent;
                payload = {
                  "areaCode": "string",
                  "docLocations": docLocations,
                  "id": 0,
                  "name": activeName,
                  "people": groupItemChecked,
                  "productIds": productIds,
                  "startD": dateStart + " 00:00:00",
                  "endD": dateEnd + " 59:59:59",
                  "userId": result.id,
                  "wechatId": weChatNumber
                };

                if (!(result.cellphone === null || result.cellphone === "")) {
                  _context2.next = 25;
                  break;
                }

                this.setState({
                  isOpened: true
                });
                return _context2.abrupt("return");

              case 25:
                this.setState({
                  isOpened: false
                });

              case 26:
                this.props.dispatchCreateActive(payload).then(function (res) {
                  if (res && res.result === "success" && res.content != null) {
                    _index2.default.navigateTo({
                      url: "/pages/active/share/index?activeId=" + res.content
                    });
                  } else {
                    _this4.handleAlert('error', res.error);
                  }
                });

              case 27:
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
    key: "getPhoneNumber",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        var payload, result, params, phoneMsg, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!(e.detail.encryptedData && e.detail.iv)) {
                  _context3.next = 20;
                  break;
                }

                payload = {
                  iv: e.detail.iv,
                  phone: e.detail.encryptedData
                };
                _context3.next = 5;
                return this.props.dispatchWeixinDecrypt(payload);

              case 5:
                result = _context3.sent;

                if (!result.content) {
                  _context3.next = 17;
                  break;
                }

                params = {
                  cellphone: JSON.parse(result.content).phoneNumber
                };
                _context3.next = 10;
                return this.props.UpdateUserInfo(params);

              case 10:
                phoneMsg = _context3.sent;
                data = phoneMsg.content;

                console.log('data', data);
                _index2.default.setStorage({ key: 'userinfo', data: data });
                if (phoneMsg.result === "success") {
                  this.setState({
                    isOpened: false
                  });
                } else {
                  this.setState({
                    isOpened: true
                  });
                }
                _context3.next = 18;
                break;

              case 17:
                _index2.default.showToast({
                  title: '网络异常',
                  icon: 'none',
                  duration: 3000,
                  mask: true
                });

              case 18:
                _context3.next = 21;
                break;

              case 20:
                _index2.default.showToast({
                  title: '取消授权成功',
                  icon: 'success',
                  duration: 3000,
                  mask: true
                });

              case 21:
                _context3.next = 26;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t0 = _context3["catch"](0);

                _index2.default.showToast({
                  title: '系统错误',
                  icon: 'none',
                  duration: 3000,
                  mask: true
                });

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 23]]);
      }));

      function getPhoneNumber(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getPhoneNumber;
    }()
  }, {
    key: "handleActiveChange",
    value: function handleActiveChange(activeName) {
      console.log('activeName', activeName);

      this.props.disptachActiveName(activeName);
      this.setState({
        activeName: activeName
      });
      return activeName;
    }
  }, {
    key: "createProduct",
    value: function createProduct() {
      _index2.default.navigateTo({
        url: '/pages/product/edit'
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
    key: "getAuthInfo",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });

              case 2:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAuthInfo() {
        return _ref5.apply(this, arguments);
      }

      return getAuthInfo;
    }()
  }, {
    key: "selectProduct",
    value: function selectProduct() {
      _index2.default.navigateTo({
        url: '/pages/product/index'
      });
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      var _this5 = this;

      this.setState({
        isOpened: false
      });

      this.getAuthInfo().then(function (userinfo) {
        var payload = {
          openId: userinfo.openId,
          wechatId: _this5.state.weChatNumber,
          id: userinfo.id
        };

        _this5.props.UpdateUserInfo(payload).then(function (res) {
          console.log('response', res);
        });
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
      var $compid__10 = (0, _index.genCompid)(__prefix + "$compid__10");
      var $compid__11 = (0, _index.genCompid)(__prefix + "$compid__11");
      var $compid__12 = (0, _index.genCompid)(__prefix + "$compid__12");
      var $compid__13 = (0, _index.genCompid)(__prefix + "$compid__13");

      var _state2 = this.__state,
          activeName = _state2.activeName,
          dateEnd = _state2.dateEnd,
          dateStart = _state2.dateStart,
          products = _state2.products,
          weChatNumber = _state2.weChatNumber,
          isOpened = _state2.isOpened;


      var $props__10 = {
        "border": false,
        "value": activeName,
        "onChange": this.handleActiveChange.bind(this),
        "placeholder": "\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
      };
      var $props__11 = {
        "multiple": true,
        "className": "uploadImage",
        "files": this.__state.files,
        "onChange": this.HandlePickerChange.bind(this)
      };
      var $props__12 = {
        "products": products
      };
      var $props__13 = {
        "isOpened": isOpened
      };
      _index.propsManager.set($props__10, $compid__10);
      _index.propsManager.set($props__11, $compid__11);
      _index.propsManager.set($props__12, $compid__12);
      _index.propsManager.set($props__13, $compid__13);
      Object.assign(this.__state, {
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = ["handlePickerSelectGroupChange", "onDateStartChange", "onDateEndChange", "selectProduct", "createProduct", "onPublish", "getPhoneNumber"], _class2.$$componentPath = "pages/active/publish/index", _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));