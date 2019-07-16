export const DEV = 'https://lovemeipin.com:8444/meipin';
// yapi  
export const PROD = 'https://lovemeipin.com/meipin';
export const DevEnv = false;
export const HOST = DevEnv ? DEV : PROD;
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
export const API_ORDER_LIST = `${HOST}/api/v1/reservation/myReservation`; // 获取订单列表.

// 上传图片
export const API_UPLOAD_FILE = `${HOST}/api/v1/document/download/url`;

// 获取oss
export const API_UPLOAD_CONFIG = `${HOST}/api/v1/document/upload/config`;

// 发表评论
export const API_PUBLISH_COMMENT = `${HOST}/api/v1/comment/create`;

// 获取订单详情
export const API_ORDER_DETAIL = `${HOST}/api/v1/reservation/info`;

// 获取分类
export const API_PRODUCT_CATEGORY = `${HOST}/v1/project/all`;

// 获取分享
export const API_QRCODE = `${HOST}/api/v1/wx/getwxacodeunlimit`;

// 广告预览
export const API_ADVERT_LIST =  `${HOST}/api/v1/activity/advert`;

// 获取极光授权信息.
export const API_JPUSH_AUTH = `${HOST}/api/v1/im/auth-payload`;

// 预支付订单.
export const API_PRE_PAY = `${HOST}/api/v1/reservation/prepay`;

// 删除产品
export const API_DELETE_PRODUCT = `${HOST}/api/v1/product/delete`;