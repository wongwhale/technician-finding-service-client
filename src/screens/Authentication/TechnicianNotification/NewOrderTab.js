import React from 'react'

import {
    View,
    Text
} from 'react-native'

import { content, heightToDp } from '../../../stylesheet'

import NewOrderNotification from '../../../components/TechnicianNotification/NewOrderNotification'
import { connect } from 'react-redux'

import Modal from 'react-native-modalbox'


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const NewOrder = (props) => {
    return (
        <>
            <View style={content.container}>
                <NewOrderNotification />
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)