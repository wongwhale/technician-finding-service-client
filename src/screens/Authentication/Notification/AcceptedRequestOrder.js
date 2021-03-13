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

import { content, widthToDp, color } from '../../../stylesheet'

import UserNotification from '../../../components/UserNotification'
import { connect } from 'react-redux'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Header from '../../../components/UserInfo/Header'
import NotFoundComponent from '../../../components/NotFoundComponent'
import ContentLoader from 'react-native-easy-content-loader'

const TopTab = createMaterialTopTabNavigator()

const mapStateToProps = (state) => ({
    role: state.auth.userInfo.role,
    userConfirmed: state.noti.userConfirmed
})

const mapDispatchToProps = {

}


const AcceptedRequestOrder = ({ userConfirmed }) => {

    const [isReady, setIsReady] = React.useState(true)

    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}
            >
                <Header page='ยืนยันแล้ว' />
                {
                    isReady ? (
                        <>
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                        </>
                    ) : (
                            <ScrollView
                                style={{
                                    flex: 1,
                                    backgroundColor: '#fff'
                                }}
                            >
                                {
                                    userConfirmed.length !== 0 ? (
                                        userConfirmed.map((form) => {
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
                                    ) : <NotFoundComponent label='ไม่มีรายการที่ยืนยันแล้ว' />
                                }
                            </ScrollView>

                        )
                }
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptedRequestOrder)