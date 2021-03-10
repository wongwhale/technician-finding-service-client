import React from 'react'

import { SafeAreaView, ScrollView } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'

import Header from '../../components/Header'
import MessageList from '../../components/Message/MessageList'

import { content } from '../../stylesheet'
import { connect } from 'react-redux'

import { ENTER_PRIVATE_CHAT, ENTER_PRIVATE_CHAT_BY_ID, INITIAL_HISTORY_LIST, SET_INTERLOCUTOR_ID, unMountMessageScreen } from '../../store/actions/chatAction'
import { LOADED } from '../../store/actions/authAction'

const mapStateToProps = (state) => ({
    uid: state.auth.userInfo.uid,
    chat_history: state.chat.lists
})

const connector = connect(mapStateToProps, { unMountMessageScreen, SET_INTERLOCUTOR_ID, ENTER_PRIVATE_CHAT_BY_ID, ENTER_PRIVATE_CHAT, INITIAL_HISTORY_LIST, LOADED })

const Message = (props) => {

    // React.useEffect( () => {
    //     props.INITIAL_HISTORY_LIST(props.uid).then( () => {
    //         props.LOADED()
    //     }).catch(err => {

    //     })
    // },[])

    useFocusEffect(
        React.useCallback(() => {
            props.INITIAL_HISTORY_LIST(props.uid)
                .then((list) => {
                    props.LOADED()
                }).catch(err => {
                    console.log(err);
                })
        }, [])
    )

    React.useEffect(() => {
        return () => {
            props.unMountMessageScreen()
        }
    }, [])


    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header page='กล่องข้อความ' navigation={props.navigation} back={true} chat={true} isRadius={true} />
                <ScrollView style={content.container}>
                    {
                        props.chat_history.lenght !== 0 ? (
                            props.chat_history.map((item, index) => {
                                return <MessageList
                                    key={index}
                                    status={true}
                                    name={item.technicianID !== props.uid ? item.technicianName : item.userName}
                                    avatar={item.technicianID !== props.uid ? item.technicianAvatar : item.userAvatar}
                                    lastMessage={item.recentMessage.message}
                                    status={item.readStatus}
                                    badges={0}
                                    date={item.recentMessage.date}
                                    msgType={item.recentMessage.msgType}
                                    onPress={() => {
                                        props.ENTER_PRIVATE_CHAT_BY_ID(item._id)
                                            .then(() => {
                                                props.navigation.navigate('chat')
                                                props.LOADED()
                                            })
                                    }} />
                            })
                        ) : null
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connector(Message)