import React from 'react'

import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

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
import { SET_FILE, SET_LOCATION , clear } from '../../store/actions/formAction'
import { CLOSE_IMAGE_PICKER_MODAL } from '../../store/actions/modalAction'
import { LOADING , LOADED } from '../../store/actions/authAction'

import { connect } from 'react-redux'
import { content, color, card, widthToDp } from '../../stylesheet'
import { styles } from '../../components/Setting/styles'

import LinearGradient from 'react-native-linear-gradient'
import Geolocation from '@react-native-community/geolocation'


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
    location: state.form.location,
    type: state.form.type
})

const connector = connect(mapStateToProps, { LOADING , LOADED , clear , addNewResponse, SET_LOCATION, sendPostReq, SET_FILE, CLOSE_IMAGE_PICKER_MODAL })

const PostScreen = (props) => {
    const [locationVisible, setLocationVisible] = React.useState(false)
    React.useEffect(() => {
        Geolocation.getCurrentPosition((position) => {
            props.SET_LOCATION(position.coords.latitude, position.coords.longitude)
        }, () => {

        })
        return () => {
            props.clear()
        }
    }, [])



    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={[content.safearray]}>
                    <Header page='บอกอาการ' back={true} navigation={props.navigation} chat={false} isRadius={true} />
                    <ScrollView style={content.container}>
                        <View style={card.card}>
                            <View style={card.cardHeader}>
                                <Text style={card.headerText}>
                                    ระบุเวลานัด
                            </Text>
                            </View>
                            <View style={card.cardContainer}>
                                <DateTimePicker />
                            </View>
                        </View>
                        <View style={card.card}>
                            <View style={card.cardHeader}>
                                <Text style={card.headerText}>
                                    ระบุรายละเอียด
                            </Text>
                            </View>
                            <View style={card.cardContainer}>
                                <TypePicker />
                                <DetailInput />
                                <ImagePicker />
                            </View>
                        </View>
                        <View style={card.card}>
                            <View style={[card.cardHeader, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Text style={card.headerText}>
                                    ระบุสถานที่
                            </Text>
                                <Text
                                    style={styles.selectedText}
                                >
                                    (ค่าเริ่มต้น : ที่อยู่ปัจจุบัน)
                                </Text>
                            </View>
                            <View style={card.cardContainer}>
                                {/* <LocationPicker /> */}
                                <TouchableOpacity
                                    // style={{
                                    //     width: '100%',
                                    //     backgroundColor: color.BLUE_5,
                                    //     padding: widthToDp('2'),
                                    //     paddingLeft: widthToDp('5'),
                                    //     borderRadius: widthToDp('2'),
                                    //     marginBottom: widthToDp('2'),
                                    //     justifyContent: 'center',
                                    //     flexDirection: 'row',
                                    //     alignItems: 'center'
                                    // }}
                                    onPress={() => {
                                        setLocationVisible(true)
                                    }}
                                >
                                    <LinearGradient
                                        style={{
                                            width: '100%',
                                            backgroundColor: color.BLUE_5,
                                            padding: widthToDp('2'),
                                            paddingLeft: widthToDp('5'),
                                            borderRadius: widthToDp('2'),
                                            marginBottom: widthToDp('2'),
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                        colors={[
                                            color.BLUE_5,
                                            color.BLUE_5
                                        ]}
                                    >
                                        <Text
                                            style={styles.selectedText}
                                        >
                                            ระบุที่อยู่
                                        </Text>
                                    </LinearGradient>
                                    {/* <Feather
                                    style={styles.selectedText}
                                    name='map-pin'
                                /> */}
                                </TouchableOpacity>

                            </View>
                        </View>
                        <MyButton title='ยืนยัน'
                            onPress={() => {
                                props.LOADING()
                                const date = `${props.year}-${("0" + (props.month + 1)).slice(-2)}-${("0" + (props.date)).slice(-2)}T${("0" + (props.hour)).slice(-2)}:${("0" + (props.minute)).slice(-2)}:00Z`
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
                                    props.LOADED()
                                    props.navigation.navigate('notification')
                                    
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
                    <LocationPickerModal
                        isOpen={locationVisible}
                        onClosed={() => setLocationVisible(false)}
                        location={props.location}
                        setLocation={(lat, lng) => {
                            props.SET_LOCATION(lat, lng)
                        }}
                    />
                </SafeAreaView>
            </KeyboardAvoidingView>

        </>
    )
}

export default connector(PostScreen)