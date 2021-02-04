import React, { useState } from 'react'

import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import { message, color } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { SEND_MESSAGE } from '../../store/actions/chatAction'
import { sendMessage } from '../../store/actions/socketAction'

import { connect } from 'react-redux'

import ImagePicker from 'react-native-image-crop-picker'

import firebaseStorage from '@react-native-firebase/storage'

// const reference = firebase().ref('post').child(`${item.creationDate}-${item.filename}`)
//             await reference.putFile(item.path)
//             await reference.getDownloadURL().then(url => {
//                 image.push(url)
//             })

const mapStateToProps = (state) => ({
    uid: state.auth.userInfo.uid,
    interlocutor: state.chat.interlocutor
})

const ChatInput = (props) => {
    const [msg, setMsg] = useState('')

    const handleSendPhoto = () => {
        ImagePicker.openPicker({
            multiple: true,
            maxFiles : 10
        }).then( images => {
            images.map( async image => {
                const reference = firebaseStorage().ref('chat').child(`${props.uid}-${image.path}-${new Date().getTime()}`)
                await reference.putFile(image.path)
                await reference.getDownloadURL().then( url => {
                    props.SEND_MESSAGE(url, 'image', props.uid)
                    props.sendMessage({
                        date: new Date().toISOString(),
                        message: url,
                        sender: props.uid,
                        msgType: 'image'
                    }, props.interlocutor.id)
                })
            })
        })
    }

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={message.chatInputContainer}>
                    <TouchableOpacity
                        style={[{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                            backgroundColor: color.BLUE_4,
                            height: 40,
                            width: 40,
                            borderRadius: 20
                        }]}
                    >
                        <Feather name='camera' style={{ fontSize: 20, color: color.BLUE_5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                            backgroundColor: color.BLUE_4,
                            height: 40,
                            width: 40,
                            borderRadius: 20
                        }]}
                        onPress={() => {
                            handleSendPhoto()
                        }}
                    >
                        <Feather name='image' style={{ fontSize: 20, color: color.BLUE_5 }} />
                    </TouchableOpacity>

                    <TextInput value={msg} onChangeText={(val) => setMsg(val)} multiline style={message.textInput} placeholder='Aa' />
                    <TouchableOpacity
                        style={[message.sendButton, {
                            backgroundColor: color.GREEN_3,
                            height: 40,
                            width: 40,
                            borderRadius: 20
                        }]}
                        onPress={() => {
                            if (msg.length !== 0) {
                                props.SEND_MESSAGE(msg, 'text', props.uid)
                                props.sendMessage({
                                    date: new Date().toISOString(),
                                    message: msg,
                                    sender: props.uid,
                                    msgType: 'text'
                                }, props.interlocutor.id)
                                setMsg('')
                            }
                        }}
                    >
                        <Feather name='send' style={{ fontSize: 20, color: color.BLUE_5 }} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default connect(mapStateToProps, { SEND_MESSAGE, sendMessage })(ChatInput)