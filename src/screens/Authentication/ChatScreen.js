import React, { useState, useRef, useEffect } from 'react'

import { View, Text, SafeAreaView , Keyboard } from 'react-native'

import ChatHeader from '../../components/Chat/ChatHeader'
import ChatInput from '../../components/Chat/ChatInput'
import ChatBox from '../../components/Chat/ChatBox'

import { ScrollView } from 'react-native-gesture-handler'
import { color } from '../../stylesheet'
import { connect } from 'react-redux'
import { SEND_MESSAGE , LEAVE_PRIVATE_CHAT } from '../../store/actions/chatAction'

const mapStateToProps = (state) => ({
    cid: state.chat.cid,
    uid: state.auth.userInfo.uid
})

const connector = connect(mapStateToProps, { SEND_MESSAGE , LEAVE_PRIVATE_CHAT })

const Chat = (props) => {

    const scrollView_ref = useRef()

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide)
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        }
    },[])

    const _keyboardDidShow = () => {
        scrollView_ref.current.scrollToEnd({ animated: true })
    }

    const _keyboardDidHide = () => {
        scrollView_ref.current.scrollToEnd({ animated: true })
    }


    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: color.WHITE }}>
                <ChatHeader navigation={props.navigation} />
                <ScrollView
                    ref={scrollView_ref}
                    onContentSizeChange={() => {
                        scrollView_ref.current.scrollToEnd({ animated: true })
                    }}
                >
                    <ChatBox message={props.messages} />
                </ScrollView>
                <ChatInput />
            </SafeAreaView>
        </>
    )
}

export default connector(Chat)