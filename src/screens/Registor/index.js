import React, { useState, useRef } from 'react'

import { SafeAreaView, View, Text, Button, Keyboard } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Footer from '../../components/Registor/Footer'
import MyTextInput from '../../components/MyTextInput'
import MyButton from '../../components/MyButton'
import { color, registor } from '../../stylesheet'
import BasicInfo from './BasicInfo'
import Name from './Name'
import SelectRole from './SelectRole'
import PhoneNumber from './PhoneNumber'
import OTP from './OTP'

const Registor = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [status, setStatus] = useState('')
    const [passwordSecure, setPasswordSecure] = useState(true)
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState('')
    const [passwordDifficulty, setPasswordDifficulty] = useState('')

    const checkNumeric = async (string) => {

        const test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(string)
        console.log(test);
    }

    const handlePassword = (pw) => {
        pw.length < 8 ? setStatus('ง่าย') : setStatus('ปกติ')
        pw.length == 0 ? setStatus('') : null
    }

    return (
        <>

            <Stack.Navigator>
                <Stack.Screen name='basic' component={BasicInfo} options={{ headerShown: false }} />
                <Stack.Screen name='name' component={Name} options={{ headerShown: false }} />
                <Stack.Screen name='select' component={SelectRole} options={{ headerShown: false }} />
                <Stack.Screen name='phone' component={PhoneNumber} options={{ headerShown: false }} />
                <Stack.Screen name='otp' component={OTP} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>

    )
}

export default Registor