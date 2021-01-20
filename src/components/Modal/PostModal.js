import React from 'react'

import {
    StyleSheet
} from 'react-native'

import { color , widthToDp , heightToDp , modalRadiusDp , buttonRadiusDp } from '../../stylesheet'

export const modalStyle = StyleSheet.create({
    continaer: {
        height: '95%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 25,
        backgroundColor: color.BLUE_1
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconContainter: {
        zIndex: 1,
        width: 50,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    icon: {
        fontSize: 25,
        fontWeight: '200',
        color: color.WHITE
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        color: color.WHITE,
        fontSize: 30,
        fontWeight: '600',
    },
    nextBtn: {
        backgroundColor: color.BLUE_5,
        paddingVertical: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    nextContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 15
    },
    nextIcon: {
        fontSize: 23,
        color: color.BLUE_1,
    },
    nextText: {
        fontSize: 16,
        color: color.BLUE_1,
        fontWeight: 'bold'
    },

    subcontainer: {
        width:'84%',
        height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    topContainer: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sc: {
        height: 5,
        width: 50,
        backgroundColor: color.BLUE_4,
        borderRadius: 5
    }

})
