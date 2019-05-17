import axios from 'axios';
import {
    RECIPE_LIST,
    RECIPE_LIST_SUCCESS,
    RECIPE_LIST_FAILURE
} from './ActionType';

export function recipeListRequest(contents) {
    return (dispatch) => {
        dispatch(recipeList());

        return axios.post('/api/recommendPage', { contents })
            .then((response) => {
                console.log("recommend dispatch success");
                dispatch(recipeListSuccess());
            }).catch((error) => {
                console.log("recommend dispatch Failure");
                dispatch(recipeListFailure(error.response.data.code));
            });
    };
}

export function recipeList() {
    return {
        type: RECIPE_LIST
    };
}

export function recipeListSuccess() {
    return {
        type: RECIPE_LIST_SUCCESS
    };
}

export function recipeListFailure() {
    return {
        type: RECIPE_LIST_FAILURE
    };
}
