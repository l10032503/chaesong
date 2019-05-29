import {
    INGREDIENT_SEARCH,
    INGREDIENT_SEARCH_SUCCESS,
    INGREDIENT_SEARCH_FAILURE
} from './ActionType';
import axios from 'axios'

export function ingredientSearchRequest(isInitial, listType){
    return (dispatch) => {
        dispatch(ingredientSearch());
        let url = './api/ingredient/search';

        return axios.get(url)
            .then((response)=>{
                console.log("ingredient dispatch success" );
                dispatch(ingredientSearchSuccess(response.data, isInitial, listType));
            }).catch((error) => {
                console.log("ingredient dispatch failure");
                dispatch(ingredientSearchFailure());
            })
    }
}

export function ingredientSearch() {
    return {
        type: INGREDIENT_SEARCH
    };
}

export function ingredientSearchSuccess(ingredient_names, isInitial, listType) {
    return {
        type: INGREDIENT_SEARCH_SUCCESS,
        ingredient_names,
        isInitial,
        listType
    };
}

export function ingredientSearchFailure() {
    return {
        type: INGREDIENT_SEARCH_FAILURE
    };
}
