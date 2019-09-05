"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;
// 拷贝文件到component的引入方式


var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _actionCreators = require("../store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

var _storage = require("../../../utils/storage.js");

var _base64src = require("../../../utils/base64src.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__417", "imgList", "config", "qrCode", "data", "shareImage", "canvasStatus", "bannerConfig", "activeId", "dispatchQueryQrCode", "dispatchAdvertQuery", "dispatchDownLoadUrl"], _this.config = {
      navigationBarTitleText: '广告预览'
    }, _this.canvasDrawFunc = function (id, event) {
      _this.getCanvas(id);
      _this.showMask(id);
    }, _this.onCreateSuccess = function (result) {
      var tempFilePath = result.tempFilePath,
          errMsg = result.errMsg;

      _index2.default.hideLoading();
      if (errMsg === 'canvasToTempFilePath:ok') {
        _this.setState({
          shareImage: tempFilePath,
          // 重置 TaroCanvasDrawer 状态，方便下一次调用
          canvasStatus: false,
          config: null
        });
      } else {
        // 重置 TaroCanvasDrawer 状态，方便下一次调用
        _this.setState({
          canvasStatus: false,
          config: null
        });
        _index2.default.showToast({ icon: 'none', title: errMsg || '出现错误' });
        console.log(errMsg);
      }
      // 预览
      // Taro.previewImage({
      //   current: tempFilePath,
      //   urls: [tempFilePath]
      // })
    }, _this.onCreateFail = function (error) {
      _index2.default.hideLoading();
      // 重置 TaroCanvasDrawer 状态，方便下一次调用
      _this.setState({
        canvasStatus: false,
        config: null
      });
      console.log(error);
    }, _this.saveToAlbum = function () {
      _index2.default.saveImageToPhotosAlbum({
        filePath: _this.state.shareImage
      });
      _index2.default.showToast({
        title: '保存图片成功',
        icon: 'success',
        duration: 1000
      });
    }, _this.customComponents = ["TaroCanvasDrawer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.state = {
        config: null,
        qrCode: '',
        data: null,
        shareImage: null,
        canvasStatus: false,
        bannerConfig: {},
        imgList: [],
        activeId: 0
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // console.log('this.$router.params',this.$router.params);
      this.setState({
        activeId: this.$router.params.activeId
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.initImage();
    }
  }, {
    key: "getQrCode",
    value: function getQrCode(payload) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.props.dispatchQueryQrCode(payload).then(function (result) {
          resolve(result);
        }).catch(function (err) {
          console.log(err);
          reject(err);
        });
      });
    }
  }, {
    key: "getBase64Src",
    value: function getBase64Src(base64) {
      return new Promise(function (resolve, reject) {
        (0, _base64src.base64src)('data:image/png;base64,' + base64, function (res) {
          console.log('getBase64Src', res);
          resolve(res);
        });
      });
    }
  }, {
    key: "getAuthInfo",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });
                return _context.abrupt("return", result);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAuthInfo() {
        return _ref2.apply(this, arguments);
      }

      return getAuthInfo;
    }()
  }, {
    key: "getCanvas",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(templateId) {
        var _this3 = this;

        var userInfo, payload;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _storage.getAuthInfo)();

              case 2:
                userInfo = _context2.sent;

                // page: "pages/product/detail",
                payload = {
                  auto_color: true,
                  is_hyaline: true,
                  line_color: { "r": 0, "g": 0, "b": 0 },
                  page: "pages/product/detail",
                  scene: "activeId=" + this.state.activeId + "&refId=" + userInfo.id + "&sc=advert",
                  width: 100,
                  height: 100
                };


                this.getQrCode(payload).then(function (response) {
                  console.log('response', response);
                  // this.getBase64Src(response).then((imgUrl)=>{
                  _this3.getActivityData().then(function (data) {
                    var config = _this3.buildConfig(templateId, {
                      data: data.content,
                      img: response.content
                    });
                    _index2.default.showLoading({
                      title: '绘制中...'
                    });
                    _this3.setState({
                      bannerConfig: config
                    });
                    setTimeout(function () {
                      _this3.setState({
                        canvasStatus: true
                      });
                    }, 1000);
                  });
                  // });
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCanvas(_x) {
        return _ref3.apply(this, arguments);
      }

      return getCanvas;
    }()
  }, {
    key: "buildConfig",
    value: function buildConfig(templateId, configData) {
      var response = configData.data,
          imgUrl = configData.img;
      console.log('configData.data', configData.data);
      response.inviterProfileUrl = 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqgQbxxNe21poPOytoOu6icmqbNTSSdCYiaJ6ibDSIVyMf4kLJOlx3A6iaGDjGRBzH14811yt7jYGfibMg/132';
      // todo: 调用后台接口动态渲染模板.
      switch (templateId) {
        case 1:
          return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
            blocks: [{
              x: 0,
              y: 0,
              width: 750,
              height: 750,
              paddingLeft: 0,
              paddingRight: 0,
              borderWidth: 0,
              // borderColor: '#ccc',
              backgroundColor: '#EFF3F5',
              borderRadius: 0
            }, {
              x: 40,
              y: 40,
              width: 670,
              height: 670,
              paddingLeft: 0,
              paddingRight: 0,
              borderWidth: 0,
              // borderColor: '#ccc',
              backgroundColor: '#fff',
              borderRadius: 12
            }],
            images: [{
              url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_01.png',
              width: this.getScreenW(),
              height: this.getScreenH(),
              y: 0,
              x: 0,
              borderRadius: 12,
              zIndex: 10
            }, {
              y: this.factorHeight(1500),
              x: this.factorWidth(560),
              url: imgUrl,
              width: 180,
              height: 180,
              borderRadius: 100,
              borderWidth: 0,
              zIndex: 99
            }, {
              x: this.factorWidth(320),
              y: this.factorHeight(730),
              url: response.inviterProfileUrl,
              width: 90,
              height: 90,
              borderRadius: 90,
              zIndex: 999
            }],
            texts: [{
              x: this.factorWidth(530),
              y: this.factorHeight(780),
              text: response.inviterName,
              fontSize: 28,
              color: '#000',
              opacity: 1,
              baseLine: 'middle',
              lineHeight: 48,
              lineNum: 2,
              textAlign: 'left',
              width: 580,
              zIndex: 999
            }, {
              x: this.factorWidth(530),
              y: this.factorHeight(850),
              text: '邀您参与拼团,仅剩1个名额',
              fontSize: 24,
              color: '#666',
              opacity: 1,
              baseLine: 'middle',
              textAlign: 'left',
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(330),
              y: this.factorHeight(1050),
              text: response.acitivityName,
              fontSize: 42,
              color: '#000',
              opacity: 1,
              baseLine: 'middle',
              textAlign: 'left',
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(580),
              y: this.factorHeight(1250),
              text: 'vivi 医美咨询师',
              fontSize: 28,
              color: '#666',
              opacity: 1,
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(450),
              y: this.factorHeight(1400),
              text: '长按识别小程序码加入拼团',
              fontSize: 28,
              color: '#000',
              opacity: 1,
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }]
          };
        case 2:
          return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
            images: [{
              url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_02.png',
              width: this.getScreenW(),
              height: this.getScreenH(),
              y: 0,
              x: 0,
              borderRadius: 12,
              zIndex: 10
            }, {
              x: this.factorWidth(120),
              y: this.factorHeight(2100),
              url: imgUrl,
              width: 180,
              height: 180,
              borderRadius: 100,
              borderWidth: 0,
              zIndex: 99
            }, {
              x: this.factorWidth(120),
              y: this.factorHeight(1540),
              url: response.inviterProfileUrl,
              width: 90,
              height: 90,
              borderRadius: 90,
              zIndex: 999
            }, {
              url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_02.png',
              x: this.factorWidth(470),
              y: this.factorHeight(2250),
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999,
              width: 180,
              height: 50
            }],
            texts: [{
              x: this.factorWidth(340),
              y: this.factorHeight(1580),
              text: response.inviterName,
              fontSize: 28,
              color: '#000',
              opacity: 1,
              baseLine: 'middle',
              lineHeight: 48,
              lineNum: 2,
              textAlign: 'left',
              width: 580,
              zIndex: 999
            }, {
              x: this.factorWidth(340),
              y: this.factorHeight(1650),
              text: '邀您参与拼团,仅剩1个名额',
              fontSize: 24,
              color: '#666',
              opacity: 1,
              baseLine: 'middle',
              textAlign: 'left',
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(120),
              y: this.factorHeight(1850),
              text: response.acitivityName,
              fontSize: 42,
              color: '#000',
              opacity: 1,
              baseLine: 'middle',
              textAlign: 'left',
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(120),
              y: this.factorHeight(2000),
              text: 'vivi医美咨询师',
              fontSize: 28,
              color: '#000',
              opacity: 1,
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(470),
              y: this.factorHeight(2200),
              text: '长按识别小程序码加入拼团',
              fontSize: 28,
              color: '#000',
              opacity: 1,
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }]
          };
        case 3:
          return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
            images: [{
              url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-03.png',
              width: this.getScreenW(),
              height: this.getScreenH(),
              y: 0,
              x: 0,
              borderRadius: 12,
              zIndex: 10
            }, {
              x: this.factorWidth(530),
              y: this.factorHeight(1500),
              url: imgUrl,
              width: 180,
              height: 180,
              borderRadius: 100,
              borderWidth: 0,
              zIndex: 99
            }, {
              x: this.factorWidth(120),
              y: this.factorHeight(1060),
              url: response.inviterProfileUrl,
              width: 90,
              height: 90,
              borderRadius: 90,
              zIndex: 999
            }, {
              url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-03.png',
              x: this.factorWidth(560),
              y: this.factorHeight(2150),
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999,
              width: 180,
              height: 50
            }],
            texts: [{
              x: this.factorWidth(340),
              y: this.factorHeight(1100),
              text: response.inviterName,
              fontSize: 28,
              color: '#000',
              opacity: 1,
              baseLine: 'middle',
              lineHeight: 48,
              lineNum: 2,
              textAlign: 'left',
              width: 580,
              zIndex: 999
            }, {
              x: this.factorWidth(340),
              y: this.factorHeight(1170),
              text: '邀您参与拼团,仅剩1个名额',
              fontSize: 24,
              color: '#666',
              opacity: 1,
              baseLine: 'middle',
              textAlign: 'left',
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            },
            // {
            //   x: this.factorWidth(120),
            //   y: this.factorHeight(1850),
            //   text: response.acitivityName,
            //   fontSize: 42,
            //   color: '#000',
            //   opacity: 1,
            //   baseLine: 'middle',
            //   textAlign: 'left',
            //   lineHeight: 36,
            //   lineNum: 1,
            //   zIndex: 999,
            // }
            // ,
            // {
            //   x: this.factorWidth(120),
            //   y: this.factorHeight(2000),
            //   text: 'vivi医美咨询师',
            //   fontSize: 28,
            //   color: '#000',
            //   opacity: 1,
            //   lineHeight: 36,
            //   lineNum: 1,
            //   zIndex: 999,
            // }
            // ,
            {
              x: this.factorWidth(560),
              y: this.factorHeight(2100),
              text: '长按识别小程序码',
              fontSize: 28,
              color: '#000',
              opacity: 1,
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }]
          };
        case 4:
          return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
            images: [{
              url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-04.png',
              width: this.getScreenW(),
              height: this.getScreenH(),
              y: 0,
              x: 0,
              borderRadius: 12,
              zIndex: 10
            },
            // {
            //   x: this.factorWidth(330),
            //   y: this.factorHeight(700),
            //   url: imgUrl,
            //   width: 180,
            //   height:180,
            //   borderRadius: 100,
            //   borderWidth: 0,
            //   zIndex: 99,
            // },
            {
              x: this.factorWidth(120),
              y: this.factorHeight(100),
              url: response.inviterProfileUrl,
              width: 90,
              height: 90,
              borderRadius: 90,
              zIndex: 999
            }],
            texts: [{
              x: this.factorWidth(340),
              y: this.factorHeight(140),
              text: response.inviterName,
              fontSize: 28,
              color: '#000',
              opacity: 1,
              baseLine: 'middle',
              lineHeight: 48,
              lineNum: 2,
              textAlign: 'left',
              width: 580,
              zIndex: 999
            }, {
              x: this.factorWidth(340),
              y: this.factorHeight(220),
              text: '邀您参与拼团,仅剩1个名额',
              fontSize: 24,
              color: '#666',
              opacity: 1,
              baseLine: 'middle',
              textAlign: 'left',
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }]
          };
        default:
          return {
            width: 750,
            height: 750,
            backgroundColor: '#fff',
            debug: true,
            blocks: [{
              x: 0,
              y: 0,
              width: 750,
              height: 750,
              paddingLeft: 0,
              paddingRight: 0,
              borderWidth: 0,
              // borderColor: '#ccc',
              backgroundColor: '#EFF3F5',
              borderRadius: 0
            }, {
              x: 40,
              y: 40,
              width: 670,
              height: 670,
              paddingLeft: 0,
              paddingRight: 0,
              borderWidth: 0,
              // borderColor: '#ccc',
              backgroundColor: '#fff',
              borderRadius: 12
            }],
            images: [{
              url: 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_01.png',
              width: this.getScreenW(),
              height: this.getScreenH(),
              y: 0,
              x: 0,
              borderRadius: 12,
              zIndex: 10
            }, {
              y: this.factorHeight(1500),
              x: this.factorWidth(560),
              url: imgUrl,
              width: 180,
              height: 180,
              borderRadius: 100,
              borderWidth: 0,
              zIndex: 99
            }, {
              x: this.factorWidth(320),
              y: this.factorHeight(730),
              url: response.inviterProfileUrl,
              width: 90,
              height: 90,
              borderRadius: 90,
              zIndex: 999
            }],
            texts: [{
              x: this.factorWidth(530),
              y: this.factorHeight(780),
              text: response.inviterName,
              fontSize: 28,
              color: '#000',
              opacity: 1,
              baseLine: 'middle',
              lineHeight: 48,
              lineNum: 2,
              textAlign: 'left',
              width: 580,
              zIndex: 999
            }, {
              x: this.factorWidth(530),
              y: this.factorHeight(850),
              text: '邀您参与拼团,仅剩1个名额',
              fontSize: 24,
              color: '#666',
              opacity: 1,
              baseLine: 'middle',
              textAlign: 'left',
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(330),
              y: this.factorHeight(1050),
              text: response.acitivityName,
              fontSize: 42,
              color: '#000',
              opacity: 1,
              baseLine: 'middle',
              textAlign: 'left',
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(580),
              y: this.factorHeight(1250),
              text: 'vivi 医美咨询师',
              fontSize: 28,
              color: '#666',
              opacity: 1,
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }, {
              x: this.factorWidth(450),
              y: this.factorHeight(1400),
              text: '长按识别小程序码加入拼团',
              fontSize: 28,
              color: '#000',
              opacity: 1,
              lineHeight: 36,
              lineNum: 1,
              zIndex: 999
            }]
          };
      }
    }
  }, {
    key: "getActivityData",
    value: function getActivityData() {
      var _this4 = this;

      var payload = {
        activityId: this.state.activeId
      };
      return new Promise(function (resolve, reject) {
        _this4.props.dispatchAdvertQuery(payload).then(function (result) {
          resolve(result);
        }).catch(function (err) {
          console.log(err);
          reject(err);
        });
      });
    }
  }, {
    key: "getScreenW",
    value: function getScreenW() {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenWidth = sysInfo.screenWidth;
      return screenWidth * 2;
    }
  }, {
    key: "getScreenH",
    value: function getScreenH() {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenHeight = sysInfo.screenHeight;
      return screenHeight * 2;
    }
  }, {
    key: "factorWidth",
    value: function factorWidth(px) {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenWidth = sysInfo.screenWidth;
      return px * screenWidth / 750;
    }
  }, {
    key: "factorHeight",
    value: function factorHeight(px) {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenHeight = sysInfo.screenHeight;
      return px * screenHeight / 1334;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
      this.canvasDrawFunc(1);
    }
  }, {
    key: "initImage",
    value: function initImage() {
      var _this5 = this;

      var listImg = ['https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_01.png', 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share_02.png', 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-03.png', 'https://lovemeipin.oss-cn-shanghai.aliyuncs.com/common/share-04.png'],
          thumbNails = [],
          index = 0;

      listImg.map(function (item, key) {
        index++;
        thumbNails.push({
          id: index,
          url: item,
          isShow: key === 0 ? true : false
        });
        _this5.setState({
          imgList: thumbNails
        });
      });
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

      function getImgUrl(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "showMask",
    value: function showMask(id) {
      this.state.imgList.map(function (item, index) {
        item.id === id ? item.isShow = true : item.isShow = false;
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
      var $compid__417 = (0, _index.genCompid)(__prefix + "$compid__417");

      var _state = this.__state,
          imgList = _state.imgList,
          qrCode = _state.qrCode;


      var $props__417 = {
        "config": this.__state.bannerConfig,
        "onCreateSuccess": this.onCreateSuccess,
        "onCreateFail": this.onCreateFail
      };
      this.__state.canvasStatus && _index.propsManager.set($props__417, $compid__417);
      Object.assign(this.__state, {
        $compid__417: $compid__417
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = ["canvasDrawFunc", "saveToAlbum"], _class2.$$componentPath = "pages/active/share/index", _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));