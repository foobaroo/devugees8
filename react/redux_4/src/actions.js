import axios from 'axios';

export const loadData = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    console.log(res);

    dispatch({
        type: 'LOADUSERS',
        payload: res.data
    });
}

/*
function loadData() {
    return function (dispatch) {
        return new Promise(function(resolve, reject) {
            // ... some ajax stuff happens here ...
        });
    }
}
*/

export const incrementX = () => dispatch => {
    dispatch({
        type: 'INCREMENT_X'
    });
}


