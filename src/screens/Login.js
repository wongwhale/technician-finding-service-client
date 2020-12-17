import React, { useState } from 'react'

import { Text, SafeAreaView, Button, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions/authAction'
import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'
import Footer from '../components/Login/Footer'
import { color } from '../stylesheet'

const mapStateToProps = (state) => ({

})

const connector = connect(mapStateToProps, { login })

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <SafeAreaView style={{ flex: 1 , backgroundColor: color.WHITE }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , paddingHorizontal:'10%' }}>
                    <View style={{width:100 , height:100 , backgroundColor: color.BLUE , marginBottom:15 , borderRadius:50}}>
                    </View>
                    <MyTextInput placeholder='Username' value={username} onChangeText={(val) => setUsername(val)} />
                    <MyTextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                        isSecure={true}
                    />
                    <MyButton title='Sign in' onPress={() => props.login(username, password)} />
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(Login)