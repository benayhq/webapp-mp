"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imgArraySrc = [];
var util = require('../../../utils/util.js');
var uploadImage = require('./../../../utils/uploadFile.js');

var Edit = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Edit, _BaseComponent);

  function Edit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__206", "$compid__207", "$compid__208", "$compid__209", "$compid__210", "$compid__211", "$compid__212", "selector", "selectorChecked", "timeSel", "dateSel", "files", "nickName", "userName", "cellPhone", "weixin", "serviceAddress", "address", "qrCode", "dispatchUploadConfig", "dispatchDownLoadUrl", "UpdateUserInfo"], _this.config = {
      navigationBarTitleText: '个人信息'
    }, _this.handleAlert = function (type, message) {
      _index2.default.atMessage({
        'message': message,
        'type': type
      });
    }, _this.handleSaveUserInfo = function () {
      var _this$state = _this.state,
          nickName = _this$state.nickName,
          cellPhone = _this$state.cellPhone,
          weixin = _this$state.weixin,
          serviceAddress = _this$state.serviceAddress,
          address = _this$state.address;


      if (nickName === "") {
        _this.handleAlert('error', '呢称不能为空');
        return;
      }

      if (cellPhone === "") {
        _this.handleAlert('error', '手机号不能为空');
        return;
      }
      // if(weixin==="") {
      //     this.handleAlert('error','微信号不能为空');
      //     return;
      // }

      if (imgArraySrc.length === 0) {
        _this.handleAlert('error', '请上传二维码');
        return;
      }
      // if(serviceAddress===""){
      //     this.handleAlert('error','服务地址不能为空');
      // }

      _this.getAuthInfo().then(function (userinfo) {
        var payload = {
          nickname: nickName,
          openId: userinfo.openId,
          wechatId: weixin,
          cellphone: cellPhone,
          address: address,
          wechatQrcode: imgArraySrc[0],
          areaCode: '',
          id: userinfo.id
        };
        _this.props.UpdateUserInfo(payload).then(function (res) {
          _index2.default.navigateTo({
            url: '/pages/user/index'
          });
        });
      });
    }, _this.customComponents = ["AtMessage", "AtForm", "AtInput", "AtImagePicker", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Edit, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Edit.prototype.__proto__ || Object.getPrototypeOf(Edit.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        selector: ['美国', '中国', '巴西', '日本'],
        selectorChecked: '美国',
        timeSel: '12:01',
        dateSel: '2018-04-22',
        files: [],
        nickName: '',
        userName: '',
        cellPhone: '',
        weixin: '',
        serviceAddress: '',
        address: '',
        qrCode: ''
      };

      this.init();
      this.$$refs = [];
    }
  }, {
    key: "init",
    value: function init() {
      this.initData();
    }
  }, {
    key: "initData",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAuthInfo();

              case 2:
                response = _context.sent;


                console.log('response', response);
                this.setState({
                  nickName: response.name,
                  userName: response.name,
                  cellPhone: response.cellphone,
                  weixin: response.wechatId,
                  address: response.address
                });

                this.getImgUrl(response.wechatQrcode).then(function (response) {
                  _this2.setState({
                    files: [{ url: response }]
                  });
                  imgArraySrc.push(response);
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initData() {
        return _ref2.apply(this, arguments);
      }

      return initData;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleUploadChange",
    value: function handleUploadChange(files) {
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
    key: "getAuthInfo",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAuthInfo() {
        return _ref3.apply(this, arguments);
      }

      return getAuthInfo;
    }()
  }, {
    key: "handleNickNameChange",
    value: function handleNickNameChange(nickName) {
      this.setState({
        nickName: nickName
      });
      return nickName;
    }
  }, {
    key: "handleUserNameChange",
    value: function handleUserNameChange(userName) {
      this.setState({
        userName: userName
      });
      return userName;
    }
  }, {
    key: "handleMobileChange",
    value: function handleMobileChange(cellPhone) {
      this.setState({
        cellPhone: cellPhone
      });
      return cellPhone;
    }
  }, {
    key: "handleWeChatChange",
    value: function handleWeChatChange(weixin) {
      this.setState({
        weixin: weixin
      });
      return weixin;
    }
  }, {
    key: "handleServiceAddressChange",
    value: function handleServiceAddressChange(serviceAddress) {
      this.setState({
        serviceAddress: serviceAddress
      });
      return serviceAddress;
    }
  }, {
    key: "handleAddressChange",
    value: function handleAddressChange(address) {
      this.setState({
        address: address
      });
      return address;
    }
  }, {
    key: "getImgUrl",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(location) {
        var payload, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                payload = {
                  location: location
                };
                _context3.next = 3;
                return this.props.dispatchDownLoadUrl(payload);

              case 3:
                result = _context3.sent;
                return _context3.abrupt("return", result.content);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getImgUrl(_x) {
        return _ref4.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__206 = (0, _index.genCompid)(__prefix + "$compid__206");
      var $compid__207 = (0, _index.genCompid)(__prefix + "$compid__207");
      var $compid__208 = (0, _index.genCompid)(__prefix + "$compid__208");
      var $compid__209 = (0, _index.genCompid)(__prefix + "$compid__209");
      var $compid__210 = (0, _index.genCompid)(__prefix + "$compid__210");
      var $compid__211 = (0, _index.genCompid)(__prefix + "$compid__211");
      var $compid__212 = (0, _index.genCompid)(__prefix + "$compid__212");

      var _state = this.__state,
          nickName = _state.nickName,
          userName = _state.userName,
          cellPhone = _state.cellPhone,
          weixin = _state.weixin,
          serviceAddress = _state.serviceAddress,
          address = _state.address,
          qrCode = _state.qrCode;

      var $props__206 = {
        "name": "value1",
        "title": "\u5462\u79F0",
        "type": "text",
        "placeholder": "\u5462\u79F0",
        "value": nickName,
        "onChange": this.handleNickNameChange.bind(this)
      };
      var $props__207 = {
        "name": "value1",
        "title": "\u59D3\u540D",
        "type": "text",
        "placeholder": "(\u9009\u586B)",
        "value": userName,
        "onChange": this.handleUserNameChange.bind(this)
      };
      var $props__208 = {
        "name": "value6",
        "title": "\u624B\u673A\u53F7\u7801",
        "type": "phone",
        "placeholder": "\u8BF7\u8F93\u5165\u5E38\u7528\u624B\u673A\u53F7",
        "value": cellPhone,
        "onChange": this.handleMobileChange.bind(this)
      };
      var $props__209 = {
        "name": "value1",
        "title": "\u5FAE\u4FE1",
        "type": "text",
        "placeholder": "\u5BA2\u6237\u901A\u8FC7\u5FAE\u4FE1\u4E0E\u60A8\u8054\u7CFB",
        "value": weixin,
        "onChange": this.handleWeChatChange.bind(this)
      };
      var $props__210 = {
        "name": "value1",
        "title": "\u5730\u5740",
        "type": "text",
        "placeholder": "(\u9009\u586B)",
        "value": address,
        "onChange": this.handleAddressChange.bind(this)
      };
      var $props__211 = {
        "className": "uploadPicker",
        "files": this.__state.files,
        "onChange": this.handleUploadChange.bind(this)
      };
      var $props__212 = {
        "type": "primary",
        "onClick": this.handleSaveUserInfo.bind(this)
      };
      _index.propsManager.set($props__206, $compid__206);
      _index.propsManager.set($props__207, $compid__207);
      _index.propsManager.set($props__208, $compid__208);
      _index.propsManager.set($props__209, $compid__209);
      _index.propsManager.set($props__210, $compid__210);
      _index.propsManager.set($props__211, $compid__211);
      _index.propsManager.set($props__212, $compid__212);
      Object.assign(this.__state, {
        $compid__206: $compid__206,
        $compid__207: $compid__207,
        $compid__208: $compid__208,
        $compid__209: $compid__209,
        $compid__210: $compid__210,
        $compid__211: $compid__211,
        $compid__212: $compid__212
      });
      return this.__state;
    }
  }]);

  return Edit;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/user/info/edit", _temp2)) || _class);
exports.default = Edit;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Edit, true));