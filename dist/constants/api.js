'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEVHOST = exports.DEVHOST = 'https://lovemeipin.com:8444/meipin';
// yapi  
var MOOCHOST = exports.MOOCHOST = 'http://yapi.demo.qunar.com/mock/65279';
var DevEnv = exports.DevEnv = true;
var HOST = exports.HOST = DEVHOST;
var API_USER_LOGIN = exports.API_USER_LOGIN = HOST + '/wx/v1/wxuser/wxLogin';
var API_USER_INFO = exports.API_USER_INFO = HOST + '/api/v1/user/update';
var API_USER_AGENT = exports.API_USER_AGENT = HOST + '//api/v1/user/changeToAgent';

// product
var API_PRODUCT_OWNER = exports.API_PRODUCT_OWNER = HOST + '/api/v1/product/owner';
var API_PORDUCT_CREATE = exports.API_PORDUCT_CREATE = HOST + '/api/v1/product/create';
var API_PRODUCT_UPDATE = exports.API_PRODUCT_UPDATE = HOST + '/api/v1/product/update';
var API_PRODUCT_INFO = exports.API_PRODUCT_INFO = HOST + '/api/v1/product/info';

// active
var API_ACTIVE_CREATE = exports.API_ACTIVE_CREATE = HOST + '/api/v1/activity/create';
var API_ACTIVE_INFO = exports.API_ACTIVE_INFO = HOST + '/api/v1/activity/info';
var API_ACTIVE_OWNER = exports.API_ACTIVE_OWNER = HOST + '/api/v1/activity/owner';
var API_ACTIVE_CLOSE = exports.API_ACTIVE_CLOSE = HOST + '/api/v1/activity/close';

// 创建订单
var API_CREATE_ORDER = exports.API_CREATE_ORDER = HOST + '/api/v1/batch/create';
var API_CREATE_RESEVER_ORDER = exports.API_CREATE_RESEVER_ORDER = HOST + '/api/v1/batch/reserve';

// 上传图片
var API_UPLOAD_FILE = exports.API_UPLOAD_FILE = HOST + '/api/v1/document/download/url';

// 获取oss
var API_UPLOAD_CONFIG = exports.API_UPLOAD_CONFIG = HOST + '/api/v1/document/upload/config';