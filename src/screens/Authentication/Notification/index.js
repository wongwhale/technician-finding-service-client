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

import { content } from '../../../stylesheet'

import UserNotification from '../../../components/UserNotification'
import TechnicianNotification from '../../../components/TechnicianNotification'
import { connect } from 'react-redux'

import { createMaterialTopTabNavigator  } from '@react-navigation/material-top-tabs'
import NewOrderTab from './NewOrderTab'


const TopTab = createMaterialTopTabNavigator()

const mapStateToProps = (state) => ({
    role: state.auth.userInfo.role,
    userResponse: state.noti.userResponse
})

const mapDispatchToProps = {

}


const Notification = ({navigation , role , userResponse }) => {
    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.topsafearray}>
                <Header page="การแจ้งเตือน" navigation={navigation} />
                {
                    role === 'technician' ? (
                        <>
                            {/* <TopTab.Navigator>
                                 <TopTab.Screen name='newOrder' component={NewOrderTab} />
                                 <TopTab.Screen name='accepted' component={NewOrderTab} />
                             </TopTab.Navigator> */}
                        </>
                    ) :
                        role === 'user' ? (
                            <ScrollView>
                                {
                                    userResponse.length !== 0 ? (
                                        userResponse.map((item) => {
                                            console.log('user test noti', item);
                                            return (
                                                <View key={item._id} style={content.container}>
                                                    <UserNotification orderID={item._id} acceptedTech={item.acceptedTech} />
                                                </View>
                                            )
                                        })
                                    ) : null
                                }
                            </ScrollView>
                        ) : (
                            <>
                                <View>
                                    <Text>
                                        ไม่มีการแจ้งเตือน
                                    </Text>
                                </View>
                            </>
                        )
                }
            </SafeAreaView>
                {/* <ScrollView>
                    {
                        props.role === 'technician' ? (
                            <View style={content.container}>
                                <TechnicianNotification />
                            </View>
                        ) : null
                    }
                    {
                        props.userResponse.length !== 0 ? (
                            props.userResponse.map((item) => {
                                console.log('user test noti' , item);
                                return (
                                    <View key={item._id} style={content.container}>
                                        <UserNotification orderID={item._id} acceptedTech={item.acceptedTech} />
                                    </View>
                                )
                            })
                        ) : null
                    }
                </ScrollView> */}

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)