import {ACTION_PRODUCT_LIST,ACTION_PRODUCT_CREATE,ACTION_UPLOAD_DOWN,ACTION_UPLOAD_CONFIG,ACTIVE_INFO_ACTION} from './constants';
import {createAction} from '../../../utils/redux';
import {API_PRODUCT_OWNER,API_PORDUCT_CREATE,API_UPLOAD_FILE,API_UPLOAD_CONFIG,API_ACTIVE_INFO} from '../../../constants/api';

export const dispatchProductList = payload => createAction({
    type:ACTION_PRODUCT_LIST,
    url:API_PRODUCT_OWNER,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchCreateProduct = payload => createAction({
    type:ACTION_PRODUCT_CREATE,
    url:API_PORDUCT_CREATE,
    fetchOptions:{
        method:'POST'
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

export const dispatchDownLoadUrl = payload =>createAction({
    type: ACTION_UPLOAD_DOWN,
    url: API_UPLOAD_FILE,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchActiveInfo = payload => createAction({
    type: ACTIVE_INFO_ACTION,
    url: API_ACTIVE_INFO,
    fetchOptions:{
        method:'GET'
    },
    payload
})

