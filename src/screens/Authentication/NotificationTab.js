import React from 'react'

import { SafeAreaView, ScrollView, Button, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { content } from '../../stylesheet'
import Header from '../../components/Header'

const NotificationTab = () => {
    const json_var = {
        notification: [
            {
                id: '123123',
                form: 'asdfasdf'
            },
            {
                id: '123123',
                form: 'asdfasdf'
            },{
                id: '123123',
                form: 'asdfasdf'
            }
        ]
    }

    const [notificationLists, setNotificationLists] = React.useState([])

    React.useEffect(() => {
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
                    <Button
                        title='test async storage json'
                        onPress={() => {
                            AsyncStorage.setItem('notification', JSON.stringify(json_var))
                        }}
                    />
                    <Button
                        title='print json'
                        onPress={() => {
                            AsyncStorage.getItem('notification').then(json => {
                                console.log(json);

                            })
                        }}
                    />
                    <View>
                        {
                            notificationLists.map((item, index) => {
                                return (
                                    <Text key={index}>
                                        {item.id}
                                    </Text>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default NotificationTab