import {
    INGREDIENT_SEARCH,
    INGREDIENT_SEARCH_SUCCESS,
    INGREDIENT_SEARCH_FAILURE
} from './ActionType';
import axios from 'axios';

export function ingredientSearchRequest(keyword) {
    return (dispatch) => {
        dispatch(search());
        return axios.get('/api/account/search/' + keyword)
            .then((response) => {
                dispatch(ingredientSearchSuccess(response.data));
            }).catch((error) => {
                dispatch(ingredientSearchFailure());
            });
    };
}

export function ingredientSearch() {
    return {
        type: INGREDIENT_SEARCH
    };
}

export function ingredientSearchSuccess(ingredient_names) {
    return {
        type: INGREDIENT_SEARCH_SUCCESS,
        ingredient_names
    };
}

export function ingredientSearchFailure() {
    return {
        type: INGREDIENT_SEARCH_FAILURE
    };
}
