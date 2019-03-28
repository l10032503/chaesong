import *as types from '../actions/ActionType';

const initialState={
    login: {
        status: 'INIT'
    },
    register: {
        status: 'INIT',
        error: -1
    },
    status: {
        valid: false,
        isLoggedIn: false,
        currentUser: ''
    }
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case types.AUTH_REGISTER:
            console.log('reducer waiting');
            return{
                ...state,
                register: {
                    status: 'WAITING',
                    error: -1
                }
            };
        case types.AUTH_REGISTER_SUCCESS:
            console.log('reducer success');
            return{
                ...state,
                register:{
                    status: 'SUCCESS'
                }
            };
        case types.AUTH_REGISTER_FAILURE:
            console.log('reducer failure');
            return{
                status: 'FAILURE',
                error: action.error
            };
        default:
            return state;
    }
};
