import {createAction} from './../../../utils/redux';
import {PRODUCT_QUERY_INFO,CREATE_ORDER,CREATE_RESEVER_ORDER,ORDER_ACTION_UPLOAD_DOWN} from './constants';
import {API_PRODUCT_INFO,API_CREATE_ORDER,API_CREATE_RESEVER_ORDER,API_UPLOAD_FILE
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

