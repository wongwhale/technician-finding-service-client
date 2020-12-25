import React, { useRef, useState } from 'react'


import Footer from '../../components/Registor/Footer'
import { registor, color } from '../../stylesheet'
import { inputStyles } from '../../components/MyTextInput'
import Feather from 'react-native-vector-icons/Feather'

import { setPhoneNumber } from '../../store/actions/regAction'

import { Text, SafeAreaView, View, TouchableOpacity, Keyboard } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import MyButton from '../../components/MyButton'
import { connect } from 'react-redux'
import WEB_URL from '../../misc/web_url'
import axios from 'axios'

const mapStateToProps = (state) => ({
    phone: state.reg.phone
})

const connector = connect(mapStateToProps, { setPhoneNumber })

const PhoneNumber = (props) => {

    const phoneRef = useRef()
    const [phoneStatus, setPhoneStatus] = useState(null)

    const hanndlePhoneNumber = (val) => {
        const check = /^0/.test(val)
        if (check) {
            setPhoneStatus(/[\d]{10}$/.test(val))
            if (val.length > 1) props.setPhoneNumber(val.slice(1, val.length))
            else props.setPhoneNumber(val)
            status = /[\d]{9}$/.test(val)
            if (status) Keyboard.dismiss()
            return status
        }
        else {
            props.setPhoneNumber(val)
            setPhoneStatus(/[\d]{9}/.test(val))
            status = /[\d]{9}$/.test(val)
            if (status) Keyboard.dismiss()
            return status
        }

    }

    return (
        <>
            <SafeAreaView style={{ backgroundColor: color.WHITE, flex: 1 }}>
                <View style={registor.container}>
                    <View style={{ marginBottom: 15, width: '100%', alignItems: 'center' }}>
                        <Text style={[registor.whaturname, phoneStatus !== null && !phoneStatus ? inputStyles.textRed : null]}>
                            กรอกเบอร์โทร
                        </Text>
                    </View>
                    <View style={[registor.phoneInputContainer, phoneStatus !== null && !phoneStatus ? inputStyles.borderRed : null]}>
                        <View style={{ borderRightWidth: 2, borderRightColor: phoneStatus !== null && !phoneStatus ? color.RED_3 : color.BLUE_3, marginRight: 5 }}>
                            <Text style={[registor.regionNumber, phoneStatus !== null && !phoneStatus ? inputStyles.textRed : null]}>
                                +66
                            </Text>
                        </View>
                        <TextInput
                            placeholder=''
                            style={[registor.phoneInput, phoneStatus !== null && !phoneStatus ? inputStyles.textRed : null]}
                            autoFocus
                            ref={phoneRef}
                            keyboardType='phone-pad'
                            value={props.phone}
                            onChangeText={(val) => {
                                hanndlePhoneNumber(val)
                            }}
                            maxLength={9}
                        />
                        {
                            !phoneStatus
                                ? <Feather name='x' style={[inputStyles.icon, phoneStatus !== null && !phoneStatus ? inputStyles.textRed : null]} />
                                : null
                        }

                    </View>
                    <MyButton
                        title='ถัดไป'
                        onPress={() => {
                            if (hanndlePhoneNumber(props.phone)) {
                                axios({
                                    url: `${WEB_URL}/api/otp`,
                                    method: 'post',
                                    data: {
                                        query:
                                            `query{
                                                phoneCheck(phone:"${props.phone}")
                                            }`
                                    }
                                }).then(res => {
                                    if(res.data.data.phoneCheck) props.navigation.navigate('reg_otp')
                                    else {
                                        setPhoneStatus(false)
                                    }
                                })
                            }
                        }} />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(PhoneNumber)