"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CheckBox, _BaseComponent);

  function CheckBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "rootCls", "options", "selectedList", "__fn_onChange", "className", "customStyle"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckBox, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CheckBox.prototype.__proto__ || Object.getPrototypeOf(CheckBox.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleClick",
    value: function handleClick(idx) {
      var _props = this.props,
          selectedList = _props.selectedList,
          options = _props.options;

      var option = options[idx];
      var disabled = option.disabled,
          value = option.value;


      if (disabled) {
        return;
      }var seletecdSet = new Set(selectedList);
      if (!seletecdSet.has(value)) {
        seletecdSet.add(value);
      } else {
        seletecdSet.delete(value);
      }

      this.__triggerPropsFn("onChange", [null].concat([[].concat(_toConsumableArray(seletecdSet))]));
    }
  }, {
    key: "handleProductEdit",
    value: function handleProductEdit(id, event) {
      _index2.default.navigateTo({
        url: '/pages/product/edit?productId=' + id
      });
    }
  }, {
    key: "handleProductDelete",
    value: function handleProductDelete(id) {
      this.__triggerPropsFn("onDelete", [null].concat([id]));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props2 = this.__props,
          className = _props2.className,
          customStyle = _props2.customStyle,
          selectedList = _props2.selectedList,
          options = _props2.options,
          onDelete = _props2.onDelete;


      var rootCls = (0, _index4.default)('mp-checkbox', className);

      var anonymousState__temp = (0, _index.internal_inline_style)(customStyle);
      var loopArray0 = options ? options.map(function (option, idx) {
        option = {
          $original: (0, _index.internal_get_original)(option)
        };

        var _option$$original = option.$original,
            value = _option$$original.value,
            disabled = _option$$original.disabled,
            label = _option$$original.label,
            data = _option$$original.data;

        var optionCls = (0, _index4.default)('mp-checkbox__option', {
          'mp-checkbox__option--selected': !selectedList.includes(value)
        });

        return {
          value: value,
          disabled: disabled,
          label: label,
          data: data,
          optionCls: optionCls,
          $original: option.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        rootCls: rootCls,
        options: options
      });
      return this.__state;
    }
  }]);

  return CheckBox;
}(_index.Component), _class.properties = {
  "selectedList": {
    "type": null,
    "value": null
  },
  "options": {
    "type": null,
    "value": null
  },
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "__fn_onDelete": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "customStyle": {
    "type": null,
    "value": null
  },
  "onDelete": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClick", "handleProductEdit", "handleProductDelete"], _temp2);
// CheckBox.defaultProps = {
//     customStyle:'',
//     className:'',
//     data:[],
//     options:[],
//     selectedList:[],
//     onChange () {},
//     delItem (){}
// };

// CheckBox.propTypes = {
//     customStyle: PropTypes.oneOfType([
//         PropTypes.object,
//         PropTypes.string
//     ]),
//     className: PropTypes.oneOfType([
//         PropTypes.array,
//         PropTypes.string
//     ]),
//     data: PropTypes.array,
//     options: PropTypes.array,
//     selectedList: PropTypes.array,
//     onChange: PropTypes.func,
//     delItem:PropTypes.func
// }


exports.default = CheckBox;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CheckBox));