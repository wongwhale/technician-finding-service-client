import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { content, widthToDp, global, color } from '../../stylesheet'
import Feather from 'react-native-vector-icons/Feather'
import Header from '../../components/Setting/Header'

import { connect } from 'react-redux'
import { logout } from '../../store/actions/authAction'

const mapStateToProps = (state) => ({
    role: state.auth.userInfo.role
})

const mapDispatchToProps = {
    logout,
}

const SettingScreen = (props) => {
    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray, { backgroundColor: color.WHITE }]}>
                <Header navigation={props.navigation} title='ตั้งค่า' />
                <View style={{ flex: 1, backgroundColor: color.WHITE }}>
                    <View style={{ height: widthToDp('10'), marginTop: widthToDp('2') }}>
                        <TouchableOpacity
                            style={
                                {
                                    height: widthToDp('10'),
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff'
                                }}
                        >
                            <Text>
                                ประวัติ
                        </Text>
                        </TouchableOpacity>
                    </View>
                    {
                        props.role === 'user' ? (
                            <View style={{ height: widthToDp('10') }}>
                                <TouchableOpacity
                                    style={
                                        {
                                            height: widthToDp('10'),
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#fff'
                                        }}
                                    onPress={() => {
                                        props.navigation.navigate('regTech')
                                    }}
                                >
                                    <Text>
                                        สมัครเป็นช่าง
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : null
                    }
                    <View style={{ height: widthToDp('10') }}>
                        <TouchableOpacity
                            style={
                                {
                                    height: widthToDp('10'),
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff'
                                }}
                        >
                            <Text>
                                ข้อแก้ไขข้อมูลส่วนตัว
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: widthToDp('10') }}>
                        <TouchableOpacity
                            style={
                                {
                                    height: widthToDp('10'),
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: color.RED_4
                                }}
                            onPress={() => {
                                props.logout()
                            }}
                        >
                            <Feather name="log-out" />
                            <Text>
                                ออกจากระบบ
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)