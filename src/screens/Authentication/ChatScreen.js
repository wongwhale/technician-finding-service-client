import React, { useState, useRef, useEffect } from 'react'

import { View, Text, SafeAreaView, Keyboard, KeyboardAvoidingView } from 'react-native'

import ChatHeader from '../../components/Chat/ChatHeader'
import ChatInput from '../../components/Chat/ChatInput'
import ChatBox from '../../components/Chat/ChatBox'

import { ScrollView } from 'react-native-gesture-handler'
import { color, content } from '../../stylesheet'
import { connect } from 'react-redux'
import { SEND_MESSAGE, LEAVE_PRIVATE_CHAT, clear } from '../../store/actions/chatAction'

const mapStateToProps = (state) => ({
    cid: state.chat.cid,
    uid: state.auth.userInfo.uid,
    messages: state.chat.messages
})

const connector = connect(mapStateToProps, { clear, SEND_MESSAGE, LEAVE_PRIVATE_CHAT })

const Chat = (props) => {

    const scrollView_ref = useRef()

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide)
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
            props.LEAVE_PRIVATE_CHAT()
        }
    }, [])

    const _keyboardDidShow = () => {
        scrollView_ref.current.scrollToEnd({ animated: true })
    }

    const _keyboardDidHide = () => {
        scrollView_ref.current.scrollToEnd({ animated: true })
    }


    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <KeyboardAvoidingView
                behavior='padding'
                style={{ flex: 1 }}
            >
                <SafeAreaView style={content.safearray}>
                    <ChatHeader navigation={props.navigation} />
                    {/* {
                        props.messages.length !== 0 ? (
                            <ScrollView
                                ref={scrollView_ref}
                                onContentSizeChange={() => {
                                    scrollView_ref.current.scrollToEnd({ animated: true })
                                }}
                            >
                                <ChatBox />
                            </ScrollView>
                        )
                            :
                            (
                                <>
                                    <View
                                        style={{
                                            flex : 1,
                                            justifyContent : 'center',
                                            alignItems : 'center'
                                        }}
                                    >
                                        
                                    </View>
                                </>
                            )
                    } */}
                    <ScrollView
                        ref={scrollView_ref}
                        onContentSizeChange={() => {
                            scrollView_ref.current.scrollToEnd({ animated: true })
                        }}
                    >
                        <ChatBox />
                    </ScrollView>
                    <ChatInput />
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

export default connector(Chat)