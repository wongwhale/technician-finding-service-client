import React from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import { content } from '../../../stylesheet'

import UserNotification from '../../../components/UserNotification'
import TechnicianNotification from '../../../components/TechnicianNotification'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const NewOrder = () => {
    return (
        <>
            <View style={content.container}>
                <TechnicianNotification />
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)