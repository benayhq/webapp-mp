"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../constants/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var CODE_SUCCESS = '200';
var CODE_AUTH_EXPIRED = '500';

function getStorage(key) {
  return _index2.default.getStorage({ key: key }).then(function (res) {
    return res.data;
  }).catch(function () {
    return '';
  });
}

function updateStorage() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  console.log('data.content', data);
  _index2.default.setStorage({
    key: 'uid', data: data.content['id'] || ''
  });
}

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
    var _this = this;

    var url, payload, _options$method, method, _options$showToast, showToast, contentType, header;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = options.url, payload = options.payload, _options$method = options.method, method = _options$method === undefined ? 'GET' : _options$method, _options$showToast = options.showToast, showToast = _options$showToast === undefined ? true : _options$showToast, contentType = options.contentType;
            header = {};


            if (method === 'POST') {
              header['content-type'] = contentType ? contentType : 'application/json';
            }

            return _context2.abrupt("return", _index2.default.request({
              url: url,
              method: method,
              data: payload,
              header: header
            }).then(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log('options', res);

                        if (!(url === _api.API_USER_LOGIN)) {
                          _context.next = 4;
                          break;
                        }

                        _context.next = 4;
                        return updateStorage(res.data);

                      case 4:
                        return _context.abrupt("return", res.data);

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()).catch(function (err) {
              console.log('err', err);
              var defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常';

              if (showToast) {
                _index2.default.showToast({
                  title: err.err.errorMsg || defaultMsg,
                  icon: 'none'
                });
              }

              if (err.code === CODE_AUTH_EXPIRED) {
                console.log('CODE_AUTH_EXPIRED');
              }

              return Promise.reject(_extends({ message: defaultMsg }, err));
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function fetch(_x2) {
    return _ref.apply(this, arguments);
  }

  return fetch;
}();