export const DEVHOST = 'https://lovemeipin.com:8444/meipin';
// yapi  
export const MOOCHOST = 'http://yapi.demo.qunar.com/mock/65279';
export const DevEnv = true;
export const HOST = DevEnv ? DEVHOST : MOOCHOST;
export const API_USER_LOGIN = `${HOST}/wx/v1/wxuser/wxLogin`;
export const API_USER_INFO = `${HOST}/api/v1/user/update`;
export const API_USER_AGENT = `${HOST}//api/v1/user/changeToAgent`;

// product
export const API_PRODUCT_OWNER = `${HOST}/api/v1/product/owner`;
export const API_PORDUCT_CREATE = `${HOST}/api/v1/product/create`;
export const API_PRODUCT_UPDATE = `${HOST}/api/v1/product/update`;
export const API_PRODUCT_INFO = `${HOST}/api/v1/product/info`;

// active
export const API_ACTIVE_CREATE = `${HOST}/api/v1/activity/create`;
export const API_ACTIVE_INFO = `${HOST}/api/v1/activity/info`;
export const API_ACTIVE_OWNER = `${HOST}/api/v1/activity/owner`;
export const API_ACTIVE_CLOSE = `${HOST}/api/v1/activity/close`;


// 创建订单
export const API_CREATE_ORDER = `${HOST}/api/v1/batch/create`;
export const API_CREATE_RESEVER_ORDER = `${HOST}/api/v1/batch/reserve`;

// 上传图片
export const API_UPLOAD_FILE = `${HOST}/api/v1/document/download/url`;

// 获取oss
export const API_UPLOAD_CONFIG = `${HOST}/api/v1/document/upload/config`;