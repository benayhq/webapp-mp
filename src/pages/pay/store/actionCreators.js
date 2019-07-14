import {createAction} from './../../../utils/redux';
import {PAY_PRE} from './constants';
import {API_PRE_PAY} from './../../../constants/api';

export const dispatchPrePay = payload => createAction({
    type:PAY_PRE,
    url:API_PRE_PAY+`?id=${payload.id}`,
    fetchOptions:{
        method:'POST'
    }
});