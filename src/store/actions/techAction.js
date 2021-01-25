import { techType } from "../reducers/technicianReducer"
import axios from 'axios'
import WEB_URL from "../../misc/web_url"
import AsyncStorage from "@react-native-async-storage/async-storage"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from  'react-native-maps-directions'
import { GOOGLE_API } from "../../misc/google_api"

export const SET_SEARCH_KEY_WORD = (keyword) => dispatch => {
    dispatch({
        type: techType.SET_SEARCH_KEY_WORD,
        payload: {
            keyword: keyword
        }
    })
}

export const SEARCH_BY_KEY_WORD = (keyword) => dispatch => {
    console.log('keyword', keyword);
    return new Promise((resolve, reject) => {
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
                            searchTechnician(word:"${keyword}") {
                            technician {
                              star
                              _id
                              userID
                              userInfoID {
                                firstname
                                lastname
                                avatar
                                technicianInfoID
                                }   
                            address{
                                lat
                                lon
                            }
                            }
                            } 
                        }
                    `
                }
            }).then(res => {
                // Promise.all(
                //     dispatch({
                //         type: techType.SET_SEARCH_LIST,
                //         payload: {
                //             search_list: res.data.data.searchTechnician.technician
                //         }
                //     })
                // ).then( () => {
                resolve(res.data.data.searchTechnician.technician)
                // }).catch( () => {
                //     reject()
                // })
            })
        })
    })
}

export const GET_TECHNICIAN_INFO = (tid) => dispatch => {
    return new Promise((resolve, reject) => {
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
                            getTechnicianInfo( userID :"${tid}") {
                              onSite
                              star
                              amount
                              description
                              count
                              userInfoID {
                                firstname
                                lastname
                                userID
                                avatar
                                role
                                phone
                                technicianInfoID
                              }
                              aptitude {
                                aptitude
                                star
                                amountOfvoteStar
                                amountOfcomment
                              }
                            }
                          }
                    `
                }
            }).then(res => {
                console.log(res.data.data);
                dispatch({
                    type: techType.SET_TECHNICIAN_INFO,
                    payload: {
                        aptitude: res.data.data.getTechnicianInfo.aptitude,
                        personalInfo: res.data.data.getTechnicianInfo.userInfoID,
                        onSite: res.data.data.getTechnicianInfo.onSite,
                        star: res.data.data.getTechnicianInfo.star
                    }
                })
                resolve()
            }).catch(err => {
                console.log(err);
            })
        })
    })
}

export const SET_TID = (tid) => dispatch => {
    dispatch({
        type: techType.SET_TID,
        payload: {
            tid: tid
        }
    })
}
