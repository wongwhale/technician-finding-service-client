import React from 'react'

import {
    View
} from 'react-native'

import { content } from '../../../stylesheet'

import NewOrderNotification from '../../../components/TechnicianNotification/NewOrderNotification'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const NewOrder = () => {
    return (
        <>
            <View style={content.container}>
                <NewOrderNotification />
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)