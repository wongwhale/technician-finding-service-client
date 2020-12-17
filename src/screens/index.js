import React from 'react';


import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()

import SearchScreen from './Search'
import NearMeScreen from './NearMe'
import PostScreen from './Post'
import Message from './Message';
import User from './User'
import Main from './Main'

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    count : state.counter.count,
    userInfo : state.auth.userInfo
})

const connector = connect(mapStateToProps,{})



const Index = (props) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='menu' component={Main} options={{ headerShown: false }} />
                <Stack.Screen name='search' component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name='nearme' component={NearMeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='post' component={PostScreen} options={{ headerShown: false }} />
                <Stack.Screen name='message' component={Message} options={{ headerShown: false }} />
                <Stack.Screen name='userInfo' component={User} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
};

export default connector(Index)