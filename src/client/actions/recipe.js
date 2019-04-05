import axios from 'axios';
import{
    RECIPE_LIST,
    RECIPE_LIST_SUCCESS,
    RECIPE_LIST_FAILURE
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
