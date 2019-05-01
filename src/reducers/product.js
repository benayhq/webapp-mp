import {PRODUCT_OWNER} from './../constants/product';

const INITIAL_STATE = {
    productList:[]
}

const productReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case PRODUCT_OWNER:
            return {
                ...state,
                productList: action.payload
            };
        default:
            return state;
    }
}

export default productReducer;