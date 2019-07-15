import {PRODUCT_PUBLISH_INFO,ACTION_ACTIVE_NAME,ACTION_GROUP_COUNT, 
    ACTION_START_TIME,ACTION_END_TIME, ACTION_PRODUCT_PRICE,
    ACTION_SAVE_UPLOADIMG,
    ACTION_SAVE_TEMPFILES} from './constants';

const defaultState = {
    product:[],
    activeName:'',
    groupCount:'',
    startTime:'',
    endTime:'',
    activePrice:'',
    imgs:[],
    tempfiles:[]
};

export default (state = defaultState,action) => {
    switch(action.type){
        case PRODUCT_PUBLISH_INFO:
            return {
                ...state,
                product:action.value
            }
        case ACTION_ACTIVE_NAME:
            return {
                ...state,
                activeName:action.value
            }
        case ACTION_GROUP_COUNT:
            return {
                ...state,
                groupCount:action.value
            }
        case ACTION_START_TIME:
            return {
                ...state,
                startTime:action.value            
            }
        case ACTION_END_TIME:
            return {
                ...state,
                endTime:action.value
            }
        case ACTION_PRODUCT_PRICE:
            return {
                ...state,
                activePrice:action.value
            }
        case ACTION_SAVE_UPLOADIMG:
                return {
                    ...state,
                    imgs:action.value
                }
        case ACTION_SAVE_TEMPFILES:
                return {
                    ...state,
                    tempfiles:action.value
                }
        default:
            return state;
    }
}
