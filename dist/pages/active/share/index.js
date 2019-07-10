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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["imgList", "imgSrc", "mask", "qrCode", "bannerList", "data", "advertIndex", "config", "shareImage", "canvasStatus", "rssConfig", "dispatchQueryQrCode", "dispatchAdvertQuery", "dispatchDownLoadUrl"], _this.config = {
      navigationBarTitleText: '广告预览'
    }, _this.handleChangeAdvert = function (item, index, e) {
      _this.handleChangeBg(index);
      var imgUrl = e.currentTarget.dataset.eTapAA.url;
      _this.setState({
        imgSrc: imgUrl
      });
      _this.showMask(imgUrl);
    }, _this.canvasDrawFunc = function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.rssConfig;

      _this.setState({
        canvasStatus: true,
        config: config
      });
      _index2.default.showLoading({
        title: '绘制中...'
      });
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
      var res = _index2.default.saveImageToPhotosAlbum({
        filePath: _this.state.shareImage
      });
      if (res.errMsg === 'saveImageToPhotosAlbum:ok') {
        _index2.default.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        });
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        imgSrc: 'http://invitecard-1253442168.image.myqcloud.com/sharecard_tmp/2019-4-5/1554468983_1a277fade9b09ff199d377880f04137f.jpg',
        imgList: [],
        mask: '',
        qrCode: "",
        bannerList: [],
        data: {},
        advertIndex: 0,
        // 绘图配置文件
        config: null,
        // 绘制的图片
        shareImage: null,
        // TaroCanvasDrawer 组件状态
        canvasStatus: false,
        rssConfig: {
          width: 750,
          height: 950,
          backgroundColor: '#fff',
          debug: false,
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
          texts: [{
            x: 80,
            y: 420,
            text: '国产谍战 真人演出,《隐形守护者》凭什么成为Steam第一?',
            fontSize: 32,
            color: '#000',
            opacity: 1,
            baseLine: 'middle',
            lineHeight: 48,
            lineNum: 2,
            textAlign: 'left',
            width: 580,
            zIndex: 999
          }, {
            x: 80,
            y: 590,
            text: '长按扫描二维码阅读完整内容',
            fontSize: 24,
            color: '#666',
            opacity: 1,
            baseLine: 'middle',
            textAlign: 'left',
            lineHeight: 36,
            lineNum: 1,
            zIndex: 999
          }, {
            x: 80,
            y: 640,
            text: '分享来自 「 RssFeed 」',
            fontSize: 24,
            color: '#666',
            opacity: 1,
            baseLine: 'middle',
            textAlign: 'left',
            lineHeight: 36,
            lineNum: 1,
            zIndex: 999
          }],
          images: [{
            url: './../../image/share.jpg',
            width: 750,
            height: 900,
            y: 0,
            x: 0,
            borderRadius: 12,
            zIndex: 10
            // borderRadius: 150,
            // borderWidth: 10,
            // borderColor: 'red',
          }, {
            url: 'https://pic.juncao.cc/cms/images/minapp.jpg',
            width: 110,
            height: 110,
            y: 570,
            x: 560,
            borderRadius: 100,
            borderWidth: 0,
            zIndex: 10
          }],
          lines: [{
            startY: 540,
            startX: 80,
            endX: 670,
            endY: 541,
            width: 1,
            color: '#eee'
          }]
        }
      };
    }
  }, {
    key: "init",
    value: function init() {
      this.initSelectdImg();
      this.initImage();
      this.initData();
    }
  }, {
    key: "initSelectdImg",
    value: function initSelectdImg() {
      var _this2 = this;

      var payload = {
        auto_color: true,
        is_hyaline: true,
        line_color: { "r": 0, "g": 0, "b": 0 },
        page: "pages/user/index",
        scene: "productId=10",
        width: 100
      };

      this.props.dispatchQueryQrCode(payload).then(function (response) {
        _this2.setState({
          qrCode: 'data:image/png;base64,' + response
        });
      });
    }
  }, {
    key: "initImage",
    value: function initImage() {
      var _this3 = this;

      var listImg = ['dev/common/share_thumbnail_01.png', 'dev/common/share_thumbnail_02.png', 'dev/common/share_thumbnail_03.png', 'dev/common/share_thumbnail_04.png'],
          thumbNails = [];

      listImg.map(function (item, key) {
        _this3.getImgUrl(item).then(function (imageItem) {
          thumbNails.push({
            'url': imageItem,
            isShow: key === 0 ? true : false
          });
          _this3.setState({
            imgList: thumbNails
          });
        });
      });
    }
  }, {
    key: "initData",
    value: function initData() {
      var _this4 = this;

      var payload = {
        batchId: 1
        // activityId:null
      };
      this.props.dispatchAdvertQuery(payload).then(function (response) {
        _this4.setState({
          data: response.content
        });
      });
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

      function getImgUrl(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.$router.params); // 输出 { id: 2, type: 'test' }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
      this.canvasDrawFunc();
    }
  }, {
    key: "handleChangeBg",
    value: function handleChangeBg(index) {
      var that = this;
      switch (index) {
        case 0:
          that.setState({
            advertIndex: 0
          });
          return;
        case 1:
          that.setState({
            advertIndex: 1
          });
          return;
        default:
          that.setState({
            advertIndex: 0
          });
      }
    }
  }, {
    key: "showMask",
    value: function showMask(imgUrl) {
      this.state.imgList.map(function (item, index) {
        item.url === imgUrl ? item.isShow = true : item.isShow = false;
      });
    }

    // 调用绘画 => canvasStatus 置为true、同时设置config


    // 绘制成功回调函数 （必须实现）=> 接收绘制结果、重置 TaroCanvasDrawer 状态


    // 绘制失败回调函数 （必须实现）=> 接收绘制错误信息、重置 TaroCanvasDrawer 状态


    // 保存图片至本地

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          imgList = _state.imgList,
          data = _state.data,
          qrCode = _state.qrCode;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "dispatchQueryQrCode": {
    "type": null,
    "value": null
  },
  "dispatchAdvertQuery": {
    "type": null,
    "value": null
  },
  "dispatchDownLoadUrl": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["onCreateSuccess", "onCreateFail", "canvasDrawFunc"], _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));