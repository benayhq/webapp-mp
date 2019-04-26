'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
    var _this = this;

    var url, payload, _options$methed, methed, contentType, header;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = options.url, payload = options.payload, _options$methed = options.methed, methed = _options$methed === undefined ? 'GET' : _options$methed, contentType = options.contentType;
            header = {};

            if (methed === 'POST') {
              header['content-type'] = contentType == '' ? 'application/json' : 'application/x-www-form-urlencoded';
            }
            return _context2.abrupt('return', _index2.default.request({
              url: url,
              method: method,
              data: payload,
              header: header
            }).then(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                var _res$data, code, data;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _res$data = res.data, code = _res$data.code, data = _res$data.data;
                        return _context.abrupt('return', data);

                      case 2:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function fetch(_x) {
    return _ref.apply(this, arguments);
  }

  return fetch;
}();