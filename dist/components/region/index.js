"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _region = require("./region.js");

var _region2 = _interopRequireDefault(_region);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Region = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Region, _BaseComponent);

  function Region() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Region);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Region.__proto__ || Object.getPrototypeOf(Region)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["region", "range", "value", "list"], _this.state = {
      region: '请选择省市区',
      // H5、微信小程序、百度小程序、字节跳动小程序
      range: [],
      value: [0, 0, 0],
      // 支付宝小程序
      list: []
    }, _this.onChange = function (e) {
      var regionTemp = _this.state.region;
      var rangeTemp = _this.state.range;
      var valueTemp = _this.state.value;

      valueTemp = e.detail.value;
      regionTemp = rangeTemp[0][valueTemp[0]] + '/' + rangeTemp[1][valueTemp[1]] + '/' + rangeTemp[2][valueTemp[2]];

      var regionStr = regionTemp,
          regionArr = regionStr.split('/'),
          cacheValue = "";
      if (regionArr[0] === "全部") {
        cacheValue = "";
      } else {
        cacheValue = regionArr[0];
      }
      if (regionArr[1] === "全部") {
        cacheValue = cacheValue;
      } else {
        cacheValue += '/' + regionArr[1];
      }
      if (regionArr[2] === "全部") {
        cacheValue = cacheValue;
      } else {
        cacheValue += '/' + regionArr[2];
      }
      _this.setState({
        region: cacheValue,
        range: rangeTemp,
        value: valueTemp
      }, function () {
        _this.props.onGetRegion(_this.state.region);
      });
    }, _this.onColumnChange = function (e) {

      console.log('onColumnChange');
      var rangeTemp = _this.state.range;
      var valueTemp = _this.state.value;

      var column = e.detail.column;
      var row = e.detail.value;
      valueTemp[column] = row;

      switch (column) {
        case 0:
          var cityTemp = [];
          var districtAndCountyTemp = [];
          for (var i = 0; i < _region2.default[row].city.length; i++) {
            cityTemp.push(_region2.default[row].city[i].name);
          }
          for (var _i = 0; _i < _region2.default[row].city[0].districtAndCounty.length; _i++) {
            districtAndCountyTemp.push(_region2.default[row].city[0].districtAndCounty[_i]);
          }
          valueTemp[1] = 0;
          valueTemp[2] = 0;
          rangeTemp[1] = cityTemp;
          rangeTemp[2] = districtAndCountyTemp;
          break;
        case 1:
          var districtAndCountyTemp2 = [];
          for (var _i2 = 0; _i2 < _region2.default[valueTemp[0]].city[row].districtAndCounty.length; _i2++) {
            districtAndCountyTemp2.push(_region2.default[valueTemp[0]].city[row].districtAndCounty[_i2]);
          }
          valueTemp[2] = 0;
          rangeTemp[2] = districtAndCountyTemp2;
          break;
        case 2:
          break;
      }

      _this.setState({
        range: rangeTemp,
        value: valueTemp
      });
    }, _this.onClick = function () {
      var temp = _this.state.region;
      my.multiLevelSelect({
        list: _this.state.list,
        success: function success(result) {
          if (result.success) {
            temp = result.result[0].name + '/' + result.result[1].name + '/' + result.result[2].name;
            _this.setState({
              region: temp
            }, function () {
              _this.props.onGetRegion(_this.state.region);
            });
          }
        }
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Region, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Region.prototype.__proto__ || Object.getPrototypeOf(Region.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // 省市区选择器初始化
      // H5、微信小程序、百度小程序、字节跳动小程序
      var range = this.state.range;
      var temp = [];
      for (var i = 0; i < _region2.default.length; i++) {
        temp.push(_region2.default[i].name);
      }
      range.push(temp);
      temp = [];
      for (var _i3 = 0; _i3 < _region2.default[0].city.length; _i3++) {
        temp.push(_region2.default[0].city[_i3].name);
      }
      range.push(temp);
      temp = [];
      for (var _i4 = 0; _i4 < _region2.default[0].city[0].districtAndCounty.length; _i4++) {
        temp.push(_region2.default[0].city[0].districtAndCounty[_i4]);
      }
      range.push(temp);
      this.setState({
        range: range
      });

      // 支付宝小程序
      var list = this.state.list;
      for (var _i5 = 0; _i5 < _region2.default.length; _i5++) {
        var proviceTemp = Object.create(null);
        proviceTemp.name = _region2.default[_i5].name;
        proviceTemp.subList = [];
        for (var j = 0; j < _region2.default[_i5].city.length; j++) {
          var cityTemp = Object.create(null);
          cityTemp.name = _region2.default[_i5].city[j].name;
          cityTemp.subList = [];
          for (var k = 0; k < _region2.default[_i5].city[j].districtAndCounty.length; k++) {
            var districtAndCountyTemp = Object.create(null);
            districtAndCountyTemp.name = _region2.default[_i5].city[j].districtAndCounty[k];
            cityTemp.subList.push(districtAndCountyTemp);
          }
          proviceTemp.subList.push(cityTemp);
        }
        list.push(proviceTemp);
      }
      this.setState({
        list: list
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
                _context.next = 2;
                return _index2.default.getStorage({ key: 'userinfo' }).then(function (res) {
                  return res.data;
                });

              case 2:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 4:
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initData();
    }
  }, {
    key: "initData",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAuthInfo();

              case 2:
                response = _context2.sent;

                this.setState({
                  region: response.areaCode === "" ? "请选择省市区" : response.areaCode,
                  value: [6, 0, 0]
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initData() {
        return _ref3.apply(this, arguments);
      }

      return initData;
    }()

    // H5、微信小程序、百度小程序、字节跳动小程序


    // 支付宝小程序

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Region;
}(_index.Component), _class.$$events = ["onChange", "onColumnChange"], _class.$$componentPath = "components/region/index", _temp2);
exports.default = Region;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Region));