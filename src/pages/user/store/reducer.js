import * as contants from './constants';

const defaultState = {
    userInfo:{},
    updateUser:{},
    changeAgent:{}
};

export default (state = defaultState,action) => {
    console.log('action.type',action);
    switch(action.type){
        case contants.UPDATE_USER_INFO:
            return {...state,updateUser:action.payload.content}
        case contants.WX_USER_LOGIN:
            return {...state,userInfo:action.payload.content}
        case contants.USER_AGENT_TRUE:
            return {...state,changeAgent:action.payload.content}
        default:
            return state;
    }
}