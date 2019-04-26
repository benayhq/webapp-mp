'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Order = function () {
  function Order() {
    _classCallCheck(this, Order);
  }

  _createClass(Order, [{
    key: 'getStatuInfo',
    value: function getStatuInfo(order) {
      switch (order.status) {
        case "待付款":
          return {
            title: '订单仍未支付',
            tip: '剩余23小时59分自动关闭',
            icon: 'mp-icon mp-icon-order-waitpay success',
            qrCode: false,
            status: 'waitPay',
            assemble: {
              text: '拼团中'
            },
            toolBar: [{
              text: '取消订单',
              event: 'Cancel'
            }, {
              text: '立即支付',
              event: 'Pay'
            }]
          };
        case "":
          return {};
      }
    }
  }, {
    key: 'handleCancelOrder',
    value: function handleCancelOrder() {
      console.log('handleCancelOrder');
    }
  }]);

  return Order;
}();

exports.default = Order;