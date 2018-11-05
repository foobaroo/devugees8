const initialState = {
    a: 0,
    b: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT_A':
            return {
                ...state,
                a: state.a + 1
            }
        case 'INCREMENT_B':
            return {
                ...state,
                b: state.b + 1
            }
        default:
            return state;
    }
}