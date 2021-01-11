import React , {} from 'react'

import { TouchableOpacity , View , Text, StyleSheet } from 'react-native'
import { color } from '../stylesheet'

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
        backgroundColor:color.BLUE_2,
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
        marginVertical:5,
        height:45,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:color.WHITE,
        fontSize:18
    }
})