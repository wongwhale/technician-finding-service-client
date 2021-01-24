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

import NewOrderTab from './NewOrderTab'
import AcceptedOrderTab from './AcceptedOrderTab'


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
                {
                    role === 'technician' ? (
                        <>
                            <TopTab.Navigator lazy tabBarPosition='top'
                                tabBarOptions={{
                                    labelStyle : { fontSize : widthToDp('3.6') , fontWeight : 'bold'},
                                    indicatorStyle : { backgroundColor : color.BLUE_1 }
                                }}
                                screenOptions = { ({route}) => ({
                                    tabBarLabel : ({focused}) => {
                                        let name 
                                        let weight
                                        let fontColor
                                        if(route.name === 'newOrderTab'){
                                            name = 'ออเดอร์ใหม่'
                                            weight = focused ? 'bold' : 'normal' 
                                            fontColor = focused ? color.BLUE_0 : color.BLUE_4
                                        }else if (route.name === 'acceptedOrderTab'){
                                            name = 'ยืนยันแล้ว'
                                            weight = focused ? 'bold' : 'normal' 
                                            fontColor = focused ? color.BLUE_0 : color.BLUE_4
                                        }
                                        return <Text style={{fontWeight : weight , color : fontColor , fontSize : widthToDp('4') }}>{name}</Text>
                                    },
                                    
                                })}
                            >
                                <TopTab.Screen name='newOrderTab' component={NewOrderTab} />
                                <TopTab.Screen name='acceptedOrderTab' component={AcceptedOrderTab} />
                            </TopTab.Navigator>
                            {/* <View style={{ flex: 1 }}>
                                <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                                    <View style={{ flexDirection: 'row' , justifyContent : 'space-evenly' }}>
                                        <TouchableOpacity>
                                            <Text>New Order</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text>Accepted Order</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> */}
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
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)