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

const mapStateToProps = (state) => ({
    phone: state.reg.phone
})

const connector = connect(mapStateToProps, { setPhoneNumber })

const PhoneNumber = (props) => {

    const phoneRef = useRef()
    const [phoneStatus, setPhoneStatus] = useState(null)

    const hanndlePhoneNumber = () => {
        const check = /^0/.test(props.phone)

        if (check) {
            setPhoneStatus(/[\d]{10}$/.test(props.phone))
            return /[\d]{10}$/.test(props.phone)
        }
        else {
            if (props.phone.length != 0) props.setPhoneNumber('0' + props.phone)
            setPhoneStatus(/[\d]{9}/.test(props.phone))
            return /[\d]{9}/.test(props.phone)
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
                        <View style={{ borderRightWidth: 2, borderRightColor: phoneStatus ? color.BLUE_3 : color.RED_3 , marginRight: 5 }}>
                            <Text style={[registor.regionNumber, phoneStatus !== null && !phoneStatus ? inputStyles.textRed : null]}>
                                +66
                            </Text>
                        </View>
                        <TextInput
                            placeholder=''
                            style={[registor.phoneInput , phoneStatus !== null && !phoneStatus ? inputStyles.textRed : null]}
                            autoFocus
                            keyboardType='phone-pad'
                            value={props.phone}
                            onChangeText={(val) => {
                                if (val.length == 10) {
                                    Keyboard.dismiss()
                                }
                                props.setPhoneNumber(val)
                            }
                            }
                            onBlur={() => hanndlePhoneNumber()}
                            maxLength={10}

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
                            if (hanndlePhoneNumber()) props.navigation.navigate('reg_otp')
                        }} />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(PhoneNumber)