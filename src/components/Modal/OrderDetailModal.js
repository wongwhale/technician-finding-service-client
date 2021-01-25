import React from 'react'

import { View , Text , LogBox, SafeAreaView } from 'react-native'

LogBox.ignoreAllLogs()

import MapView , {PROVIDER_GOOGLE} from 'react-native-maps'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'
import { CLOSE_DETAIL_MODAL } from '../../store/actions/modalAction'
import { color } from '../../stylesheet'

const mapStateToProps = (state) => ({
    isOpen : state.modal.detail_modal
})

const mapDispatchToProps = {
    CLOSE_DETAIL_MODAL
}

const OrderDetailModal = (props) => {
    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onClosed={props.CLOSE_DETAIL_MODAL()}
            >
                <View style={{ flex :1 ,backgroundColor : color.BLUE_2}}>
                    <Text>
                        test
                    </Text>
                </View>
            </Modal>            
        </>
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(OrderDetailModal)