import { authType } from "../reducers/authReducer"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import WEB_URL from "../../misc/web_url"

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
    }).then(async (result) => {
        // console.log(result.data.data);
        const data = result.data.data.login
        if (data.status) {
            AsyncStorage.setItem('token', `${data.token}`)
            dispatch({
                type: authType.LOGIN_SUCCESS,
                payload: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    role: data.role,
                    uid: data.userID,
                },
            })
        }
        else {
            dispatch({
                type: authType.LOGIN_FAIL
            })
        }
        return { status: data.status, uid: data.userID }
    });
    return data
}

export const logout = () => (dispatch) => {
    AsyncStorage.removeItem('token')
    dispatch({
        type: authType.LOGOUT_SUCCESS
    })
}

export const checkToken = () => async (dispatch) => {
    dispatch({
        type: authType.LOADING
    })
    const token = await AsyncStorage.getItem('token')
    console.log(token);
    axios({
        url: `${WEB_URL}/api/graphql`,
        method: "post",
        data: {
            query: `
                  query{
                    tokenCheck
                    (
                        token : "${token}"
                    )
                    {
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
            "Content-Type": "application/json"
        },
    }).then(res => {
        const data = res.data.data.tokenCheck
        if (data.status) {
            dispatch({
                type: authType.LOGIN_SUCCESS,
                payload: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    role: data.role,
                    uid: data.userID,
                }
            })
        }
    })
        .catch(err => {
            console.log('check token error : ', err);
            dispatch({
                type: authType.LOGIN_FAIL
            })
        })
}