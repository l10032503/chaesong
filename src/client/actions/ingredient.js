import {
    INGREDIENT_SEARCH,
    INGREDIENT_SEARCH_SUCCESS,
    INGREDIENT_SEARCH_FAILURE,
    INGREDIENT_EAT,
    INGREDIENT_EAT_SUCCESS,
    INGREDIENT_EAT_FAILURE, RECIPE_EAT, RECIPE_EAT_SUCCESS, RECIPE_EAT_FAILURE
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

export function ingredientRequest(user_id, ingredient_code, count, unit) {
    return (dispatch) =>{
        dispatch(ingredientEat());

        return axios.post('/api/ingredient/eat', {user_id,ingredient_code, count, unit})
            .then((response)=>{
                console.log("ingredient eat post action: " + user_id + ingredient_code + count + unit);
                console.log("ingredient eat dispatch success ");
                dispatch(ingredientEatSuccess());
            }).catch((error)=>{
                console.log("eat dispatch failure");
                dispatch(ingredientEatFailure(error.response.data.code));
            });
    }
}

export function ingredientEat() {
    return{
        type : RECIPE_EAT
    };
}

export function ingredientEatSuccess() {
    return{
        type: RECIPE_EAT_SUCCESS
    };
}

export function ingredientEatFailure(error) {
    return {
        type: RECIPE_EAT_FAILURE,
        error
    };
}
