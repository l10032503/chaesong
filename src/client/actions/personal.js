import axios from 'axios';
import{
    EATEN_LIST,
    EATEN_LIST_SUCCESS,
    EATEN_LIST_FAILURE
} from './ActionType';

export function eatenListRequest(isInitial, listType){
    return (dispatch) => {
        dispatch(eatenList());
        let url = './api/personalpage';

        return axios.get(url)
            .then((response)=>{
                console.log("eaten dispatch success");
                dispatch(eatenListSuccess(response.data, isInitial, listType));
            }).catch((error) => {
                console.log("eaten dispatch failure");
                dispatch(eatenListFailure());
            })
    }
}

export function eatenList() {
    return {
        type: EATEN_LIST
    };
}

export function eatenListSuccess(data, isInitial, listType) {
    return {
        type: EATEN_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function eatenListFailure() {
    return {
        type: EATEN_LIST_FAILURE
    };
}
