import React, { } from 'react'

import ChatBubble from '../Chat/ChatBubble'

const ChatBox = ({ message }) => {
    return (
        <>
            {
                message.map((item, index) => {
                    var isFirst = false
                    var isLast = false
                    var isNewDate = false

                    if (index === 0) {
                        isFirst = true
                        isNewDate = true
                        if (index < message.length - 1) {
                            if (message[index].sender !== message[index + 1].sender) {
                                isLast = true
                            } else {
                                isLast = false
                            }
                        } else {
                            isLast = true
                        }
                    } else if (index < message.length - 1) {
                        if (message[index].sender !== message[index + 1].sender) {
                            isLast = true
                        } else {
                            isLast = false
                        }
                        if (message[index].sender !== message[index - 1].sender) {
                            isFirst = true
                        } else {
                            isFirst = false
                        }

                        if (message[index].time.toDateString() !== message[index - 1].time.toDateString()) {
                            isNewDate = true
                        } else {
                            isNewDate = false
                        }
                    } else {
                        isLast = true
                        if (message[index].sender !== message[index - 1].sender) {
                            isFirst = true
                        } else {
                            isFirst = false
                        }

                        if (message[index].time.toDateString() !== message[index - 1].time.toDateString()) {
                            isNewDate = true
                        } else {
                            isNewDate = false
                        }
                    }
                    return <ChatBubble
                        key={index}
                        text={item.text}
                        sender={item.sender}
                        name={item.name}
                        time={item.time}
                        isFirst={isFirst}
                        isLast={isLast}
                        isNewDate={isNewDate}
                    />
                })
            }
        </>
    )
}

export default ChatBox