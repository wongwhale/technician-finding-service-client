import React from 'react'

import { connect } from 'react-redux'

import Main from './MainScreen'
import Notification from './Notification'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { color } from '../../stylesheet'
import TechnicianNotification from './TechnicianNotification'

const mapStateToProps = (state) => ({
    badge: state.noti.badge,
    techOrder: state.noti.techOrder,
    techAcceptedOrder: state.noti.techAcceptedOrder,
    userResponse: state.noti.userResponse,
    role: state.auth.userInfo.role
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

                        if (route.name === 'menu') {
                            // iconName = focused ? 'home' : 'home';
                            // iconSize = focused ? 30 : 25
                            iconName = focused ? 'trail-sign' : 'trail-sign-outline'

                        } else if (route.name === 'notification') {
                            // iconName = focused ? 'bell' : 'bell';
                            // iconSize = focused ? 30 : 25
                            iconName = focused ? 'notifications' : 'notifications-outline';

                        } else if (route.name === 'technicianNotification') {
                            iconName = focused ? 'reader' : 'reader-outline'

                        }
                        return <Ionicons name={iconName} size={25} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: color.GREEN_5,
                    inactiveTintColor: color.BLUE_4,
                    showLabel: false
                }}
            >
                <Tab.Screen name="menu" component={Main} />
                {
                    props.role === 'technician' ? <Tab.Screen
                        name='technicianNotification'
                        component={TechnicianNotification}
                        options={
                            props.techOrder.length > 0
                                ? { tabBarBadge: props.techOrder.length + props.techAcceptedOrder.length }
                                : null
                        }
                    />
                        : null
                }
                <Tab.Screen
                    name="notification" component={Notification}
                />
            </Tab.Navigator>

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TabScreen)