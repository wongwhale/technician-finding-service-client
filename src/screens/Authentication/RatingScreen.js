import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, SafeAreaView } from 'react-native'
import { color } from '../../stylesheet/colors'
import { content } from '../../stylesheet'
import Header from '../../components/Setting/Header'
import { useRoute } from '@react-navigation/native'
import { connect } from 'react-redux'
import RatingTabPage from '../../components/Rating/RatingTabPage'
const TopTab = createMaterialTopTabNavigator()

const mapStateToProps = (state) => ({
    info: state.tech.info,
})

const mapDispatchToProps =  {

}

const RatingScreen = (props) => {
    React.useEffect( () => {
        console.log(props.info);
    },[])
    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView
                style={content.container}
            >

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
                    >
                        {
                            props.info.aptitude.map((item, index) => {
                                return <TopTab.Screen
                                    key={item.aptitude}
                                    name={item.aptitude}
                                    component={RatingTabPage}
                                />
                            })
                        }
                        {/* <TopTab.Screen name='dshfkaljshd' component={RatingTabPage} options={{ tabBarLabel: 'คอมพิวเตอร์' }} />
                        <TopTab.Screen name='12' component={RatingTabPage} options={{ tabBarLabel: 'คอมพิวเตอร์' }} /> */}
                    </TopTab.Navigator>
                </View>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(RatingScreen)