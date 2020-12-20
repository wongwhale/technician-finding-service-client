import React, { useState, useRef } from 'react'


import Footer from '../../components/Registor/Footer'
import MyButton from '../../components/MyButton'
import MyTextInput from '../../components/MyTextInput'
import { registor, color } from '../../stylesheet'

import { Text, SafeAreaView, View } from 'react-native'

import { connect } from 'react-redux'
import { setUsernamePassword } from '../../store/actions/regAction'

const mapStateToProps = (state) => ({
    username: state.reg.username,
    password: state.reg.password
})

const connector = connect(mapStateToProps, { setUsernamePassword })

const BasicInfo = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [unameStatus , setUnameStatus] = useState(null)
    const [passwordStatus , setPasswordStatus] = useState(null)
    const [confirmPasswordStatus , setConfirmPasswordStatus] = useState(null)

    const handleUsername = () => {
        const check = /^[a-z0-9_-]{4,}/.test(username)
        // return check
        console.log( username , check);
        setUnameStatus(check)
        return check
    }

    const handlePassword = () => {
        const check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password) && password !== '' ? true : false
        setPasswordStatus(check)
        return check
    }

    const handleConfirmPassword = () => {
        const check = confirmPassword === password && confirmPassword !== '' ? true : false
        if(check) console.log('ตรง');
        setConfirmPasswordStatus(check)
        return check
    }

    return (
        <>
            <SafeAreaView style={{ backgroundColor: color.WHITE, flex: 1 }}>
                <View style={registor.container}>
                    <MyTextInput
                        placeholder='Username'
                        onChangeText={(val) => {
                            setUsername(val)
                        }}
                        value={username}
                        isOnBlur={true}
                        onBlur={ () => handleUsername()}
                        status={unameStatus}
                    />
                    <Text style={registor.descText}>
                        {'- ใช้ตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น \n-  มีความยาวมากกว่า 4 ตัวอักษร'}
                    </Text>
                    <MyTextInput 
                        placeholder='Password' 
                        onChangeText={(val) => setPassword(val)} 
                        isSecure={true} 
                        value={password}
                        isOnBlur={true}
                        onBlur={ () => handlePassword()}
                        status={passwordStatus}
                    />
                    <Text style={registor.descText}>
                        {'- ใช้อักขระ 8 ตัวขึ้นไปที่มีทั้ง ตัวเลข ตัวอักษรพิมเล็กและพิมใหญ่'}
                    </Text>
                    <MyTextInput 
                        placeholder='Confirm Password' 
                        onChangeText={(val) => setConfirmPassword(val)} 
                        isSecure={true} 
                        value={confirmPassword}
                        isOnBlur={true}
                        onBlur={ () => handleConfirmPassword()}
                        status={confirmPasswordStatus}
                    />
                    <MyButton title='ถัดไป'
                        onPress={() => {
                            if( handleUsername() && handleConfirmPassword()  && handlePassword()){
                                props.navigation.navigate('reg_name')
                            }else{
                                handleUsername()
                                handleConfirmPassword()
                                handlePassword()
                            }
                        }} 
                    />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(BasicInfo)