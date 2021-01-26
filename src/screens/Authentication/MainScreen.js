import React, { useState, useRef } from 'react';

import {
    Text,
    View,
    Button,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

import { mainScreen, color, content } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { GET_NEAR_TECHNICIAN } from '../../store/actions/techAction'
import UserInfo from '../../components/UserInfo'
import Header from '../../components/Header'
import { connect } from 'react-redux';

import { OPEN_DATE_PICKER_MODAL, OPEN_POST_MODAL, OPEN_TIME_PICKER_MODAL , OPEN_LOCATION_PICKER_MODAL } from '../../store/actions/modalAction'
import { SET_FILE } from '../../store/actions/formAction'


const mapStateToProps = (state) => ({
    count: state.counter.count,
    userInfo: state.auth.userInfo,
    file : state.form.file,
    tech : state.noti
})

const connector = connect(mapStateToProps, { GET_NEAR_TECHNICIAN , OPEN_LOCATION_PICKER_MODAL , OPEN_DATE_PICKER_MODAL, OPEN_POST_MODAL, OPEN_TIME_PICKER_MODAL , SET_FILE })

const Main = (props) => {

    const [imageURI, setImageURI] = useState(null)


    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header page='หน้าหลัก' back={false} navigation={props.navigation} />
                <UserInfo  navigation={props.navigation} />
                <ScrollView>
                    <View style={mainScreen.container}>
                        <View style={mainScreen.menuLayout}>
                            <TouchableOpacity style={[mainScreen.halfBox , {marginRight:5}]}
                                onPress={() => {
                                    props.navigation.navigate('search')
                                }}
                            >
                                <Feather name='search' size={50} color={color.BLUE_1} />
                                <Text style={mainScreen.menuTextHalf}>
                                    ค้นหา
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[mainScreen.halfBox , {marginLeft:5}]}
                                onPress={() => {
                                    props.navigation.navigate('nearme')
                                }}
                            >
                                <Feather name='map' size={50} color={color.BLUE_1} />
                                <Text style={mainScreen.menuTextHalf}>
                                    ใกล้ฉัน
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={mainScreen.menuLayout}>
                            <TouchableOpacity style={mainScreen.fullBox}
                                onPress={() => {
                                    // props.OPEN_POST_MODAL()
                                    props.navigation.navigate('post')
                                }}
                            >
                                <Feather name='edit' size={50} color={color.BLUE_5} />
                                <Text style={mainScreen.menuTextFull}>
                                    บอกอาการ
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connector(Main)