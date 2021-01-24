import React from 'react'

import {
    View,
} from 'react-native'

import { content } from '../../../stylesheet'

import AcceptedNotification from '../../../components/TechnicianNotification/AcceptedNotification'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const AcceptedOrderTab = () => {
    return (
        <>
            <View style={content.container}>
                <AcceptedNotification />
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptedOrderTab)