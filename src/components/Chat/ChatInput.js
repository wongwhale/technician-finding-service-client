import React, { useState } from 'react'

import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import { message, color } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { SEND_MESSAGE } from '../../store/actions/chatAction'

import { connect } from 'react-redux'

import ImagePicker from 'react-native-image-crop-picker'

const mapStateToProps = (state) => ({
    uid: state.auth.userInfo.uid
})

const ChatInput = (props) => {
    const [msg, setMsg] = useState('')
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={message.chatInputContainer}>
                    <TouchableOpacity
                        style={[{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft:10,
                            backgroundColor: color.BLUE_4,
                            height: 40,
                            width: 40,
                            borderRadius: 20
                        }]}
                        onPress={ () => {
                            ImagePicker.openPicker({
                                multiple:false
                            }).then( image => {
                                props.SEND_MESSAGE(image.path , 'image' , props.uid)
                            })
                        }}
                    >
                        <Feather name='image' style={{ fontSize: 20, color: color.BLUE_5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft:10,
                            backgroundColor: color.BLUE_4,
                            height: 40,
                            width: 40,
                            borderRadius: 20
                        }]}
                    >
                        <Feather name='camera' style={{ fontSize: 20, color: color.BLUE_5 }} />
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
                                props.SEND_MESSAGE(msg , 'text' , props.uid)
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

export default connect(mapStateToProps, { SEND_MESSAGE })(ChatInput)