import React, { } from 'react'

import { View, Text, Image } from 'react-native'
import { message } from '../../stylesheet'

const DateShow = ({ date, current_date }) => {
    return (
        <View style={message.newDateContainer}>
            <Text style={message.newDateText}>
                {
                    date.toDateString() === current_date.toDateString() ? (
                        date.toTimeString().slice(0, 8)
                    ) : (
                            date.toDateString()
                        )
                }
            </Text>
        </View>
    )
}

const ChatBubble = ({ sender, text, name, time, isLast, isFirst, isNewDate, type }) => {
    const current_date = new Date()
    return (
        <>
            {
                isNewDate ? <DateShow date={time} current_date={current_date} /> : null
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

                {
                    type === 'text' ? (
                        <View style={[message.bubble, sender ? message.rightBubble : message.leftBubble]}>
                            <Text style={[message.text, sender ? message.rightText : message.leftText]}>
                                {text}
                            </Text>
                        </View>
                    ) :
                        type === 'image' ? (
                            <Image
                                style={[message.bubleImage , sender ? message.rightImageBubble : message.leftImageBubble]}
                                source={{ uri: text }}
                            />
                        ) : null
                }

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
                        ) : null
                    }

                </View>
            </View>
        </>
    )
}

export default ChatBubble