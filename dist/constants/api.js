'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEV = exports.DEV = 'https://lovemeipin.com:8444/meipin';

// yapi  
var PROD = exports.PROD = 'https://lovemeipin.com/meipin';

var DevEnv = exports.DevEnv = false;
var HOST = exports.HOST = PROD;
var API_USER_LOGIN = exports.API_USER_LOGIN = HOST + '/wx/v1/wxuser/wxLogin';
var API_USER_INFO = exports.API_USER_INFO = HOST + '/api/v1/user/update';
var API_USER_AGENT = exports.API_USER_AGENT = HOST + '/api/v1/user/changeToAgent';
var API_USER_CUSTOMER = exports.API_USER_CUSTOMER = HOST + '/api/v1/user/changeToCustomer';

// product
var API_PRODUCT_OWNER = exports.API_PRODUCT_OWNER = HOST + '/api/v1/product/owner';
var API_PORDUCT_CREATE = exports.API_PORDUCT_CREATE = HOST + '/api/v1/product/create';
var API_PRODUCT_UPDATE = exports.API_PRODUCT_UPDATE = HOST + '/api/v1/product/update';
var API_PRODUCT_INFO = exports.API_PRODUCT_INFO = HOST + '/api/v1/product/info';

// active
var API_ACTIVE_CREATE = exports.API_ACTIVE_CREATE = HOST + '/api/v1/activity/create';
var API_ACTIVE_INFO = exports.API_ACTIVE_INFO = HOST + '/api/v1/activity/info';
var API_ACTIVE_PRODUCTINFO = exports.API_ACTIVE_PRODUCTINFO = HOST + '/api/v1/activityProduct/info';
var API_ACTIVE_OWNER = exports.API_ACTIVE_OWNER = HOST + '/api/v1/activity/owner';
var API_ACTIVE_CLOSE = exports.API_ACTIVE_CLOSE = HOST + '/api/v1/activity/close';

// 浏览历史
var API_ACTIVE_HISTORY = exports.API_ACTIVE_HISTORY = HOST + '/api/v1/activity/history';
// 创建订单
var API_CREATE_ORDER = exports.API_CREATE_ORDER = HOST + '/api/v1/batch/create';
var API_CREATE_RESEVER_ORDER = exports.API_CREATE_RESEVER_ORDER = HOST + '/api/v1/batch/reserve';
var API_ORDER_LIST = exports.API_ORDER_LIST = HOST + '/api/v1/reservation/myReservation'; // 获取订单列表.

// 上传图片
var API_UPLOAD_FILE = exports.API_UPLOAD_FILE = HOST + '/api/v1/document/download/url';

// 获取oss
var API_UPLOAD_CONFIG = exports.API_UPLOAD_CONFIG = HOST + '/api/v1/document/upload/config';

// 发表评论
var API_PUBLISH_COMMENT = exports.API_PUBLISH_COMMENT = HOST + '/api/v1/comment/create';

// 获取订单详情
var API_ORDER_DETAIL = exports.API_ORDER_DETAIL = HOST + '/api/v1/reservation/info';

// 获取分类
// export const API_PRODUCT_CATEGORY = `${HOST}/v1/project/all`;
// 获取分类(修改版本.)
var API_PRODUCT_CATEGORY = exports.API_PRODUCT_CATEGORY = HOST + '/api/v1/project/query';

// 获取分享
var API_QRCODE = exports.API_QRCODE = HOST + '/api/v1/wx/getwxacodeunlimit';

// 广告预览
var API_ADVERT_LIST = exports.API_ADVERT_LIST = HOST + '/api/v1/activity/advert';

// 获取极光授权信息.
var API_JPUSH_AUTH = exports.API_JPUSH_AUTH = HOST + '/api/v1/im/auth-payload';

// 预支付订单.
var API_PRE_PAY = exports.API_PRE_PAY = HOST + '/api/v1/reservation/prepay';

// 删除产品
var API_DELETE_PRODUCT = exports.API_DELETE_PRODUCT = HOST + '/api/v1/product/delete';

// 初始化收益
var API_INIT_AMOUNT = exports.API_INIT_AMOUNT = HOST + '/api/v1/reservation/plan';

// 累计成单信息量
var API_ORDER_COUNT = exports.API_ORDER_COUNT = HOST + '/api/v1/reservation/count';

// 贷款开关
var API_LOAN_INFO = exports.API_LOAN_INFO = HOST + '/v1/user/daichao';

// 客户服务
var API_CUSTOMER_INFO = exports.API_CUSTOMER_INFO = HOST + '/api/v1/agent-customer/customers';

// 历史咨询师
var API_WATER_HISTORY = exports.API_WATER_HISTORY = HOST + '/api/v1/agent-customer/agents';

// 我的活动
// export const API_ACTIVE_OWNER = `${HOST}/api/v1/activity/owner`;

// 查询所有评论. 
var API_PRODUCT_COMMNET = exports.API_PRODUCT_COMMNET = HOST + '/api/v1/comment/paging';

// 微信解密信息.
var API_WEIXIN_DECRYPT = exports.API_WEIXIN_DECRYPT = HOST + '/api/v1/wx/wxDecrypt';

// 获取用户信息.
var API_GET_USER_INFO = exports.API_GET_USER_INFO = HOST + '/api/v1/user/info';

// 创建新用户
var API_CREATE_NEW_USER = exports.API_CREATE_NEW_USER = HOST + '/v1/user/create';