import {createAction} from './../../../utils/redux';
import {PRODUCT_PUBLISH_INFO,ACTIVE_CREATE_ACTION,PRODUCT_QUERY_INFO,UPLOAD_FILE_IMAGE,
    ACTION_UPLOAD_CONFIG,
    ACTION_UPLOAD_DOWN,
    UPDATE_USER_INFO,
    ACTION_QRCODE,
    ACTION_ADVERT_DATA
    } from './constants';
import {API_PORDUCT_CREATE,API_ACTIVE_CREATE,API_PRODUCT_INFO,API_UPLOAD_FILE,
    API_UPLOAD_CONFIG,
    API_USER_INFO,
    API_QRCODE,
    API_ADVERT_LIST} from './../../../constants/api';

export const dispatchPublishProduct = payload => createAction({
    type:PRODUCT_PUBLISH_INFO,
    url:API_PORDUCT_CREATE,
    fetchOptions:{
        method:'POST'
    },
    payload
});

export const UpdateUserInfo = payload => createAction({
    type:UPDATE_USER_INFO,
    url:API_USER_INFO,
    fetchOptions:{
        method:'POST'
    },
    payload
});

export const dispatchCreateActive = payload => createAction({
    type:ACTIVE_CREATE_ACTION,
    url:API_ACTIVE_CREATE,
    fetchOptions:{
        method:'POST'
    },
    payload
});

export const dispatchQueryProductInfo = payload => createAction({
    type:PRODUCT_QUERY_INFO,
    url:API_PRODUCT_INFO,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchUploadFile = payload =>  createAction({
    type:UPLOAD_FILE_IMAGE,
    url:API_UPLOAD_FILE,
    fetchOptions:{
        method:'GET'
    },
    payload
})

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

export const dispatchQueryQrCode = payload =>createAction({
    type: ACTION_QRCODE,
    url: API_QRCODE,
    fetchOptions:{
        method:'POST'
    },
    payload
});

export const dispatchAdvertQuery = payload => createAction({
    type: ACTION_ADVERT_DATA,
    url: API_ADVERT_LIST,
    fetchOptions:{
        method:'GET'
    },
    payload
})



