const defaultState = {
    userName:''
};

const userReducer = (state = defaultState,action) => {
    switch(action.type) {
        case 'INIT_INFO':
            return state;
        default:
            return state;
    }
}

export default userReducer;