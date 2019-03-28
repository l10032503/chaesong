import axios from 'axios';
import{
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE
} from './ActionType';

export function registerRequest(user_id, pw, birthyear, height, weight, active, vegantype) {
    return (dispatch) =>{
        dispatch(register());

        return axios.post('/api/MemberJoin/signup',{user_id, pw, birthyear, height, weight, active, vegantype})
            .then((response)=>{
                console.log("dispatch register success");
                dispatch(registerSuccess());
            }).catch((error)=>{
                console.log("dispatch register failure");
                dispatch(registerFailure(error.response.data.code));
            });
    };
}

export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS,
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}
