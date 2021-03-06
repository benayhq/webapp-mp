import {ACTION_PRODUCT_LIST,ACTION_PRODUCT_CREATE,
    ACTION_UPLOAD_DOWN,ACTION_UPLOAD_CONFIG,ACTIVE_INFO_ACTION,
ACTION_PRODUCT_CATEOGRY,ACTION_SELECT_PRODUCT,WX_USER_LOGIN,
UPDATE_USER_INFO,ACTION_PRODUCT_DELETE,PRODUCT_QUERY_INFO,ACTION_PRODUCT_INFO
,API_ACTIVE_PRODUCTINFO,ACTION_PRODUCT_COMMENT
} from './constants';
import {createAction} from '../../../utils/redux';
import {
    API_PRODUCT_OWNER,API_PORDUCT_CREATE,API_UPLOAD_FILE,API_UPLOAD_CONFIG,API_ACTIVE_INFO
    ,API_PRODUCT_CATEGORY
    ,API_USER_LOGIN
    ,API_USER_INFO
    ,API_DELETE_PRODUCT
    ,API_PRODUCT_INFO,
    API_PRODUCT_UPDATE
    ,API_PRODUCT_COMMNET
} from '../../../constants/api';

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

export const dispatchCategoryList = payload => createAction({
    type: ACTION_PRODUCT_CATEOGRY,
    url: API_PRODUCT_CATEGORY,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchSelectProduct = (payload)=>{
    return (dispatch) => {
        dispatch({type:ACTION_SELECT_PRODUCT,value:payload})
     }
}

export const WeChatLogin = payload => createAction({
    type:WX_USER_LOGIN,
    url:API_USER_LOGIN,
    fetchOptions:{
        method:'POST',
        contentType:'application/x-www-form-urlencoded'
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

export const dispatchDeleteProduct = (payload) => createAction({
    type:ACTION_PRODUCT_DELETE,
    url:API_DELETE_PRODUCT+`?productId=`+payload.productId,
    fetchOptions:{
        method:'POST'
    },
    payload
})

export const dispatchQueryProductInfo = payload => createAction({
    type:PRODUCT_QUERY_INFO,
    url:API_PRODUCT_INFO,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchUpdateProductInfo = payload =>  createAction({
    type:ACTION_PRODUCT_INFO,
    url:API_PRODUCT_UPDATE,
    fetchOptions:{
        method:'POST'
    },
    payload
});

export const dispatchCommentInfo = payload =>  createAction({
    type:ACTION_PRODUCT_COMMENT,
    url:API_PRODUCT_COMMNET+`?pageNo=`+payload.pageNo+`&pageSize=`+payload.pageSize,
    fetchOptions:{
        method:'POST'
    },
    payload
});


