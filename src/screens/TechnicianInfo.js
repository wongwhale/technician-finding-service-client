import React, { } from 'react'

import { SafeAreaView, View, Text, Image, ScrollView,TouchableOpacity } from 'react-native'

import Header from '../components/Header'
import { content, technician } from '../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import PersonalInfo from '../components/TechnicianInfo/PersonalInfo'
import Location from '../components/TechnicianInfo/Location'
import Review from '../components/TechnicianInfo/Review'

const TechnicianInfo = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header back={true} page="รายละเอียดช่าง" navigation={navigation} />
                <ScrollView style={content.container}>
                    <PersonalInfo navigation={navigation} />
                    <Location />
                    <Review />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default TechnicianInfo