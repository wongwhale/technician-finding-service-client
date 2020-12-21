import React, { useRef, useState } from 'react'


import Footer from '../../components/Registor/Footer'
import { registor, color } from '../../stylesheet'
import { registor_success } from '../../store/actions/regAction'
import MyButton from '../../components/MyButton'

import { Text, SafeAreaView, View, TouchableOpacity , Keyboard} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    username : state.reg.username,
    password : state.reg.password,
    firstname : state.reg.firstname,
    lastname : state.reg.lastname,
    phone : state.reg.phone,
    role : state.reg.role
})

const connector = connect(mapStateToProps , {registor_success})

const OTP = (props) => {
    const pin1_ref = useRef()
    const pin2_ref = useRef()
    const pin3_ref = useRef()
    const pin4_ref = useRef()
    const pin5_ref = useRef()
    const pin6_ref = useRef()

    const [pin1, setPin1] = useState('')
    const [pin2, setPin2] = useState('')
    const [pin3, setPin3] = useState('')
    const [pin4, setPin4] = useState('')
    const [pin5, setPin5] = useState('')
    const [pin6, setPin6] = useState('')

    const handleOTP = () => {
        if( pin1.length === 1 && pin2.length === 1 && pin3.length === 1 
            && pin4.length === 1 && pin5.length === 1 && pin6.length === 1 ) {
                return true
            }
        else {
            return false
        }
    }

    return (
        <>
            <SafeAreaView style={{ backgroundColor: color.WHITE, flex: 1 }}>
                <View style={registor.container}>
                    <View style={{ marginBottom: 15, width: '100%', alignItems: 'center' }}>
                        <Text style={registor.whaturname}>
                            กรอกรหัส OTP 6 หลัก
                        </Text>
                    </View>
                    <View style={registor.otpContainer}>
                        <TextInput
                            autoFocus
                            placeholder=''
                            style={registor.otpInput}
                            keyboardType='phone-pad'
                            maxLength={1}
                            ref={pin1_ref}
                            value={pin1}
                            onChangeText={ (val) => {
                                setPin1(val)
                                pin1 == '' ? pin2_ref.current.focus() : null
                            }}
                            onFocus={ () => setPin1('')}
                            selectionColor={color.BLUE_3}
                        />
                        <TextInput
                            placeholder=''
                            style={registor.otpInput}
                            keyboardType='phone-pad'
                            maxLength={1}
                            value={pin2}
                            ref={pin2_ref}
                            onChangeText={ (val) => {
                                setPin2(val)
                                pin2 == '' ? pin3_ref.current.focus() : null
                            }}
                            onFocus={ () => setPin2('')}
                            selectionColor={color.BLUE_3}
                        />
                        <TextInput
                            placeholder=''
                            style={registor.otpInput}
                            keyboardType='phone-pad'
                            maxLength={1}
                            ref={pin3_ref}
                            onChangeText={ (val) => {
                                setPin3(val)
                                pin3 == '' ? pin4_ref.current.focus() : null
                            }}
                            onFocus={ () => setPin3('')}
                            selectionColor={color.BLUE_3}
                        />
                        <TextInput
                            placeholder=''
                            style={registor.otpInput}
                            keyboardType='phone-pad'
                            maxLength={1}
                            ref={pin4_ref}
                            onChangeText={ (val) => {
                                setPin4(val)
                                pin4 == '' ? pin5_ref.current.focus() : null
                            }}
                            onFocus={ () => setPin4('')}
                            selectionColor={color.BLUE_3}
                        />
                        <TextInput
                            placeholder=''
                            style={registor.otpInput}
                            keyboardType='phone-pad'
                            maxLength={1}
                            ref={pin5_ref}
                            onChangeText={ (val) => {
                                setPin5(val)
                                pin5 == '' ? pin6_ref.current.focus() : null
                            }}
                            onFocus={ () => setPin5('')}
                            selectionColor={color.BLUE_3}
                        />
                        <TextInput
                            placeholder=''
                            style={registor.otpInput}
                            keyboardType='phone-pad'
                            maxLength={1}
                            ref={pin6_ref}
                            onChangeText={ (val) => {
                                setPin6(val)
                                pin6 == '' ? Keyboard.dismiss() : null
                            }}
                            onFocus={ () => setPin6('')}
                            selectionColor={color.BLUE_3}
                        />
                    </View>
                    <MyButton title='ยืนยัน' onPress={ () => {
                        if(handleOTP()) {
                            props.registor_success({
                                username : props.username ,
                                password : props.password ,
                                firstname : props.firstname,
                                lastname : props.lastname,
                                phone : props.phone ,
                                role : props.role
                            })
                        };
                    }} />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(OTP)