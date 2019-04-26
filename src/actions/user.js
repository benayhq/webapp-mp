import {WECHAT_LOGIN} from './../constants/user';

export const initWeChat = (value) => ({
    type:WECHAT_LOGIN,
    code:value
});

export const WeChatLogin = (value) =>{
    return (dispatch) => {
        const action = initWeChat(value);
        dispatch(action);
    }
}