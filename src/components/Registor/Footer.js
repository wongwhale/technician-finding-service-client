import React, { } from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { color } from '../../stylesheet'
import { connect } from 'react-redux'

import {clear } from '../../store/actions/regAction'

const mapStateToProps = (state) => ({
    
})

const Footer = (props) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('login')
                    }}>
                        <Text style={styles.text}>Already have an accout?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default connect(mapStateToProps , {})(Footer)

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