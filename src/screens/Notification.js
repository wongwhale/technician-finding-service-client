import React, { } from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import Header from '../components/Header'

import { content, technician } from '../stylesheet'

import UserNotification from '../components/UserNotification'
import TechnicianInfo from '../components/TechnicianNotification'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    role: state.auth.userInfo.role
})

const mapDispatchToProps = {

}

const Notification = (props) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header page="การแจ้งเตือน" navigation={props.navigation} />
                <ScrollView>
                    {
                        props.role === 'technician' ? (
                            <View style={content.container}>
                                <TechnicianInfo />
                            </View>
                        ) : null
                    }
                    <View style={content.container}>
                        <UserNotification />
                    </View>
                </ScrollView>
            </SafeAreaView>

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)