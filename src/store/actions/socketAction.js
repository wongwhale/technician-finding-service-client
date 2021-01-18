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

socket.on('send_post_req', ( order ) => {
    console.log(order);
    store.dispatch({
        type : notiType.ADD_TECH_ORDER,
        payload : order
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

export const sendPostReq = ({ name , uid, date, type, file, detail, location }) => dispatch => {
    // console.log('file' , file);
    var image = []
    Promise.all(file.map(async (item) => {
        const reference = firebase().ref('post').child(`${item.creationDate}-${item.filename}`)
        await reference.putFile(item.path)
        await reference.getDownloadURL().then(url => {
            image.push(url)
        })
    })).then( () => {
        socket.emit('send_post_req', {
            senderName : name,
            senderID : uid,
            date: date,
            techType: type,
            image: image,
            detail: detail,
            location: location
        })
    })
    // console.log(date , type , detail , location);
    
}