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

import { content, widthToDp, color, heightToDp } from '../../../stylesheet'

import UserNotification from '../../../components/UserNotification'
import { connect } from 'react-redux'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NewRequestOrder from './NewRequestOrder'
import AcceptedRequestOrder from './AcceptedRequestOrder'

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
                <Header page="การแจ้งเตือน" navigation={navigation} isRadius={true} />
                <TopTab.Navigator
                    tabBarOptions={{
                        labelStyle: { fontSize: widthToDp('3'), fontWeight: 'bold' },
                        indicatorStyle: {
                            width: 0
                        },
                        bounces: true,
                        activeTintColor: color.IOS_YELLOW_DARK,
                        inactiveTintColor: color.GREY_5,
                        style: {
                            backgroundColor: '#fff',
                            borderBottomLeftRadius: heightToDp('3'),
                            borderBottomRightRadius: heightToDp('3')
                        }
                    }}
                    screenOptions={({ route }) => ({
                        tabBarLabel: ({ focused }) => {
                            let name
                            let weight
                            let fontColor
                            let badgeColor
                            if (route.name === 'newRequest') {
                                name = 'ออเดอร์ใหม่'
                                weight = focused ? 'bold' : 'normal'
                                fontColor = focused ? color.BLUE_0 : color.GREY_2
                                badgeColor = focused ? 'red' : color.YELLOW_1
                            } else if (route.name === 'acceptedRequest') {
                                name = 'ยืนยันแล้ว'
                                weight = focused ? 'bold' : 'normal'
                                fontColor = focused ? color.BLUE_0 : color.GREY_2
                                badgeColor = focused ? 'red' : color.YELLOW_1
                            }
                            return (
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'normal',
                                            fontSize: widthToDp('4'),
                                            color: fontColor
                                        }}
                                    >
                                        {name}
                                    </Text>
                                </View>
                            )
                        },
                    })
                    }
                >
                    <TopTab.Screen name='newRequest' component={NewRequestOrder} />
                    <TopTab.Screen name='acceptedRequest' component={AcceptedRequestOrder} />
                </TopTab.Navigator>
                {/* <ScrollView>
                    {
                        userResponse.length !== 0 ? (
                            userResponse.map((form) => {
                                console.log(form);
                                return (
                                    <View key={form._id} style={content.container}>
                                        <UserNotification 
                                            orderID={form._id} 
                                            detail={form.detail} 
                                            date={form.date} 
                                            acceptedTech={form.technician} 
                                            distance={form.distance}
                                        />
                                    </View>
                                )
                            })
                        ) : null
                    }
                </ScrollView> */}
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)