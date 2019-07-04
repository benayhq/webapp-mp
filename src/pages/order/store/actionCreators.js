import {createAction} from './../../../utils/redux';
import {PRODUCT_QUERY_INFO,CREATE_ORDER,CREATE_RESEVER_ORDER,ORDER_ACTION_UPLOAD_DOWN,
    ORDER_LIST
    ,ACTION_UPLOAD_CONFIG
    ,CREATE_COMMENT_IMAGE
    ,ACTION_ORDER_DETAIL
} from './constants';
import {API_PRODUCT_INFO,API_CREATE_ORDER,API_CREATE_RESEVER_ORDER,API_UPLOAD_FILE,API_ORDER_LIST
    ,API_UPLOAD_CONFIG,API_PUBLISH_COMMENT,API_ORDER_DETAIL
} from './../../../constants/api';

export const dispatchQueryProductInfo = payload => createAction({
    type:PRODUCT_QUERY_INFO,
    url:API_PRODUCT_INFO,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchCreateOrder = payload => createAction({
    type:CREATE_ORDER,
    url:API_CREATE_ORDER,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchCreateReseverOrder = payload => createAction({
    type:CREATE_RESEVER_ORDER,
    url:API_CREATE_RESEVER_ORDER,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchCreateOrderDownLoadUrl = payload =>createAction({
    type: ORDER_ACTION_UPLOAD_DOWN,
    url: API_UPLOAD_FILE,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchOrderList = payload => createAction({
    type:ORDER_LIST,
    url:API_ORDER_LIST,
    fetchOptions:{
        method:'GET'
    },
    payload 
});

export const dispatchUploadConfig = payload => createAction({
    type: ACTION_UPLOAD_CONFIG,
    url: API_UPLOAD_CONFIG,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchCreateComment = payload =>  createAction({
    type: CREATE_COMMENT_IMAGE,
    url: API_PUBLISH_COMMENT,
    fetchOptions:{
        method:'POST'
    },
    payload
});

export const dispatchOrderDetail = payload =>  createAction({
    type: ACTION_ORDER_DETAIL,
    url: API_ORDER_DETAIL,
    fetchOptions:{
       method:'GET'
    },
    payload
});