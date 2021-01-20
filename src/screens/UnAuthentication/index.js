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

const mapStateToProps = (state) => ({
    
})

const UnAuth = (props) => {
    React.useEffect(() => {
        return () => {
            props.clear()
        }
    })
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='login' component={Login} options={{headerShown: false}} />
                <Stack.Screen name='reg_basic' component={BasicInfo} options={{ headerShown: false }} />
                <Stack.Screen name='reg_name' component={Name} options={{ headerShown: false }} />
                <Stack.Screen name='reg_select' component={SelectRole} options={{ headerShown: false }} />
                <Stack.Screen name='reg_phone' component={PhoneNumber} options={{ headerShown: false }} />
                <Stack.Screen name='reg_otp' component={OTP} options={{ headerShown: false }} />
                <Stack.Screen name='reg_image' component={ImageProfile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>

    )
}

export default connect(mapStateToProps , {clear})(UnAuth)