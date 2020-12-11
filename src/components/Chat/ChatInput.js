import React, { useState } from 'react'

import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import { message } from '../../stylesheet'



const ChatInput = ({ sendMessage }) => {
    const [msg, setMsg] = useState('')
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={message.chatInputContainer}>
                    <TextInput value={msg} onChangeText={(val) => setMsg(val)} multiline style={message.textInput} placeholder='Aa' />
                    <TouchableOpacity style={message.sendButton}
                        onPress={() => {
                            sendMessage(msg)
                            setMsg('')
                        }} >
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default ChatInput