import React, { } from 'react'

import { View, Text , TouchableOpacity} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { userInfo } from '../stylesheet'

const UserInfo = ({ name, type , navigation }) => {
    return (
        <>
            <TouchableOpacity style={userInfo.container} onPress={ () => navigation.navigate('userInfo')}>
                <View style={userInfo.userImage}>
                </View>
                <View style={userInfo.subContainer}>
                    <Text style={userInfo.name}>
                        {name}
                    </Text>
                    <Text style={userInfo.type}>
                        {type}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default UserInfo