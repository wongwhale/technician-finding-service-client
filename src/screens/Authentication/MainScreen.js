import React, { useState, useRef } from 'react';

import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Animated,
    Button,
    Easing
} from 'react-native';

import { mainScreen, color, content } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { GET_NEAR_TECHNICIAN } from '../../store/actions/techAction'
import UserInfo from '../../components/UserInfo'
import Header from '../../components/Header'
import { connect } from 'react-redux';

import { OPEN_DATE_PICKER_MODAL, OPEN_POST_MODAL, OPEN_TIME_PICKER_MODAL, OPEN_LOCATION_PICKER_MODAL } from '../../store/actions/modalAction'
import { SET_FILE, SET_LOCATION } from '../../store/actions/formAction'

import Geolocation from '@react-native-community/geolocation'
import LinearGradient from 'react-native-linear-gradient'


const mapStateToProps = (state) => ({
    count: state.counter.count,
    userInfo: state.auth.userInfo,
    file: state.form.file,
    tech: state.noti
})

const connector = connect(mapStateToProps, {
    GET_NEAR_TECHNICIAN,
    OPEN_LOCATION_PICKER_MODAL,
    OPEN_DATE_PICKER_MODAL,
    OPEN_POST_MODAL,
    OPEN_TIME_PICKER_MODAL,
    SET_FILE,
    SET_LOCATION
})

const Main = (props) => {

    const [imageURI, setImageURI] = useState(null)

    const onChangePageToNearMe = () => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition((position) => {
                props.SET_LOCATION(
                    position.coords.latitude,
                    position.coords.longitude
                )
                resolve(position.coords)
            },
                (err) => {
                    reject(err)
                })
        })
    }


    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header page='หน้าหลัก' back={false} navigation={props.navigation} />
                <UserInfo navigation={props.navigation} />
                <ScrollView>
                    <View style={mainScreen.container}>
                        <View style={mainScreen.menuLayout}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('search')
                                }}
                                style={{ flex: 1, marginRight: 5 }}
                            >
                                <LinearGradient
                                    style={[mainScreen.halfBox]}
                                    colors={[
                                        color.GREY_5,
                                        color.GREY_4,
                                        color.BLUE_5,
                                    ]}
                                >
                                    <Feather name='search' size={50} color={color.BLUE_1} />
                                    <Text style={mainScreen.menuTextHalf}>
                                        ค้นหา
                                </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={() => {
                                    onChangePageToNearMe()
                                        .then((coords) => props.navigation.navigate('nearme'))
                                        .catch((err) => console.log('change page to near me error :', err))
                                }}
                            >
                                <LinearGradient
                                    style={[mainScreen.halfBox, { marginLeft: 5 }]}
                                    colors={[
                                        color.GREY_5,
                                        color.GREY_4,
                                        color.BLUE_5,
                                    ]}
                                >
                                    <Feather name='map' size={50} color={color.BLUE_1} />
                                    <Text style={mainScreen.menuTextHalf}>
                                        ใกล้ฉัน
                                </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={mainScreen.menuLayout}>
                            <TouchableOpacity
                                onPress={() => {
                                    // props.OPEN_POST_MODAL()
                                    props.navigation.navigate('post')
                                }}
                            >
                                <LinearGradient
                                    style={mainScreen.fullBox}
                                    colors={[
                                        color.BLUE_3,
                                        color.BLUE_2,
                                        color.BLUE_1,
                                        color.BLUE_0,
                                        color.BLUE_0,
                                    ]}
                                >
                                    <Feather name='edit' size={50} color={color.BLUE_5} />
                                    <Text style={mainScreen.menuTextFull}>
                                        บอกอาการ
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connector(Main)