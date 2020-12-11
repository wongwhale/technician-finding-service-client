import React, { } from 'react'

import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';


import { global } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

const ChatHeader = ({ navigation }) => {
    const badgesNum = 1
    return (
        <>
            <View style={[global.header]}>
                <View >
                    <Image style={global.interlocutorImage} source={require('../UserNotification/test.jpg')} />
                </View>
                <TouchableOpacity style={global.nameContainer} onPress={ () => navigation.navigate('techInfo')}>
                    <Text style={global.interlocutorName}>
                        ปริญญา สีตะวัน
                    </Text>
                    <Feather name="chevron-right" style={global.rightIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={global.backIconContainer}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Feather name="chevron-left" style={global.backIcon} />
                </TouchableOpacity>
            </View>
            <View style={global.bbt} />
        </>
    )
}

export default ChatHeader