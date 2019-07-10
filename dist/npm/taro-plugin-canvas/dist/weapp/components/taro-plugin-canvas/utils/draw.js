'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports._drawRadiusRect = _drawRadiusRect;
exports._getTextWidth = _getTextWidth;
exports._drawSingleText = _drawSingleText;
exports.drawText = drawText;
exports.drawImage = drawImage;
exports.drawLine = drawLine;
exports.drawBlock = drawBlock;
/**
  * @description 绘制圆角矩形
  * @param { object } drawData - 绘制数据
  * @param { number } drawData.x - 左上角x坐标
  * @param { number } drawData.y - 左上角y坐标
  * @param { number } drawData.w - 矩形的宽
  * @param { number } drawData.h - 矩形的高
  * @param { number } drawData.r - 圆角半径
  *
  * @param { object } drawOptions - 绘制对象
  * @param { object } drawOptions.ctx - ctx对象
  * @param { function } drawOptions.toPx - toPx方法
  * @param { function } drawOptions.toRpx - toRpx方法
  */
function _drawRadiusRect(drawData, drawOptions) {
  var x = drawData.x,
      y = drawData.y,
      w = drawData.w,
      h = drawData.h,
      r = drawData.r;
  var ctx = drawOptions.ctx,
      toPx = drawOptions.toPx;

  var br = r / 2;
  ctx.beginPath();
  ctx.moveTo(toPx(x + br), toPx(y)); // 移动到左上角的点
  ctx.lineTo(toPx(x + w - br), toPx(y));
  ctx.arc(toPx(x + w - br), toPx(y + br), toPx(br), 2 * Math.PI * 0.75, 2 * Math.PI * 1);
  ctx.lineTo(toPx(x + w), toPx(y + h - br));
  ctx.arc(toPx(x + w - br), toPx(y + h - br), toPx(br), 0, 2 * Math.PI * 0.25);
  ctx.lineTo(toPx(x + br), toPx(y + h));
  ctx.arc(toPx(x + br), toPx(y + h - br), toPx(br), 2 * Math.PI * 0.25, 2 * Math.PI * 0.5);
  ctx.lineTo(toPx(x), toPx(y + br));
  ctx.arc(toPx(x + br), toPx(y + br), toPx(br), 2 * Math.PI * 0.5, 2 * Math.PI * 0.75);
}

/**
 * @description 计算文本长度
 * @param { Array | Object } text 数组 或者 对象
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 * @param { function } drawOptions.toPx - toPx方法
 * @param { function } drawOptions.toRpx - toRpx方法
 */
function _getTextWidth(text, drawOptions) {
  var ctx = drawOptions.ctx,
      toPx = drawOptions.toPx,
      toRpx = drawOptions.toRpx;

  var texts = [];
  if (Object.prototype.toString.call(text) === '[object Object]') {
    texts.push(text);
  } else {
    texts = text;
  }
  var width = 0;
  // eslint-disable-next-line no-shadow
  texts.forEach(function (_ref) {
    var fontSize = _ref.fontSize,
        text = _ref.text,
        _ref$marginLeft = _ref.marginLeft,
        marginLeft = _ref$marginLeft === undefined ? 0 : _ref$marginLeft,
        _ref$marginRight = _ref.marginRight,
        marginRight = _ref$marginRight === undefined ? 0 : _ref$marginRight;

    ctx.setFontSize(toPx(fontSize));
    width += ctx.measureText(text).width + marginLeft + marginRight;
  });
  return toRpx(width);
}

/**
  * @description 渲染一段文字
  * @param { object } drawData - 绘制数据
  * @param { number } drawData.x - x坐标 rpx
  * @param { number } drawData.y - y坐标 rpx
  * @param { number } drawData.fontSize - 文字大小 rpx
  * @param { number } [drawData.color] - 颜色
  * @param { string } [drawData.baseLine] - 基线对齐方式 top| middle|bottom
  * @param { string } [drawData.textAlign='left'] - 对齐方式 left|center|right
  * @param { string } drawData.text - 当Object类型时，参数为 text 字段的参数，marginLeft、marginRight这两个字段可用
  * @param { number } [drawData.opacity=1] - 1为不透明，0为透明
  * @param { string } [drawData.textDecoration='none']
  * @param { number } [drawData.width] - 文字宽度 没有指定为画布宽度
  * @param { number } [drawData.lineNum=1] - 根据宽度换行，最多的行数
  * @param { number } [drawData.lineHeight=0] - 行高
  * @param { string } [drawData.fontWeight='normal'] - 'bold' 加粗字体，目前小程序不支持 100 - 900 加粗
  * @param { string } [drawData.fontStyle='normal'] - 'italic' 倾斜字体
  * @param { string } [drawData.fontFamily="sans-serif"] - 小程序默认字体为 'sans-serif', 请输入小程序支持的字体
  *
  * @param { object } drawOptions - 绘制对象
  * @param { object } drawOptions.ctx - ctx对象
  * @param { function } drawOptions.toPx - toPx方法
  * @param { function } drawOptions.toRpx - toRpx方法
  */
