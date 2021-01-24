import React, { useEffect, useState } from 'react'

import { SafeAreaView, View, Text, ScrollView } from 'react-native'

import Header from '../../components/Header'
import MessageList from '../../components/Message/MessageList'

import { content } from '../../stylesheet'
import { connect } from 'react-redux'

import { ENTER_PRIVATE_CHAT , INITIAL_HISTORY_LIST , SET_INTERLOCUTOR_ID } from '../../store/actions/chatAction'

const mapStateToProps = (state) => ({
    uid : state.auth.userInfo.uid,
    chat_history : state.chat.lists
})

const connector = connect(mapStateToProps , {SET_INTERLOCUTOR_ID , ENTER_PRIVATE_CHAT , INITIAL_HISTORY_LIST})

const Message = (props) => {

    const [lists , setLists] = useState([])

    useEffect(() => {
        props.INITIAL_HISTORY_LIST(props.uid)
        .then( res => {
            setLists(res)
            console.log(res);
        })
        .catch( err => {
            setLists([])
        } )
    },[])

    return (
        <>  
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header page='กล่องข้อความ' navigation={props.navigation} back={true} chat={true} />
                <ScrollView style={content.container}>
                    {
                        lists.lenght !== 0 ? (
                            lists.map((item , index) => {
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
                                        // props.navigation.navigate('chat')
                                        if(props.uid !== item.technicianID){
                                            props.SET_INTERLOCUTOR_ID(item.technicianID)
                                            .then( () => {
                                                props.navigation.navigate('chat')
                                            })
                                        }else{
                                            props.SET_INTERLOCUTOR_ID(item.userID)
                                            .then( () => {
                                                props.navigation.navigate('chat')
                                            })
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