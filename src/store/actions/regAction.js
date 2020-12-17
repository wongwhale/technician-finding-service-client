import { regType } from "../reducers/regReducer"

export const  setUsernamePassword = (username , password) => dispatch => {
    dispatch({
        type : regType.SET_USERNAME_PASSWORD,
        payload : {
            username : username,
        }
    })
}

export const setFirstname = (firstname) => dispatch => {
    dispatch({
        type : regType.SET_FIRSTNAME,
        payload : {
            firstname : firstname 
        }
    })
}

export const setLastname = (lastname) => dispatch => {
    dispatch({
        type : regType.SET_LASTNAME,
        payload : {
            lastname : lastname 
        }
    })
}

export const clear = () => dispatch => {
    dispatch({
        type : regType.CLEAR
    })
}