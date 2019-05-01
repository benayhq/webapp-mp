import {createAction} from './../utils/redux';
import {PRODUCT_OWNER} from './../constants/product';
import {API_PRODUCT_OWNER} from './../constants/api';

export const GetProdcutList = payload => createAction({
    type:PRODUCT_OWNER,
    url:API_PRODUCT_OWNER,
    payload
});
