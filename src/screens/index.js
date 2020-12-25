import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

import SearchScreen from './Search'
import NearMeScreen from './NearMe'
import PostScreen from './Post'
import Message from './Message';
import User from './User'
import Main from './Main'
import Chat from './Chat'
import Notification from './Notification'
import TechnicianInfo from './TechnicianInfo'

import { color } from '../stylesheet'
import { connect } from 'react-redux';
import { leave , connection } from '../store/actions/socketAction';

import Feather from 'react-native-vector-icons/Feather'

const mapStateToProps = (state) => ({
    uid : state.auth.userInfo.uid,
})

const connector = connect(mapStateToProps, {leave , connection})

const TabScreen = (props) => {

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
            return <Feather name={iconName} size={iconSize} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: color.GREEN_5,
          inactiveTintColor: color.BLUE_4,
          showLabel: false
        }}
      >
        <Tab.Screen name="menu" component={StackScreen} y='hi' />
        <Tab.Screen name="notification" component={Notification} />
      </Tab.Navigator>
    )
  }

const StackScreen = (props) => {
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
    )
}

const Index = (props) => {
    props.connection(props.uid)
    useEffect( () => {
        return () => {
            props.leave(props.uid)
        }
    },[])
    return (
        <>
            <Stack.Navigator>
              <Stack.Screen name='tab' component={TabScreen} options={{ headerShown: false }} />
              <Stack.Screen name='chat' component={Chat} options={{ headerShown: false }} />
              <Stack.Screen name='techInfo' component={TechnicianInfo} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
};

export default connector(Index)