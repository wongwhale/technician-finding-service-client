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
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
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
                                let labelName
                                let iconColor
                                let fontColor
                                if (route.name === 'ช่างซ่อมคอมพิวเตอร์' || route.name === 'คอม') {
                                    name = 'laptop-outline'
                                    labelName = 'คอม'
                                    fontColor = focused ? color.BLUE_0 : color.GREY_2
                                    iconColor = focused ? color.BLUE_0 : color.GREY_2
                                } else if (route.name === 'ไฟฟ้า') {
                                    labelName = 'ไฟฟ้า'
                                    name = 'bulb-outline'
                                    iconColor = focused ? color.IOS_YELLOW_DARK : color.GREY_2
                                    fontColor = focused ? color.BLUE_0 : color.GREY_2
                                } else if (route.name === 'แอร์' || route.name === 'ช่างแอร์') {
                                    labelName = 'แอร์'
                                    name = 'thermometer-outline'
                                    iconColor = focused ? color.IOS_BLUE : color.GREY_2
                                    fontColor = focused ? color.BLUE_0 : color.GREY_2
                                } else if (route.name === 'ช่างซ่อมรถจักรยานยนต์' || route.name === 'จักรยานยนต์') {
                                    labelName = 'จักรยานยนต์'
                                    name = 'bicycle-outline'
                                    iconColor = focused ? color.IOS_INDIGO_DARK : color.GREY_2
                                    fontColor = focused ? color.BLUE_0 : color.GREY_2
                                } else if (route.name === 'ช่างซ่อมนาฬิกา' || route.name === 'นาฬิกา') {
                                    labelName = 'นาฬิกา'
                                    name = 'watch-outline'
                                    iconColor = focused ? color.IOS_ORANGE_DARK : color.GREY_2
                                    fontColor = focused ? color.BLUE_0 : color.GREY_2
                                } else {
                                    labelName = route.name
                                    name = 'build-outline'
                                    iconColor = focused ? color.BLUE_0 : color.GREY_2
                                    fontColor = focused ? color.BLUE_0 : color.GREY_2
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
                                            {labelName}
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
                    </TopTab.Navigator>
                </View>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingScreen)