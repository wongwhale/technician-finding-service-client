import React, { } from 'react'

import { Text , View , TouchableOpacity } from 'react-native'

import { datePicker } from '../../stylesheet'
import { modalStyle } from './PostModal'

import { Picker } from '@react-native-picker/picker'

import Modal from 'react-native-modalbox'

import { CLOSE_SELECT_TYPE_PICKER_MODAL } from '../../store/actions/modalAction'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isOpen: state.modal.select_type_modal
})

const connector = connect(mapStateToProps, { CLOSE_SELECT_TYPE_PICKER_MODAL })

const SelectTypePickerModal = (props) => {
    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onClosed={ () => props.CLOSE_SELECT_TYPE_PICKER_MODAL()}
                style={[modalStyle.subcontainer, { backgroundColor: 'transparent' }]}
                position='bottom'
                swipeToClose={false}
            >
                <View style={datePicker.contentContainer}>
                    <View style={datePicker.headerContainer}>
                        <Text style={datePicker.headerText}>เลือกประเภทอุปกรณ์ หรือ ประเภทงาน</Text>
                    </View>
                    <View style={datePicker.pickerContainer}>
                        <View style={datePicker.dayContainer}>
                            <Picker
                                itemStyle={{height:150}}
                            >
                                {
                                    [...Array(24)].map((item, index) => <Picker.Item key={index} label={`${index}`} value={`${index}`} />)
                                }
                            </Picker>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={datePicker.closeContainer}
                    onPress={() => props.CLOSE_SELECT_TYPE_PICKER_MODAL()}
                >
                    <Text style={datePicker.closeBtnText}>Close</Text>
                </TouchableOpacity>
            </Modal>
        </>
    )
}

export default connector(SelectTypePickerModal)