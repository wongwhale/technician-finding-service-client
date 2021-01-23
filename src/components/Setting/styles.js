import { StyleSheet } from 'react-native'
import { widthToDp, color, heightToDp } from '../../stylesheet'

export const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
    },
    selectBtn: {
        width: widthToDp('5'),
        height: widthToDp('5'),
        marginLeft: widthToDp('10'),
        marginRight : widthToDp('3') ,
        borderRadius: widthToDp('1'),
        justifyContent:'center',
        alignItems:'center',
        marginVertical : widthToDp('1')
    },
    unselect: {
        // backgroundColor: color.GREEN_4,
        // color: color.GREEN_0,
        // fontWeight: 'bold'
        backgroundColor:color.BLUE_5,
        color : color.BLUE_4,
    },
    selected: {
        backgroundColor: color.GREEN_2,
        color: color.GREEN_0,
        fontWeight: 'bold'
    },
    selectedText: {
        fontSize: widthToDp('4'),
        color : color.BLUE_0
    },
    checkIcon: {
        fontSize:widthToDp('4'),
        color:color.WHITE
    }
})