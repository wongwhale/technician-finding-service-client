import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

import SearchScreen from './Search'
import NearMeScreen from './NearMe'
import Message from './Message';
import User from './User'
import Chat from './Chat'
import TechnicianInfo from './TechnicianInfo'
import Post from './Post'
import TabScreen from './TabScreen';

import { leave, connection } from '../store/actions/socketAction';
import { CLOSE_DATE_PICKER_MODAL } from '../store/actions/modalAction';
import { INITIAL_HISTORY_LIST } from '../store/actions/chatAction';
import { SET_FILE } from '../store/actions/formAction';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  uid: state.auth.userInfo.uid,
  date_picker: state.modal.date_picker,
  badge : state.noti.badge
})

const connector = connect(mapStateToProps, { leave, connection , CLOSE_DATE_PICKER_MODAL , INITIAL_HISTORY_LIST , SET_FILE })


const Index = (props) => {
  props.connection(props.uid)
  useEffect(() => {
    return () => {
      props.leave(props.uid)
    }
  }, [])

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name='tab' component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen name='search' component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name='nearme' component={NearMeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='message' component={Message} options={{ headerShown: false }} />
        <Stack.Screen name='userInfo' component={User} options={{ headerShown: false }} />
        <Stack.Screen name='post' component={Post} options={{ headerShown: false }} />
        <Stack.Screen name='chat' component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name='techInfo' component={TechnicianInfo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};

export default connector(Index)