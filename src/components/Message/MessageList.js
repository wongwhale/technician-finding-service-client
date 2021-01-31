import React, { } from 'react'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import { message, widthToDp } from '../../stylesheet'
import { TextInput } from 'react-native-gesture-handler'

const lorem = 'asdlhaslkdgjhaskjdhgkasjhgiuwehgjaksdhgkjashdgkljahsdiuvnczn,mxcnv.z,bvodjasdfasdklfhasd9hajdkghaslkdgjhasdgaiughasdkgjasbnbcvwuebasdlfjahsdfkjahslkfdhja'

const MessageList = ({ status, name, lastMessage, badges, onPress, avatar, msgType }) => {

    return (
        <>
            <TouchableOpacity style={message.listContainer} onPress={() => onPress()}>
                <View style={message.imageContainer}>
                    {/* image */}
                    <Image style={message.image} source={{ uri: avatar }} />
                    {
                        badges !== 0 ? (
                            <View style={message.badges}>
                                <Text style={message.badgesText}>
                                    {badges}
                                </Text>
                            </View>
                        )
                            :
                            null
                    }
                </View>
                <View style={message.listContent}>
                    <Text style={[message.name, !status ? message.unreadName : null]}>
                        {name}
                    </Text>
                    <Text
                        style={[message.text, !status ? message.unreadMessage : null,
                        {
                            height : widthToDp('5'),
                            lineHeight:widthToDp('5')
                        }
                        ]}>
                        {
                            msgType === 'image' ? `${name} ได้ส่งรูปภาพ` :
                            msgType === "text" ? `${name} ${lastMessage}`
                            : null
                        }
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default MessageList