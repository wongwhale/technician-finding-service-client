import io from 'socket.io-client'
import WEB_URL from '../../misc/web_url'
import { socketType } from '../reducers/socketReducer'
const socket = io.connect(`${WEB_URL}`)

socket.on('join' , (id) => {
    console.log('join' , id);
})

export const leave = (uid) => dispatch => {
    socket.emit('leave' , {uid})
    dispatch({
        type : socketType.DISCONNECT
    })
}

export const connection = (uid) => dispatch => {
    socket.emit('join' , {uid})
    dispatch({
        type : socketType.CONNECT,
        payload : {
            socket_id : '1234'
        }
    })
}

export const disconnect = (uid) => dispatch => {
    socket.disconnect(uid)
    // socket.emit('leave', { uid })
    // socket.disconnect()
    dispatch({
        type : socketType.DISCONNECT
    })
}
