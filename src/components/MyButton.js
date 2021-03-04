import React, { } from 'react'

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { color, widthToDp } from '../stylesheet'
import LinearGradient from 'react-native-linear-gradient'

const MyButton = ({ onPress, title }) => {
    return (
        <>
           
                <LinearGradient
                    // colors={[ color.BLUE_3, color.BLUE_2 , color.BLUE_1 , color.BLUE_1 , color.BLUE_0]}
                    colors={[  color.BLUE_2 , color.BLUE_2 ]}
                    style={styles.container}
                    onTouchEnd={ () => {
                        onPress()
                    }}
                >
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </LinearGradient>
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
                paddingVertical: widthToDp('2')
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