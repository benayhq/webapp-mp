"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _jump = require("../../utils/jump.js");

var _jump2 = _interopRequireDefault(_jump);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _index4 = require("../store/index.js");

var actions = _interopRequireWildcard(_index4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Info, _BaseComponent);

  function Info() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Info);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Info.__proto__ || Object.getPrototypeOf(Info)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["avatarUrl", "userName", "isAgent"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Info, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Info.prototype.__proto__ || Object.getPrototypeOf(Info.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        avatarUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559209366699&di=07cc06c3fdf4cbac5d814dca9cd680b5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa12f24e688c1cda3ff4cc453f3486a88adaf08cc2cdb-tQvJqX_fw658',
        userName: ''
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      var that = this;
      _index2.default.getStorage({ key: 'authinfo' }).then(function (res) {
        console.log('res.data.avatarUrl', res.data.avatarUrl);
        that.setState({
          avatarUrl: res.data.avatarUrl,
          userName: res.data.nickName
        });
      });
    }
  }, {
    key: "jumpUrl",
    value: function jumpUrl(url) {
      (0, _jump2.default)({ url: url });
    }
  }, {
    key: "onGetUserInfo",
    value: function onGetUserInfo() {
      var _this2 = this;

      var currentObj = this;

      _index2.default.getUserInfo().then(function (response) {
        var errMsg = response.errMsg,
            userInfo = response.userInfo;


        currentObj.setState({
          userinfo: response.rawData
        }, function () {
          console.log('this.state', _this2.state.userinfo);
        });
        if (errMsg === 'getUserInfo:ok') {
          var payload = {
            id: 39
          };
        } else {
          _index2.default.showToast({
            title: '授权失败',
            icon: 'none'
          });
        }
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
          avatarUrl = _state.avatarUrl,
          userName = _state.userName;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Info;
}(_index.Component), _class2.properties = {
  "isAgent": {
    "type": null,
    "value": null
  }
}, _class2.$$events = [], _temp2)) || _class);
exports.default = Info;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Info));