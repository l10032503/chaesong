import * as types from '../actions/ActionType';

const initialState = {
    status: 'INIT',
    searchWord: []
};

export default function search(state = initialState, action) {
    switch (action.type) {
        case types.RECIPE_SEARCH:
            console.log('search reducers waiting');
            console.log(initialState.status);
            return{
                ...state,
                status: 'WAITING'
            }
        case types.RECIPE_SEARCH_SUCCESS:
            console.log('search reducers success');
            return{
                ...state,
                status: 'SUCCESS',
                searchWord: action.searchWord
            }
        case types.RECIPE_SEARCH_FAILURE:
            console.log('search reducers failure');
            return{
                ...state,
                status: 'FAILURE',
                searchWord: []
            }
        default:
            return state;
    }
}