function _drawSingleText(drawData, drawOptions) {
  var x = drawData.x,
      y = drawData.y,
      fontSize = drawData.fontSize,
      color = drawData.color,
      baseLine = drawData.baseLine,
      _drawData$textAlign = drawData.textAlign,
      textAlign = _drawData$textAlign === undefined ? 'left' : _drawData$textAlign,
      text = drawData.text,
      _drawData$opacity = drawData.opacity,
      opacity = _drawData$opacity === undefined ? 1 : _drawData$opacity,
      _drawData$textDecorat = drawData.textDecoration,
      textDecoration = _drawData$textDecorat === undefined ? 'none' : _drawData$textDecorat,
      width = drawData.width,
      _drawData$lineNum = drawData.lineNum,
      lineNum = _drawData$lineNum === undefined ? 1 : _drawData$lineNum,
      _drawData$lineHeight = drawData.lineHeight,
      lineHeight = _drawData$lineHeight === undefined ? 0 : _drawData$lineHeight,
      _drawData$fontWeight = drawData.fontWeight,
      fontWeight = _drawData$fontWeight === undefined ? 'normal' : _drawData$fontWeight,
      _drawData$fontStyle = drawData.fontStyle,
      fontStyle = _drawData$fontStyle === undefined ? 'normal' : _drawData$fontStyle,
      _drawData$fontFamily = drawData.fontFamily,
      fontFamily = _drawData$fontFamily === undefined ? "sans-serif" : _drawData$fontFamily;
  var ctx = drawOptions.ctx,
      toPx = drawOptions.toPx,
      toRpx = drawOptions.toRpx;

  ctx.save();
  ctx.beginPath();
  ctx.font = fontStyle + " " + fontWeight + " " + toPx(fontSize, true) + "px " + fontFamily;
  ctx.setGlobalAlpha(opacity);
  // ctx.setFontSize(toPx(fontSize));
  ctx.setFillStyle(color);
  ctx.setTextBaseline(baseLine);
  ctx.setTextAlign(textAlign);
  var textWidth = toRpx(ctx.measureText(text).width);
  var textArr = [];
  if (textWidth > width) {
    // 文本宽度 大于 渲染宽度
    var fillText = '';
    var line = 1;
    for (var i = 0; i <= text.length - 1; i++) {
      // 将文字转为数组，一行文字一个元素
      fillText = fillText + text[i];
      if (toRpx(ctx.measureText(fillText).width) >= width) {
        if (line === lineNum) {
          if (i !== text.length - 1) {
            fillText = fillText.substring(0, fillText.length - 1) + '...';
          }
        }
        if (line <= lineNum) {
          textArr.push(fillText);
        }
        fillText = '';
        line++;
      } else {
        if (line <= lineNum) {
          if (i === text.length - 1) {
            textArr.push(fillText);
          }
        }
      }
    }
    textWidth = width;
  } else {
    textArr.push(text);
  }

  textArr.forEach(function (item, index) {
    ctx.fillText(item, toPx(x), toPx(y + (lineHeight || fontSize) * index));
  });
  ctx.restore();
  // textDecoration
  if (textDecoration !== 'none') {
    var lineY = y;
    if (textDecoration === 'line-through') {
      // 目前只支持贯穿线
      lineY = y;
    }
    ctx.save();
    ctx.moveTo(toPx(x), toPx(lineY));
    ctx.lineTo(toPx(x) + toPx(textWidth), toPx(lineY));
    ctx.setStrokeStyle(color);
    ctx.stroke();
    ctx.restore();
  }
  return textWidth;
}

