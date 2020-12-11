import React, { useState } from 'react'

import { View, Text, SafeAreaView } from 'react-native'

import ChatHeader from '../components/Chat/ChatHeader'
import ChatInput from '../components/Chat/ChatInput'
import ChatBox from '../components/Chat/ChatBox'

import { ScrollView } from 'react-native-gesture-handler'

const Chat = ({ navigation }) => {


    const [message, setMessage] = useState([
        { text: 'จ๊ะเอ๋ ตัวเอง', sender: false, name: 'ปริญญา สีตะวัน', time: new Date('December 1, 2020 13:32:54') } ,
        { text: 'ตึงโป๊ะ ตึกตึก', sender: false, name: 'ปริญญา สีตะวัน', time: new Date('December 1, 2020 13:32:54') } ,
        { text: 'สวัสดีครับ', sender: true, name: 'ปริญญากร เตจ๊ะเสาร์', time: new Date('December 1, 2020 13:15:21') },
        { text: '..', sender: true, name: 'ปริญญากร เตจ๊ะเสาร์', time: new Date('December 1, 2020 13:16:32') },
        { text: 'ว่าไงครับ', sender: false, name: 'ปริญญา สีตะวัน', time: new Date('December 1, 2020 13:18:37') },
    ])

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ChatHeader navigation={navigation} />
                <ScrollView>
                    <ChatBox message={message} />
                </ScrollView>
                <ChatInput sendMessage={(msg) => {
                    console.log(msg);
                    setMessage([...message, {
                        text: msg,
                        sender: true,
                        name: 'ปริญญากร เตจ๊ะเสาร์',
                        time: new Date()
                    }])
                }} />
            </SafeAreaView>
        </>
    )
}

export default Chat