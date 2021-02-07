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

const Btn = (props) => {
    return (
        <>
            <TouchableOpacity
                style={
                    {
                        height: widthToDp('10'),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        paddingHorizontal: widthToDp('5')
                    }}
                onPress={() => {
                    props.navigation()
                }}
            >
                <Text
                    style={{
                        fontSize: widthToDp('3.5'),
                        color: color.BLUE_0
                    }}
                >
                    {props.title}
                </Text>
                <Feather name='chevron-right'
                    style={{
                        fontSize: widthToDp('3.5'),
                        color: color.BLUE_0
                    }} />
            </TouchableOpacity>
        </>
    )
}

const SettingScreen = (props) => {
    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray, { backgroundColor: color.WHITE }]}>
                <Header navigation={props.navigation} title='ตั้งค่า' />
                <View style={{ flex: 1, backgroundColor: color.WHITE }}>
                    <View style={{ height: widthToDp('10'), marginTop: widthToDp('2') }}>
                        <Btn
                            title='ประวัติ'
                            navigation={() => props.navigation.navigate('editInfo')}
                        />
                    </View>
                    {
                        props.role === 'user' ? (
                            <Btn
                                title='สมัครเป็นช่าง'
                                navigation={() => props.navigation.navigate('regTech')}
                            />
                        ) : null
                    }
                    <Btn
                        title='แก้ไขข้อมูลส่วนตัว'
                        navigation={() => props.navigation.navigate('editInfo')}
                    />
                    <View style={{ height: widthToDp('10') }}>
                        <TouchableOpacity
                            style={
                                {
                                    height: widthToDp('10'),
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    paddingHorizontal: widthToDp('5'),
                                    alignItems: 'center',
                                    backgroundColor: color.RED_4
                                }}
                            onPress={() => {
                                props.logout()
                            }}
                        >
                            <Feather name="log-out"
                                style={{
                                    fontSize: widthToDp('4'),
                                    marginRight: widthToDp('2'),
                                    color: color.RED_0
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: widthToDp('4'),
                                    marginRight: widthToDp('2'),
                                    color: color.RED_0
                                }}
                            >
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