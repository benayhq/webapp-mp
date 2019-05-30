import {UPDATE_USER_INFO,WX_USER_LOGIN,USER_AGENT_TRUE} from './constants';
import {createAction} from './../../../utils/redux';
import {API_USER_INFO,API_USER_LOGIN,API_USER_AGENT} from './../../../constants/api';

export const UpdateUserInfo = payload => createAction({
    type:UPDATE_USER_INFO,
    url:API_USER_INFO,
    fetchOptions:{
        method:'POST'
    },
    payload
});

export const WeChatLogin = payload => createAction({
    type:WX_USER_LOGIN,
    url:API_USER_LOGIN,
    fetchOptions:{
        method:'POST',
        contentType:'application/x-www-form-urlencoded'
    },
    payload
});

export const ChangeToAgent = payload => createAction({
    type:USER_AGENT_TRUE,
    url:API_USER_AGENT,
    fetchOptions:{
        method:'POST'
    },
    payload  
})



