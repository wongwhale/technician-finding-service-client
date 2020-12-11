import { authType } from "../reducers/authReducer"

export const login = () => (dispatch) => {
    dispatch({
        type : authType.LOGIN_SUCCESS
    })
}

export const logout = () => (dispatch) => {
    dispatch({
        type : authType.LOGOUT_SUCCESS
    })
}