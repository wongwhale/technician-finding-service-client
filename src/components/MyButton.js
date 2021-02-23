import React , {} from 'react'

import { TouchableOpacity , View , Text, StyleSheet } from 'react-native'
import { color, widthToDp } from '../stylesheet'

const MyButton = ({onPress , title}) => {
    return(
        <>
            <TouchableOpacity style={styles.container} onPress={ () => onPress()}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default MyButton

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent : 'center',
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
        backgroundColor: color.BLUE_3,
    },
    text:{
        color: '#fff',
        fontSize:widthToDp('4'),
        fontWeight:'bold'
    }
})