/**
 * 渲染文字
 * @param { object } params - 绘制数据
 * @param { number } params.x - x坐标 rpx
 * @param { number } params.y - y坐标 rpx
 * @param { number } params.fontSize - 文字大小 rpx
 * @param { number } [params.color] - 颜色
 * @param { string } [params.baseLine] - 基线对齐方式 top| middle|bottom
 * @param { string } [params.textAlign='left'] - 对齐方式 left|center|right
 * @param { string } params.text - 当Object类型时，参数为 text 字段的参数，marginLeft、marginRight这两个字段可用
 * @param { number } [params.opacity=1] - 1为不透明，0为透明
 * @param { string } [params.textDecoration='none']
 * @param { number } [params.width] - 文字宽度 没有指定为画布宽度
 * @param { number } [params.lineNum=1] - 根据宽度换行，最多的行数
 * @param { number } [params.lineHeight=0] - 行高
 * @param { string } [params.fontWeight='normal'] - 'bold' 加粗字体，目前小程序不支持 100 - 900 加粗
 * @param { string } [params.fontStyle='normal'] - 'italic' 倾斜字体
 * @param { string } [params.fontFamily="sans-serif"] - 小程序默认字体为 'sans-serif', 请输入小程序支持的字体
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 * @param { function } drawOptions.toPx - toPx方法
 * @param { function } drawOptions.toRpx - toRpx方法
 */
function drawText(params, drawOptions) {
  // const { ctx, toPx, toRpx } = drawOptions;
  var x = params.x,
      y = params.y,
      text = params.text,
      baseLine = params.baseLine;

  if (Object.prototype.toString.call(text) === '[object Array]') {
    var preText = { x: x, y: y, baseLine: baseLine };
    text.forEach(function (item) {
      preText.x += item.marginLeft || 0;
      var textWidth = _drawSingleText(Object.assign(item, _extends({}, preText)), drawOptions);
      preText.x += textWidth + (item.marginRight || 0); // 下一段字的 x 轴为上一段字 x + 上一段字宽度
    });
  } else {
    _drawSingleText(params, drawOptions);
  }
}

/**
 * @description 渲染图片
 * @param { object } data
 * @param { number } x - 图像的左上角在目标 canvas 上 x 轴的位置
 * @param { number } y - 图像的左上角在目标 canvas 上 y 轴的位置
 * @param { number } w - 在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放
 * @param { number } h - 在目标画布上绘制图像的高度，允许对绘制的图像进行缩放
 * @param { number } sx - 源图像的矩形选择框的左上角 x 坐标
 * @param { number } sy - 源图像的矩形选择框的左上角 y 坐标
 * @param { number } sw - 源图像的矩形选择框的宽度
 * @param { number } sh - 源图像的矩形选择框的高度
 * @param { number } [borderRadius=0] - 圆角
 * @param { number } [borderWidth=0] - 边框
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 * @param { function } drawOptions.toPx - toPx方法
 * @param { function } drawOptions.toRpx - toRpx方法
 */
function drawImage(data, drawOptions) {
  var ctx = drawOptions.ctx,
      toPx = drawOptions.toPx;
  var imgPath = data.imgPath,
      x = data.x,
      y = data.y,
      w = data.w,
      h = data.h,
      sx = data.sx,
      sy = data.sy,
      sw = data.sw,
      sh = data.sh,
      _data$borderRadius = data.borderRadius,
      borderRadius = _data$borderRadius === undefined ? 0 : _data$borderRadius,
      _data$borderWidth = data.borderWidth,
      borderWidth = _data$borderWidth === undefined ? 0 : _data$borderWidth,
      borderColor = data.borderColor;

  ctx.save();
  if (borderRadius > 0) {
    var drawData = {
      x: x, y: y, w: w, h: h,
      r: borderRadius
    };
    _drawRadiusRect(drawData, drawOptions);
    ctx.strokeStyle = 'rgba(255,255,255,0)';
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(imgPath, toPx(sx), toPx(sy), toPx(sw), toPx(sh), toPx(x), toPx(y), toPx(w), toPx(h));
    if (borderWidth > 0) {
      ctx.setStrokeStyle(borderColor);
      ctx.setLineWidth(toPx(borderWidth));
      ctx.stroke();
    }
  } else {
    ctx.drawImage(imgPath, toPx(sx), toPx(sy), toPx(sw), toPx(sh), toPx(x), toPx(y), toPx(w), toPx(h));
  }
  ctx.restore();
}

/**
 * @description 渲染线
 * @param  { number } startX - 起始坐标
 * @param  { number } startY - 起始坐标
 * @param  { number } endX - 终结坐标
 * @param  { number } endY - 终结坐标
 * @param  { number } width - 线的宽度
 * @param  { string } [color] - 线的颜色
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 * @param { function } drawOptions.toPx - toPx方法
 * @param { function } drawOptions.toRpx - toRpx方法
 */
