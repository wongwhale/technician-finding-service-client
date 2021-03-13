import React from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { content, widthToDp, color } from '../../../stylesheet'

import UserNotification from '../../../components/UserNotification'
import { connect } from 'react-redux'
import Header from '../../../components/UserInfo/Header'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NotFoundComponent from '../../../components/NotFoundComponent'
import ContentLoader from 'react-native-easy-content-loader'
import { getWaitingList } from '../../../store/actions/notiAction'
import { useFocusEffect } from '@react-navigation/native'

const TopTab = createMaterialTopTabNavigator()

const mapStateToProps = (state) => ({
    role: state.auth.userInfo.role,
    userResponse: state.noti.userResponse,
})

const mapDispatchToProps = {
    getWaitingList
}


const NewRequestOrder = ({ navigation, role, userResponse ,...props }) => {

    const [isReady, setIsReady] = React.useState(true)
    const [waitingLists , setWaitingLists] = React.useState([])

    useFocusEffect(
        React.useCallback( () => {  
            setIsReady(true)
            props.getWaitingList().then( res => {
                setWaitingLists(res)
                setIsReady(false)
            }).catch(err => {
                console.log(err);
            })

            return  () => {
                setWaitingLists([])
            }
        },[])
    )

    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}
            >
                <Header page='รอการยืนยัน' />
                {
                    isReady ? (
                        <>
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                        </>
                    ) : (
                            <ScrollView
                                style={{
                                    flex: 1,
                                    backgroundColor: '#fff'
                                }}
                            >
                                {
                                    waitingLists.length !== 0 ? (
                                        waitingLists.map((form) => {
                                            console.log(form);
                                            return (
                                                <View key={form._id} style={content.container}>
                                                    <UserNotification
                                                        orderID={form._id}
                                                        detail={form.detail}
                                                        date={form.date}
                                                        acceptedTech={form.technician}
                                                        distance={form.distance}
                                                    />
                                                </View>
                                            )
                                        })
                                    ) : <NotFoundComponent label='ไม่มีการทำรายการ' />
                                }
                            </ScrollView>
                        )
                }
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRequestOrder)