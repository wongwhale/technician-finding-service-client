import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { content, widthToDp, global, color } from '../../stylesheet'
import Feather from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authAction'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    logout,
}

const SettingScreen = (props) => {
    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray, { backgroundColor: color.BLUE_5 }]}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: widthToDp('10'),
                        backgroundColor: color.WHITE
                    }}>
                    <TouchableOpacity
                        style={global.backIconContainer}
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    >
                        <Feather style={global.backIcon} name='chevron-left' />
                    </TouchableOpacity>
                    <Text style={{ color: color.BLUE_2, fontSize: widthToDp('4') }}>
                        ตั้งค่า
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: color.BLUE_5 }}>
                    <View style={{ height: widthToDp('10'), marginTop: widthToDp('2') }}>
                        <TouchableOpacity
                            style={
                                {
                                    height: widthToDp('10'),
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: color.WHITE
                                }}
                        >
                            <Text>
                                ประวัติ
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
                                    backgroundColor: color.WHITE
                                }}
                        >
                            <Text>
                                อะไรสักอย่าง
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
                                    backgroundColor: color.WHITE
                                }}
                        >
                            <Text>
                                ข้อแก้ไขข้อมูลส่วนตัว
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: widthToDp('10')}}>
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