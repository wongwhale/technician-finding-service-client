import { authType } from "../reducers/authReducer"
import axios from 'axios'

export const login = (username, password) => (dispatch) => {
    dispatch({
        type: authType.LOADING
    })
    const data = axios({
        url: "http://localhost:9999/api/graphql",
        method: "post",
        data: {
            query: `
              mutation{
                login(LOGIN:{username:"${username}"password:"${password}"}){
                  token
                  status
                  firstname
                  lastname
                  role
                  userID
                }
              }
                `,
        },
        headers: {
            "Content-Type": "application/json",
        },
    }).then((result) => {
        const data = result.data.data.login
        if (data.status) {
            dispatch({
                type: authType.LOGIN_SUCCESS,
                payload: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    role: data.role,
                    uid: data.userID
                }
            })
        }
        else {
            dispatch({
                type: authType.LOGIN_FAIL
            })
        }
        return {status: data.status , uid : data.userID}
    });
    return data
}

export const logout = () =>  (dispatch) => {
    dispatch({
        type: authType.LOGOUT_SUCCESS
    })
}