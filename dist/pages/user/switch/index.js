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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangeUser = (_dec = (0, _index3.connect)(function (state) {
  return state.user;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(ChangeUser, _BaseComponent);

  function ChangeUser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChangeUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChangeUser.__proto__ || Object.getPrototypeOf(ChangeUser)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["isAgent", "showUserText", "userInfo", "ChangeToAgent"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChangeUser, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ChangeUser.prototype.__proto__ || Object.getPrototypeOf(ChangeUser.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isAgent: false,
        showUserText: '切换为咨询师'
      };
      this.bindEvent();
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      console.log('ChangeUser props', this.props.userInfo);
      var role = this.props.userInfo.role;

      this.setState({
        isAgent: role === "CUSTOMER" ? false : true,
        showUserText: role === "CUSTOMER" ? '切换为咨询师' : '切换为用户'
      });
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      this.handleChangeState = this.handleChangeState.bind(this);
    }
  }, {
    key: "handleChangeState",
    value: function handleChangeState() {
      this.props.ChangeToAgent({});
      var role = this.props.userInfo.role;

      this.setState({
        isAgent: role === "CUSTOMER" ? false : true,
        showUserText: role === "CUSTOMER" ? '切换为咨询师' : '切换为用户'
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return ChangeUser;
}(_index.Component), _class2.properties = {
  "userInfo": {
    "type": null,
    "value": null
  },
  "ChangeToAgent": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleChangeState"], _temp2)) || _class);
exports.default = ChangeUser;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ChangeUser));