function drawLine(drawData, drawOptions) {
  var startX = drawData.startX,
      startY = drawData.startY,
      endX = drawData.endX,
      endY = drawData.endY,
      color = drawData.color,
      width = drawData.width;
  var ctx = drawOptions.ctx,
      toPx = drawOptions.toPx;

  ctx.save();
  ctx.beginPath();
  ctx.setStrokeStyle(color);
  ctx.setLineWidth(toPx(width));
  ctx.moveTo(toPx(startX), toPx(startY));
  ctx.lineTo(toPx(endX), toPx(endY));
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

/**
* @description 渲染块
* @param  { number } x - x坐标
* @param  { number } y - y坐标
* @param  { number } height -高
* @param  { string|object } [text] - 块里面可以填充文字，参考texts字段
* @param  { number } [width=0] - 宽 如果内部有文字，由文字宽度和内边距决定
* @param  { number } [paddingLeft=0] - 内左边距
* @param  { number } [paddingRight=0] - 内右边距
* @param  { number } [borderWidth] - 边框宽度
* @param  { string } [backgroundColor] - 背景颜色
* @param  { string } [borderColor] - 边框颜色
* @param  { number } [borderRadius=0] - 圆角
* @param  { number } [opacity=1] - 透明度
*
* @param { object } drawOptions - 绘制对象
* @param { object } drawOptions.ctx - ctx对象
* @param { function } drawOptions.toPx - toPx方法
* @param { function } drawOptions.toRpx - toRpx方法
*/
function drawBlock(_ref2, drawOptions) {
  var text = _ref2.text,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? 0 : _ref2$width,
      height = _ref2.height,
      x = _ref2.x,
      y = _ref2.y,
      _ref2$paddingLeft = _ref2.paddingLeft,
      paddingLeft = _ref2$paddingLeft === undefined ? 0 : _ref2$paddingLeft,
      _ref2$paddingRight = _ref2.paddingRight,
      paddingRight = _ref2$paddingRight === undefined ? 0 : _ref2$paddingRight,
      borderWidth = _ref2.borderWidth,
      backgroundColor = _ref2.backgroundColor,
      borderColor = _ref2.borderColor,
      _ref2$borderRadius = _ref2.borderRadius,
      borderRadius = _ref2$borderRadius === undefined ? 0 : _ref2$borderRadius,
      _ref2$opacity = _ref2.opacity,
      opacity = _ref2$opacity === undefined ? 1 : _ref2$opacity;
  var ctx = drawOptions.ctx,
      toPx = drawOptions.toPx;
  // 判断是否块内有文字

  var blockWidth = 0; // 块的宽度
  var textX = 0;
  var textY = 0;
  if (typeof text !== 'undefined') {
    // 如果有文字并且块的宽度小于文字宽度，块的宽度为 文字的宽度 + 内边距
    var textWidth = _getTextWidth(typeof text.text === 'string' ? text : text.text, drawOptions);
    blockWidth = textWidth > width ? textWidth : width;
    blockWidth += paddingLeft + paddingLeft;

    var _text$textAlign = text.textAlign,
        textAlign = _text$textAlign === undefined ? 'left' : _text$textAlign;

    textY = height / 2 + y; // 文字的y轴坐标在块中线
    if (textAlign === 'left') {
      // 如果是右对齐，那x轴在块的最左边
      textX = x + paddingLeft;
    } else if (textAlign === 'center') {
      textX = blockWidth / 2 + x;
    } else {
      textX = x + blockWidth - paddingRight;
    }
  } else {
    blockWidth = width;
  }

  if (backgroundColor) {
    // 画面
    ctx.save();
    ctx.setGlobalAlpha(opacity);
    ctx.setFillStyle(backgroundColor);
    if (borderRadius > 0) {
      // 画圆角矩形
      var drawData = {
        x: x, y: y, w: blockWidth, h: height, r: borderRadius
      };
      _drawRadiusRect(drawData, drawOptions);
      ctx.fill();
    } else {
      ctx.fillRect(toPx(x), toPx(y), toPx(blockWidth), toPx(height));
    }
    ctx.restore();
  }
  if (borderWidth) {
    // 画线
    ctx.save();
    ctx.setGlobalAlpha(opacity);
    ctx.setStrokeStyle(borderColor);
    ctx.setLineWidth(toPx(borderWidth));
    if (borderRadius > 0) {
      // 画圆角矩形边框
      var _drawData = {
        x: x, y: y, w: blockWidth, h: height, r: borderRadius
      };
      _drawRadiusRect(_drawData, drawOptions);
      ctx.stroke();
    } else {
      ctx.strokeRect(toPx(x), toPx(y), toPx(blockWidth), toPx(height));
    }
    ctx.restore();
  }

  if (text) {
    drawText(Object.assign(text, { x: textX, y: textY }), drawOptions);
  }
}