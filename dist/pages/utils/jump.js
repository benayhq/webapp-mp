'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jump;

var _index = require('../../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jump(options) {
  var url = options.url,
      _options$payload = options.payload,
      payload = _options$payload === undefined ? {} : _options$payload,
      _options$method = options.method,
      method = _options$method === undefined ? 'navigateTo' : _options$method;


  _index2.default[method]({
    url: urlStringify(url, payload)
  });
}

function urlStringify(url, payload) {
  var encode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


  var arr = Object.keys(payload).map(function (key) {
    return key + '=' + (encode ? encodeURIComponent(payload[key]) : payload[key]);
  });

  return arr.length ? url + '?' + arr.join('&') : url;
}