import { notiType } from "../reducers/notificationReducer"

export const addNewOrder = ( order ) => dispatch => {
    dispatch({
        type : notiType.ADD_TECH_ORDER,
        payload : order
    })
}

export const removeOrder = (order) => dispatch => {
    dispatch({
        type : notiType.REMOVE_TECH_ORDER,
        payload : order
    })
}