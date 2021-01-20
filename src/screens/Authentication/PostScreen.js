import React from 'react'

import { SafeAreaView, View, ScrollView } from 'react-native'

import Header from '../../components/Header'
import DateTimePicker from '../../components/Form/DateTimePicker'
import Line from '../../components/Form/Line'
import DetailInput from '../../components/Form/DetailInput'
import ImagePicker from '../../components/Form/ImagePicker'
import LocationPicker from '../../components/Form/LocationPicker'
import TypePicker from '../../components/Form/TypePicker'
import MyButton from '../../components/MyButton'

import DatePickerModal from '../../components/Modal/DatePickerModal'
import TimePickerModal from '../../components/Modal/TimePickerModal'
import ImagePickerModal from '../../components/Modal/ImagePickerModal'
import SelectTypePickerModal from '../../components/Modal/SelectTypePickerModal'
import LocationPickerModal from '../../components/Modal/LocationPickerModal'

import ImagePickerManager from 'react-native-image-crop-picker'

import { sendPostReq } from '../../store/actions/socketAction'
import { addNewResponse } from '../../store/actions/notiAction'
import { SET_FILE, SET_LOCATION } from '../../store/actions/formAction'
import { CLOSE_IMAGE_PICKER_MODAL } from '../../store/actions/modalAction'

import { connect } from 'react-redux'
import { content } from '../../stylesheet'

const mapStateToProps = (state) => ({
    firstname: state.auth.userInfo.firstname,
    lastname: state.auth.userInfo.lastname,
    uid: state.auth.userInfo.uid,
    date: state.form.date,
    month: state.form.month,
    year: state.form.year,
    hour: state.form.hour,
    minute: state.form.minute,
    file: state.form.file,
    detail: state.form.detail,
    lat: state.form.location.latitude,
    lng: state.form.location.longitude,
    type: state.form.type
})

const connector = connect(mapStateToProps, { addNewResponse, SET_LOCATION, sendPostReq, SET_FILE, CLOSE_IMAGE_PICKER_MODAL })

const PostScreen = (props) => {
    React.useEffect(() => {
        props.SET_LOCATION(18.795924746501605, 98.95296894013882)
    }, [])
    return (
        <>
            <SafeAreaView style={{ flex: 1, }}>
                <Header page='บอกอาการ' back={true} navigation={props.navigation} chat={false} />
                <ScrollView style={content.container}>
                    <Line text='ระบุเวลา' mt />
                    <DateTimePicker />
                    <Line text='ระบุรายละเอียด' mt />
                    <TypePicker />
                    <DetailInput />
                    <ImagePicker />
                    <Line text='ระบุสถานที่' mt />
                    <LocationPicker />
                    <View style={{ marginBottom: 10 }} />
                    <MyButton title='ยืนยัน'
                        onPress={() => {
                            const date = `${props.year}-${("0" + (props.month)).slice(-2)}-${("0" + (props.date)).slice(-2)}T${("0" + (props.hour)).slice(-2)}:${("0" + (props.minute)).slice(-2)}:00Z`
                            const name = `${props.firstname} ${props.lastname}`
                            props.sendPostReq({
                                name: name,
                                uid: props.uid,
                                date: date,
                                type: props.type,
                                file: props.file,
                                detail: props.detail,
                                location: {
                                    lat: props.lat,
                                    lon: props.lng
                                }
                            }).then(res => {
                                props.addNewResponse(res)
                                    .then(() => {
                                        props.navigation.navigate('notification')
                                    })
                                    .catch((err) => {
                                        alert('error')
                                        console.log(err);
                                    })
                            })
                        }}
                    />
                    <View style={{ marginBottom: 25 }} />
                </ScrollView>
                <DatePickerModal />
                <TimePickerModal />
                <SelectTypePickerModal />
                {/* <LocationPickerModal /> */}
                <ImagePickerModal libFunc={() => {
                    ImagePickerManager.openPicker({
                        multiple: true,
                        maxFiles: 5
                    }).then((img) => {
                        props.SET_FILE(img)
                        props.CLOSE_IMAGE_PICKER_MODAL()
                    })
                }} />
            </SafeAreaView>
        </>
    )
}

export default connector(PostScreen)