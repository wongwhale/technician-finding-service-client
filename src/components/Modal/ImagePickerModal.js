import React from 'react'

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Modal from 'react-native-modalbox'

import { datePicker, color } from '../../stylesheet'
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
                style={[modalStyle.subcontainer, { height: 250, backgroundColor: 'transparent' }]}
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
                            ImagePicker.openCamera({
                                
                            }).then(res => {
                                console.log(res);
                                props.SET_FILE(res)
                                props.CLOSE_IMAGE_PICKER_MODAL()
                            }).catch(err => {
                                console.log(err);
                            })
                        }}
                    >
                        <Text style={styles.text}>
                            ถ่ายรูป
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text
                            style={styles.text}
                            onPress={() => {
                                ImagePicker.openPicker({
                                    maxFiles:5,
                                    multiple:true,
                                    compressImageQuality:0.5
                                }).then(res => {
                                    console.log(res);
                                    props.SET_FILE(res)
                                    props.CLOSE_IMAGE_PICKER_MODAL()
                                }).catch( err => {
                                    console.log(err);
                                })
                            }}
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
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: color.BLUE_4,
        borderTopWidth: 1
    },
    text: {
        fontSize: 18,
        color: color.BLUE_1
    }
})