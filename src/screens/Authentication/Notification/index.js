import React from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import Header from '../../../components/Header'

import { content, widthToDp, color } from '../../../stylesheet'

import UserNotification from '../../../components/UserNotification'
import { connect } from 'react-redux'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'



const TopTab = createMaterialTopTabNavigator()

const mapStateToProps = (state) => ({
    role: state.auth.userInfo.role,
    userResponse: state.noti.userResponse
})

const mapDispatchToProps = {

}


const Notification = ({ navigation, role, userResponse }) => {
    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header page="การแจ้งเตือน" navigation={navigation} />

                <ScrollView>
                    {
                        userResponse.length !== 0 ? (
                            userResponse.map((item) => {
                                console.log('user test noti', item);
                                return (
                                    <View style={content.container}>
                                        <UserNotification orderID={item._id} acceptedTech={item.acceptedTech} />
                                    </View>
                                )
                            })
                        ) : null
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)