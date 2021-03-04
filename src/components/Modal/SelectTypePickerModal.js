import React, { } from 'react'

import { Text, View, TouchableOpacity , SafeAreaView , Platform } from 'react-native'

import { datePicker, widthToDp } from '../../stylesheet'
import { modalStyle } from './PostModal'

import { Picker } from '@react-native-picker/picker'

import Modal from 'react-native-modalbox'

import { CLOSE_SELECT_TYPE_PICKER_MODAL } from '../../store/actions/modalAction'
import { SET_TYPE } from '../../store/actions/formAction'
import {aptitudeType} from '../../misc/aptitude_type'

import { connect } from 'react-redux'
import { techRegModalStyles } from './SelectAptitudeModal'
import { color } from '../../stylesheet/colors'

const mapStateToProps = (state) => ({
    isOpen: state.modal.select_type_modal,
    type: state.form.type
})

const connector = connect(mapStateToProps, { CLOSE_SELECT_TYPE_PICKER_MODAL, SET_TYPE })

const SelectTypePickerModal = (props) => {


    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onClosed={() => props.CLOSE_SELECT_TYPE_PICKER_MODAL()}
                style={{
                    backgroundColor: 'transparent'
                }}
                position='center'
                swipeToClose={false}
            >
                <SafeAreaView
                    style={techRegModalStyles.container}
                >
                    <View 
                        style={{
                            backgroundColor: '#fff',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: widthToDp('80'),
                            borderRadius: widthToDp('4'),
                        }}>
                        <View style={techRegModalStyles.header}>
                            <Text
                                style={techRegModalStyles.headerText}
                            >
                                เลือกประเภทอุปกรณ์ หรือ ประเภทงาน
                            </Text>
                        </View>
                        <View 
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: widthToDp('5'),
                                paddingVertical: widthToDp('2'),
                                width: '100%'
                            }}
                        >
                            <View
                                style={techRegModalStyles.rowContainer}
                            >
                                <Picker
                                    style={{
                                        ...Platform.select({
                                            ios : {
                                                height : 150
                                            },
                                            android : {
                                                flex : 1
                                            }
                                        })
                                    
                                    }}
                                    onValueChange={(val) => {
                                        props.SET_TYPE(val)
                                    }}
                                    selectedValue={props.type}
                                >
                                    {
                                        aptitudeType.map((item, index) => <Picker.Item key={index} label={`${item}`} value={item} />)
                                    }
                                </Picker>
                            </View>
                            
                        </View>
                        <View
                            style={techRegModalStyles.closeContainer}
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                    props.CLOSE_SELECT_TYPE_PICKER_MODAL()
                                }}
                            >
                                <Text
                                    style={{
                                        color: color.IOS_BLUE,
                                        fontWeight: 'bold',
                                        fontSize: widthToDp('4')
                                    }}
                                >
                                    ยืนยัน
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>

                {/* <TouchableOpacity style={datePicker.closeContainer}
                    onPress={() => props.CLOSE_SELECT_TYPE_PICKER_MODAL()}
                >
                    <Text style={datePicker.closeBtnText}>Close</Text>
                </TouchableOpacity> */}
            </Modal>
        </>
    )
}

export default connector(SelectTypePickerModal)