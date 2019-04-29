import {WECHAT_LOGIN} from './../constants/user';

const INITIAL_STATE = {
    userInfo:{}
};

const userReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case WECHAT_LOGIN:
            return {
                ...state,
                userInfo:{
                    ...action.payload,
                    login:true
                }
            }
        default:
            return state;
    }
}

export default userReducer;