import {PRODUCT_QUERY_INFO} from './constants';

const defaultState = {
    product:[]
};

export default (state = defaultState,action) => {
    switch(action.type){
        case PRODUCT_QUERY_INFO:
            return {
                ...state,
                product:action.value
            }
        default:
            return state;
    }
}