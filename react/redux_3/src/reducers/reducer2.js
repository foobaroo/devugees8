const initialState = {
    b: 0,
    c: 1
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT_B':
            return {
                ...state,
                b: state.b + 2
            }
        case 'INCREMENT_C':
            return {
                ...state,
                c: state.c + 2
            }
        case 'RESET_BC':
            return {
                ...state,
                b: 0,
                c: 1
            }            
        default:
            return state;
    }
}