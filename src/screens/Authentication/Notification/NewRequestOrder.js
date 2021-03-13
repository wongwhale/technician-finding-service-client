import React from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { content, widthToDp, color } from '../../../stylesheet'

import UserNotification from '../../../components/UserNotification'
import { connect } from 'react-redux'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Header from '../../../components/Header'
import NotFoundComponent from '../../../components/NotFoundComponent'
const TopTab = createMaterialTopTabNavigator()

const mapStateToProps = (state) => ({
    role: state.auth.userInfo.role,
    userResponse: state.noti.userResponse,
})

const mapDispatchToProps = {

}


const NewRequestOrder = ({ navigation, role, userResponse }) => {
    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}
            >
                <Header back page='รอการยืนยัน' />
                <ScrollView
                    style={{
                        flex: 1,
                        backgroundColor: '#fff'
                    }}
                >
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
                        ) : <NotFoundComponent label='ไม่มีการทำรายการ' />
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRequestOrder)