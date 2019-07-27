"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _tools = require("./utils/tools.js");

var _draw = require("./utils/draw.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var count = 1;

var CanvasDrawer = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CanvasDrawer, _BaseComponent);

  function CanvasDrawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CanvasDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CanvasDrawer.__proto__ || Object.getPrototypeOf(CanvasDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["pxWidth", "pxHeight", "canvasId", "debug", "factor", "config"], _this.toPx = function (rpx, int) {
      var factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state.factor;

      if (int) {
        return parseInt(rpx * factor);
      }
      return rpx * factor;
    }, _this.toRpx = function (px, int) {
      var factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state.factor;

      if (int) {
        return parseInt(px / factor);
      }
      return px / factor;
    }, _this._downloadImageAndInfo = function (image, index) {
      return new Promise(function (resolve, reject) {
        (0, _tools.downloadImageAndInfo)(image, index, _this.toRpx).then(function (result) {
          _this.drawArr.push(result);
          resolve();
        }).catch(function (err) {
          console.log(err);
          reject(err);
        });
      });
    }, _this.downloadResource = function () {
      var images = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var drawList = [];
      var imagesTemp = images;

      imagesTemp.forEach(function (image, index) {
        return drawList.push(_this._downloadImageAndInfo(image, index));
      });

      return Promise.all(drawList);
    }, _this.downloadResourceTransit = function () {
      var config = _this.props.config;


      console.log('config', config);
      return new Promise(function (resolve, reject) {
        if (config.images && config.images.length > 0) {
          _this.downloadResource(config.images || []).then(function () {
            resolve();
          }).catch(function (e) {
            console.log(e);
            reject(e);
          });
        } else {
          setTimeout(function () {
            resolve(1);
          }, 500);
        }
      });
    }, _this.initCanvas = function (w, h, debug) {
      return new Promise(function (resolve) {
        _this.setState({
          pxWidth: _this.toPx(w),
          pxHeight: _this.toPx(h),
          debug: debug
        }, resolve);
      });
    }, _this.onCreate = function () {
      var _this$props = _this.props,
          onCreateFail = _this$props.onCreateFail,
          config = _this$props.config;

      _index2.default.showLoading({ mask: true, title: '生成中...' });
      return _this.downloadResourceTransit().then(function () {
        _this.create(config);
      }).catch(function (err) {
        _index2.default.hideLoading();
        _index2.default.showToast({ icon: 'none', title: err.errMsg || '下载图片失败' });
        console.error(err);
        if (!onCreateFail) {
          console.warn('您必须实现 taro-plugin-canvas 组件的 onCreateFail 方法，详见文档 https://github.com/chuyun/taro-plugin-canvas#fail');
        }
        onCreateFail && _this.props.onCreateFail(err);
      });
    }, _this.create = function (config) {
      _this.ctx = _index2.default.createCanvasContext(_this.canvasId, _this.$scope);
      var height = (0, _tools.getHeight)(config);
      _this.initCanvas(config.width, height, config.debug).then(function () {
        // 设置画布底色
        if (config.backgroundColor) {
          _this.ctx.save();
          _this.ctx.setFillStyle(config.backgroundColor);
          _this.ctx.fillRect(0, 0, _this.toPx(config.width), _this.toPx(height));
          _this.ctx.restore();
        }
        var _config$texts = config.texts,
            texts = _config$texts === undefined ? [] : _config$texts,
            _config$blocks = config.blocks,
            blocks = _config$blocks === undefined ? [] : _config$blocks,
            _config$lines = config.lines,
            lines = _config$lines === undefined ? [] : _config$lines;

        var queue = _this.drawArr.concat(texts.map(function (item) {
          item.type = 'text';
          item.zIndex = item.zIndex || 0;
          return item;
        })).concat(blocks.map(function (item) {
          item.type = 'block';
          item.zIndex = item.zIndex || 0;
          return item;
        })).concat(lines.map(function (item) {
          item.type = 'line';
          item.zIndex = item.zIndex || 0;
          return item;
        }));
        // 按照顺序排序
        queue.sort(function (a, b) {
          return a.zIndex - b.zIndex;
        });

        queue.forEach(function (item) {
          var drawOptions = {
            ctx: _this.ctx,
            toPx: _this.toPx,
            toRpx: _this.toRpx
          };
          if (item.type === 'image') {
            (0, _draw.drawImage)(item, drawOptions);
          } else if (item.type === 'text') {
            (0, _draw.drawText)(item, drawOptions);
          } else if (item.type === 'block') {
            (0, _draw.drawBlock)(item, drawOptions);
          } else if (item.type === 'line') {
            (0, _draw.drawLine)(item, drawOptions);
          }
        });

        var res = _index2.default.getSystemInfoSync();
        var platform = res.platform;
        var time = 0;
        if (platform === 'android') {
          // 在安卓平台，经测试发现如果海报过于复杂在转换时需要做延时，要不然样式会错乱
          time = 300;
        }
        _this.ctx.draw(false, function () {
          setTimeout(function () {
            _this.getTempFile();
          }, time);
        });
      }).catch(function (err) {
        _index2.default.showToast({ icon: 'none', title: err.errMsg || '生成失败' });
        console.error(err);
      });
    }, _this.getTempFile = function (otherOptions) {
      var _this$props2 = _this.props,
          onCreateSuccess = _this$props2.onCreateSuccess,
          onCreateFail = _this$props2.onCreateFail;

      _index2.default.canvasToTempFilePath({
        canvasId: _this.canvasId,
        success: function success(result) {
          if (!onCreateSuccess) {
            console.warn('您必须实现 taro-plugin-canvas 组件的 onCreateSuccess 方法，详见文档 https://github.com/chuyun/taro-plugin-canvas#success');
          }
          onCreateSuccess && _this.props.onCreateSuccess(result);
        },
        fail: function fail(error) {
          var errMsg = error.errMsg;

          console.log(errMsg);
          if (errMsg === 'canvasToTempFilePath:fail:create bitmap failed') {
            count += 1;
            if (count <= 3) {
              _this.getTempFile(otherOptions);
            } else {
              if (!onCreateFail) {
                console.warn('您必须实现 taro-plugin-canvas 组件的 onCreateFail 方法，详见文档 https://github.com/chuyun/taro-plugin-canvas#fail');
              }
              onCreateFail && _this.props.onCreateFail(error);
            }
          }
        }
      }, _this.$scope);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CanvasDrawer, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CanvasDrawer.prototype.__proto__ || Object.getPrototypeOf(CanvasDrawer.prototype), "_constructor", this).call(this, props);
      this.state = {
        pxWidth: 0,
        pxHeight: 0,
        debug: false,
        factor: 0
      };
      this.canvasId = (0, _tools.randomString)(10);
      this.ctx = null;
      this.cache = {};
      this.drawArr = [];
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var config = this.props.config;

      var height = (0, _tools.getHeight)(config);
      this.initCanvas(config.width, height, config.debug);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var sysInfo = _index2.default.getSystemInfoSync();
      var screenWidth = sysInfo.screenWidth;
      this.setState({
        factor: screenWidth / 750
      });
      this.onCreate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}

    /**
     * @description rpx => px 基础方法
     * @param { number } rpx - 需要转换的数值
     * @param { boolean} int - 是否为 int
     * @param { number } [factor = this.state.factor] - 转化因子
     * @returns { number }
     */

    /**
     * @description px => rpx
     * @param { number } px - 需要转换的数值
     * @param { boolean} int - 是否为 int
     * @param { number } [factor = this.state.factor] - 转化因子
     * @returns { number }
     */


    /**
     * @description 下载图片并获取图片信息
     * @param  {} image
     * @param  {} index
     */

    /**
     * @param  {} images=[]
     */


    /**
     * @param
     */


    /**
     * @param  {} w
     * @param  {} h
     * @param  {} debug
     */

    /**
     * @param  { boolean }
     */


    /**
     * @param  { object } config
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var canvasId = this.canvasId;
      var _state = this.__state,
          pxWidth = _state.pxWidth,
          pxHeight = _state.pxHeight,
          debug = _state.debug;

      if (pxWidth && pxHeight) {}
      Object.assign(this.__state, {
        canvasId: canvasId
      });
      return this.__state;
    }
  }]);

  return CanvasDrawer;
}(_index.Component), _class.$$events = [], _class.defaultProps = {}, _class.propTypes = {
  config: _index4.default.object.isRequired,
  onCreateSuccess: _index4.default.func.isRequired,
  onCreateFail: _index4.default.func.isRequired
}, _class.$$componentPath = "components/taro-plugin-canvas/index", _temp2);
exports.default = CanvasDrawer;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CanvasDrawer));