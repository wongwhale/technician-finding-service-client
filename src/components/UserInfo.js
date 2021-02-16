import React, { } from 'react'

import { View, Text, TouchableOpacity, Image } from 'react-native'

import { userInfo } from '../stylesheet'
import { connect } from 'react-redux'

import Feather from 'react-native-vector-icons/Feather'

import { GET_TECHNICIAN_INFO } from '../store/actions/techAction'
import { GET_INTERLOCUTOR_INFO } from '../store/actions/chatAction'
import { LOADING, LOADED } from '../store/actions/authAction'

const mapStateToProps = (state) => ({
    firstname: state.auth.userInfo.firstname,
    lastname: state.auth.userInfo.lastname,
    avatar: state.auth.userInfo.avatar,
    role: state.auth.userInfo.role,
    uid: state.auth.userInfo.uid
})


const UserInfo = (props) => {
    return (
        <>
            <TouchableOpacity style={userInfo.container}
                onPress={() => {
                    props.LOADING()
                    if (props.role === 'technician') {
                        props.GET_TECHNICIAN_INFO(props.uid).then(() => {
                            props.navigation.navigate('userInfo')
                            props.LOADED()
                        }).catch( err => {
                            props.LOADED()
                        })
                    }
                    else {
                        props.navigation.navigate('userInfo')
                        props.LOADED()
                    }
                }}
            >
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

export default connect(mapStateToProps, { LOADING, LOADED, GET_INTERLOCUTOR_INFO, GET_TECHNICIAN_INFO })(UserInfo)