import React from 'react'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import { message, widthToDp } from '../../stylesheet'
import { TextInput } from 'react-native-gesture-handler'


const MessageList = ({ status, name, lastMessage, badges, date , onPress, avatar, msgType }) => {


    const _month = ['มค','กพ','มีค','เมย','พค','มิย','กค','สค','กย','ตค','พย','ธค']

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
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={[message.text, !status ? message.unreadMessage : null,
                            {
                                height: widthToDp('5'),
                                lineHeight: widthToDp('5')
                            }
                            ]}>
                            {
                                msgType === 'image' ? `${name} : ได้ส่งรูปภาพ` :
                                    msgType === "text" ? `${name} : ${lastMessage}`
                                        : null
                            }
                        </Text>
                        <Text
                            style={[message.text, !status ? message.unreadMessage : null,
                            {
                                height: widthToDp('5'),
                                lineHeight: widthToDp('5')
                            }
                            ]}>
                            {
                                new Date(date).getDate() !== new Date().getDate() 
                                && new Date(date).getDate() !== new Date().getMonth() 
                                && new Date(date).getFullYear !== new Date().getFullYear()
                                ? `${new Date(date).getDate()} ${_month[new Date(date).getMonth()]} ${new Date(date).getFullYear() + 543}`
                                : `${new Date(date).getHours()} : ${new Date(date).getMinutes()} น.`
                            }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default MessageList