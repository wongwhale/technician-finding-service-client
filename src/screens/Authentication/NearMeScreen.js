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

const NearMeScreen = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={{flex:1}}>
                <Header page="ใกล้ฉัน"  back={true} navigation={navigation} />
                <View style={{flex:1 , backgroundColor:'#E5E5ED'}}>
                    {/* Map */}
                </View>
            </SafeAreaView>
            
        </>
    )
}

export default NearMeScreen