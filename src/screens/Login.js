import React, { useState, useRef } from 'react'

import { Text, SafeAreaView, Button, View, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions/authAction'
import MyButton from '../components/MyButton'
import Footer from '../components/Login/Footer'
import { color } from '../stylesheet'
import { inputStyles } from '../components/MyTextInput'
import Feather from 'react-native-vector-icons/Feather'

const mapStateToProps = (state) => ({

})

const connector = connect(mapStateToProps, { login })

const Login = (props) => {
    const uname_ref = useRef()
    const pwss_ref = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [secure, setSecure] = useState(true)

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: '10%' }}>
                    <View style={{ width: 100, height: 100, backgroundColor: color.BLUE_4, marginBottom: 15, borderRadius: 50 }}>
                    </View>
                    <View style={[inputStyles.container]}>
                        <TextInput
                            style={[inputStyles.textInput]}
                            placeholder='Username'
                            placeholderTextColor={color.BLUE_2}
                            blurOnSubmit={false}
                            ref = {uname_ref}
                            onSubmitEditing={() => {
                                pwss_ref.current.focus()
                            }}
                            value={username}
                            onChangeText={(val) => setUsername(val)}
                            autoCapitalize='none'
                            autoCorrect={false}
                            autoCompleteType='off'
                        />
                    </View>
                    <View style={[inputStyles.container]}>
                        <TextInput
                            style={[inputStyles.textInput]}
                            placeholder='Password'
                            placeholderTextColor={color.BLUE_2}
                            blurOnSubmit={false}
                            ref = {pwss_ref}
                            onSubmitEditing={() => {
                                Keyboard.dismiss()
                                props.login(username, password)
                            }}
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={secure}
                            autoCompleteType='off'
                        />
                        {
                            <TouchableOpacity style={inputStyles.iconContainer} onPress={() => setSecure(!secure)}>
                                <Feather name={secure ? 'eye' : 'eye-off'} style={[inputStyles.icon]} />
                            </TouchableOpacity>
                        }
                    </View>
                    <MyButton title='Sign in' onPress={() => {
                        Keyboard.dismiss()
                        props.login(username, password)
                    }} />
                    <View style={styles.btnContainer}>
                        <View style={styles.header}>
                            <View style={styles.line} />
                            <Text style={styles.headerText}>
                                or connect with
                            </Text>
                            <View style={styles.line} />
                        </View>
                        <TouchableOpacity style={styles.facebookButton}>
                            <Feather name='facebook' style={styles.facebookIcon} />
                        </TouchableOpacity>

                    </View>
                </View>
                <Footer navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}

export default connector(Login)

const styles = StyleSheet.create({
    facebookButton: {
        backgroundColor: color.FACEBOOK,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        height: 50,
        width: 50,
    },
    facebookIcon: {
        marginTop: 5,
        marginRight: 5,
        fontSize: 25,
        color: color.WHITE
    },
    container: {
        flex: 1,
        backgroundColor: color.WHITE,
        justifyContent: 'space-around'
    },
    btnContainer: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        height: 1,
        borderTopWidth: 1,
        borderTopColor: color.BLUE_4,
        flex: 1,
        marginHorizontal: 20
    }

})