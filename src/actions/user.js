import {API_USER_LOGIN} from './../constants/api';
import {createAction} from './../utils/redux';
import {WECHAT_LOGIN} from './../constants/user';

export const initWeChat = (value) => ({
    type: WECHAT_LOGIN,
    code: value
});

export const WeChatLogin = payload => createAction({
        type: WECHAT_LOGIN,
        url: API_USER_LOGIN,
        fetchOptions:{
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
        },
        payload
 });

 