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

import { mainScreen, color } from '../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import UserInfo from '../components/UserInfo'
import Header from '../components/Header'
import { connect } from 'react-redux';

import { OPEN_DATE_PICKER_MODAL, OPEN_POST_MODAL, OPEN_TIME_PICKER_MODAL } from '../store/actions/modalAction'
import { SET_FILE } from '../store/actions/formAction'
import ImagePicker from 'react-native-image-crop-picker'


const mapStateToProps = (state) => ({
    count: state.counter.count,
    userInfo: state.auth.userInfo,
    file : state.form.file
})

const connector = connect(mapStateToProps, { OPEN_DATE_PICKER_MODAL, OPEN_POST_MODAL, OPEN_TIME_PICKER_MODAL , SET_FILE })

const Main = (props) => {

    const [imageURI, setImageURI] = useState(null)

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header page='หน้าหลัก' back={false} navigation={props.navigation} />
                <UserInfo
                    name={`${props.userInfo.firstname} ${props.userInfo.lastname}`}
                    type={props.userInfo.role}
                    navigation={props.navigation}
                />
                <ScrollView>
                    <View style={mainScreen.container}>
                        <View style={mainScreen.menuLayout}>
                            <TouchableOpacity style={mainScreen.halfBox}
                                onPress={() => {
                                    // console.log('test');
                                    props.navigation.navigate('search')
                                }}
                            >
                                <Feather name='search' size={50} color={color.BLUE_1} />
                                <Text style={mainScreen.menuTextHalf}>
                                    ค้นหา
                        </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={mainScreen.halfBox}
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
                    {/* <Button title='test'
                        onPress={ async () => {
                            props.OPEN_POST_MODAL()
                        }}
                    />
                    <Button 
                        title='open modal'
                        onPress={ () => {
                            props.OPEN_DATE_PICKER_MODAL()
                        }}
                    /> */}
                    <Button 
                        title='test image send'
                        onPress={ () => {
                            ImagePicker.openPicker({
                                multiple:true,  
                                maxFiles:5 
                            })
                            .then( res => {
                                console.log(res);
                            }).catch( err => {
                                console.log(err);
                            })
                        }}
                        // onPress={ () => {
                        //     launchImageLibrary({
                        //         maxWidth:500,
                        //         maxHeight:500,
                        //         quality:0.2,
                        //     } , (res) => {
                        //         props.SET_FILE(res) 
                        //         // console.log(res);
                        //         if(!res.didCancel){
                        //             var form = new FormData()
                        //             form.append('formImage' , {
                        //                 name : res.fileName,
                        //                 type : res.type,
                        //                 uri : Platform.OS === 'android' ?  res.uri : res.uri.replace('file://' , '')
                        //             })
                        //             axios({
                        //                 url : `${WEB_URL}/api/uploadImage`,
                        //                 method:'post',
                        //                 data : form,
                        //                 headers: {
                        //                     "Content-Type" : "mutipart/form-data"
                        //                 }
                        //             }).then(res => {
                        //                 console.log(res.data);
                        //             })
                        //         }
                        //     })
                        // }}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connector(Main)