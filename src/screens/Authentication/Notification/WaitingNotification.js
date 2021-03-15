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
    RefreshControl
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
import { socket } from '../../../store/actions/socketAction'
import { useFocusEffect } from '@react-navigation/native'

const TopTab = createMaterialTopTabNavigator()

const mapStateToProps = (state) => ({
    role: state.auth.userInfo.role,
    userResponse: state.noti.userResponse,
})

const mapDispatchToProps = {
    getWaitingList
}


const NewRequestOrder = ({ navigation, role, userResponse, ...props }) => {

    const [isReady, setIsReady] = React.useState(true)
    const [waitingLists, setWaitingLists] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false);

    const handleRefresh = () => {
        setIsReady(true)
        props.getWaitingList().then(res => {
            setWaitingLists(res)
            setIsReady(false)
        }).catch(err => {
            console.log(err);
        })
    }

    const handleNewResponse = () => {
        props.getWaitingList().then(res => {
            setWaitingLists(res)
            setIsReady(false)
        }).catch(err => {
            console.log(err);
        })
    }

    const handleCancel = (formID) => {

        const lists = waitingLists.filter((value) => {
            return value._id !== formID
        })

        setWaitingLists(lists)
    }

    useFocusEffect(
        React.useCallback(() => {
            setIsReady(true)
            socket.on('recieve_new_response' , () => {
                handleNewResponse()
            })
            socket.on('confirm_send_post_req' , () => {
                handleNewResponse()
            })
            props.getWaitingList().then(res => {
                setWaitingLists(res)
                setIsReady(false)
            }).catch(err => {
                console.log(err);
            })

            return () => {
                setWaitingLists([])
            }
        }, [])
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
                                    marginHorizontal: widthToDp('4'),
                                    marginVertical : widthToDp('2'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    marginHorizontal: widthToDp('4'),
                                    marginVertical : widthToDp('2'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    marginHorizontal: widthToDp('4'),
                                    marginVertical : widthToDp('2'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                        </>
                    ) : (
                            <ScrollView
                                style={{
                                    flex: 1,
                                    backgroundColor: '#fff',
                                    paddingHorizontal : widthToDp('2')
                                }}
                            >
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={() => {
                                        handleRefresh()
                                    }}
                                />
                                {
                                    waitingLists.length !== 0 ? (
                                        waitingLists.map((form) => {
                                            return (
                                                <View key={form._id} style={content.container}>
                                                    <UserNotification
                                                        orderID={form._id}
                                                        detail={form.detail}
                                                        date={form.date}
                                                        acceptedTech={form.technician}
                                                        distance={form.distance}
                                                        handleCancel={(id) => handleCancel(id)}
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