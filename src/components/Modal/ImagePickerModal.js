import React from 'react'

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Modal from 'react-native-modalbox'

import { datePicker, color , widthToDp , heightToDp , modalRadiusDp , buttonRadiusDp } from '../../stylesheet'
import { modalStyle } from './PostModal'


import { connect } from 'react-redux'
import { CLOSE_IMAGE_PICKER_MODAL } from '../../store/actions/modalAction'
import { SET_URI  , SET_FILE } from '../../store/actions/formAction'

import ImagePicker from 'react-native-image-crop-picker'

const mapStateToProps = (state) => ({
    isOpen: state.modal.image_picker_modal
})

const ImagePickerModal = (props) => {
    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onClosed={() => props.CLOSE_IMAGE_PICKER_MODAL()}
                style={[modalStyle.subcontainer, { height: heightToDp('24.6'), backgroundColor: 'transparent' }]}
                position='bottom'
                swipeToClose={false}
            >
                <View style={[datePicker.contentContainer, { paddingHorizontal: 0 }]}>
                    <View style={datePicker.headerContainer}>
                        <Text style={datePicker.headerText}>เลือกรูปภาพ หรือ วิดีโอ</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={ () => {
                            props.camFunc()
                        }}
                    >
                        <Text style={styles.text}>
                            ถ่ายรูป
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={ () => {
                            props.libFunc()
                        }}
                    >
                        <Text
                            style={styles.text}
                            
                        >
                            เลือกจาก Library
                            </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={datePicker.closeContainer}
                    onPress={() => props.CLOSE_IMAGE_PICKER_MODAL()}
                >
                    <Text style={datePicker.closeBtnText}>Close</Text>
                </TouchableOpacity>
            </Modal>
        </>
    )
}

export default connect(mapStateToProps, { CLOSE_IMAGE_PICKER_MODAL , SET_URI , SET_FILE })(ImagePickerModal)

const styles = StyleSheet.create({
    btn: {
        height: heightToDp('5'),
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: color.BLUE_4,
        borderTopWidth: heightToDp('0.1'),
    },
    text: {
        fontSize: widthToDp('4'),
        color: color.BLUE_1
    }
})