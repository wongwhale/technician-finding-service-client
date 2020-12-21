import axios from 'axios'

import { regType } from "../reducers/regReducer"
import WEB_URL from '../../misc/web_url'
import { authType } from '../reducers/authReducer'

export const setUsernamePassword = (username, password) => dispatch => {
    dispatch({
        type: regType.SET_USERNAME_PASSWORD,
        payload: {
            username: username,
            password: password
        }
    })
}

export const setUsername = (username) => dispatch => {
    dispatch({
        type: regType.SET_USERNAME,
        payload: {
            username: username
        }
    })
}

export const setPassword = (password) => dispatch => {
    dispatch({
        type: regType.SET_PASSWORD,
        payload: {
            password: password
        }
    })
}

export const setFirstname = (firstname) => dispatch => {
    dispatch({
        type: regType.SET_FIRSTNAME,
        payload: {
            firstname: firstname
        }
    })
}

export const setLastname = (lastname) => dispatch => {
    dispatch({
        type: regType.SET_LASTNAME,
        payload: {
            lastname: lastname
        }
    })
}

export const setRole = (role) => dispatch => {
    dispatch({
        type: regType.SET_ROLE,
        payload: {
            role: role
        }
    })
}

export const setPhoneNumber = (phone_number) => dispatch => {
    dispatch({
        type: regType.SET_PHONE,
        payload: {
            phone: phone_number
        }
    })
}

export const clear = () => dispatch => {
    dispatch({
        type: regType.CLEAR
    })
}


export const registor_success = (info) => dispatch => {
    console.log(info);
    try {
        axios({
            url: "http://localhost:9999/api/user",
            method: "POST",
            data: {
                query: `
                mutation{
                    register(
                      REGISTER:{
                        username:"${info.username}",
                        password:"${info.password}",
                        firstname:"${info.firstname}",
                        lastname:"${info.lastname}",
                        phone:"${info.phone}",
                        role:"${info.role}"
                        })
                        {
                          status
                      }
                  }
                `,
            },
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            // console.log(res);
            console.log(res.data);
            if(res.data.data.register.status){
                dispatch({
                    type: regType.CLEAR
                })
                dispatch({
                    type: authType.LOGIN_SUCCESS,
                    payload: {
                        firstname: info.firstname,
                        lastname: info.lastname,
                        role: info.role
                    }
                })
            }
        })
    } catch{
        console.log('fail');
    }
    // dispatch({
    //     type: regType.REGISTOR_SUCCESS
    // })
}

