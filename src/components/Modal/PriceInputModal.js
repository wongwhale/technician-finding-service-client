import React from 'react'

import { View, Text } from 'react-native'

import Modal from 'react-native-modalbox'

import { CLOSE_PRICE_INPUT_MODAL } from '../../store/actions/modalAction'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isOpen: state.modal.price_input_modal
})

const mapDispatchToProps = {
    CLOSE_PRICE_INPUT_MODAL
}

const PriceInputModal = (props) => {
    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onClosed={() => props.CLOSE_PRICE_INPUT_MODAL()}
            >
                <View>
                    <Text>test</Text>
                </View>
            </Modal>
        </>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(PriceInputModal)