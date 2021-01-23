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
        backgroundColor:color.BLUE_3,
        borderRadius:widthToDp('2'),
        marginVertical:5,
        height:widthToDp('10'),
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:color.WHITE,
        fontSize:widthToDp('4'),
        fontWeight:'bold'
    }
})