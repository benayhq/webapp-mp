'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var FILE_BASE_NAME = 'tmp_base64src'; //自定义文件名

function base64src(base64data, cb) {
  var _ref = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [],
      _ref2 = _slicedToArray(_ref, 3),
      format = _ref2[1],
      bodyData = _ref2[2];

  if (!format) {
    return new Error('ERROR_BASE64SRC_PARSE');
  }
  var filePath = wx.env.USER_DATA_PATH + '/' + FILE_BASE_NAME + '.' + format;
  var buffer = wx.base64ToArrayBuffer(bodyData);
  wx.getFileSystemManager().writeFile({
    filePath: filePath,
    data: buffer,
    encoding: 'binary',
    success: function success() {
      cb(filePath);
    },
    fail: function fail() {
      return new Error('ERROR_BASE64SRC_WRITE');
    }
  });
};

exports.base64src = base64src;