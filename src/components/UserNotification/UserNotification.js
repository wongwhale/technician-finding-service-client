import React, { useEffect} from 'react'

import { Text, View, TouchableOpacity } from 'react-native'

import { userNotification } from '../../stylesheet'

import { Rating } from 'react-native-ratings';

import Abstract from './Abstract'

const UserNotification = () => {
    const orderID = '#12312as'
    return (
        <>
            <View style={userNotification.container}>
                <View style={userNotification.headerContainer}>
                    <Text>
                        <Text style={userNotification.headerText}>
                            การตอบรับของ
                        </Text>
                        <Text style={userNotification.headerID}>
                            {` ${orderID}`}
                        </Text>
                    </Text>
                </View>
                <View style={userNotification.content}>
                    <Abstract name='ปริญญากร เตจ๊ะเสาร์' star={2.76} distance="2.21" price='1000 - 2500' last={false} />
                    <Abstract name='ธีรภัทร์ รัตนพิกุล' star={3.65} distance="4.75" price='1500 - 2100' last={true} />
                </View>
            </View>
        </>
    )
}

export default UserNotification