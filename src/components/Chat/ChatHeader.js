import React, { } from 'react'

import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';


import { global } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    interlocutor : state.chat.interlocutor
})

const ChatHeader = (props) => {
    const badgesNum = 1
    return (
        <>
            <View style={[global.header]}>
                <View >
                    <Image style={global.interlocutorImage} source={{uri:props.interlocutor.avatar}} />
                </View>
                <TouchableOpacity style={global.nameContainer} onPress={ () => props.navigation.navigate('techInfo')}>
                    <Text style={global.interlocutorName}>
                        {props.interlocutor.name}
                    </Text>
                    <Feather name="chevron-right" style={global.rightIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={global.backIconContainer}
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                >
                    <Feather name="chevron-left" style={global.backIcon} />
                </TouchableOpacity>
            </View>
            <View style={global.bbt} />
        </>
    )
}

export default connect(mapStateToProps , {})(ChatHeader)