'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function WeChatPay(response, callBack) {
  wx.requestPayment({
    'timeStamp': response.timeStamp,
    'nonceStr': response.nonceStr,
    'package': 'prepay_id=' + response.prepayId,
    'signType': response.signType,
    'paySign': response.paySign,
    'success': function success(res) {
      callBack('success', res);
    },
    'fail': function fail(res) {
      callBack('fail', res);
    },
    'complete': function complete(res) {
      callBack('complete', res);
    }
  });
}

exports.WeChatPay = WeChatPay;