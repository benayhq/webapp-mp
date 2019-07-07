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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["advertIndex", "data", "qrCode", "imgList", "imgSrc", "mask", "bannerList", "dispatchQueryQrCode", "dispatchAdvertQuery", "dispatchDownLoadUrl"], _this.config = {
      navigationBarTitleText: '广告预览'
    }, _this.handleChangeAdvert = function (item, index, e) {
      _this.handleChangeBg(index);
      var imgUrl = e.currentTarget.dataset.eTapAA.url;
      _this.setState({
        imgSrc: imgUrl
      });
      _this.showMask(imgUrl);
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
        advertIndex: 0
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

      function getImgUrl(_x) {
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
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
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
}, _class2.$$events = ["handleChangeAdvert"], _temp2)) || _class);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));