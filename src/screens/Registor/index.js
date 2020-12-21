import React, { useState, useRef } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import BasicInfo from './BasicInfo'
import Name from './Name'
import SelectRole from './SelectRole'
import PhoneNumber from './PhoneNumber'
import OTP from './OTP'

const Registor = (props) => {

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