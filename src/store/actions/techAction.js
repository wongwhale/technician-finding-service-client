import { techType } from "../reducers/technicianReducer"

export const SET_SEARCH_KEY_WORD = (keyword) => dispatch => {
    dispatch({
        type : techType.SET_SEARCH_KEY_WORD,
        payload : {
            keyword : keyword
        }
    })
}