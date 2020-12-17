import React, { useState } from 'react'

import { TextInput, View, TouchableOpacity, StyleSheet, Keyboard } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { color } from '../stylesheet'

const MyTextInput = ({ placeholder, onChangeText, value, 
    isSecure = false , isOnBlur = false , onBlur }) => {
    const [secure, setSecure] = useState(isSecure)

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={color.GREY_BLUE}
                    secureTextEntry={secure}
                    blurOnSubmit={false}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    value={value}
                    onChangeText={(val) => onChangeText(val)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoCompleteType='off'
                    onBlur={ () => {
                        if(isOnBlur){
                            onBlur()
                        }
                    }}
                />
                {
                    isSecure ? (
                        <TouchableOpacity style={styles.iconContainer} onPress={() => setSecure(!secure)}>
                            <Feather name={secure ? 'eye' : 'eye-off'} style={styles.icon} />
                        </TouchableOpacity>
                    ) : null
                }

            </View>
        </>
    )
}

export default MyTextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        // borderColor: color.LIGHT_BLUE,
        // borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        paddingLeft: 15,
        marginVertical: 5,
        backgroundColor: color.GREY_LIGHT_BLUE
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: color.BLUE,
        paddingLeft:5
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 20,
        color: color.BLUE
    }
})