import *as types from '../actions/ActionType';

const initialState = {
    status: 'INIT',
    ingredient_names: []
};

export default function search(state = initialState, action) {

    switch(action.type) {
        case types.INGREDIENT_SEARCH:
            return {
                ...state,
                status: 'WAITING'
            }
        case types.INGREDIENT_SEARCH_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                ingredient_names: action.ingredient_names
            }
        case types.INGREDIENT_SEARCH_FAILURE:
            return {
                ...state,
                status: 'FAILURE',
                ingredient_names: []
            }
        default:
            return state;
    }
}
