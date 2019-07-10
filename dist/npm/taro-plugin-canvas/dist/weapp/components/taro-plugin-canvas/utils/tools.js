'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.randomString = randomString;
exports.getHeight = getHeight;
exports.mapHttpToHttps = mapHttpToHttps;
exports.downImage = downImage;
exports.getImageInfo = getImageInfo;
exports.downloadImageAndInfo = downloadImageAndInfo;

var _index = require('../../../../../../@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description 生成随机字符串
 * @param  { number } length - 字符串长度
 * @returns { string }
 */
function randomString(length) {
  var str = Math.random().toString(36).substr(2);
  if (str.length >= length) {
    return str.substr(0, length);
  }
  str += randomString(length - str.length);
  return str;
}

/**
 * @description 获取最大高度
 * @param  {} config
 * @returns { number }
 */
function getHeight(config) {
  var getTextHeight = function getTextHeight(text) {
    var fontHeight = text.lineHeight || text.fontSize;
    var height = 0;
    if (text.baseLine === 'top') {
      height = fontHeight;
    } else if (text.baseLine === 'middle') {
      height = fontHeight / 2;
    } else {
      height = 0;
    }
    return height;
  };
  var heightArr = [];
  (config.blocks || []).forEach(function (item) {
    heightArr.push(item.y + item.height);
  });
  (config.texts || []).forEach(function (item) {
    var height = void 0;
    if (Object.prototype.toString.call(item.text) === '[object Array]') {
      item.text.forEach(function (i) {
        height = getTextHeight(_extends({}, i, { baseLine: item.baseLine }));
        heightArr.push(item.y + height);
      });
    } else {
      height = getTextHeight(item);
      heightArr.push(item.y + height);
    }
  });
  (config.images || []).forEach(function (item) {
    heightArr.push(item.y + item.height);
  });
  (config.lines || []).forEach(function (item) {
    heightArr.push(item.startY);
    heightArr.push(item.endY);
  });
  var sortRes = heightArr.sort(function (a, b) {
    return b - a;
  });
  var canvasHeight = 0;
  if (sortRes.length > 0) {
    canvasHeight = sortRes[0];
  }
  if (config.height < canvasHeight || !config.height) {
    return canvasHeight;
  } else {
    return config.height;
  }
}

/**
 * 将http转为https
 * @param {String}} rawUrl 图片资源url
 * @returns { string }
 */
function mapHttpToHttps(rawUrl) {
  if (rawUrl.indexOf(':') < 0) {
    return rawUrl;
  }
  var urlComponent = rawUrl.split(':');
  if (urlComponent.length === 2) {
    if (urlComponent[0] === 'http') {
      urlComponent[0] = 'https';
      return urlComponent[0] + ':' + urlComponent[1];
    }
  }
  return rawUrl;
}

/**
 * 下载图片资源
 * @param { string } imageUrl
 * @returns  { Promise }
 */
function downImage(imageUrl) {
  return new Promise(function (resolve, reject) {
    if (/^http/.test(imageUrl) && !new RegExp(wx.env.USER_DATA_PATH).test(imageUrl)) {
      _index2.default.downloadFile({
        // url: (imageUrl),
        // TODO
        url: mapHttpToHttps(imageUrl),
        success: function success(res) {
          if (res.statusCode === 200) {
            resolve(res.tempFilePath);
          } else {
            reject(res.errMsg);
          }
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    } else {
      // 支持本地地址
      resolve(imageUrl);
    }
  });
}

/**
 * 获取图片信息
 * @param {*} imgPath
 * @param {*} index
 * @returns  { Promise }
 */
function getImageInfo(imgPath, index) {
  return new Promise(function (resolve, reject) {
    _index2.default.getImageInfo({
      src: imgPath,
      success: function success(res) {
        resolve({ imgPath: imgPath, imgInfo: res, index: index });
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}

/**
* @description 下载图片并获取图片信息
* @param  {} image
* @param  {} index
* @returns  { Promise }
*/
function downloadImageAndInfo(image, index, toRpxFunc) {
  return new Promise(function (resolve, reject) {
    var x = image.x,
        y = image.y,
        url = image.url,
        zIndex = image.zIndex;

    var imageUrl = url;
    // 下载图片
    downImage(imageUrl, index)
    // 获取图片信息
    .then(function (imgPath) {
      return getImageInfo(imgPath, index);
    }).then(function (_ref) {
      var imgPath = _ref.imgPath,
          imgInfo = _ref.imgInfo;

      // 根据画布的宽高计算出图片绘制的大小，这里会保证图片绘制不变形
      var sx = void 0;
      var sy = void 0;
      var borderRadius = image.borderRadius || 0;
      var setWidth = image.width;
      var setHeight = image.height;
      var width = toRpxFunc(imgInfo.width);
      var height = toRpxFunc(imgInfo.height);

      if (width / height <= setWidth / setHeight) {
        sx = 0;
        sy = (height - width / setWidth * setHeight) / 2;
      } else {
        sy = 0;
        sx = (width - height / setHeight * setWidth) / 2;
      }
      var result = {
        type: 'image',
        borderRadius: borderRadius,
        borderWidth: image.borderWidth,
        borderColor: image.borderColor,
        zIndex: typeof zIndex !== 'undefined' ? zIndex : index,
        imgPath: imgPath,
        sx: sx,
        sy: sy,
        sw: width - sx * 2,
        sh: height - sy * 2,
        x: x,
        y: y,
        w: setWidth,
        h: setHeight
      };
      resolve(result);
    }).catch(function (err) {
      console.log(err);
      reject(err);
    });
  });
}