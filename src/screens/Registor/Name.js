import React, { useState } from 'react'


import Footer from '../../components/Registor/Footer'
import MyButton from '../../components/MyButton'
import MyTextInput from '../../components/MyTextInput'
import { registor, color } from '../../stylesheet'


import { Text, SafeAreaView, View } from 'react-native'

import { connect } from 'react-redux'
import { setFirstname , setLastname } from '../../store/actions/regAction'

const mapStateToProps = (state) => ({
    firstname: state.reg.firstname,
    lastname: state.reg.lastname
})

const connector = connect(mapStateToProps, { setFirstname , setLastname })

const Name = (props) => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: color.WHITE, flex: 1 }}>
                <View style={[registor.container]}>
                    <View style={{marginBottom:15 , width:'100%' , alignItems:'center'}}>
                        <Text style={registor.whaturname}>
                            คุณชื่ออะไร ?
                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, marginRight: 2 }}>
                            <MyTextInput 
                                placeholder='ชื่อ' 
                                onChangeText={(val) => props.setFirstname(val)}
                                value={props.firstname}
                                // onBlur={ () => props.setFirstname(firstname)}
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 2 }}>
                            <MyTextInput 
                                placeholder='นามสกุล' 
                                onChangeText={(val) => props.setLastname(val)} 
                                value={props.lastname}
                                // onBlur={ () => props.setLastname(lastname)}
                            />
                        </View>
                    </View>
                    <Text>
                        {`${props.firstname} ${props.lastname}`}
                    </Text>
                    <MyButton title='ถัดไป' onPress={() => props.navigation.navigate('reg_select')} />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(Name)