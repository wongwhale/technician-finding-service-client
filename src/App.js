import React, { useEffect } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

import Login from './screens/Login'
import BasicInfo from './screens/Registor/BasicInfo'
import Name from './screens/Registor/Name'
import SelectRole from './screens/Registor/SelectRole'
import PhoneNumber from './screens/Registor/PhoneNumber'
import OTP from './screens/Registor/OTP'
import IsAuth from './screens/index'
import UnAuth from './screens/Registor';

import { connect } from 'react-redux';
import { disconnect, leave } from './store/actions/socketAction'
import { checkToken } from './store/actions/authAction'
import ImageProfile from './screens/Registor/ImageProfile';


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  uid: state.auth.userInfo.uid,
})

const connector = connect(mapStateToProps, { disconnect, leave, checkToken })


const Router = (props) => {
  useEffect(() => {
    props.checkToken()
    return () => {
      props.disconnect(props.uid)
    }
  }, [])
  return (
    <>
      <NavigationContainer >
        {
          props.isAuth ? (
            <IsAuth />
          )
          :
          (
            <UnAuth />
          )
        }
      </NavigationContainer>
    </>
  );
};

export default connector(Router);
