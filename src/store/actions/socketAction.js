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
import PushNotification from 'react-native-push-notification'
import { fromPromise } from '@apollo/client'
import { useRoute } from '@react-navigation/native'

export const socket = io.connect(`${SOCKET_URL}`)

const updateTechOrder = () => {
    store.dispatch({
        type: authType.LOADED
    })
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
            // Promise.all(
            //     data.technicianInfoID.newForm.map(async (order) => {
            //         const distance = await getDistance(
            //             18.795424746501605,
            //             98.95226894013882,
            //             order.location.lat,
            //             order.location.lon
            //         )
            //         neworder_lists.push({
            //             ...order,
            //             distance: parseFloat(distance / 1000).toFixed(2)
            //         })
            //     }),
            //     data.technicianInfoID.acceptForm.map((order) => {
            //         acceptedorder_lists.push({
            //             ...order
            //         })
            //     })
            // ).then(() => {
            //     store.dispatch({
            //         type: notiType.SET_NEW_ORDER,
            //         payload: neworder_lists
            //     })
            //     store.dispatch({
            //         type: notiType.SET_ACCEPTED_ORDER,
            //         payload: acceptedorder_lists
            //     })
            // })
            store.dispatch({
                type: notiType.SET_ORDER_BADGE,
                payload: {
                    order_badge: data.technicianInfoID.newForm.length
                }
            })
            store.dispatch({
                type: authType.LOADED
            })
        })
    })
}

const updateUserResponse = () => {
    store.dispatch({
        type: authType.LOADED
    })
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

            // Promise.all(
            //     data.forms.map(async (form) => {
            //         const distance = await getDistance(
            //             18.795424746501605,
            //             98.95226894013882,
            //             form.location.lat,
            //             form.location.lon
            //         )
            //         temp_list.push({
            //             ...form,
            //             distance: parseFloat(distance / 1000).toFixed(2)
            //         })
            //     })
            // ).then(() => {
            //     store.dispatch({
            //         type: notiType.SET_USER_RESPONSE,
            //         payload: temp_list
            //     })
            //     store.dispatch({
            //         type: authType.LOADED
            //     })

            // }).catch(err => {
            //     console.log(err);
            // })
            store.dispatch({
                type: authType.LOADED
            })
        })
    })
}

socket.on('join', (id) => {
    console.log('join', id);
})

// socket.on('update_user_response', () => {
//     updateUserResponse()
// })

// socket.on('update_tech_order', () => {
//     updateTechOrder()
// })

socket.on('recieve_new_response', (data) => {
    // console.log('recieve new response', data);
    AsyncStorage.getItem('notification').then((str) => {
        let noti = JSON.parse(str)
        const new_noti_json = [ {
            id: data.result._id,
            type: data.result.techType,
            name: data.tech.firstname + ' ' + data.tech.lastname,
            status: false,
            page: 'userNotification'
        } , ...noti]

        const notRead = new_noti_json.filter( (val) => {
            return val.status === false
        })
        store.dispatch({
            type: notiType.SET_NOTIFICATION_BADGE,
            payload: {
                notification_badge: notRead.length
            }
        })
        AsyncStorage.setItem('notification', JSON.stringify(new_noti_json))
    })
})

socket.on('recieve_new_post_req', ({ form }) => {
    // console.log('recieve new post req', form);
    PushNotification.localNotification({
        title: form.userInfoID.firstname + ' ' + form.userInfoID.lastname,
        message: 'รายละเอียดงาน : ' + form.detail,
    })
    AsyncStorage.getItem('notification').then((str) => {
        let noti = JSON.parse(str)

        const new_noti_json = [ {
            id: form._id,
            type: form.techType,
            name: form.userInfoID.firstname + ' ' + form.userInfoID.lastname,
            status: false,
            page: 'techNotification'
        } , ...noti]

        const notRead = new_noti_json.filter( (val) => {
            return val.status === false
        })

        store.dispatch({
            type: notiType.SET_NOTIFICATION_BADGE,
            payload: {
                notification_badge: notRead.length
            }
        })

        AsyncStorage.setItem('notification', JSON.stringify(new_noti_json))
    })
})

socket.on('receive_message', ({ message }) => {
    // const uid = store.getState().auth.userInfo.uid
    const interlocuter = store.getState().chat.interlocutor
    // AsyncStorage.getItem('token').then((token) => {
    //     axios({
    //         url: `${WEB_URL}`,
    //         method: 'post',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `${token}`
    //         },
    //         data: {
    //             query:
    //                 `
    //                 query{
    //                     getChatRoom(
    //                         userID : "${uid}"
    //                     ) {
    //                       _id
    //                       userID
    //                       userName
    //                       userFirstname
    //                       technicianID
    //                       technicianName
    //                       technicianFirstname
    //                       technicianAvatar
    //                       readStatus
    //                       userAvatar
    //                         recentMessage {
    //                           sender
    //                           message
    //                           date
    //                           msgType
    //                         }
    //                     }

    //                 }
    //                 `
    //         }
    //     }).then(res => {
    //         store.dispatch({
    //             type: chatType.INITIAL_HISTORY_LIST,
    //             payload: {
    //                 list: res.data.data.getChatRoom.sort((a, b) => {
    //                     return new Date(b.recentMessage.date).getTime() - new Date(a.recentMessage.date).getTime()
    //                 })
    //             }
    //         })
    //     }).catch(err => {
    //     })
    // })
    if (interlocuter.id !== message.sender) {
        // alert(message.message)
        PushNotification.localNotification({
            title: 'test',
            message: message.msgType === 'text' ? message.message : message.msgType === 'image' ? `test : ได้ส่งรูปภาพ` : 'คุณได้รับข้อความใหม่'
        })
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

socket.on('send_message_response', ({ message }) => {

})

export const sendMessage = (message, receiver) => dispatch => {
    socket.emit('send_message', { message, receiver })
    // console.log(message , receiver);
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
    const firstname = store.getState().auth.userInfo.firstname
    const lastname = store.getState().auth.userInfo.lastname
    socket.emit('accepted_req', {
        data : {
            formID: res._id,
            technician: {
                maxPrice: res.maxPrice,
                minPrice: res.minPrice,
                tech: res.uid,
            }
        },
        tech : {
            firstname : firstname,
            lastname : lastname
        }
    })
}

export const cancelRequest = (formID) => dispatch => {
    socket.emit('cancel_request', { formID })
}

export const confirmTechnician = (formID, tid) => dispatch => {
    const uid = store.getState().auth.userInfo.uid
    socket.emit('confirm_technician', {
        formID: formID,
        userID: uid,
        techID: tid
    })
}