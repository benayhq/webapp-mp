"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TuanList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(TuanList, _BaseComponent);

  function TuanList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TuanList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TuanList.__proto__ || Object.getPrototypeOf(TuanList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray21", "dialog", "list"], _this.customComponents = ["CountDown"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TuanList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(TuanList.prototype.__proto__ || Object.getPrototypeOf(TuanList.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "showMpDialog",
    value: function showMpDialog() {
      console.log('this.props', this.props);
      this.props.dialog();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var loopArray21 = this.__props.list.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _genCompid = (0, _index.genCompid)(__prefix + "bczzzzzzzz" + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__84 = _genCompid2[0],
            $compid__84 = _genCompid2[1];

        _index.propsManager.set({
          "endTime": item.$original.end
        }, $compid__84, $prevCompid__84);
        return {
          $compid__84: $compid__84,
          $original: item.$original
        };
      });

      Object.assign(this.__state, {
        loopArray21: loopArray21
      });
      return this.__state;
    }
  }]);

  return TuanList;
}(_index.Component), _class.$$events = ["showMpDialog"], _class.$$componentPath = "packageA/pages/product/tuan/index", _temp2);
exports.default = TuanList;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(TuanList));