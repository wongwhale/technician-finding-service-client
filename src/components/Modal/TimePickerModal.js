import React, { useEffect, useState } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modalbox'
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux'
import { posting, datePicker } from '../../stylesheet'
import { modalStyle } from './PostModal'
import Feather from 'react-native-vector-icons/Feather'
import { CLOSE_TIME_PICKER_MODAL } from '../../store/actions/modalAction'

const mapStateToProps = (state) => ({
    time_picker : state.modal.time_picker
})

const connector = connect(mapStateToProps, { CLOSE_TIME_PICKER_MODAL })

const TimePickerModal = (props) => {

    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')

    const date_ = new Date

    useEffect(() => {
        setHour(date_.toTimeString().slice(0, 2))
        setMinute(date_.toTimeString().slice(3, 5))
    }, [])

    return (
        <>
            <Modal
                isOpen={props.time_picker}
                onClosed={() => props.CLOSE_TIME_PICKER_MODAL()}
                style={[modalStyle.subcontainer, { backgroundColor: 'transparent' }]}
                position='bottom'
                swipeToClose={false}
            >
                <View style={datePicker.contentContainer}>
                    <View style={datePicker.headerContainer}>
                        <Text style={datePicker.headerText}>เลือกเวลา</Text>
                    </View>
                    <View style={datePicker.pickerContainer}>
                        <View style={datePicker.dayContainer}>
                            <Picker
                                selectedValue={`${hour}`}
                                itemStyle={{height:150}}
                                onValueChange={(val) => {
                                    setHour(val)
                                }}
                            >
                                {
                                    [...Array(24)].map((item, index) => <Picker.Item key={index} label={`${index}`} value={`${index}`} />)
                                }
                            </Picker>
                        </View>
                        <View style={datePicker.dayContainer}>
                            <Picker
                                selectedValue={`${minute}`}
                                itemStyle={{height:150}}
                                onValueChange={(val) => setMinute(val)}
                            >
                                {
                                    [...Array(60)].map((item, index) => <Picker.Item key={index} label={`${index}`} value={`${index}`} />)
                                }
                            </Picker>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={datePicker.closeContainer}
                    onPress={() => props.CLOSE_TIME_PICKER_MODAL()}
                >
                    <Text style={datePicker.closeBtnText}>Close</Text>
                </TouchableOpacity>
            </Modal>
        </>
    )
}

export default connector(TimePickerModal)
