"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

require("../../../npm/@tarojs/async-await/index.js");

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

var _uploadImage = require('./../../../utils/uploadFile.js');
var util = require('../../../utils/util.js');


var imgArraySrc = [];

var Comment = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = function (_Taro$Component) {
  _inherits(Comment, _Taro$Component);

  function Comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["envValue", "serveValue", "profValue", "effectValue", "commentValue", "files", "location"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Comment.prototype.__proto__ || Object.getPrototypeOf(Comment.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        commentValue: '',
        envValue: 0,
        serveValue: 0,
        profValue: 0,
        effectValue: 0,
        files: [],
        location: []
      };
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
    key: "onChange",
    value: function onChange(files) {
      var _this2 = this;

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


        _this2.props.dispatchUploadConfig(payload).then(function (response) {
          _uploadImage(file, response.content.location, function (result) {
            imgArraySrc.push(result);
            console.log("======上传成功图片地址为：", result);
            wx.hideLoading();
          }, function (result) {
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
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        commentValue: event.target.value
      });
    }
  }, {
    key: "handleEnvChange",
    value: function handleEnvChange(value) {
      this.setState({
        envValue: value
      });
    }
  }, {
    key: "handleServeChange",
    value: function handleServeChange(value) {
      this.setState({
        serveValue: value
      });
    }
  }, {
    key: "handleProfChange",
    value: function handleProfChange(value) {
      this.setState({
        profValue: value
      });
    }
  }, {
    key: "handleEffectChange",
    value: function handleEffectChange(value) {
      this.setState({
        effectValue: value
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
                return this.props.dispatchCreateOrderDownLoadUrl(payload);

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
    key: "handleComment",
    value: function handleComment() {
      var _state = this.state,
          commentValue = _state.commentValue,
          envValue = _state.envValue,
          serveValue = _state.serveValue,
          profValue = _state.profValue,
          effectValue = _state.effectValue,
          files = _state.files,
          location = _state.location;


      if (envValue === 0 || serveValue === 0 || profValue === 0 || effectValue === 0) {
        this.handleAlert('error', '请填写评分');
        return;
      }

      if (commentValue === '') {
        this.handleAlert('error', '请发表你的想法');
        return;
      }

      if (files.length === 0) {
        this.handleAlert('error', '请上传图片');
        return;
      }

      var payload = {
        docLocations: imgArraySrc,
        effectStar: effectValue,
        environmentStar: envValue,
        professionStar: profValue,
        reservationId: this.$router.params.orderId,
        serviceStar: serveValue,
        message: commentValue
      };

      imgArraySrc = [];

      this.props.dispatchCreateComment(payload).then(function (response) {
        _index2.default.navigateTo({
          url: "./../../../pages/order/index?status=&index=0"
        });
      });
    }
  }, {
    key: "uploadImage",
    value: function uploadImage() {

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
              _uploadImage(file, response.content.location, function (result) {
                that.setState({
                  location: [result]
                });

                console.log("======上传成功图片地址为：", result);

                that.getImgUrl(result).then(function (response) {
                  console.log('response', response);
                });
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
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _state2 = this.__state,
          envValue = _state2.envValue,
          commentValue = _state2.commentValue,
          serveValue = _state2.serveValue,
          effectValue = _state2.effectValue,
          profValue = _state2.profValue;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Comment;
}(_index2.default.Component)) || _class);
Comment.properties = {
  "dispatchUploadConfig": null,
  "dispatchCreateOrderDownLoadUrl": null,
  "dispatchCreateComment": null
};
Comment.$$events = ["handleEnvChange", "handleServeChange", "handleProfChange", "handleEffectChange", "handleChange", "onFail", "onImageClick", "onChange", "handleComment"];
exports.default = Comment;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Comment, true));