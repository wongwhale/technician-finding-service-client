import { chatType } from "../reducers/chatReducer"
import axios from "axios"
import WEB_URL from "../../misc/web_url"
import { authType } from "../reducers/authReducer"
import store from '../'

export const ENTER_PRIVATE_CHAT = ( uid , tid ) => dispatch => {
    dispatch({
        type: authType.LOADING
    })
    return new Promise((resolve , reject) => {
        axios({
            url : `${WEB_URL}`,
            method:'post',
            headers:{
                "Content-Type": "application/json",
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
                        history {
                            sender
                            message
                            date
                        }
                    }
                }
                `
            }
        }).then( res => {
            const uid = store.getState().auth.userInfo.uid
            const data = res.data.data.getChatInformation
            if(res.data.data.getChatInformation.history !== null){
                dispatch({
                    type: chatType.ENTER_PRIVATE_CHAT,
                    payload: {
                        interlocutor: {
                            id: tid,
                            name: data.technicianID !== uid ? data.technicianName : data.userName
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
                        },
                        messages : []
                    }
                })
                resolve({status : false})
            }
        }).catch( err => {
            reject('Error')
        })

    })
}

export const LEAVE_PRIVATE_CHAT = () => dispatch => {
    dispatch({
        type: chatType.LEAVE_PRIVATE_CHAT
    })
}

export const INITIAL_HISTORY_LIST = (uid) => dispatch => {
    axios({
        url: `${WEB_URL}`,
        method: 'post',
        headers: {
            "Content-Type": "application/json",
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
                      status
                        recentMessage {
                          sender
                          message
                          date
                        }
                    }
                
                }
                `
        }
    }).then(res => {
        console.log(res.data.data.getChatRoom);
        dispatch({
            type: chatType.INITIAL_HISTORY_LIST,
            payload: {
                list: res.data.data.getChatRoom
            }
        })
    }).catch(err => {
        console.log(err);
    })
    
}

export const SEND_MESSAGE = (msg , uid) => dispatch => {
    dispatch({
        type : chatType.APPEND_MESSAGE,
        payload : {
            date : new Date().toISOString(),
            message : msg ,
            sender : uid
        }
    })
}  