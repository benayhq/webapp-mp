import {createAction} from './../../../utils/redux';
import {PRODUCT_PUBLISH_INFO,ACTIVE_CREATE_ACTION,PRODUCT_QUERY_INFO,UPLOAD_FILE_IMAGE,
    ACTION_UPLOAD_CONFIG,
    ACTION_UPLOAD_DOWN,
    UPDATE_USER_INFO,
    ACTION_QRCODE,
    ACTION_ADVERT_DATA,
    ACTION_ACTIVE_NAME,
    ACTION_GROUP_COUNT,
    ACTION_START_TIME,
    ACTION_END_TIME,
    ACTION_PRODUCT_PRICE,
    ACTION_SAVE_UPLOADIMG,
    ACTION_SAVE_TEMPFILES,
    ACTION_WEIXIN_DECRYPT,
    ACTION_GET_USER_INFO,
    ACTION_SERVICE_ADDRESS
    } from './constants';

import {API_PORDUCT_CREATE,API_ACTIVE_CREATE,API_PRODUCT_INFO,API_UPLOAD_FILE,
    API_UPLOAD_CONFIG,
    API_QRCODE,
    API_ADVERT_LIST,
    API_WEIXIN_DECRYPT,
    API_USER_INFO,
    API_GET_USER_INFO
} from './../../../constants/api';

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
});

export const disptachActiveName = payload => {
    return (dispatch) => {
        dispatch({type:ACTION_ACTIVE_NAME,value:payload})
    }
}

export const dispatchGroupCount = payload => {
    return (dispatch) => {
        dispatch({type:ACTION_GROUP_COUNT,value:payload})
    }
}

export const dispatchStartTime = payload => {
    return (dispatch) => {
        dispatch({type:ACTION_START_TIME,value:payload})
    }
}

export const dispatchEndTime = payload => {
    return (dispatch) => {
        dispatch({type:ACTION_END_TIME,value:payload})
    }
}

export const disptachServiceAddress = payload => {
    return (dispatch) => {
        dispatch({type:ACTION_SERVICE_ADDRESS,value:payload})
    }
}

export const dispatchActivePrice = payload => {
    return (dispatch) => {
        dispatch({type:ACTION_PRODUCT_PRICE,value:payload})
    }
}

export const dispatchSaveImg = (payload) => {
    return (dispatch) => {
        dispatch({type:ACTION_SAVE_UPLOADIMG,value:payload})
    }
}

export const dispatchCacheTempFiles = (payload) =>{
    return (dispatch)=>{
        dispatch({type:ACTION_SAVE_TEMPFILES,value:payload})
    }
}

export const dispatchWeixinDecrypt = payload => createAction({
    type: ACTION_WEIXIN_DECRYPT,
    url: API_WEIXIN_DECRYPT,
    fetchOptions:{
        method:'POST'
    },
    payload
});


export const GetUserInfo = payload => createAction({
    type:ACTION_GET_USER_INFO,
    url:API_GET_USER_INFO,
    fetchOptions:{
        method:'POST'
    },
    payload
})
