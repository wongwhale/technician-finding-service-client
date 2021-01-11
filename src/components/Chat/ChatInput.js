import React, { useState } from 'react'

import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import { message } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { SEND_MESSAGE } from '../../store/actions/chatAction'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    uid : state.auth.userInfo.uid
})

const ChatInput = (props) => {
    const [msg, setMsg] = useState('')
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={message.chatInputContainer}>
                    <TextInput value={msg} onChangeText={(val) => setMsg(val)} multiline style={message.textInput} placeholder='Aa' />
                    <TouchableOpacity style={message.sendButton}
                        onPress={() => {
                            if (msg.length === 0) Keyboard.dismiss()
                            else props.SEND_MESSAGE(msg, props.uid)
                        }} >
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default connect(mapStateToProps, {SEND_MESSAGE})(ChatInput)