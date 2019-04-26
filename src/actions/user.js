import {WECHAT_LOGIN} from './../constants/user';
import {API_CHECK_LOGIN} from './../constants/api';
import {createAction} from './../utils/redux';
import {WECHATLOGIIN} from './../constants/user';

export const initWeChat = (value) => ({
    type:WECHAT_LOGIN,
    code:value
});

export const WeChatLogin = payload => createAction({
    url:API_CHECK_LOGIN,
    type:WECHATLOGIIN,
    payload
});
