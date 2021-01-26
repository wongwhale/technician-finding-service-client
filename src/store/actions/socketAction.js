import io from 'socket.io-client'
import firebase from '@react-native-firebase/storage'
import { SOCKET_URL } from '../../misc/web_url'
import { socketType } from '../reducers/socketReducer'
import store from '../'
import { notiType } from '../reducers/notificationReducer'

const socket = io.connect(`${SOCKET_URL}`)


socket.on('join', (id) => {
    console.log('join', id);
})

socket.on('send_post_req', (order) => {
    store.dispatch({
        type: notiType.ADD_TECH_ORDER,
        payload: order
    })
})

socket.on('send_post_req_back' , (form) => {
    console.log('send_post_req_back' , form);
})

socket.on('accepted_req', (payload) => {
    store.dispatch({
        type: notiType.ADD_ACCECTED_TECH,
        payload: payload
    })
})

socket.on('accept_req', (order) => {

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
    // console.log('file' , file);
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

export const acceptedReq = (_id) => dispatch => {
    socket.emit('accepted_req', {_id})
    dispatch({
        type: notiType.REMOVE_TECH_ORDER,
        payload: {
            _id: _id
        }
    })
}