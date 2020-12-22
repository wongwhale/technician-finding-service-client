import React , {useRef , useEffect , useState} from 'react' 
import socketio from 'socket.io-client'
import WEB_URL from '../web_url'

const useSocket = () => {
 
    const socketRef = useRef()
    
    useEffect( () => {
        socketRef.current = socketio(`${WEB_URL}/api`)

        socketRef.current.on('testReceive' , (msg) => {
            console.log('receiver' , msg);
        })
    })

    const sendTest = (msg) => {
        socketRef.current.emit('testSend' , {msg})
    }

    const disconnect = () => {
        socketRef.current.disconnect()
    }

    return {sendTest , disconnect}
}

export default useSocket