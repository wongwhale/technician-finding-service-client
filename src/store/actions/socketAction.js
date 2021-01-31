import io from 'socket.io-client'
import firebase from '@react-native-firebase/storage'
import { SOCKET_URL, WEB_URL } from '../../misc/web_url'
import { socketType } from '../reducers/socketReducer'
import store from '../'
import { notiType } from '../reducers/notificationReducer'
import { authType } from '../reducers/authReducer'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getDistance} from '../../misc/getDistance'

const socket = io.connect(`${SOCKET_URL}`)


socket.on('join', (id) => {
    console.log('join', id);
})

socket.on('send_post_req', (order) => {
    console.log(order);
    store.dispatch({
        type : notiType.ADD_TECH_ORDER,
        payload : {
            ...order.form,
            distance : 0.54
        }
    })
})

socket.on('send_post_req_back', () => {
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
                    getInformation {
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
                    }
                  }
                `
            }
        }).then(res => {
            const data = res.data.data.getInformation
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
})

socket.on('accepted_req_back', () => {
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
                                }
                              }
                            }
                        }
                    }
                  }
                `
            }
        })
    }).then(res => {
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

socket.on('accepted_req', (payload) => {
    store.dispatch({
        type: notiType.ADD_ACCECTED_TECH,
        payload: payload
    })
})


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
    // console.log(date , type , detail , location);

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
    console.log(res);
}