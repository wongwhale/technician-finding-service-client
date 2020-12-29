import React , {} from 'react'

import Modal from 'react-native-modalbox'
import {
    View,
    Text,
    Button
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const PostScreen = () => {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen />
            </Stack.Navigator>
        </>
    )
}

export default PostScreen