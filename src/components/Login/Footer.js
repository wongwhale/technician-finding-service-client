import React, { } from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { color } from '../../stylesheet'

const Footer = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                    <View style={[styles.row]}>
                        <Text style={{color:color.BLUE}}>Create your account? </Text>
                        <TouchableOpacity onPress={ () => navigation.navigate('reg_basic')}>
                            <Text style={styles.text}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color.LIGHT_GREY,
        borderTopWidth: 1
    },
    row:{
        flexDirection:'row'
    },
    text:{
        color:color.IOS_BLUE
    }
})