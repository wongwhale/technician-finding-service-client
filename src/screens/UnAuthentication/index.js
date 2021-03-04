import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import BasicInfo from './BasicInfo'
import Name from './Name'
import SelectRole from './SelectRole'
import PhoneNumber from './PhoneNumber'
import OTP from './OTP'
import ImageProfile from './ImageProfile'
import Login from './Login'

import { clear } from '../../store/actions/regAction'
import { connect } from 'react-redux'

import { useFocusEffect } from '@react-navigation/native'

import LoadingModal from '../../components/Modal/LoadingModal'
import { KeyboardAvoidingView , Platform } from 'react-native'

const mapStateToProps = (state) => ({
    
})

const UnAuth = (props) => {
    return (
        <>
        <KeyboardAvoidingView
            style={{flex : 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Stack.Navigator>
                <Stack.Screen name='login' component={Login} options={{headerShown: false}} />
                <Stack.Screen name='reg_basic' component={BasicInfo} options={{ headerShown: false }} />
                <Stack.Screen name='reg_name' component={Name} options={{ headerShown: false }} />
                <Stack.Screen name='reg_select' component={SelectRole} options={{ headerShown: false }} />
                <Stack.Screen name='reg_phone' component={PhoneNumber} options={{ headerShown: false }} />
                <Stack.Screen name='reg_otp' component={OTP} options={{ headerShown: false }} />
                <Stack.Screen name='reg_image' component={ImageProfile} options={{ headerShown: false }} />
            </Stack.Navigator>
            <LoadingModal />
        </KeyboardAvoidingView>
        </>

    )
}

export default connect(mapStateToProps , {clear})(UnAuth)