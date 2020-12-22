import React  from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

import Main from './screens'
import Notification from './screens/Notification'
import Chat from './screens/Chat'
import TechnicianInfo from './screens/TechnicianInfo'
import Login from './screens/Login'
import BasicInfo from './screens/Registor/BasicInfo'
import Name from './screens/Registor/Name'
import SelectRole from './screens/Registor/SelectRole'
import PhoneNumber from './screens/Registor/PhoneNumber'
import OTP from './screens/Registor/OTP'

import { connect } from 'react-redux';

import { color } from './stylesheet'


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, {})

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize;

          if (route.name === 'menu') {
            iconName = focused ? 'home' : 'home';
            iconSize = focused ? 30 : 25

          } else if (route.name === 'notification') {
            iconName = focused ? 'bell' : 'bell';
            iconSize = focused ? 30 : 25

          }
          // You can return any component that you like here!
          return <Feather name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: color.GREEN_5,
        inactiveTintColor: color.BLUE_4,
        showLabel: false
      }}
    >
      <Tab.Screen name="menu" component={Main} />
      <Tab.Screen name="notification" component={Notification} />
    </Tab.Navigator>
  )
}


const Router = (props) => {
  return (
    <>
      <NavigationContainer >
        {
          props.isAuth ? (
            <Stack.Navigator>
              <Stack.Screen name='tab' component={TabNavigation} options={{ headerShown: false }} />
              <Stack.Screen name='chat' component={Chat} options={{ headerShown: false }} />
              <Stack.Screen name='techInfo' component={TechnicianInfo} options={{ headerShown: false }} />
            </Stack.Navigator>
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
