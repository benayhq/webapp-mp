import {ACTION_PRODUCT_LIST,ACTION_PRODUCT_CREATE} from './constants';

const defaultState = {
    productList:[],
    createProduct:{}
};

export default (state = defaultState,action) => {
    switch(action.type){
        case ACTION_PRODUCT_LIST:
            return {
                ...state,
                productList:action.value
            }
        case ACTION_PRODUCT_CREATE:
            return {
                ...state,
                createProduct:action.value
            }
        default:
            return state;
    }
}