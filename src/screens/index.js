import React from 'react';

import {
    Text,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()

import SearchScreen from './Search'
import NearMeScreen from './NearMe'
import PostScreen from './Post'
import Message from './Message';
import User from './User'


import MainMenu from '../components/MainMenu'
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    count : state.counter.count
})

const connector = connect(mapStateToProps,{})

const Menu = ({navigation}) => {
    const name = 'ปริญญากร เตจ๊ะเสาร์'
    const type = 'ผู้ใช้งานทั่วไป' 
    return (
        <>
            <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
                <Header page='หน้าหลัก' back={false} navigation={navigation}/>
                <ScrollView>
                    <UserInfo name={name}  type ={type} navigation={navigation} />
                    <MainMenu navigation={ (screen) => {
                        navigation.navigate(screen)
                    }} />
                </ScrollView>
            </SafeAreaView>

        </>
    )
}

const Main = (props) => {
    return (
        <>
            <Stack.Navigator >
                <Stack.Screen name='menu' component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name='search' component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name='nearme' component={NearMeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='post' component={PostScreen} options={{ headerShown: false }} />
                <Stack.Screen name='message' component={Message} options={{ headerShown: false }} />
                <Stack.Screen name='userInfo' component={User} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
};

export default connector(Main)