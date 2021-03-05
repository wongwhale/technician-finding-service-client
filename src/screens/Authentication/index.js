import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import SearchScreen from './SearchScreen'
import NearMeScreen from './NearMeScreen'
import Message from './MessageScreen';
import User from './UserInfoScreen'
import Chat from './ChatScreen'
import TechnicianInfo from './TechnicianInfoScreen'
import Post from './PostScreen'
import TabScreen from './TabScreen';
import SettingScreen from './SettingScreen';

import { leave, connection } from '../../store/actions/socketAction';
import { CLOSE_DATE_PICKER_MODAL } from '../../store/actions/modalAction';
import { INITIAL_HISTORY_LIST } from '../../store/actions/chatAction';
import { SET_FILE } from '../../store/actions/formAction';
import { clear } from '../../store/actions/authAction';

import { connect } from 'react-redux';
import TechnicianRegisterScreen from './TechnicianRegisterScreen';
import UserInfoEditScreen from './UserInfoEditScreen';
import OrderDetailModal from '../../components/Modal/OrderDetailModal'
import LoadingModal from '../../components/Modal/LoadingModal';
import LogoutConfirmModal from '../../components/Modal/LogoutConfirmModal';
import { OPEN_LOGOUT_CONFIRM_MODAL, CLOSE_LOGOUT_CONFIRM_MODAL } from '../../store/actions/modalAction'
import { logout , setCurrentLocation} from '../../store/actions/authAction'
import RatingScreen from './RatingScreen';
import PriceInputModal from '../../components/Modal/PriceInputModal';
import Geolocation from '@react-native-community/geolocation'

const mapStateToProps = (state) => ({
  uid: state.auth.userInfo.uid,
  role: state.auth.userInfo.role,
  date_picker: state.modal.date_picker,
  badge: state.noti.badge,
  logoutConfirmIsOpen: state.modal.logout_confirm_modal,
  userInfo: state.auth.userInfo
})

const connector = connect(mapStateToProps,
  {
    clear, leave, connection,
    CLOSE_DATE_PICKER_MODAL,
    INITIAL_HISTORY_LIST,
    SET_FILE,
    OPEN_LOGOUT_CONFIRM_MODAL,
    CLOSE_LOGOUT_CONFIRM_MODAL,
    logout,
    setCurrentLocation
  })


const Index = (props) => {
  props.connection(props.uid)

  useEffect(() => {
    Geolocation.getCurrentPosition( ({coords : {latitude , longitude}}) => {
      props.setCurrentLocation(latitude , longitude)
    })
    return () => {
      props.leave(props.uid)
    }
  }, [])

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          cardStyle : {
            backgroundColor : '#fff'
          }
        }}
      >
        <Stack.Screen name='tab' component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen name='search' component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name='nearme' component={NearMeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='message' component={Message} options={{ headerShown: false }} />
        <Stack.Screen name='userInfo' component={User} options={{ headerShown: false }} />
        <Stack.Screen name='post' component={Post} options={{ headerShown: false }} />
        <Stack.Screen name='chat' component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name='techInfo' component={TechnicianInfo} options={{ headerShown: false }} />
        <Stack.Screen name='setting' component={SettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='regTech' component={TechnicianRegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='editInfo' component={UserInfoEditScreen} options={{ headerShown: false }} />
        <Stack.Screen name='rating' component={RatingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <LoadingModal />
      <LogoutConfirmModal
        isOpen={props.logoutConfirmIsOpen}
        onClose={() => props.CLOSE_LOGOUT_CONFIRM_MODAL(false)}
        onLogout={() => props.logout()}
        name={`${props.userInfo.firstname} ${props.userInfo.lastname}`}
      />
      <PriceInputModal />
      <OrderDetailModal />
    </>
  );
};

export default connector(Index)