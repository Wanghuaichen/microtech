import axios from 'axios';

const initialState = {
    user: {}
}

const GET_USER_INFO = 'GET_USER_INFO'
const ALERT_ACTION = "ALERT_ACTION"

// function mapDispatchToProps(dispatch) {
//     return({
//         sendAlert: () => {dispatch(ALERT_ACTION)}
//     })
// }

export function sendAlert() {
    return dispatch => {
        console.log('dispatch')
            dispatch({
                type: ALERT_ACTION,
                payload: dispatch
            })
        }
}

export function getUserInfo(){
    const user = axios.get('/auth/me').then( res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}