import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import WEB_URL from "../../misc/web_url"
import { notiType } from "../reducers/notificationReducer"
import { getDistance } from "../../misc/getDistance"

export const addNewOrder = (order) => dispatch => {
    dispatch({
        type: notiType.ADD_TECH_ORDER,
        payload: order
    })
}

export const removeOrder = (formID, userID) => dispatch => {
    AsyncStorage.getItem('token').then(token => {
        axios({
            url: WEB_URL,
            method: "post",
            data: {
                query: `
                mutation{
                    techIgnoreForm(formID :"${formID}" , userID:"${userID}")
                  }
                `,
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        }).then(res => {
            console.log(res.data.data.techIgnoreForm);
        }).catch(err => {
            console.log(err);
        })
    })
    dispatch({
        type: notiType.REMOVE_TECH_ORDER,
        payload: {
            _id: formID
        }
    })
}

export const addNewResponse = (payload) => dispatch => {
    return new Promise((resovle, reject) => {
        dispatch({
            type: notiType.ADD_USER_RESPONSE,
            payload: payload
        })
        resovle()
    })
}

export const removeCandidateTech = (_id) => dispatch => {
    dispatch({
        type: notiType.REMOVE_USER_RESPONSE,
        payload: _id
    })
}

export const addAcceptedOrder = (order) => dispatch => {
    dispatch({
        type: notiType.ADD_ACCECTED_TECH_ORDER,
        payload: order
    })
}

export const removeAcceptedOrder = (_id) => dispatch => {
    dispatch({
        type: notiType.REMOVE_ACCECTED_TECH_ORDER,
        payload: {
            _id: _id
        }
    })
}

export const getWaitingList = () => dispatch => {
    return new Promise((resovle, reject) => {
        AsyncStorage.getItem('token').then(token => {
            axios({
                url: WEB_URL,
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                data: {
                    query:
                        `
                        query{
                            tokenCheck {
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
                                      userID
                                    }
                                  }
                                }
                              }
                            }
                          }
                    `
                }
            }).then(res => {
                const data = res.data.data.tokenCheck
                let temp_list = []
                Promise.all(
                    data.forms.map(async (form) => {
                        const distance = await getDistance(
                            18.795424746501605,
                            98.95226894013882,
                            form.location.lat,
                            form.location.lon
                        )
                        temp_list.push({
                            ...form,
                            distance: parseFloat(distance / 1000).toFixed(2)
                        })
                    })
                ).then(() => {
                    resovle(temp_list)
                }).catch(err => {
                    reject(err)
                })
            })
        })
    })
}

export const getNewOrderLists = () => dispatch => {
    return new Promise((resovle, reject) => {
        AsyncStorage.getItem('token').then(token => {
            axios({
                url: WEB_URL,
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                data: {
                    query:
                        `
                        query{
                            tokenCheck {
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
                    `
                }
            }).then(res => {
                const data = res.data.data.tokenCheck
                let neworder_lists = []
                let acceptedorder_lists = []
                Promise.all(
                    data.technicianInfoID.newForm.map(async (order) => {
                        const distance = await getDistance(
                            18.795424746501605,
                            98.95226894013882,
                            order.location.lat,
                            order.location.lon
                        )
                        neworder_lists.push({
                            ...order,
                            distance: parseFloat(distance / 1000).toFixed(2)
                        })
                    })
                    // data.technicianInfoID.acceptForm.map((order) => {
                    //     acceptedorder_lists.push({
                    //         ...order
                    //     })
                    // })
                ).then(() => {
                    resovle(neworder_lists)
                }).catch(err => {
                    reject(err)
                })
            })
        })
    })
}