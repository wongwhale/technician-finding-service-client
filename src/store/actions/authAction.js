import { authType } from "../reducers/authReducer"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import WEB_URL from "../../misc/web_url"
import { notiType } from "../reducers/notificationReducer"
import { formType } from "../reducers/formReducer"
import { chatType } from "../reducers/chatReducer"
import { techType } from "../reducers/technicianReducer"
import { getDistance } from "../../misc/getDistance"

export const login = (username, password) => (dispatch) => {
    dispatch({
        type: authType.LOADING
    })
    return new Promise((resolve, reject) => {
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
                    .then(() => {
                        resolve({ status: true })
                    }).catch((err) => {
                        reject(err)
                    })
            }
            else {
                resolve({ status: false })
                dispatch({
                    type: authType.LOGIN_FAIL
                })
                dispatch({
                    type: authType.LOADED
                })
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
        type: authType.CLEAR
    })
    dispatch({
        type: notiType.CLEAR
    })
    dispatch({
        type: formType.CLEAR
    })
    dispatch({
        type: chatType.CLEAR
    })
    dispatch({
        type: techType.CLEAR
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
                  forms{
                      _id
                      detail
                      date 
                      location {
                          lat
                          lon
                      }
                      technician {
                        minPrice
                        maxPrice
                        location {
                        lat
                        lon
                        }
                        tech {
                          _id
                          star
                          count
                          userInfoID {
                            firstname
                            lastname
                            avatar
                          }
                        }
                      }
                  }
                  userID
                  technicianInfoID {
                    newForm {
                      _id
                      detail
                      date
                      location {
                          lat 
                          lon
                      }
                      userInfoID {
                        firstname
                        lastname
                        avatar
                      }
                    } 
                    acceptForm {
                      _id
                      senderID
                      detail
                      date
                      userInfoID{
                          firstname 
                          lastname
                          avatar
                      }
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
        let  temp_list = []
        if (data.status) {
            if (data.role === 'technician') {
                Promise.all(
                    data.technicianInfoID.newForm.map(async (order) => {
                        const distance = await getDistance(
                            18.795424746501605,
                            98.95226894013882,
                            order.location.lat,
                            order.location.lon
                        )
                        dispatch({
                            type: notiType.ADD_TECH_ORDER,
                            payload: {
                                ...order,
                                distance: parseFloat(distance / 1000).toFixed(2)
                            }
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
                    dispatch({
                        type: authType.LOADED
                    })
                }).catch(() => {
                    dispatch({
                        type: authType.LOGIN_FAIL
                    })
                    dispatch({
                        type: authType.LOADED
                    })
                })
            } else {
                Promise.all(
                    data.forms.map(async (form) => {
                        console.log('form' , form);
                        const distance = await getDistance(
                            18.795424746501605,
                            98.95226894013882,
                            form.location.lat,
                            form.location.lon
                        )
                        temp_list.push({
                            ...form,
                            distance : parseFloat(distance / 1000).toFixed(2)
                        })
                        // dispatch({
                        //     type: notiType.ADD_USER_RESPONSE,
                        //     payload: {
                        //         ...form,
                        //         distance : parseFloat(distance / 1000).toFixed(2)
                        //     }
                        // })
                    })
                ).then(() => {
                    dispatch({
                        type : notiType.SET_USER_RESPONSE,
                        payload : temp_list
                    })
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
                }).catch(err => {
                    console.log(err);
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

export const LOADING = () => dispatch => {
    dispatch({
        type: authType.LOADING
    })
}

export const LOADED = () => dispatch => {
    dispatch({
        type: authType.LOADED
    })
}


export const clear = () => (dispatch) => {
    dispatch({
        type: authType.CLEAR
    })
    dispatch({
        type: notiType.CLEAR
    })
    dispatch({
        type: formType.CLEAR
    })
    dispatch({
        type: chatType.CLEAR
    })
    dispatch({
        type: techType.CLEAR
    })
}
