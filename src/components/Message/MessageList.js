import React, { } from 'react'

import { View, Text, Image , TouchableOpacity } from 'react-native'

import { message } from '../../stylesheet'

const MessageList = ({ status, name, lastMessage, badges , onPress}) => {

    return (
        <>
            <TouchableOpacity style={message.listContainer } onPress={ () => onPress()}>
                <View style={message.imageContainer}>
                    {/* image */}
                    <Image style={message.image} source={require('../UserNotification/test.jpg')} />
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
                    <Text style={[message.text, !status ? message.unreadMessage : null]}>
                        {lastMessage}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default MessageList