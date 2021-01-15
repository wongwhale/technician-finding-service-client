import React, { } from 'react'

import { View, Text, TouchableOpacity, Image } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { userInfo } from '../stylesheet'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    firstname: state.auth.userInfo.firstname,
    lastname: state.auth.userInfo.lastname,
    avatar: state.auth.userInfo.avatar,
    role: state.auth.userInfo.role
})

const UserInfo = (props) => {
    return (
        <>
            <TouchableOpacity style={userInfo.container} onPress={() => props.navigation.navigate('userInfo')}>
                <Image
                    style={userInfo.userImage}
                    source={{ uri: props.avatar }}
                />


                <View style={userInfo.subContainer}>
                    <Text style={userInfo.name}>
                        {`${props.firstname} ${props.lastname}`}
                    </Text>
                    <Text style={userInfo.type}>
                        {props.role}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default connect(mapStateToProps, {})(UserInfo)