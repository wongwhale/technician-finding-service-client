import React, { } from 'react'


import Footer from '../../components/Registor/Footer'
import { registor, color } from '../../stylesheet'


import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import MyButton from '../../components/MyButton'

const PhoneNumber = (props) => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: color.WHITE, flex: 1 }}>
                <View style={registor.container}>
                    <View style={{ marginBottom: 15, width: '100%', alignItems: 'center' }}>
                        <Text style={registor.whaturname}>
                            กรอกเบอร์โทร
                        </Text>
                    </View>
                    <View style={registor.phoneInputContainer}>
                        <Text style={registor.regionNumber}>
                            +66
                            </Text>
                        <TextInput placeholder='' style={registor.phoneInput} autoFocus keyboardType='phone-pad' />
                    </View>
                    <MyButton title='ถัดไป' onPress={() => props.navigation.navigate('reg_otp')} />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default PhoneNumber