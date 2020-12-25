import React, { useEffect }  from 'react';


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
import Index from './screens/index'

import { connect } from 'react-redux';
import { disconnect , leave } from './store/actions/socketAction'


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  uid : state.auth.userInfo.uid,
})

const connector = connect(mapStateToProps, {disconnect , leave})


const Router = (props) => {
  useEffect(() => {
    return () => {
      props.disconnect(props.uid)
    }
  },[])
  return (
    <>
      <NavigationContainer >
        {
          props.isAuth ? (
            <Index />
          ) : (
              <Stack.Navigator>
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='reg_basic' component={BasicInfo} options={{ headerShown: false }} />
                <Stack.Screen name='reg_name' component={Name} options={{ headerShown: false }} />
                <Stack.Screen name='reg_select' component={SelectRole} options={{ headerShown: false }} />
                <Stack.Screen name='reg_phone' component={PhoneNumber} options={{ headerShown: false }} />
                <Stack.Screen name='reg_otp' component={OTP} options={{ headerShown: false }} />
              </Stack.Navigator>
            )
        }
      </NavigationContainer>
    </>
  );
};

export default connector(Router);
