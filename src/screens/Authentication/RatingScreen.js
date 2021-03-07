import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import { color } from '../../stylesheet/colors'
import { content, widthToDp } from '../../stylesheet'
import Header from '../../components/Setting/Header'
import { useRoute } from '@react-navigation/native'
import { connect } from 'react-redux'
import RatingTabPage from '../../components/Rating/RatingTabPage'
import Ionicons from 'react-native-vector-icons/Ionicons'
const TopTab = createMaterialTopTabNavigator()

const mapStateToProps = (state) => ({
    info: state.tech.info,
})

const mapDispatchToProps = {

}

const RatingScreen = (props) => {
    React.useEffect(() => {
        console.log(props.info.aptitude);
    }, [])
    return (
        <>

                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Header
                            title='รีวิว'
                        />
                        <TopTab.Navigator
                            lazy
                            screenOptions={({ route }) => ({
                                tabBarLabel: ({ focused }) => {
                                    let name
                                    let weight
                                    let fontColor
                                    let iconColor
                                    let badgeColor
                                    if (route.name === 'ช่างซ่อมคอมพิวเตอร์' || route.name === 'คอม') {
                                        name = 'laptop-outline'
                                        weight = focused ? 'bold' : 'normal'
                                        fontColor = focused ? color.BLUE_0 : color.GREY_2
                                        iconColor = focused ? color.BLUE_0 : color.GREY_2
                                        badgeColor = focused ? 'red' : color.YELLOW_1
                                    } else if (route.name === 'ไฟฟ้า') {
                                        name = 'bulb-outline'
                                        weight = focused ? 'bold' : 'normal'
                                        iconColor = focused ? color.IOS_YELLOW_DARK : color.GREY_2
                                        fontColor = focused ? color.BLUE_0 : color.GREY_2
                                        badgeColor = focused ? 'red' : color.YELLOW_1
                                    } else if (route.name === 'แอร์' || route.name === 'ช่างแอร์') {
                                        name = 'thermometer-outline'
                                        weight = focused ? 'bold' : 'normal'
                                        iconColor = focused ? color.IOS_BLUE : color.GREY_2
                                        fontColor = focused ? color.BLUE_0 : color.GREY_2
                                        badgeColor = focused ? 'red' : color.YELLOW_1
                                    } else if (route.name === 'ช่างซ่อมรถจักรยานยนต์' || route.name === 'จักรยานยนต์') {
                                        name = 'bicycle-outline'
                                        weight = focused ? 'bold' : 'normal'
                                        iconColor = focused ? color.IOS_INDIGO_DARK : color.GREY_2
                                        fontColor = focused ? color.BLUE_0 : color.GREY_2
                                        badgeColor = focused ? 'red' : color.YELLOW_1
                                    } else if (route.name === 'ช่างซ่อมนาฬิกา' || route.name === 'นาฬิกา') {
                                        name = 'watch-outline'
                                        weight = focused ? 'bold' : 'normal'
                                        iconColor = focused ? color.IOS_ORANGE_DARK : color.GREY_2
                                        fontColor = focused ? color.BLUE_0 : color.GREY_2
                                        badgeColor = focused ? 'red' : color.YELLOW_1
                                    } else {
                                        name = 'build-outline'
                                        weight = focused ? 'bold' : 'normal'
                                        iconColor = focused ? color.BLUE_0 : color.GREY_2
                                        fontColor = focused ? color.BLUE_0 : color.GREY_2
                                        badgeColor = focused ? 'red' : color.YELLOW_1
                                    }

                                    return (
                                        <View
                                            style={{
                                                alignItems: 'center'
                                            }}>
                                            <Ionicons name={name}
                                                style={{
                                                    color: iconColor,
                                                    fontSize: widthToDp('6')
                                                }} />
                                            <Text
                                                style={{
                                                    color: iconColor,
                                                    fontSize: widthToDp('3.5'),
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {route.name}
                                            </Text>
                                        </View>
                                    )
                                },

                            })
                            }
                        >
                            {
                                props.info.aptitude.map((item, index) => {
                                    return <TopTab.Screen
                                        key={item.key}
                                        name={item.key}
                                        component={RatingTabPage}
                                    />
                                })
                            }
                            {/* <TopTab.Screen name='dshfkaljshd' component={RatingTabPage} options={{ tabBarLabel: 'คอมพิวเตอร์' }} /> */}
                            {/* <TopTab.Screen name='12' component={RatingTabPage} options={{ tabBarLabel: 'คอมพิวเตอร์' }} /> */}
                        </TopTab.Navigator>
                    </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingScreen)