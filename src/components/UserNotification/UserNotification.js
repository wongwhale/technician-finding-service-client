import React, { useEffect } from 'react'

import { Text, View, TouchableOpacity, Button } from 'react-native'

import { userNotification, widthToDp, color } from '../../stylesheet'

import { Rating } from 'react-native-ratings';

import Abstract from './Abstract'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const UserNotification = (props) => {
    return (
        <>
            <View style={userNotification.container}>
                <View style={userNotification.headerContainer}>
                    <Text>
                        <Text style={userNotification.headerText}>
                            {`การตอบรับของ `}
                        </Text>
                        <Text style={userNotification.headerID}>
                            {`#${props.orderID}`}
                        </Text>
                    </Text>
                </View>
                <View style={userNotification.content}>
                    {
                        props.acceptedTech !== undefined ? (
                            props.acceptedTech.length !== 0 ? (
                                props.acceptedTech.map((item, index) => {
                                    return <Abstract
                                        key={index}
                                        name='as;dlf asdl;fkj'
                                        star={2.5}
                                        distance='2.21'
                                        price='100 - 20000'
                                        last={item.index === props.acceptedTech.length}
                                    />
                                })
                            ) : (
                                    <>
                                        <View style={{ padding: widthToDp('1.5') }}>
                                            <Text style={{ fontSize: widthToDp('3.5'), color: color.BLUE_2 }}>
                                                ยังไม่มีการตอบรับ
                                        </Text>
                                        </View>
                                    </>
                                )
                        ) : (
                                <>
                                    <View style={{ padding: widthToDp('1.5') }}>
                                        <Text style={{ fontSize: widthToDp('3.5'), color: color.BLUE_2 }}>
                                            ยังไม่มีการตอบรับ
                                        </Text>
                                    </View>
                                </>
                            )
                    }
                </View>
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNotification)