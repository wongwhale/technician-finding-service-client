import React, { useState } from 'react'

import { TextInput, View, TouchableOpacity, StyleSheet, Keyboard } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { color } from '../stylesheet'

const MyTextInput = ({ placeholder, onChangeText, value,
    isSecure = false, isOnBlur = false, onBlur, status = true  }) => {
    const [secure, setSecure] = useState(isSecure)

    return (
        <>
            <View style={[inputStyles.container, !status && status !== null ? inputStyles.borderRed : null]}>
                <TextInput
                    style={[inputStyles.textInput , !status && status !== null ? inputStyles.textRed : null]}
                    placeholder={placeholder}
                    placeholderTextColor={!status && status !== null ? color.RED_0 : color.BLUE_2}
                    secureTextEntry={secure}
                    textContentType={"none"}
                    blurOnSubmit={false}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    value={value}
                    onChangeText={(val) => onChangeText(val)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoCompleteType='off'
                    onBlur={() => {
                        if (isOnBlur) {
                            onBlur()
                        }
                    }}
                />
                {
                    isSecure ? (
                        <TouchableOpacity style={inputStyles.iconContainer} onPress={() => setSecure(!secure)}>
                            <Feather name={secure ? 'eye' : 'eye-off'} style={[inputStyles.icon , !status && status !== null ? inputStyles.textRed : null]} />
                        </TouchableOpacity>
                    ) : !status && status !== null ? (
                        <View>
                            <Feather name='x' style={[inputStyles.icon , inputStyles.textRed]} />
                        </View>
                    ) : null
                }

            </View>
        </>
    )
}

export default MyTextInput

export const inputStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        padding: 10,
        paddingLeft: 15,
        marginVertical: 5,
        backgroundColor: color.BLUE_5
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: color.BLUE_1,
        paddingLeft: 5
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 20,
        color: color.BLUE_2
    },
    borderRed: {
        // borderColor : color.RED_1,
        // borderWidth:1,
        backgroundColor: color.RED_4
    },
    textRed:{
        color:color.RED_0
    }
})