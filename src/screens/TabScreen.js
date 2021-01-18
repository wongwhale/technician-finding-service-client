import React from 'react'

import {connect} from 'react-redux'

import Main from './Main'
import Notification from './Notification'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

import Feather from 'react-native-vector-icons/Feather'

import { color } from '../stylesheet'

const mapStateToProps = (state) => ({
    badge : state.noti.badge,
    tech_order : state.noti.tech_order
})

const mapDispatchToProps = {

}

const TabScreen = (props) => {
    return (
        <>
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
                <Tab.Screen name="menu" component={Main} />
                <Tab.Screen name="notification" component={Notification} options={props.tech_order.length > 0 ? {tabBarBadge : props.tech_order.length} : null} />
            </Tab.Navigator>

        </>
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(TabScreen)