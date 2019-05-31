import {createAction} from './../../../utils/redux';
import {PRODUCT_PUBLISH_INFO} from './constants';
import {API_PORDUCT_CREATE} from './../../../constants/api';

export const dispatchPublishProduct = payload => createAction({
    type:PRODUCT_PUBLISH_INFO,
    url:API_PORDUCT_CREATE,
    fetchOptions:{
        method:'POST'
    },
    payload
});