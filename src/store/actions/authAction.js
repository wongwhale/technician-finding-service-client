import { authType } from "../reducers/authReducer"
import axios from 'axios'

export const login = (username, password) => (dispatch) => {
    console.log(username, password);
    dispatch({
        type: authType.LOADING
    })
    try {
        axios({
            url: "http://localhost:9999/api/user",
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
                }
              }
                `,
            },
            headers: {
                "Content-Type": "application/json",
            },
        }).then((result) => {
            console.log(result.data);
            const data = result.data.data.login
            if (data.status) {
                dispatch({
                    type: authType.LOGIN_SUCCESS,
                    payload: {
                        firstname : data.firstname,
                        lastname : data.lastname,
                        role : data.role
                    }
                })
            }
            else {
                dispatch({
                    type: authType.LOGIN_FAIL
                })
            }
        });
    } catch{
        (err) => {
            dispatch({
                type: authType.LOGIN_FAIL
            })
        }
    }

}

export const logout = () => (dispatch) => {
    dispatch({
        type: authType.LOGOUT_SUCCESS
    })
}