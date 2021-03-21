import React from 'react'

import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Animated, ActivityIndicator, Easing, KeyboardAvoidingView, Platform } from 'react-native'

import Header from '../../components/Header'
import DateTimePicker from '../../components/Form/DateTimePicker'
import Line from '../../components/Form/Line'
import DetailInput from '../../components/Form/DetailInput'
import ImagePicker from '../../components/Form/ImagePicker'
import LocationPicker from '../../components/Form/LocationPicker'
import TypePicker from '../../components/Form/TypePicker'
import MyButton from '../../components/MyButton'
import Modal from 'react-native-modalbox'
import DatePickerModal from '../../components/Modal/DatePickerModal'
import TimePickerModal from '../../components/Modal/TimePickerModal'
import ImagePickerModal from '../../components/Modal/ImagePickerModal'
import SelectTypePickerModal from '../../components/Modal/SelectTypePickerModal'
import LocationPickerModal from '../../components/Modal/LocationPickerModal'

import ImagePickerManager from 'react-native-image-crop-picker'

import { sendPostReq } from '../../store/actions/socketAction'
import { addNewResponse } from '../../store/actions/notiAction'
import { SET_FILE, SET_LOCATION, clear, SET_DATE, SET_MONTH, SET_YEAR, SET_HOUR, SET_MINUTE, APPEND_FILE } from '../../store/actions/formAction'
import { CLOSE_IMAGE_PICKER_MODAL } from '../../store/actions/modalAction'
import { LOADING, LOADED } from '../../store/actions/authAction'
import { useFocusEffect } from '@react-navigation/native'
import { connect } from 'react-redux'
import { content, color, card, widthToDp } from '../../stylesheet'
import { styles } from '../../components/Setting/styles'
import Feather from 'react-native-vector-icons/Feather'
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

const mapDispatchToProps = {
    LOADING,
    LOADED,
    clear,
    addNewResponse,
    SET_LOCATION,
    sendPostReq,
    SET_FILE,
    CLOSE_IMAGE_PICKER_MODAL,
    SET_DATE,
    SET_MONTH,
    SET_YEAR,
    SET_HOUR,
    SET_MINUTE,
    APPEND_FILE
}

const connector = connect(mapStateToProps, mapDispatchToProps)

const PostScreen = (props) => {
    const [locationVisible, setLocationVisible] = React.useState(false)

    useFocusEffect(
        React.useCallback(() => {
            const current_date = new Date()
            Geolocation.getCurrentPosition((position) => {
                props.SET_LOCATION(position.coords.latitude, position.coords.longitude)
            }, () => {

            })
            props.SET_DATE(current_date.getDate())
            props.SET_MONTH(current_date.getMonth())
            props.SET_YEAR(current_date.getFullYear())
            props.SET_HOUR(current_date.getHours())
            props.SET_MINUTE(current_date.getMinutes())

            return () => {
                props.clear()
            }
        }, [])
    )

    const [opacity, setOpacity] = React.useState(new Animated.Value(1))

    const translateY = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, parseInt(widthToDp('20'))]
    })

    const snackPopDown = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start()
    }

    const errorPopUp = () => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 3000,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true,
            })
        ]).start()
    }


    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
            >
                <SafeAreaView style={content.topsafearray} />
                <SafeAreaView style={content.safearray} >
                    <Header page='บอกอาการ' navigation={props.navigation} chat={false} isRadius={true} />
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
                                const date = `${props.year}-${("0" + (props.month + 1)).slice(-2)}-${("0" + (props.date)).slice(-2)}T${("0" + (props.hour)).slice(-2)}:${("0" + (props.minute)).slice(-2)}:00.209Z`
                                const name = `${props.firstname} ${props.lastname}`
                                if (props.type === '') {
                                    errorPopUp()
                                }
                                else {
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
                                        props.navigation.navigate('userNotification')
                                    }).catch(err => {
                                    })
                                }
                            }}
                        />
                        <View style={{ marginBottom: 25 }} />
                    </ScrollView>
                    <DatePickerModal />
                    <TimePickerModal />
                    <SelectTypePickerModal />
                    {/* <LocationPickerModal /> */}
                    <ImagePickerModal
                        libFunc={() => {
                            ImagePickerManager.openPicker({
                                multiple: true,
                                maxFiles: 5,
                                mediaType: 'photo',
                            }).then((img) => {
                                img.map(item => {
                                    props.APPEND_FILE(item)
                                })
                                props.CLOSE_IMAGE_PICKER_MODAL()
                            })
                        }}

                        camFunc={() => {
                            ImagePickerManager.openCamera({
                                mediaType: 'photo'
                            }).then((img) => {
                                props.APPEND_FILE(img)
                                props.CLOSE_IMAGE_PICKER_MODAL()
                            })
                        }}
                    />
                    <LocationPickerModal
                        isOpen={locationVisible}
                        onClosed={() => setLocationVisible(false)}
                        location={props.location}
                        setLocation={(lat, lng) => {
                            props.SET_LOCATION(lat, lng)
                        }}
                    />

                    <Animated.View
                        style={{
                            // backgroundColor : 'red',
                            width: '100%',
                            height: widthToDp('16'),
                            position: 'absolute',
                            bottom: widthToDp('0'),
                            paddingVertical: widthToDp('2'),
                            paddingHorizontal: widthToDp('4'),
                            zIndex: 3,
                            backgroundColor: 'transparent',
                            transform: [
                                { translateY: translateY }
                            ],
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: color.RED_4,
                                flex: 1,
                                borderRadius: widthToDp('4'),

                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    paddingHorizontal: widthToDp('2'),
                                    paddingVertical: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        paddingHorizontal: widthToDp('4'),
                                    }}
                                    onPress={() => props.navigation.navigate('acceptedRequest')}
                                >
                                    <Text
                                        style={{
                                            fontSize: widthToDp('4'),
                                            color: color.RED_0,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        กรุณาระบุประเภท
                                </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        height: widthToDp('8'),
                                        aspectRatio: 1,
                                        backgroundColor: `#ffffff66`,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: widthToDp('3')
                                    }}
                                    onPress={() => {
                                        snackPopDown()
                                    }}
                                >
                                    <Feather name='x' style={{
                                        fontSize: widthToDp('5'),
                                        color: color.IOS_RED_LIGHT
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animated.View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

export default connector(PostScreen)