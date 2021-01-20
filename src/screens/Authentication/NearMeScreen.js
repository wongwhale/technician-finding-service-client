import React  from 'react'

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

const NearMeScreen = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={content.safearray}>
                <Header page="ใกล้ฉัน"  back={true} navigation={navigation} />
                <View style={{flex:1 , backgroundColor:'#E5E5ED'}}>
                    {/* Map */}
                </View>
            </SafeAreaView>
            
        </>
    )
}

export default NearMeScreen