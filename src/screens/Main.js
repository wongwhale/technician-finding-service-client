import React, { useState, useRef } from 'react';

import {
    Text,
    View,
    Button,
    SafeAreaView,
    ScrollView
} from 'react-native';

import Modal from 'react-native-modalbox'

import MainMenu from '../components/MainMenu'
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'
import { connect } from 'react-redux';

import { connection } from '../store/actions/socketAction'
import { OPEN_DATE_PICKER_MODAL } from '../store/actions/modalAction'

const mapStateToProps = (state) => ({
    count: state.counter.count,
    userInfo: state.auth.userInfo
})

const connector = connect(mapStateToProps, { connection ,OPEN_DATE_PICKER_MODAL })

const Main = (props) => {

    const [isOpen, setOpen] = useState(false)
    const modal_ref = useRef()

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
                    <MainMenu navigation={(screen) => {
                        props.navigation.navigate(screen)
                    }} />
                    <Button title='test'
                        onPress={() => {
                            // props.connection()
                            // modal_ref.current.open()
                            // setOpen(true)
                            props.OPEN_DATE_PICKER_MODAL()
                        }}
                    />
                </ScrollView>
            </SafeAreaView>
            <Modal
                position='bottom'
                isOpen={isOpen}
                onClosed={ () => setOpen(false)}
                style={{
                    height: '30%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 25,
                    backgroundColor: '#e6e6e6'
                }}
            >
                <View
                    style={{
                        height: 30,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 25,
                        backgroundColor: '#e6e6e6',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    <View
                        style={{
                            height:5,
                            width:40,
                            backgroundColor:'#aaa',
                            borderRadius:5
                        }}
                    >

                    </View>
                </View>
                <Text>test</Text>
            </Modal>

        </>
    )
}

export default connector(Main)