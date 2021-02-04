import io from 'socket.io-client'
import firebase from '@react-native-firebase/storage'
import { SOCKET_URL, WEB_URL } from '../../misc/web_url'
import { socketType } from '../reducers/socketReducer'
import store from '../'
import { notiType } from '../reducers/notificationReducer'
import { authType } from '../reducers/authReducer'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getDistance } from '../../misc/getDistance'
import { chatType } from '../reducers/chatReducer'

const socket = io.connect(`${SOCKET_URL}`)

const updateTechOrder = () => {
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
                }),
                data.technicianInfoID.acceptForm.map((order) => {
                    acceptedorder_lists.push({
                        ...order 
                    })
                })
            ).then( () => {
                store.dispatch({
                    type : notiType.SET_NEW_ORDER,
                    payload : neworder_lists
                })
                store.dispatch({
                    type : notiType.SET_ACCEPTED_ORDER,
                    payload : acceptedorder_lists
                })
            })
        })
    })
}

const updateUserResponse = () => {
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
                store.dispatch({
                    type: notiType.SET_USER_RESPONSE,
                    payload: temp_list
                })
            }).catch(err => {
                console.log(err);
            })
        })
    })
}

socket.on('join', (id) => {
    console.log('join', id);
})

socket.on('update_user_response', () => {
    updateUserResponse()
})

socket.on('update_tech_order', () => {
    updateTechOrder()
})

socket.on('receive_message' , ({message}) => {
    const interlocuter = store.getState().chat.interlocutor
    if( interlocuter.id !== message.sender ){
        alert(message.message)
    }
    else {
        store.dispatch({
            type: chatType.APPEND_MESSAGE,
            payload: {
                date: message.date,
                message: message.message,
                sender: message.sender,
                msgType: message.msgType
            }
        })
    }
})

export const sendMessage = (message , receiver) => dispatch =>  {
    socket.emit('send_message' , {message , receiver})
}

export const leave = (uid) => dispatch => {
    socket.emit('leave', { uid })
    dispatch({
        type: socketType.DISCONNECT
    })
}


export const connection = (uid) => dispatch => {
    socket.emit('join', { uid })
    dispatch({
        type: socketType.CONNECT,
        payload: {
            socket_id: '1234'
        }
    })
}

export const disconnect = (uid) => dispatch => {
    socket.disconnect(uid)
    // socket.emit('leave', { uid })
    // socket.disconnect()
    dispatch({
        type: socketType.DISCONNECT
    })
}

export const sendPostReq = ({ name, uid, date, type, file, detail, location }) => dispatch => {
    var image = []
    return new Promise((resovle, reject) => {
        Promise.all(file.map(async (item) => {
            const reference = firebase().ref('post').child(`${item.creationDate}-${item.filename}`)
            await reference.putFile(item.path)
            await reference.getDownloadURL().then(url => {
                image.push(url)
            })
        })).then(() => {
            socket.emit('send_post_req', {
                senderID: uid,
                date: date,
                techType: type,
                image: image,
                detail: detail,
                location: location
            })
            resovle()
        }).catch(() => {
            reject()
        })
    })

}

export const acceptedReq = (res) => dispatch => {
    socket.emit('accepted_req', {
        formID: res._id,
        technician: {
            maxPrice: res.maxPrice,
            minPrice: res.minPrice,
            tech: res.uid
        }
    })
}

export const cancelRequest = (formID) => dispatch => {
    socket.emit('cancel_request', { formID })
}

