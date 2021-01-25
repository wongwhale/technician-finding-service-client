import { chatType } from "../reducers/chatReducer"
import axios from "axios"
import WEB_URL from "../../misc/web_url"
import { authType } from "../reducers/authReducer"
import store from '../'
import AsyncStorage from "@react-native-async-storage/async-storage"

export const ENTER_PRIVATE_CHAT = ( uid , tid ) => dispatch => {
    dispatch({
        type: authType.LOADING
    })
    return new Promise((resolve , reject) => {
        AsyncStorage.getItem('token')
        .then(token => {
            axios({
                url : `${WEB_URL}`,
                method:'post',
                headers:{
                    "Content-Type": "application/json",
                    "Authorization" : token
                },
                data:{
                    query:
                    `
                    query{
                        getChatInformation(
                            technicianID : "${tid}"
                            userID : "${uid}"
                        ) {
                            technicianID
                            technicianName
                            userName
                            technicianAvatar
                            userAvatar
                            history {
                                sender
                                message
                                date
                                msgType
                            }
                        }
                    }
                    `
                }
            }).then( res => {
                const uid = store.getState().auth.userInfo.uid
                const data = res.data.data.getChatInformation
                if(res.data.data.getChatInformation.history !== null){
                    console.log('enter message' , res.data.data.getChatInformation.history);
                    dispatch({
                        type: chatType.ENTER_PRIVATE_CHAT,
                        payload: {
                            interlocutor: {
                                id: tid,
                                name: data.technicianID !== uid ? data.technicianName : data.userName,
                                avatar : data.technicianID !== uid ? data.technicianAvatar : data.userAvatar
                            },
                            messages: res.data.data.getChatInformation.history
                        }
                    })
                    resolve({status : true})
                }
                else{
                    dispatch({
                        type: chatType.ENTER_PRIVATE_CHAT,
                        payload: {
                            interlocutor: {
                                id: tid,
                                name: data.technicianID !== uid ? data.technicianName : data.userName,
                                avatar : data.technicianID !== uid ? data.technicianAvatar : data.userAvatar
                            },
                            messages : []
                        }
                    })
                    resolve({status : false})
                }
            }).catch( err => {
                reject('Error :', err)
            })
        }) 

    })
}

export const LEAVE_PRIVATE_CHAT = () => dispatch => {
    dispatch({
        type: chatType.LEAVE_PRIVATE_CHAT
    })
}

export const SET_INTERLOCUTOR_ID = (id) => dispatch => {
    return new Promise((resolve , reject) => {
        dispatch({
            type : chatType.SET_INTERLOCUTOR_ID,
            payload: {
                id : id
            }
        })
        resolve()
    })
}

export const INITIAL_HISTORY_LIST = (uid) => dispatch => {
    return new Promise((resolve , reject) => {
        AsyncStorage.getItem('token').then( (token) => {
            axios({
                url: `${WEB_URL}`,
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                },
                data: {
                    query:
                        `
                        query{
                            getChatRoom(
                                userID : "${uid}"
                            ) {
                              userID
                              userName
                              technicianID
                              technicianName
                              technicianAvatar
                              userAvatar
                              status
                                recentMessage {
                                  sender
                                  message
                                  date
                                  msgType
                                }
                            }
                        
                        }
                        `
                }
            }).then(res => {
                console.log('message'  , res.data.data.getChatRoom);
                dispatch({
                    type: chatType.INITIAL_HISTORY_LIST,
                    payload: {
                        list: res.data.data.getChatRoom
                    }
                })
                resolve(res.data.data.getChatRoom)
            }).catch(err => {
                reject([])
            })
        })
    })
    
}

export const SEND_MESSAGE = (msg , type , uid) => dispatch => {
    dispatch({
        type : chatType.APPEND_MESSAGE,
        payload : {
            date : new Date().toISOString(),
            message : msg ,
            sender : uid,
            msgType : type
        }
    })
}  