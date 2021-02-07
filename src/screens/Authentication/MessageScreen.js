import React, { useEffect, useState } from 'react'

import { SafeAreaView, View, Text, ScrollView } from 'react-native'

import Header from '../../components/Header'
import MessageList from '../../components/Message/MessageList'

import { content } from '../../stylesheet'
import { connect } from 'react-redux'

import { ENTER_PRIVATE_CHAT , ENTER_PRIVATE_CHAT_BY_ID , INITIAL_HISTORY_LIST , SET_INTERLOCUTOR_ID } from '../../store/actions/chatAction'
import { LOADED } from '../../store/actions/authAction'

const mapStateToProps = (state) => ({
    uid : state.auth.userInfo.uid,
    chat_history : state.chat.lists
})

const connector = connect(mapStateToProps , {SET_INTERLOCUTOR_ID ,ENTER_PRIVATE_CHAT_BY_ID, ENTER_PRIVATE_CHAT , INITIAL_HISTORY_LIST , LOADED} )

const Message = (props) => {

    return (
        <>  
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header page='กล่องข้อความ' navigation={props.navigation} back={true} chat={true} />
                <ScrollView style={content.container}>
                    {
                        props.chat_history.lenght !== 0 ? (
                            props.chat_history.map((item , index) => {
                                return <MessageList 
                                    key={index}
                                    status={true} 
                                    name={ item.technicianID !== props.uid ? item.technicianName : item.userName }
                                    avatar = {item.technicianID !== props.uid ? item.technicianAvatar : item.userAvatar} 
                                    lastMessage={item.recentMessage.message} 
                                    status={true} 
                                    badges={0} 
                                    msgType = {item.recentMessage.msgType}
                                    onPress={ () => {
                                        props.ENTER_PRIVATE_CHAT_BY_ID(item._id)
                                            .then( () => {
                                                props.LOADED()
                                                props.navigation.navigate('chat')
                                            })
                                        
                                        // if(props.uid !== item.technicianID){
                                        //     props.ENTER_PRIVATE_CHAT(props.uid , item.technicianID)
                                        //     .then( () => {
                                        //         props.LOADED()
                                        //         props.navigation.navigate('chat')
                                        //     })
                                        // }else{
                                        //     props.ENTER_PRIVATE_CHAT(item.technicianID , item.userID)
                                        //     .then( () => {
                                        //         props.LOADED()
                                        //         props.navigation.navigate('chat')
                                        //     })
                                        // }
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