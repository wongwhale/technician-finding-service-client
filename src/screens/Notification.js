import React , {} from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import Header from '../components/Header'

import {content} from '../stylesheet'

import UserNotification from '../components/UserNotification'

const Notification = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={{flex:1 , backgroundColor:'white'}}>
                <Header page="การแจ้งเตือน"  navigation={navigation} />
                <View style={content.container}>
                    <UserNotification />
                </View>
            </SafeAreaView>
            
        </>
    )
}

export default Notification