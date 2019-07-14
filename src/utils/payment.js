function WeChatPay(response,callBack){
    wx.requestPayment(
        {
        'timeStamp': response.timeStamp,
        'nonceStr': response.nonceStr,
        'package': 'prepay_id='+response.prepayId,
        'signType': response.signType,
        'paySign': response.paySign,
        'success':function(res){
            callBack('success',res);
        },
        'fail':function(res){
            callBack('fail',res);
        },
        'complete':function(res){
            callBack('complete',res);
        }
    });
}

export {WeChatPay}