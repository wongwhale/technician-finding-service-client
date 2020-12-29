import React, { useState, useRef } from 'react'


import Footer from '../../components/Registor/Footer'
import MyButton from '../../components/MyButton'
import MyTextInput from '../../components/MyTextInput'
import { registor, color } from '../../stylesheet'
import WEB_URL from '../../misc/web_url'

import { Text, SafeAreaView, View } from 'react-native'
import axios from 'axios'

import { connect } from 'react-redux'
import { setUsername, setPassword } from '../../store/actions/regAction'

const mapStateToProps = (state) => ({
    username: state.reg.username,
    password: state.reg.password
})

const connector = connect(mapStateToProps, { setUsername, setPassword })

const BasicInfo = (props) => {
    const [confirmPassword, setConfirmPassword] = useState('')
    const [unameStatus, setUnameStatus] = useState(null)
    const [passwordStatus, setPasswordStatus] = useState(null)
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(null)

    const handleUsername = async (username) => {
        const check = await axios({
            url: `${WEB_URL}/api/graphql`,
            method: 'post',
            data: {
                query: `
                        query{
                            usernameCheck(
                                username:"${username}"
                            )
                        }
                    `
            }
        }).then((res) => {
            if (res.data.data.usernameCheck && /^[a-z0-9_-]{4,}/.test(username)) {
                setUnameStatus(true)
                return true
            }
            else {
                setUnameStatus(false)
                return false
            }
        })
        return check
    }

    const handlePassword = (password) => {
        const check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password) && password !== '' ? true : false
        setPasswordStatus(check)
        return check
    }

    const handleConfirmPassword = (val) => {
        setConfirmPassword(val)
        const check = val === props.password && val !== '' ? true : false
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
                            props.setUsername(val)
                        }}
                        value={props.username}
                        isOnBlur={true}
                        onBlur={() => handleUsername(props.username)}
                        status={unameStatus}
                    />
                    <Text style={registor.descText}>
                        {'- ใช้ตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น \n-  มีความยาวมากกว่า 4 ตัวอักษร'}
                    </Text>
                    <MyTextInput
                        placeholder='Password'
                        onChangeText={(val) => props.setPassword(val)}
                        isSecure={true}
                        value={props.password}
                        isOnBlur={true}
                        onBlur={() => handlePassword(props.password)}
                        status={passwordStatus}
                    />
                    <Text style={registor.descText}>
                        {'- ใช้อักขระ 8 ตัวขึ้นไปที่มีทั้ง ตัวเลข ตัวอักษรพิมเล็กและพิมใหญ่'}
                    </Text>
                    <MyTextInput
                        placeholder='Confirm Password'
                        onChangeText={async (val) => {
                            handleConfirmPassword(val)
                        }}
                        isSecure={true}
                        value={confirmPassword}
                        status={confirmPasswordStatus}
                    />
                    <MyButton title='ถัดไป'
                        onPress={() => {
                            handleUsername(props.username).then((isCheck) => {
                                if (isCheck && handlePassword(props.password) && handleConfirmPassword(confirmPassword)) {
                                    props.navigation.navigate('reg_name')
                                }
                            })
                        }}
                    />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(BasicInfo)