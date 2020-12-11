import React from 'react';

import { Text } from 'react-native';

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
import { connect } from 'react-redux';

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

          if (route.name === 'menu') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'notification') {
            iconName = focused ? 'bell' : 'bell';
          }
          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
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
      <NavigationContainer>
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
              </Stack.Navigator>
            )
        }
      </NavigationContainer>
    </>
  );
};

export default connector(Router);
