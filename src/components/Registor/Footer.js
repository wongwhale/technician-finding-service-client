import React, { } from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { color } from '../../stylesheet'

const Footer = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={styles.text}>Already have an accout?</Text>
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
    row: {
        flexDirection: 'row'
    },
    text: {
        color: color.IOS_BLUE
    }
})