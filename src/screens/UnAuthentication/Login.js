import React, { useState, useRef } from 'react'

import { Text, SafeAreaView, Button, View, TextInput, TouchableOpacity, StyleSheet, Keyboard, KeyboardAvoidingView, Image } from 'react-native'
import MyButton from '../../components/MyButton'
import Footer from '../../components/Login/Footer'
import { color, content, widthToDp } from '../../stylesheet'
import { inputStyles } from '../../components/MyTextInput'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { login, logout, checkToken, loginWithFacebook } from '../../store/actions/authAction'
import { connection } from '../../store/actions/socketAction'
import auth from '@react-native-firebase/auth';


const mapStateToProps = (state) => ({

})

const connector = connect(mapStateToProps, { loginWithFacebook, login, logout, connection, checkToken })

const Login = (props) => {
    const uname_ref = useRef()
    const pwss_ref = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [secure, setSecure] = useState(true)
    const [fbImage, setFbImage] = useState('')

    const handleLogin = () => {
        props.login(username, password)
            .then((res) => {
                if (res.status) {
                    props.checkToken()
                } else {
                    props.logout()
                }
            })
    }

    const handleFacebookdLogin = () => {
        props.loginWithFacebook()
            .then(({ status }) => {
                if (status) {
                    props.checkToken()
                }
                else {
                    props.navigation.navigate('reg_name')
                }
            }).catch(err => {
                console.log('login with facebook err :', err);
            })
    }

    return (
        <>
            <SafeAreaView style={[content.safearray]}>
                <KeyboardAvoidingView
                    behavior='padding'
                    style={{ flex: 1 }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: '10%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
                            <View style={{ width: 100, height: 100, backgroundColor: color.BLUE_4, borderRadius: 50, marginRight: 10 }} />
                        </View>
                        <View style={[inputStyles.container]}>
                            <TextInput
                                style={[inputStyles.textInput]}
                                placeholder='ชื่อผู้ใช้'
                                placeholderTextColor={color.BLUE_2}
                                blurOnSubmit={false}
                                ref={uname_ref}
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
                                placeholder='รหัสผ่าน'
                                placeholderTextColor={color.BLUE_2}
                                blurOnSubmit={false}
                                ref={pwss_ref}
                                onSubmitEditing={() => {
                                    Keyboard.dismiss()
                                    // props.login(username, password)
                                    handleLogin()
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
                        <MyButton title='เข้าสู่ระบบ' onPress={() => {
                            Keyboard.dismiss()
                            handleLogin()
                        }} />
                        <View style={styles.btnContainer}>
                            <View style={styles.header}>
                                <View style={styles.line} />
                                <Text style={styles.headerText}>
                                    เข้าสู่ระบบโดยวิธีอื่น
                            </Text>
                                <View style={styles.line} />
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    handleFacebookdLogin()

                                }}

                            >
                                <Ionicons name='logo-facebook' style={styles.facebookIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Footer navigation={props.navigation} />

                </KeyboardAvoidingView>
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
        fontSize: widthToDp('10'),
        color: color.FACEBOOK,
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