import React, { useState, useRef, useEffect } from 'react'

import { View, Text, SafeAreaView, Keyboard, KeyboardAvoidingView, Image, Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import ChatHeader from '../../components/Chat/ChatHeader'
import ChatInput from '../../components/Chat/ChatInput'
import ChatBox from '../../components/Chat/ChatBox'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { color, content, widthToDp, heightToDp } from '../../stylesheet'
import { connect } from 'react-redux'
import { SEND_MESSAGE, LEAVE_PRIVATE_CHAT, clear } from '../../store/actions/chatAction'

import Modal from 'react-native-modalbox'


const mapStateToProps = (state) => ({
    cid: state.chat.cid,
    uid: state.auth.userInfo.uid,
    messages: state.chat.messages,
    imageUrl: state.chat.imageUrl
})

const connector = connect(mapStateToProps, { clear, SEND_MESSAGE, LEAVE_PRIVATE_CHAT })

const Chat = (props) => {

    const [imageIsOpen, setImageIsOpen] = React.useState(false)
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
                        <ChatBox setImageIsOpen={() => setImageIsOpen(true)} />
                    </ScrollView>
                    <ChatInput />
                </SafeAreaView>
            </KeyboardAvoidingView>
            <Modal
                isOpen={imageIsOpen}
                onClosed={() => setImageIsOpen(false)}
                backdropPressToClose={true}
                style={{
                    backgroundColor: 'transparent',
                    flex: 1
                }}
            >
                <SafeAreaView
                    style={{
                        flex: 1
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            alignItems : 'flex-end',
                            padding : widthToDp('2')
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                setImageIsOpen(false)
                            }}
                            style={{
                                backgroundColor: color.GREY_5,
                                borderRadius: widthToDp('8'),
                                width: widthToDp('8'),
                                height: widthToDp('8'),
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Feather
                                name='x'
                                style={{
                                    fontSize: widthToDp('6'),

                                }}
                                color={color.GREY_1}
                            />
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={{ uri: props.imageUrl }}
                        style={{
                            flex: 1,
                            resizeMode: 'contain',
                        }}
                    >
                    </Image>
                </SafeAreaView>

            </Modal>
        </>
    )
}

export default connector(Chat)