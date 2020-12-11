import React, { } from 'react'

import { SafeAreaView, View, Text, ScrollView } from 'react-native'

import Header from '../components/Header'
import MessageList from '../components/Message/MessageList'

import { content } from '../stylesheet'


const Message = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header page='กล่องข้อความ' navigation={navigation} back={true} chat={true} />
                <ScrollView style={content.container}>
                    <MessageList status={true} name='ปริญญา สีตะวัน' lastMessage='สวัสดีครับ' status={false} badges={1} navigation={navigation} />
                    <MessageList status={true} name='ธีรภัทร์ รัตนพิกุล  ' lastMessage='นวดไหมครับ' status={true} badges={0} navigation={navigation} />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Message