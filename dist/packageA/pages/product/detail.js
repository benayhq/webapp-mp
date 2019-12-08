"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _style = require("../../utils/style.js");

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _actionCreators = require("./store/actionCreators.js");

var actions = _interopRequireWildcard(_actionCreators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var commentArray = [],
    totalCommentCount = 0,
    pageNumberCount = 0;

var Detail = (_dec = (0, _index3.connect)(function (state) {
  return state;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref, _this$state;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "_$anonymousState__temp2", "data", "loopArray34", "$compid__122", "$compid__123", "$compid__124", "$compid__125", "$compid__126", "$compid__127", "$compid__128", "$compid__129", "bContact", "bSpec", "loaded", "comments", "commentList", "commentText", "isOpened", "categoryDialog", "visible", "showOrderDialog", "bannerList", "activeId", "referId", "source", "isShare", "img", "activityName", "isForwarding", "dispatchActiveInfo", "dispatchCommentInfo", "dispatchDownLoadUrl"], _this.config = {
      navigationBarTitleText: '活动详情'
    }, _this.state = (_this$state = {
      isOpened: false,
      categoryDialog: false,
      visible: false,
      bSpec: true,
      bContact: false,
      showOrderDialog: false,
      data: {},
      commentList: [],
      bannerList: [],
      comments: [],
      activeId: '',
      referId: '',
      source: '',
      commentText: '查看全部评论',
      isShare: false
    }, _defineProperty(_this$state, "referId", 0), _defineProperty(_this$state, "img", ''), _defineProperty(_this$state, "activityName", ''), _defineProperty(_this$state, "isForwarding", false), _defineProperty(_this$state, "loaded", false), _this$state), _this.toggleVisible = function () {
      _this.setState({
        visible: !_this.state.visible
      });
    }, _this.customComponents = ["Contact", "Spec", "Loading", "Gallery", "AtRate", "CountDown", "Share", "Popup", "AtModal", "AtModalContent", "TuanList", "AtModalAction"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "init",
    value: function init() {
      this.initLogin();
    }
  }, {
    key: "initLogin",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAuthInfo();

              case 2:
                user = _context.sent;

                if (!(user && user.id > 0)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                this.autoLogin();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initLogin() {
        return _ref2.apply(this, arguments);
      }

      return initLogin;
    }()
  }, {
    key: "getAuthInfo",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });
                return _context2.abrupt("return", result);

              case 2:
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
    key: "autoLogin",
    value: function autoLogin() {
      var that = this;
      var _state = this.state,
          referId = _state.referId,
          source = _state.source;

      wx.login({
        success: function success(res) {
          var payload = {
            code: res.code,
            referId: referId,
            source: source
          };
          that.props.WeChatLogin(payload).then(function (res) {
            _index2.default.setStorage({ key: 'userinfo', data: res.content });
          });
        }
      });
    }
  }, {
    key: "loadData",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this2 = this;

        var payload, reuslt, commentItemList, bannerItemList;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                payload = {
                  activityId: this.state.activeId
                };
                _context3.next = 3;
                return this.props.dispatchActiveInfo(payload);

              case 3:
                reuslt = _context3.sent;


                console.log('reuslt', reuslt);
                //   this.props.dispatchActiveInfo(payload).then(res=>{
                // console.log('res.content',res.content);
                this.setState({
                  data: reuslt.content
                });
                commentItemList = [];

                //  获取评论图片.

                if (reuslt.content && reuslt.content.commentVo && reuslt.content.commentVo.location.length > 0) {
                  reuslt.content.commentVo.location.map(function (item) {
                    _this2.getImgUrl(item).then(function (responseItem) {
                      console.log('responseItem getImgUrl', responseItem);
                      commentItemList.push(responseItem);
                    }).then(function () {
                      _this2.setState({
                        commentList: commentItemList
                      });
                    });
                  });
                }

                bannerItemList = [];

                // 获取banner 图片.

                if (reuslt.content && reuslt.content.docInfo && reuslt.content.docInfo.length > 0) {
                  reuslt.content.docInfo.map(function (item) {
                    _this2.getImgUrl(item.location).then(function (response) {
                      console.log('response getImgUrl', response);
                      bannerItemList.push(response);
                    }).then(function () {
                      _this2.setState({
                        img: bannerItemList[0],
                        bannerList: bannerItemList,
                        loaded: true
                      });
                    });
                  });
                }
                // });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadData() {
        return _ref4.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initLogin();
      this.loadData();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log('this.$router.params', this.$router.params);
      //  let activeId = this.$router.params.activeId,
      var activeId = this.$router.params.activeId === undefined ? 48 : this.$router.params.activeId,
          referId = this.$router.params.refId === undefined ? 2 : this.$router.params.refId,
          source = this.$router.params.sc === undefined ? "" : this.$router.params.sc; // advert

      if (activeId && referId) {
        // wx.showToast({
        //     title: activeId+referId,
        //     icon: 'success',
        //     duration: 2000
        // });
        activeId = decodeURIComponent(activeId);
        referId = decodeURIComponent(referId);
        source = decodeURIComponent(source);
      };

      // console.log('scene',source);
      this.setState({
        activeId: activeId,
        referId: referId,
        source: source
      });
    }
  }, {
    key: "handleModelClose",
    value: function handleModelClose() {
      this.setState({
        showOrderDialog: false
      });
    }
  }, {
    key: "openDialog",
    value: function openDialog() {
      this.setState({
        visible: true,
        bContact: true,
        bSpec: false,
        showOrderDialog: false
      });
    }
  }, {
    key: "openCategoryDialog",
    value: function openCategoryDialog(status) {
      if (status === 'CLOSE') {
        return;
      }
      this.loadData();
      this.setState({
        isShare: false,
        visible: true,
        bSpec: true,
        bContact: false,
        showOrderDialog: false
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "showMpDialog",
    value: function showMpDialog() {
      this.setState({
        showOrderDialog: true
      });
    }
  }, {
    key: "handleAllComment",
    value: function handleAllComment(data) {
      var _this3 = this;

      var products = [];
      data.activityProducts.map(function (item) {
        products.push(item.productId);
      });
      var payload = {
        pageNo: pageNumberCount,
        pageSize: 10,
        activityProductIds: products
      };
      var that = this;
      totalCommentCount = commentArray.length;
      pageNumberCount++;

      this.props.dispatchCommentInfo(payload).then(function (response) {
        if (response.content.length > 0) {
          response.content.map(function (item, index) {
            commentArray.push(item);
            if (item.docLocations.length > 0) {
              item.docLocations.map(function (img) {
                _this3.getImgUrl(img).then(function (response) {
                  commentArray[index].docLocations = [];
                  commentArray[index].docLocations.push(response);
                });
              });
            }
          });
        };
        if (commentArray.length > 0) {
          setTimeout(function () {
            that.setState({
              comments: commentArray
            });
          }, 1000);
        }
      });

      if (totalCommentCount > 0) {
        setTimeout(function () {
          if (totalCommentCount === commentArray.length) {
            that.setState({
              commentText: '加载完毕'
            });
          }
        }, 1000);
      }
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

      function getImgUrl(_x) {
        return _ref5.apply(this, arguments);
      }

      return getImgUrl;
    }()
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        isShare: false
      });
    }
  }, {
    key: "handleInvertFirend",
    value: function handleInvertFirend() {
      this.setState({
        isShare: true
      });
    }
  }, {
    key: "handleJumpHome",
    value: function handleJumpHome() {
      _index2.default.navigateTo({
        url: "../../../pages/user/index"
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp, _$anonymousState__temp2;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__122"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__122 = _genCompid2[0],
          $compid__122 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__123"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__123 = _genCompid4[0],
          $compid__123 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__124"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__124 = _genCompid6[0],
          $compid__124 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__125"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__125 = _genCompid8[0],
          $compid__125 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__126"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__126 = _genCompid10[0],
          $compid__126 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__127"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__127 = _genCompid12[0],
          $compid__127 = _genCompid12[1];

      var _genCompid13 = (0, _index.genCompid)(__prefix + "$compid__128"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__128 = _genCompid14[0],
          $compid__128 = _genCompid14[1];

      var _genCompid15 = (0, _index.genCompid)(__prefix + "$compid__129"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__129 = _genCompid16[0],
          $compid__129 = _genCompid16[1];

      var loopArray34 = void 0;

      var _state2 = this.__state,
          data = _state2.data,
          commentList = _state2.commentList,
          bannerList = _state2.bannerList,
          activeId = _state2.activeId,
          comments = _state2.comments,
          commentText = _state2.commentText,
          isShare = _state2.isShare,
          img = _state2.img,
          showOrderDialog = _state2.showOrderDialog;

      var height = (0, _style.getWindowHeight)(false);
      var _state3 = this.__state,
          bSpec = _state3.bSpec,
          bContact = _state3.bContact,
          loaded = _state3.loaded;

      var renderTemplate = null;

      var renderProps = null,
          renderTips = null;

      console.log('data', data);

      if (data.remainPeople > 0) {} else {
        renderTips = null;
      }

      if (bContact) {
        _index.propsManager.set({
          "cellphone": data.cellphone,
          "weChatId": data.weChatId,
          "weChatQrCode": data.weChatQrCode
        }, $compid__122, $prevCompid__122);
      } else if (bSpec) {
        _index.propsManager.set({
          "activityName": data.activityName,
          "products": data.activityProducts
        }, $compid__123, $prevCompid__123);
      }

      if (!loaded) {} else {
        _$anonymousState__temp = (0, _index.internal_inline_style)({ height: height });
        _$anonymousState__temp2 = "pages/product/detail?activeId=" + activeId + "&refId=" + data.agentId;
        loopArray34 = data.activityBatchVos && data.activityBatchVos.length > 0 ? data.activityBatchVos.map(function (batch, _anonIdx) {
          batch = {
            $original: (0, _index.internal_get_original)(batch)
          };

          var _genCompid17 = (0, _index.genCompid)(__prefix + "cazzzzzzzz" + _anonIdx, true),
              _genCompid18 = _slicedToArray(_genCompid17, 2),
              $prevCompid__121 = _genCompid18[0],
              $compid__121 = _genCompid18[1];

          data.activityBatchVos && data.activityBatchVos.length > 0 && _index.propsManager.set({
            "endTime": batch.$original.end
          }, $compid__121, $prevCompid__121);
          return {
            $compid__121: $compid__121,
            $original: batch.$original
          };
        }) : [];
        _index.propsManager.set({
          "list": bannerList
        }, $compid__124, $prevCompid__124);
        _index.propsManager.set({
          "value": data.commentScore
        }, $compid__125, $prevCompid__125);
        _index.propsManager.set({
          "isOpened": isShare,
          "path": _$anonymousState__temp2,
          "activeId": activeId,
          "activityName": data.activityName,
          "referId": data.agentId,
          "img": img,
          "onClose": this.handleClose
        }, $compid__126, $prevCompid__126);
        _index.propsManager.set({
          "visible": this.__state.visible,
          "onClose": this.toggleVisible
        }, $compid__127, $prevCompid__127);
        _index.propsManager.set({
          "isOpened": showOrderDialog
        }, $compid__128, $prevCompid__128);
        _index.propsManager.set({
          "dialog": this.openCategoryDialog.bind(this),
          "list": data.activityBatchVos
        }, $compid__129, $prevCompid__129);
      }
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        _$anonymousState__temp2: _$anonymousState__temp2,
        loopArray34: loopArray34,
        $compid__122: $compid__122,
        $compid__123: $compid__123,
        $compid__124: $compid__124,
        $compid__125: $compid__125,
        $compid__126: $compid__126,
        $compid__127: $compid__127,
        $compid__128: $compid__128,
        $compid__129: $compid__129
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class2.$$events = ["showMpDialog", "openCategoryDialog", "handleAllComment", "handleJumpHome", "openDialog", "handleInvertFirend", "handleModelClose"], _class2.multipleSlots = true, _class2.$$componentPath = "packageA/pages/product/detail", _temp2)) || _class);
exports.default = Detail;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));