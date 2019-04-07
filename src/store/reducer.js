import {CHANGE_USER} from './actionTypes';

const defaultState = {
    isAgent:false
};

export default (state = defaultState,action) => {
    if(action.type === CHANGE_USER){
        const newState = JSON.parse(JSON.stringify(state));
        newState.isAgent = action.value;
        return newState;
    }

    return state;
}