import React from 'react'

import {
    View,
    Text
} from 'react-native'

import { content, heightToDp } from '../../../stylesheet'

import NewOrderNotification from '../../../components/TechnicianNotification/NewOrderNotification'
import { connect } from 'react-redux'

import Modal from 'react-native-modalbox'
import { ScrollView } from 'react-native-gesture-handler'


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const NewOrder = (props) => {
    return (
        <>
            <ScrollView style={content.container}>
                <NewOrderNotification />
            </ScrollView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)