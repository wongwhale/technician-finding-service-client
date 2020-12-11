import React, { } from 'react'

import { Text, SafeAreaView, Button, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions/authAction'

const mapStateToProps = (state) => ({

})

const connector = connect(mapStateToProps, { login })

const Login = (props) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Login
                </Text>
                <View>
                    <TextInput placeholder='username' autoCapitalize='none' style={{ margin: 5, fontSize: 15 }} />
                    <TextInput placeholder='password' autoCapitalize='none' style={{ margin: 5, fontSize: 15 }} />
                </View>
                <Button title='Login' onPress={() => props.login()} />
            </SafeAreaView>
        </>
    )
}

export default connector(Login)