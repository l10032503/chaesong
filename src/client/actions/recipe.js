import axios from 'axios';
import{
    RECIPE_LIST,
    RECIPE_LIST_SUCCESS,
    RECIPE_LIST_FAILURE,
    RECIPE_SCRAP,
    RECIPE_SCRAP_SUCCESS,
    RECIPE_SCRAP_FAILURE
} from './ActionType';

export function recipeListRequest(isInitial, listType){
    return (dispatch) => {
        dispatch(recipeList());
        let url = './api/recipe';

        return axios.get(url)
            .then((response)=>{
                console.log("recipeviestest dispatch success");
                dispatch(recipeListSuccess(response.data, isInitial, listType));
            }).catch((error) => {
                console.log("recipeviestest dispatch failure");
                dispatch(recipeListFailure());
            })
    }
}

export function recipeList() {
    return {
        type: RECIPE_LIST
    };
}

export function recipeListSuccess(data, isInitial, listType) {
    return {
        type: RECIPE_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function recipeListFailure() {
    return {
        type: RECIPE_LIST_FAILURE
    };
}

export function scrapRequest(user_id, recipe_id) {
    return (dispatch) =>{
        dispatch(recipescrap());

        return axios.post('/api/scrap', {user_id,recipe_id})
            .then((response)=>{
                console.log("scrap dispatch success");
                dispatch(recipescrapSuccess());
            }).catch((error)=>{
                console.log("scrap dispatch failure");
                dispatch(recipescrapFailure(error.response.data.code));
            });
    }
}

export function recipescrap() {
    return{
        type : RECIPE_SCRAP
    };
}

export function recipescrapSuccess() {
    return{
        type: RECIPE_SCRAP_SUCCESS
    };
}

export function recipescrapFailure(error) {
    return {
        type: RECIPE_SCRAP_FAILURE,
        error
    };
}