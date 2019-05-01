'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEVHOST = exports.DEVHOST = 'https://lovemeipin.com:8444/meipin';
// yapi  
var MOCHOST = exports.MOCHOST = 'http://yapi.demo.qunar.com/mock/65279';

var DevEnv = exports.DevEnv = false;

var HOST = exports.HOST = MOCHOST;

var API_USER_LOGIN = exports.API_USER_LOGIN = HOST + '/wx/v1/wxuser/wxLogin';

// product
var API_PRODUCT_OWNER = exports.API_PRODUCT_OWNER = HOST + '/api/v1/product/owner';

var API_PORDUCT_CREATE = exports.API_PORDUCT_CREATE = HOST + '/api/v1/product/create';

var API_PRODUCT_UPDATE = exports.API_PRODUCT_UPDATE = HOST + '/api/v1/product/update';