import React from 'react';

import {
    Text,
    View,
    Button,
    SafeAreaView,
    ScrollView
} from 'react-native';


import MainMenu from '../components/MainMenu'
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'
import { connect } from 'react-redux';

import { connection } from '../store/actions/socketAction'

const mapStateToProps = (state) => ({
    count: state.counter.count,
    userInfo: state.auth.userInfo
})

const connector = connect(mapStateToProps, {connection})

const Main = (props) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header page='หน้าหลัก' back={false} navigation={props.navigation} />
                <ScrollView>
                    <UserInfo 
                        name={`${props.userInfo.firstname} ${props.userInfo.lastname}`} 
                        type={props.userInfo.role} 
                        navigation={props.navigation} 
                    />
                    <MainMenu navigation={(screen) => {
                        props.navigation.navigate(screen)
                    }} />
                    <Button title='test' 
                        onPress={ () => {
                            props.connection()
                        }} 
                    />
                </ScrollView>
            </SafeAreaView>

        </>
    )
}

export default connector(Main)