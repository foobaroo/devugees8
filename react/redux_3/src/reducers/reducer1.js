import randomstring from 'randomstring';

const initialState = {
    a: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GENERATE_RANDOMSTRING':
            return {
                ...state,
                a: randomstring.generate(10)
            }
        default:
            return state;
    }
}