import { techType } from "../reducers/technicianReducer"
import axios from 'axios'
import WEB_URL from "../../misc/web_url"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { authType } from "../reducers/authReducer"

export const SET_SEARCH_KEY_WORD = (keyword) => dispatch => {
    dispatch({
        type: techType.SET_SEARCH_KEY_WORD,
        payload: {
            keyword: keyword
        }
    })
}

export const SEARCH_BY_KEY_WORD = (keyword) => dispatch => {
    dispatch({
        type: authType.LOADING
    })
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
                resolve(res.data.data.searchTechnician.technician)
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
                              address{
                                  lat
                                  lon
                              }
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
                                voteID
                                
                              }
                              workDay
                                workTime{
                                    start{
                                        hour
                                        minutes
                                    }
                                    end{
                                        hour
                                        minutes
                                    }
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
                        star: res.data.data.getTechnicianInfo.star,
                        location: res.data.data.getTechnicianInfo.address,
                        workDay : res.data.data.getTechnicianInfo.workDay,
                        workTime : res.data.data.getTechnicianInfo.workTime 
                    }
                })
                resolve()
            }).catch(err => {
                console.log(err);
                reject()
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

export const GET_NEAR_TECHNICIAN = () => dispatch => {
    return new Promise((resolve, resject) => {
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
                        getNearTechnician(ADDRESS: {
                          address : {
                            lat : 18.795924746501605,
                            lon : 98.95296894013882
                          }
                        }) {
                          technician {
                            _id
                            onSite
                            star
                            description
                            userInfoID {
                                firstname
                                lastname
                                avatar
                            }
                            address {
                              lat
                              lon
                            }
                          }
                        }
                      }
                    `
                }
            }).then(res => {
                resolve(res.data.data.getNearTechnician.technician)
            }).catch(err => {
                reject(err)
            })
        })
    })
}

export const SEARCH_GUIDE = (keyword) => dispatch => {
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
                    wordGuide(word:"${keyword}")
                }
                `
                }
            }).then(res => {
                resolve(res.data.data.wordGuide)
            }).catch(err => {
                reject(err)
            })
        })
    })
}