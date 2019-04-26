import {WECHAT_LOGIN} from './../constants/user';

const defaultState = {
    code:'shawn'
};

const userReducer = (state = defaultState,action) => {
    switch(action.type) {
        case WECHAT_LOGIN:
            return [
                ...state,{
                    code:action.code
                }
            ];
        default:
            return state;
    }
}

export default userReducer;