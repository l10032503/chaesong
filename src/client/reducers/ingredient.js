import *as types from '../actions/ActionType';

const initialState = {
    status: 'INIT',
    ingredient_names: [],
    isLast : false
};

export default function search(state = initialState, action) {
    switch(action.type) {
        case types.INGREDIENT_SEARCH:
            console.log("ingredient search reducer waiting");
            return {
                ...state,
                status: 'WAITING'
            }
        case types.INGREDIENT_SEARCH_SUCCESS:
            console.log("ingredient search reducer success");
            console.log(action.ingredient_names);
            return {
                ...state,
                status: 'SUCCESS',
                ingredient_names: action.ingredient_names
            }
        case types.INGREDIENT_SEARCH_FAILURE:
            console.log("ingredient search reducer failure");
            return {
                ...state,
                status: 'FAILURE',
                ingredient_names: []
            }
        default:
            return state;
    }
}
