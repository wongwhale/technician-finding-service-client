import React, { useState } from 'react'

import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import { message, color } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { SEND_MESSAGE } from '../../store/actions/chatAction'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    uid: state.auth.userInfo.uid
})

const ChatInput = (props) => {
    const [msg, setMsg] = useState('')
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={message.chatInputContainer}>
                    <TextInput value={msg} onChangeText={(val) => setMsg(val)} multiline style={message.textInput} placeholder='Aa' />
                    <TouchableOpacity
                        style={[message.sendButton, {
                            backgroundColor: color.GREEN_4,
                            height: 40,
                            width: 40,
                            borderRadius: 20
                        }]}
                        onPress={() => {
                            if (msg.length !== 0) {
                                props.SEND_MESSAGE(msg, props.uid)
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