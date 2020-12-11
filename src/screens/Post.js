import React, { useState } from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { content, posting, datePicker } from '../stylesheet'

import Header from '../components/Header'

import Form from '../components/Form'

const PostScreen = ({ navigation }) => {
    
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header page="บอกอาการ" back={true} navigation={navigation} />
                <ScrollView style={content.container}>
                    <Form />
                </ScrollView>
            </SafeAreaView>

        </>
    )
}

export default PostScreen