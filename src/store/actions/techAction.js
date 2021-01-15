import { techType } from "../reducers/technicianReducer"
import axios from 'axios'
import WEB_URL from "../../misc/web_url"
import AsyncStorage from "@react-native-async-storage/async-storage"

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
                          status
                        technician {
                          star
                          status
                          _id
                          userInfoID {
                            firstname
                            lastname
                            avatar
                            technicianInfoID
                          }
                        }
                        } 
                    }
                `
            }
        }).then(res => {
            console.log(res.data.data.searchTechnician.technician);
            dispatch({
                type: techType.SET_SEARCH_LIST,
                payload: {
                    search_list: res.data.data.searchTechnician.technician
                }
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
                            getTechnicianInfo(_id :"${tid}") {
                              onSite
                              star
                              amount
                              description
                              count
                              status
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