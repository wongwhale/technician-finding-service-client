import React from 'react'

import { SafeAreaView, ScrollView, Button, Text, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { content, widthToDp } from '../../stylesheet'
import Header from '../../components/Header'
import { color } from '../../stylesheet/colors'
import Feather from 'react-native-vector-icons/Feather'
import NotificationMoreModal from '../../components/Modal/NotificationMoreModal'


const NotificationLists = ({ type = 'ช่างซ่อมคอมพิวเตอร์', tech, status , openModal  }) => {
    const onPress = async () => {
        AsyncStorage.getItem('notification').then( (str) => {
            
        })
    }
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
                        {`มีการเสนอราคาจาก ${tech}`}
                    </Text>
                    <Text
                        style={{
                            fontSize: widthToDp('3.5'),
                            color : color.BLUE_1
                        }}
                    >
                        {`เกี่ยวกับการหา ${type} ของคุณ`}
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

    React.useEffect(() => {
        // AsyncStorage.setItem('notification' , JSON.stringify(json_var))
        AsyncStorage.getItem('notification').then(json => {
            if (json === null) {
                console.log('is null');
            }
            else {
                const noti_json = JSON.parse(json)
                setNotificationLists(noti_json.notification)
            }
            // console.log(json);
        })
    }, [])

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray} >
                <Header page='การแจ้งเตือน' />
                <ScrollView
                    style={content.container}
                >
                    <View>
                        {
                            notificationLists.map((item, index) => {
                                console.log(item);
                                return (
                                    <NotificationLists key={index} 
                                        openModal={() => setMoreVisible(true)} 
                                        tech={item.name}
                                        status={item.status}
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