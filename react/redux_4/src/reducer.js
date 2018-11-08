const initialState = {
    x: 0,
    users: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADUSERS':
            return {
                ...state,
                users: action.payload
            }
        case 'INCREMENT_X':
            return {
                ...state,
                x: state.x + 1
            }            
    }
    return state;
}

export default reducer;