import React from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import Header from '../../components/Header'
import { content } from '../../stylesheet'

const NearMeScreen = ({ navigation }) => {
    return (
        <>
            {/* <SafeAreaView style={content.safearray}> */}
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header page="ใกล้ฉัน" back={true} navigation={navigation} />
                <View style={{ flex: 1 , backgroundColor:'#e5e5e5'}}>
                    {/* Map */}
                </View>
            </SafeAreaView>

        </>
    )
}

export default NearMeScreen