import React, { useState } from 'react'


import Footer from '../../components/Registor/Footer'
import { registor, color } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'

const SelectRole = (props) => {
    // const [role , setRole] = useState('')
    return (
        <>
            <SafeAreaView style={{ backgroundColor: color.WHITE, flex: 1 }}>
                <View style={registor.container}>
                    <View style={{ marginBottom: 15, width: '100%', alignItems: 'center' }}>
                        <Text style={registor.whaturname}>
                            เลือกประเภทการใช้งาน
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={registor.selectBtn}
                            onPress={ () => props.navigation.navigate('reg_phone')}
                        >
                            <Feather name='user' style={registor.selectIcon} />
                            <Text style={registor.selectText}>
                                ผู้ใช้ทั่วไป
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={registor.selectBtn}
                            onPress={ () => props.navigation.navigate('reg_phone')}
                        >
                            <Feather name='tool' style={registor.selectIcon} />
                            <Text style={registor.selectText}>
                                ช่าง
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default SelectRole