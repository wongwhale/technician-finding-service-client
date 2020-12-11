import React, { } from 'react'

import { View, Text } from 'react-native'
import { message } from '../../stylesheet'

const DateShow = ({date}) => {
    return(
        <View style={message.newDateContainer}>
            <Text style={message.newDateText}>
                {date.toDateString()}
            </Text>
        </View>
    )
}

const ChatBubble = ({ sender, text, name, time, isLast, isFirst ,isNewDate }) => {
    const current_date = new Date()

    return (
        <>
            {
                isNewDate ? <DateShow date={time} /> : null
            }
            
            <View style={[message.bubbleContainer, sender ? message.rightContainer : message.leftContainer]}>
                {
                    isFirst && !sender ?
                        (
                            <View style={[message.nameContainer, sender ? message.rightNameContainer : message.leftNameContainer]}>
                                <Text style={[message.nameText, sender ? message.rightNameText : message.leftNameText]}>{name}</Text>
                            </View>
                        ) : null
                }

                <View style={[message.bubble, sender ? message.rightBubble : message.leftBubble]}>
                    <Text style={[message.text, sender ? message.rightText : message.leftText]}>
                        {text}
                    </Text>
                </View>
                <View style={message.dateTimeContainer}>
                    {
                        isLast ? (
                            <Text style={message.dateTimeText}>
                                {
                                    current_date.toDateString() === time.toDateString() ?
                                        (
                                            `${time.toTimeString().slice(0, 8)} น.`
                                        ) :
                                        `${time.toDateString()}`
                                }
                            </Text>
                        ): null
                    }

                </View>
            </View>
        </>
    )
}

export default ChatBubble