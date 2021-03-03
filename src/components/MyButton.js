import React, { } from 'react'

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { color, widthToDp } from '../stylesheet'
import LinearGradient from 'react-native-linear-gradient'

const MyButton = ({ onPress, title }) => {
    return (
        <>
            <TouchableOpacity onPress={() => onPress()}
                style={{
                    width : '100%'
                }}
            >
                <LinearGradient
                    colors={[ color.BLUE_3, color.BLUE_2 , color.BLUE_1 , color.BLUE_1 , color.BLUE_0]}
                    style={styles.container}
                >
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </>
    )
}

export default MyButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        borderRadius: widthToDp('2'),
        ...Platform.select({
            ios: {
                paddingVertical: widthToDp('2')
            },
            android: {
                paddingVertical: 0
            },
            default: {
                paddingVertical: 0
            }
        }),
        paddingLeft: widthToDp('4'),
        paddingRight: widthToDp('1'),
        marginVertical: widthToDp('1'),
    },
    text: {
        color: '#fff',
        fontSize: widthToDp('4'),
        fontWeight: 'bold'
    }
})