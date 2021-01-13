import axios from 'axios'

import { regType } from "../reducers/regReducer"
import WEB_URL from '../../misc/web_url'
import { authType } from '../reducers/authReducer'
import storage from '@react-native-firebase/storage'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


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

export const SET_IMAGE_PROFILE = (image) => dispatch => {
    return new Promise((resovle, reject) => {
        dispatch({
            type: regType.SET_IMAGE_PROFILE,
            payload: {
                avatar: image
            }
        })
        resovle()
    })
}

export const registor_success = (info) => async dispatch => {
    console.log('info' , info);
    if (info.avatar_status) {
        const storage_ref = storage().ref('avatar').child(`${info.username}`)
        await storage_ref.putFile(info.avatar.path)
        await storage_ref.getDownloadURL().then(url => {
            axios({
                url: WEB_URL,
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    query: `
                    mutation{
                        register(
                            REGISTER:{
                                username : "${info.username}"
                                password : "${info.password}"
                                firstname : "${info.firstname}"
                                lastname : "${info.lastname}"
                                phone : "${info.phone}"
                                role : "user"
                                avatar : "${url}"
                        }){
                            status
                            token
                        }
                      }
                    `
                }
            }).then(res => {
                return new Promise(async (resovle, reject) => {
                    if (res.data.data.register.status) {
                        AsyncStorage.setItem('token', res.data.data.register.token).then( () => {
                            resovle()
                        })
                    } else {
                        reject()
                    }
                })
            })
        })
    }
    else {
        axios({
            url: WEB_URL,
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                query: `
                mutation{
                    register(
                        REGISTER:{
                            username : "${info.username}"
                            password : "${info.password}"
                            firstname : "${info.firstname}"
                            lastname : "${info.lastname}"
                            phone : "${info.phone}"
                            role : "user"
                            avatar : "https://firebasestorage.googleapis.com/v0/b/technician-finding-imageupload.appspot.com/o/avatar%2Fnone-avatar.png?alt=media&token=e4080489-c04a-4ab7-ac8f-b7e1a5a32cd3"
                    }){
                        status
                        token
                    }
                  }
                `
            }
        }).then(res => {
            return new Promise(async (resovle, reject) => {
                if (res.data.data.register.status) {
                    AsyncStorage.setItem('token', res.data.data.register.token).then( () => {
                        resovle()
                    })
                } else {
                    reject()
                }
            })
        })
    }
    // console.log(info);
    // try {
    //     axios({
    //         url: `${WEB_URL}/api/graphql`,
    //         method: "POST",
    //         data: {
    //             query: `
    //             mutation{
    //                 register(
    //                   REGISTER:{
    //                     username:"${info.username}",
    //                     password:"${info.password}",
    //                     firstname:"${info.firstname}",
    //                     lastname:"${info.lastname}",
    //                     phone:"${info.phone}",
    //                     role:"user"
    //                     })
    //                     {
    //                       status
    //                   }
    //               }
    //             `,
    //         },
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).then(res => {
    //         // console.log(res);
    //         console.log(res.data);
    //         if(res.data.data.register.status){
    //             dispatch({
    //                 type: regType.CLEAR
    //             })
    //             dispatch({
    //                 type: authType.LOGIN_SUCCESS,
    //                 payload: {
    //                     firstname: info.firstname,
    //                     lastname: info.lastname,
    //                     role: info.role
    //                 }
    //             })
    //         }
    //     })
    // } catch{
    //     console.log('fail');
    // }
    // dispatch({
    //     type: regType.REGISTOR_SUCCESS
    // })
}

