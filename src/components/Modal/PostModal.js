import React, { useState } from 'react'

import {
    StyleSheet, Text, Button, SafeAreaView, View, TouchableOpacity, ScrollView, Image,
} from 'react-native'

import DateTimePicker from '../Form/DateTimePicker'
import TypePicker from '../Form/TypePicker'
import LocationPicker from '../Form/LocationPicker'
import DetailInput from '../Form/DetailInput'
import Line from '../Form/Line'
import ImagePicker from '../Form/ImagePicker'

import Modal from 'react-native-modalbox'
import DatePickerModal from './DatePickerModal'
import TimePickerModal from './TimePickerModal'
import SelectTypePickerModal from './SelectTypePickerModal'
import ImagePickerModal from './ImagePickerModal'

import { connect } from 'react-redux'
import { CLOSE_DATE_PICKER_MODAL, OPEN_DATE_PICKER_MODAL, OPEN_POST_MODAL, CLOSE_POST_MODAL } from '../../store/actions/modalAction'
import Feather from 'react-native-vector-icons/Feather'
import { color } from '../../stylesheet'
import ProcessBar from '../Form/ProcessBar'

const mapStateToProps = (state) => ({
    post_modal: state.modal.post_modal
})

const connector = connect(mapStateToProps, { CLOSE_DATE_PICKER_MODAL, OPEN_DATE_PICKER_MODAL, OPEN_POST_MODAL, CLOSE_POST_MODAL })

const PostModal = (props) => {
    const [process, setProcess] = useState(1)

    return (
        <>
            {/* <Modal
                isOpen={props.post_modal}
                onClosed={() => props.CLOSE_POST_MODAL()}
                position='bottom'
                style={modalStyle.continaer}
                swipeThreshold={100}
            >
                <View style={modalStyle.topContainer} >
                    <View style={modalStyle.sc} />
                </View>
                <View style={modalStyle.headerContainer}>
                    <View style={modalStyle.textContainer}>
                        <Text style={modalStyle.text}>
                            บอกอาการ
                            </Text>
                    </View>
                </View>
                <View>
                    <ProcessBar process={process} setProcess={setProcess} />
                </View>
                <View style={{ marginTop: 50 }} >
                    {
                        process === 1 ? (
                            <>
                                <Line text='เลือกวันที่' />
                                <DateTimePicker />
                                <View style={modalStyle.nextContainer}>
                                    <NextBtn setProcess={setProcess} process={process} />
                                </View>
                            </>
                        )
                            : process === 2 ? (
                                <>
                                    <Line mt={true} text='ระบุลายละเอียด' />
                                    <ScrollView style={{flexGrow: 1}}>
                                        <TypePicker />
                                        <DetailInput />
                                        <ImagePicker />
                                        
                                    </ScrollView>
                                    <View style={modalStyle.nextContainer}>
                                        <NextBtn setProcess={setProcess} process={process} />
                                        <BackBtn setProcess={setProcess} process={process} />
                                    </View>
                                </>
                            )
                                : process === 3 ? (
                                    <>
                                        <Line mt={true} text='ระบุสถานที่' />
                                        <LocationPicker />
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingHorizontal: 5,
                                            marginTop: 15
                                        }}>
                                            <BackBtn setProcess={setProcess} process={process} />
                                        </View>
                                    </>
                                ) : null
                    }
                </View>
            </Modal> */}
            <DatePickerModal />
            <TimePickerModal />
            <SelectTypePickerModal />
            <ImagePickerModal />

        </>
    )
}

export default connector(PostModal)

export const modalStyle = StyleSheet.create({
    continaer: {
        height: '95%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 25,
        backgroundColor: color.BLUE_1
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconContainter: {
        zIndex: 1,
        width: 50,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    icon: {
        fontSize: 25,
        fontWeight: '200',
        color: color.WHITE
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        color: color.WHITE,
        fontSize: 30,
        fontWeight: '600',
    },
    nextBtn: {
        backgroundColor: color.BLUE_5,
        paddingVertical: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    nextContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 15
    },
    nextIcon: {
        fontSize: 23,
        color: color.BLUE_1,
    },
    nextText: {
        fontSize: 16,
        color: color.BLUE_1,
        fontWeight: 'bold'
    },

    subcontainer: {
        width:'84%',
        height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    topContainer: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sc: {
        height: 5,
        width: 50,
        backgroundColor: color.BLUE_4,
        borderRadius: 5
    }

})

const NextBtn = (props) => {
    return (
        <>
            <TouchableOpacity
                style={[modalStyle.nextBtn, {
                    paddingLeft: 20,
                    paddingRight: 12,
                }]}
                onPress={() => props.setProcess(props.process + 1)}
            >
                <Text style={modalStyle.nextText}>
                    ถัดไป
                </Text>
                <Feather name='chevron-right' style={modalStyle.nextIcon} />
            </TouchableOpacity>
        </>
    )
}

const BackBtn = (props) => {
    return (
        <>
            <TouchableOpacity
                style={[modalStyle.nextBtn, {
                    paddingLeft: 12,
                    paddingRight: 20,
                }]}
                onPress={() => props.setProcess(props.process - 1)}
            >
                <Feather name='chevron-left' style={modalStyle.nextIcon} />
                <Text style={modalStyle.nextText}>
                    กลับ
                </Text>
            </TouchableOpacity>
        </>
    )
}