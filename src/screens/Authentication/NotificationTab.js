import React from 'react'

import { SafeAreaView, ScrollView, Button, Text, View, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { content, widthToDp } from '../../stylesheet'
import Header from '../../components/Header'
import { color } from '../../stylesheet/colors'
import Feather from 'react-native-vector-icons/Feather'
import NotificationMoreModal from '../../components/Modal/NotificationMoreModal'
import { useFocusEffect , useNavigation } from '@react-navigation/native'


const NotificationLists = ({ id , type , tech, status , page , openModal  }) => {
    const onPress = async () => {
        await AsyncStorage.getItem('notification').then( (str) => {
            let temp = JSON.parse(str)
            const new_noti = temp.map( (item) => {
                if(item.id === id && tech === item.name){
                    // console.log(item);
                    return {
                        ...item,
                        status : true
                    }
                }else{
                    return item
                }
            }) 
            AsyncStorage.setItem('notification' , JSON.stringify(new_noti))
        })
        navigate(page)
    }
    const { navigate } = useNavigation()
    return (
        <>
            <TouchableOpacity
                style={{
                    paddingVertical: widthToDp('3'),
                    paddingHorizontal: widthToDp('4'),
                    backgroundColor: status ? color.GREY_5 : color.BLUE_5,
                    margin: widthToDp('1'),
                    borderRadius: widthToDp('2'),
                    flexDirection: 'row',
                    alignItems: 'center'
                }}

                onPress={ () => {
                    onPress()
                }}
            >
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text
                        style={{
                            fontSize: widthToDp('4'),
                            fontWeight : 'bold',
                            color : color.BLUE_0
                        }}
                    >
                        {page === 'techNotification' ? `มีการเสนองานใหม่จาก ${tech}` : `มีการเสนอราคาจาก ${tech}`}
                    </Text>
                    <Text
                        style={{
                            fontSize: widthToDp('3.5'),
                            color : color.BLUE_1
                        }}
                    >
                        {page === 'techNotification' ? `เกี่ยวกับ ${type}` : `เกี่ยวกับการหา ${type} ของคุณ`}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        width : widthToDp('6'),
                        aspectRatio : 1,
                        borderRadius : widthToDp('3'),
                        backgroundColor : '#fff',
                        alignItems : 'center',
                        justifyContent : 'center'
                    }}
                    onPress={() => {
                        openModal()
                    }}
                >
                    <Feather name='more-horizontal' color={color.BLUE_1} size={widthToDp('5')} />
                </TouchableOpacity>

            </TouchableOpacity>
        </>
    )
}

const NotificationTab = () => {
    const [moreVisible, setMoreVisible] = React.useState(false)
    // const json_var = {
    //     notification: [
    //         {
    //             id: '123123',
    //             form: 'asdfasdf',
    //             name : 'ปริญญา สีตะวัน',
    //             status : false
    //         },
    //         {
    //             id: '123123',
    //             name: 'นิรัช ศรีใจมูน',
    //             status : true
    //         }, {
    //             id: '123123',
    //             name: 'ธีรภัทร์ รัตนพิกุล',
    //             status : false
    //         }
    //     ]
    // }

    const [notificationLists, setNotificationLists] = React.useState([])

    useFocusEffect(
        React.useCallback(() => {
            // AsyncStorage.setItem('notification' , JSON.stringify(json_var))
            AsyncStorage.getItem('notification').then(json => {
                if (json === null) {
                    console.log('is null');
                }
                else {

                    const noti_json = JSON.parse(json)
                    setNotificationLists(noti_json)
                }
            })
            return () => setNotificationLists([])
        }, [])
    )

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray} >
                <Header page='การแจ้งเตือน' />
                {
                    notificationLists.length === 0 ? (
                        <>
                        <Image 
                            source={require('../../assets/image/noNotification.jpg')}
                            style={{
                                height : widthToDp('60'),
                                alignSelf : 'center',
                                resizeMode : 'contain'
                            }}
                        />
                        <Text
                            style={{
                                alignSelf : 'center',
                                fontSize : widthToDp('5'),
                                color : color.BLUE_2
                            }}
                        >
                            ยังไม่มีการแจ้งเตือน
                        </Text>
                        </>
                    ) : null
                }
                <ScrollView
                    style={content.container}
                >
                    <View>
                        {
                            notificationLists.map((item, index) => {
                                return (
                                    <NotificationLists key={index} 
                                        openModal={() => setMoreVisible(true)} 
                                        tech={item.name}
                                        status={item.status}
                                        type={item.type}
                                        page={item.page}
                                        id={item.id}
                                    />
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
            <NotificationMoreModal
                isOpen={moreVisible}
                onClosed={() => setMoreVisible(false)}
            />
        </>
    )
}

export default NotificationTab