'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: 'getUserInfo',
    value: function getUserInfo() {
      return {
        userName: 'Shawn',
        level: '普通会员',
        levelText: ''
      };
    }
  }, {
    key: 'getList',
    value: function getList() {
      return [{
        icon: 'mp-user__ordernav-icon mp-icon mp-icon-waittuan',
        text: '待付款'
      }, {
        icon: 'mp-user__ordernav-icon mp-icon mp-icon-waittuan',
        text: '待成团'
      }, {
        icon: 'mp-user__ordernav-icon mp-icon mp-icon-consumption',
        text: '待消费'
      }, {
        icon: 'mp-user__ordernav-icon mp-icon mp-icon-comment',
        text: '待评价'
      }, {
        icon: 'mp-user__ordernav-icon mp-icon mp-icon-refund',
        text: '退款'
      }];
    }
  }, {
    key: 'getPanelList',
    value: function getPanelList() {
      return [{
        icon: 'mp-user__controlpanel-icon mp-icon mp-icon-footer',
        text: '浏览历史',
        url: ''
      }, {
        icon: 'mp-user__controlpanel-icon mp-icon mp-icon-collect',
        text: '我的收藏',
        url: ''
      }, {
        icon: 'mp-user__controlpanel-icon mp-icon mp-icon-people',
        text: '历史咨询师',
        url: ''
      }, {
        icon: 'mp-user__controlpanel-icon mp-icon mp-icon-coupon',
        text: '优惠券',
        url: ''
      }, {
        icon: 'mp-user__controlpanel-icon mp-icon mp-icon-about',
        text: '关于我们',
        url: ''
      }, {
        icon: 'mp-user__controlpanel-icon mp-icon mp-icon-service',
        text: '客户服务',
        url: ''
      }];
    }
  }]);

  return User;
}();

exports.default = User;