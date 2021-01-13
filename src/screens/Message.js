import React, {  } from 'react'

import { SafeAreaView, View, Text, ScrollView } from 'react-native'

import Header from '../components/Header'
import MessageList from '../components/Message/MessageList'

import { content } from '../stylesheet'
import { connect } from 'react-redux'

import { ENTER_PRIVATE_CHAT } from '../store/actions/chatAction'

const mapStateToProps = (state) => ({
    uid : state.auth.userInfo.uid,
    chat_history : state.chat.lists
})

const connector = connect(mapStateToProps , {ENTER_PRIVATE_CHAT})

const Message = (props) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header page='กล่องข้อความ' navigation={props.navigation} back={true} chat={true} />
                <ScrollView style={content.container}>
                    {
                        props.chat_history.lenght !== 0 ? (
                            props.chat_history.map((item , index) => {
                                return <MessageList 
                                    key={index}
                                    status={true} 
                                    name={ item.technicianID !== props.uid ? item.technicianName : item.userName } 
                                    lastMessage={item.recentMessage.message} 
                                    status={true} 
                                    badges={0} 
                                    onPress={ () => {
                                        if(props.uid !== item.technicianID){
                                            props.ENTER_PRIVATE_CHAT(props.uid , item.technicianID)
                                            .then( () => props.navigation.navigate('chat'))
                                        }else{
                                            props.ENTER_PRIVATE_CHAT(props.uid , item.userID)
                                            .then( () => props.navigation.navigate('chat'))
                                        }
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