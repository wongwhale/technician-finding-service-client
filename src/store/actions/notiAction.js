import { notiType } from "../reducers/notificationReducer"

export const addNewOrder = ( order ) => dispatch => {
    dispatch({
        type : notiType.ADD_TECH_ORDER,
        payload : order
    })
}

export const removeOrder = (_id) => dispatch => {
    dispatch({
        type : notiType.REMOVE_TECH_ORDER,
        payload : {
            _id : _id
        }
    })
}

export const addNewResponse = ( payload ) => dispatch => {
    return new Promise( (resovle , reject) => {
        dispatch({
            type : notiType.ADD_USER_RESPONSE,
            payload : payload
        })
        resovle()
    })
}

export const removeCandidateTech = (_id) => dispatch => {
    dispatch({
        type : notiType.REMOVE_USER_RESPONSE,
        payload : _id
    })
}

export const addAcceptedOrder = (order) => dispatch => {
    dispatch({
        type : notiType.ADD_ACCECTED_TECH_ORDER,
        payload : order
    })
} 

export const removeAcceptedOrder = (_id) => dispatch => {
    dispatch ({
        type : notiType.REMOVE_ACCECTED_TECH_ORDER,
        payload : {
            _id : _id
        }
    })
}