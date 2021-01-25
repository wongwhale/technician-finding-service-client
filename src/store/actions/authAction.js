import { authType } from "../reducers/authReducer"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import WEB_URL from "../../misc/web_url"
import { notiType } from "../reducers/notificationReducer"
import { formType } from "../reducers/formReducer"
import { chatType } from "../reducers/chatReducer"
import { techType } from "../reducers/technicianReducer"

export const login = (username, password) => (dispatch) => {
    dispatch({
        type: authType.LOADING
    })
    return new Promise( (resolve , reject) => {
        axios({
            url: WEB_URL,
            method: "post",
            data: {
                query: `
                  mutation{
                    login(LOGIN:{username:"${username}"password:"${password}"}){
                        token
                        status
                    }
                  }
                    `,
            },
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async (result) => {
            const data = result.data.data.login
                if (data.status) {
                    AsyncStorage.setItem('token', `${data.token}`)
                    .then( () => {
                        resolve({status : true})
                    }).catch( (err) => {
                        reject(err)
                    } )
                }
                else {
                    resolve({status : false})
                }
        });
    })
}

export const logout = () => (dispatch) => {
    AsyncStorage.removeItem('token')
    dispatch({
        type: authType.LOGOUT_SUCCESS
    })
    dispatch({
        type : authType.CLEAR
    })
    dispatch({
        type : notiType.CLEAR
    })
    dispatch({
        type : formType.CLEAR
    })
    dispatch({
        type : chatType.CLEAR
    })
    dispatch({
        type : techType.CLEAR
    })
}

export const checkToken = () => async (dispatch) => {
    dispatch({
        type: authType.LOADING
    })
    const token = await AsyncStorage.getItem('token')
    axios({
        url: `${WEB_URL}`,
        method: "post",
        data: {
            query: `
            query{
                tokenCheck {
                  status
                  firstname
                  lastname
                  avatar
                  role
                  userID
                  technicianInfoID {
                    _id
                    userID
                    onSite
                    star
                    amount
                    description
                    count
                    newForm {
                      _id
                      senderID
                      detail
                      date
                      techType
                    } 
                    acceptForm {
                      _id
                      senderID
                      detail
                      date
                      techType
                    }
                  }
                }
              }
                    `,
        },
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    }).then(res => {
        const data = res.data.data.tokenCheck
        console.log(data);
        if (data.status) {
            if (data.role === 'technician') {
                console.log(data.technicianInfoID);
                Promise.all(
                    data.technicianInfoID.newForm.map((order) => {
                        dispatch({
                            type: notiType.ADD_TECH_ORDER,
                            payload: order
                        })
                    }),
                    data.technicianInfoID.acceptForm.map((order) => {
                        dispatch({
                            type: notiType.ADD_ACCECTED_TECH_ORDER,
                            payload: order
                        })
                    })
                ).then(() => {
                    dispatch({
                        type: authType.LOGIN_SUCCESS,
                        payload: {
                            firstname: data.firstname,
                            lastname: data.lastname,
                            role: data.role,
                            uid: data.userID,
                            avatar: data.avatar
                        }
                    })
                }).catch(() => {
                    dispatch({
                        type: authType.LOGIN_FAIL
                    })
                })
            } else {
                dispatch({
                    type: authType.LOGIN_SUCCESS,
                    payload: {
                        firstname: data.firstname,
                        lastname: data.lastname,
                        role: data.role,
                        uid: data.userID,
                        avatar: data.avatar
                    }
                })
            }
        } else {
            dispatch({
                type: authType.LOGIN_FAIL
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