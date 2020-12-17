import React, { useState } from 'react'


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

    const handleUsername = (uname) => {
        const check = /^[a-z0-9_-]{4,}/.test(uname)
        // return check
        console.log( username , check);
    }

    const haddlePassword = (pwss) => {
        const check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(pwss)
        if(check){
            console.log('pass');
        }else  console.log('reject')
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
                        onBlur={ () => handleUsername(username)}
                    />
                    <Text style={registor.descText}>{'- ใช้ตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น \n-  มีความยาวมากกว่า 4 ตัวอักษร'}</Text>
                    <MyTextInput 
                        placeholder='Password' 
                        onChangeText={(val) => setPassword(val)} 
                        isSecure={true} 
                        value={password}
                        isOnBlur={true}
                        onBlur={ () => haddlePassword(password)}
                    />
                    <Text style={registor.descText}>{'- ใช้อักขระ 8 ตัวขึ้นไปที่มีทั้ง ตัวเลข ตัวอักษรพิมเล็กและพิมใหญ่'}</Text>
                    <MyTextInput 
                        placeholder='Confirm Password' 
                        onChangeText={(val) => setConfirmPassword(val)} 
                        isSecure={true} 
                        value={confirmPassword}
                    />
                    <MyButton title='ถัดไป'
                        onPress={() => {
                            props.navigation.navigate('reg_name')
                            props.setUsernamePassword(username , password)
                        }} />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(BasicInfo)