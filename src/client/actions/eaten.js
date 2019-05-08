import {
    EATEN_LIST_SUCCESS,
    EATEN_LIST_FAILURE,
    EATEN_LIST
} from "./ActionType";

export function eatenListRequest(isInitial, listType, id, user_id){
    return (dispatch) => {
        dispatch(eatenList());
        let url = './api/personalpage';

        return axois.get(url).then((response) => {
            dispatch(eatenListSuccess(response.data, isInitial, listType));
        }).catch((error) => {
            dispatch(eatenListFailure());
        });
    };
}

export function eatenList() {
    return {
        type: EATEN_LIST
    };
}

export function eatenListSuccess(data, isInitial, listType){
    return {
        type: EATEN_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function eatenListFailure(){
    return{
        type: EATEN_LIST_FAILURE
    };
}