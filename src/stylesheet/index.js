import { StyleSheet, Dimensions, PixelRatio , Platform } from 'react-native'

export const widthToDp = percent => {
    const swidth = Dimensions.get('window').width
    const elemWidth = parseFloat(percent)

    return PixelRatio.roundToNearestPixel(swidth * elemWidth / 100)
}

export const heightToDp = percent => {
    const sheight = Dimensions.get('window').height
    const elemHeight = parseFloat(percent)

    return PixelRatio.roundToNearestPixel(sheight * elemHeight / 100)
}

export const buttonRadiusDp = widthToDp('2')
export const modalRadiusDp = widthToDp('3')

export const color = {}
// color.BLUE_0 = '#325288'
color.BLUE_0 = '#182947'
color.BLUE_1 = '#2A3A56'
color.BLUE_2 = '#40506E'
color.BLUE_3 = '#5B6A84'
color.BLUE_4 = '#818CA0'
color.BLUE_5 = '#D3D9E3'

color.RED_0 = '#6A321D'
color.RED_1 = '#824C38'
color.RED_2 = '#A56E59'
color.RED_3 = '#C79582'
color.RED_4 = '#F1CCBE'

color.GREEN_0 = '#144931'
color.GREEN_1 = '#275A42'
color.GREEN_2 = '#3D725A'
color.GREEN_3 = '#5A8974'
color.GREEN_4 = '#83A797'
color.GREEN_5 = '#23383F'

color.YELLOW_0 = '#6A4F1D'
color.YELLOW_1 = '#826838'
color.YELLOW_2 = '#A58B59'
color.YELLOW_3 = '#C7AF82'
color.YELLOW_4 = '#F1DFBE'

color.FACEBOOK = '#3b5998'

color.GREY_BLUE = '#7d8aa1'
color.DARK_BLUE = '#112046'
color.YELLOW = '#F2C743'
// color.LIGHT_GREY = '#E6E6E6'
color.LIGHT_GREY = '#D4D4CE'
color.GREEN = '#248152'
// color.GREEN_5 = '#386065'
color.IOS_BLUE = '#0461e9'
color.LIGHT_BLUE = '#97B3D0'
// color.GREY_BLUE = '#539D'
color.SKIN = '#F0EEE8'
color.WHITE = '#e6e6e6'
color.GREY = '#999999'

export const card = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: widthToDp('2'),
        marginBottom: 15
    },
    cardHeader: {
        borderBottomColor: color.WHITE,
        paddingHorizontal: widthToDp('4'),
        paddingVertical: widthToDp('2'),
        borderBottomWidth: 1
    },
    cardContainer: {
        paddingHorizontal: widthToDp('4'),
        paddingVertical:widthToDp('2')
    },
    headerText: {
        fontSize: widthToDp('4.5'),
        color: color.BLUE_0
    },
    topBorder : {
        borderTopColor : color.WHITE,
        borderTopWidth:1
    },
})

export const content = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: widthToDp('7'),
        paddingVertical: 10,
    },
    safearray: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topsafearray: {
        flex: 0,
        backgroundColor: '#fff'
    }
})

export const mainScreen = StyleSheet.create({
    container: {
        flex: 1
    },
    menuLayout: {
        paddingHorizontal: widthToDp('8'),
        paddingVertical: 5,
        flexDirection: 'row'
    },
    halfBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.BLUE_5,
        borderRadius: 10,
        aspectRatio: 1,
    },
    fullBox: {
        backgroundColor: color.BLUE_1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        aspectRatio: 2,
        color: color.BLUE_5,
        flexDirection: 'row'
    },
    menuTextHalf: {
        color: color.BLUE_1,
        fontSize: 20,
        marginTop: 5
    },
    menuTextFull: {
        color: color.BLUE_5,
        fontSize: 30,
        marginLeft: 10
    }
})

export const global = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: heightToDp('7'),
        backgroundColor: '#fff',
    },
    chatHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: heightToDp('7'),
        backgroundColor: '#fff',
        paddingBottom: heightToDp('1')
    },
    headerText: {
        color: color.BLUE_2,
        fontSize: heightToDp('3'),
        fontWeight: '600',
    },
    chatIconContainer: {
        position: 'absolute',
        right: widthToDp('8'),
    },
    chatIcon: {
        fontSize: heightToDp('3'),
        color: color.BLUE_2,
    },
    badges: {
        aspectRatio: 1,
        width: heightToDp('2'),
        backgroundColor: color.YELLOW,
        borderRadius: heightToDp('1'),
        position: 'absolute',
        right: -(widthToDp('1')),
        top: -(heightToDp(0.5)),
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgesText: {
        color: color.BLUE_2,
        fontWeight: 'bold',
        fontSize: heightToDp('1.5')
    },
    backIconContainer: {
        position: 'absolute',
        left: widthToDp('5'),
        flexDirection: 'row',
        zIndex: 2
    },
    backIcon: {
        fontSize: heightToDp('3'),
        color: color.BLUE_2,
    },
    backTextContainer: {
        backgroundColor: color.BLUE_2,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    backText: {
        color: color.BLUE_5,
        fontWeight: 'bold'
    },
    interlocutorImage: {
        height: heightToDp('5'),
        aspectRatio: 1,
        borderRadius: heightToDp('2.5'),
        marginVertical: heightToDp('1'),
        backgroundColor: color.GREEN_4
    },
    interlocutorName: {
        fontSize: heightToDp('1.5'),
        color: '#444'
    },
    bbt: {
        borderBottomWidth: 0.3,
        borderBottomColor: color.BLUE_5,
        paddingBottom: heightToDp('1'),
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    rightIcon: {
        fontSize: heightToDp('1.5'),
        color: '#444',
        marginLeft: 5,
    }
})


export const userInfo = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: heightToDp('2'),
        paddingHorizontal: widthToDp('8'),
    },
    subContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingLeft: widthToDp('3'),
    },
    name: {
        color: color.BLUE_2,
        fontSize: heightToDp('2'),
        fontWeight: '500'
    },
    type: {
        color: color.BLUE_4,
        fontSize: heightToDp('1.6'),
        fontWeight: 'normal'
    },
    userImage: {
        aspectRatio: 1,
        height: heightToDp('6'),
        borderRadius: heightToDp('3'),
        marginLeft: heightToDp('1'),
        backgroundColor: color.BLUE_5,
    },
})

export const searchScreen = StyleSheet.create({
    textInputContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        flex: 1,
        height: widthToDp('10'),
        paddingHorizontal: widthToDp('1'),
    },
    textInput: {
        flex: 1,
        fontSize: heightToDp('2'),
        color: color.BLUE_1,
    },
    searchIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: widthToDp('10'),
        aspectRatio: 1
    },
    searchIcon: {
        fontSize: widthToDp('5'),
        color: color.BLUE_1,
    },
    xIconContainer: {
        marginRight: widthToDp('2'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    xIcon: {
        color: color.BLUE_2,
        fontSize: widthToDp('4'),
    },
    listContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: heightToDp('1.5'),
        borderBottomWidth: heightToDp('0.1'),
        borderBottomColor: color.BLUE_5,
        paddingLeft: widthToDp('3')
    },
    listRowContainer: {
        alignItems: 'flex-start',
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    distanceText: {
        color: color.BLUE_2,
        fontSize: widthToDp('3')
    },
    nameText: {
        color: color.BLUE_1,
        fontSize: widthToDp('4')
    },
    infoContainer: {
        justifyContent: 'space-evenly',
        height: heightToDp('6'),
        flex: 1,
        paddingLeft: widthToDp('3'),
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: heightToDp('6'),
    },
    techImage: {
        height: heightToDp('6'),
        aspectRatio: 1,
        borderRadius: heightToDp('3'),
        backgroundColor: color.GREEN_4
    },
    detailbtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center'
    },
    detailbtnText: {
        color: color.BLUE_3,
        fontSize: widthToDp('2.5')
    },
    filterBtn: {
        backgroundColor: color.WHITE,
        marginLeft: widthToDp('1'),
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        height: widthToDp('10'),
        borderRadius: widthToDp('1')
    },
    filterIcon: {
        fontSize: widthToDp('4'),
        color: color.BLUE_2
    }
})

export const userNotification = StyleSheet.create({
    bg : {
        backgroundColor : color.BLUE_5
    },
    contactButton: {
        backgroundColor: color.BLUE_3,
    },
    acceptButton: {
        backgroundColor: color.GREEN_2,
    },
    buttonText: {
        fontSize: widthToDp('2.6'),
        color: color.WHITE
    },
    star: {
        // backgroundColor:color.YELLOW
        fontSize: widthToDp('2'),
        color: color.YELLOW
    },
    text: {
        color: color.BLUE_2
    },
    nameText: {
        fontSize: widthToDp('4'),
        fontWeight: 'bold'
    },
    detailText: {
        fontSize: widthToDp('3')
    },
    headerText: {
        color : color.BLUE_0
    },
})

export const notification = StyleSheet.create({
    container: {
        paddingVertical: heightToDp('1'),
        borderRadius: heightToDp('1.5'),
    },
    headerContainer: {
        borderBottomColor: color.WHITE,
        borderBottomWidth: heightToDp('0.05'),
        paddingHorizontal: widthToDp('4'),
        paddingVertical: heightToDp('1')
    },
    headerText: {
        fontSize: widthToDp('4'),
        fontWeight : 'bold'
    },
    headerID: {
        fontSize: widthToDp('3.5'),
        color: color.BLUE_2
    },
    content: {
        
    },
    abstractContainer: {
        flexDirection: 'row',
        height: widthToDp('23')
    },
    abstractBottomBorder: {
        borderBottomWidth: heightToDp('0.1'),
        borderColor: color.WHITE
    },
    imageContainer: {
        width: widthToDp('12'),
        marginRight :widthToDp('2') ,
        marginLeft : widthToDp('4'), 
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    image: {
        width: widthToDp('12'),
        height: widthToDp('12'),
        borderRadius: widthToDp('6'),
        backgroundColor: color.YELLOW_4,
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: widthToDp('3'),
        marginRight : widthToDp('4')
    },
    buttonContainer: {
        // backgroundColor:'grey',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: 5,
        width: widthToDp('15'),
        height: widthToDp('6'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: widthToDp('3'),
        marginVertical: widthToDp('0.2')
    },
    nameText: {
        fontSize: widthToDp('4'),
        fontWeight: 'bold'
    },
    detailText: {
        fontSize: widthToDp('3')
    },
})


export const newOrder = StyleSheet.create({
    bg : {
        backgroundColor : color.BLUE_2
    },
    contactButton: {
        backgroundColor: color.YELLOW_2,
    },
    acceptButton: {
        backgroundColor: color.GREEN_2,
    },
    buttonText: {
        fontSize: widthToDp('2.6'),
        color: color.WHITE
    },
    star: {
        // backgroundColor:color.YELLOW
        fontSize: widthToDp('2'),
        color: color.YELLOW
    },
    text: {
        color: color.WHITE
    },
    headerText:{
        color : color.WHITE
    },
})

export const  acceptedOrder = StyleSheet.create({
    bg : {
        backgroundColor : color.GREEN_2
    },
    contactButton: {
        backgroundColor: color.YELLOW_2,
    },
    acceptButton: {
        backgroundColor: color.BLUE_2,
    },
    buttonText: {
        fontSize: widthToDp('2.6'),
        color: color.WHITE
    },
    star: {
        // backgroundColor:color.YELLOW
        fontSize: widthToDp('2'),
        color: color.YELLOW
    },
    text: {
        color: color.WHITE
    },
    headerText:{
        color : color.WHITE
    },
})

export const posting = StyleSheet.create({
    halfContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: heightToDp('1')
    },
    halfHeader: {
        textAlign: 'center',
        fontSize: widthToDp('4'),
        color: color.BLUE_0
    },
    halfInput: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: heightToDp('0.5'),
        borderRadius: widthToDp('2'),
        backgroundColor: color.BLUE_5,
        height: heightToDp('4.5'),
        flexDirection: 'row',
    },
    fullContainer: {
        marginBottom: heightToDp('1'),
        paddingTop: 0
    },
    fullHeader: {
        paddingLeft: 15,
        fontSize: 16,
        color: color.BLUE_0
    },
    fullSelector: {
        marginTop: heightToDp('0.5'),
        paddingHorizontal: 15,
        borderRadius: widthToDp('2'),
        justifyContent: 'center',
        backgroundColor: color.BLUE_5,
        height: heightToDp('4.5'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        color: color.BLUE_1,
        fontSize: widthToDp('3.5'),

    },
    detailInput: {
        height: widthToDp('25'),
        marginTop: heightToDp('0.5'),
        padding: widthToDp('3'),
        borderRadius: widthToDp('2'),
        borderWidth: 1,
        fontSize: widthToDp('4'),
        borderColor: color.BLUE_5,
        color: color.BLUE_1,
        lineHeight: widthToDp('4'),
        textAlignVertical:'top'
    },
    detailLength: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: widthToDp('1'),
        marginBottom: 5,
    },
    chevronDown: {
        fontSize: widthToDp('5'),
        color: color.BLUE_0,
    },
    mapContainer: {
        height: heightToDp('30'),
        width: '100%',
        backgroundColor: color.BLUE_5,
        marginTop: 5,
        borderRadius: widthToDp('2'),
    },
    descLine: {
        height: 1,
        // borderBottomColor: color.BLUE_3,
        // borderBottomWidth: 1,
        backgroundColor: color.BLUE_3,
        flex: 1,
    },
    descContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descText: {
        marginHorizontal: 10,
        color: color.BLUE_2,
        fontSize: widthToDp('3.5')
    },
    mt: {
        marginTop: heightToDp('2')
    }
})


export const datePicker = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#E6E6E656',
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        bottom: 0
    },
    contentContainer: {
        paddingHorizontal: widthToDp('4'),
        borderRadius: modalRadiusDp,
        backgroundColor: color.WHITE,
        shadowColor: color.GREEN_5,
        shadowRadius: 7,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.23,
        zIndex: 2,
        flex: 1
    },
    headerContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        height: heightToDp('5'),
    },
    headerText: {
        fontSize: widthToDp('4'),
        fontWeight: 'bold',
        textAlign: 'center',
        color: color.BLUE_0
    },
    pickerContainer: {
        flexDirection: 'row',
    },
    dayContainer: {
        flex: 1,
    },
    monthContainer: {
        flex: 2
    },
    yearContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    closeContainer: {
        height: heightToDp('6'),
        marginBottom: heightToDp('2'),
        marginTop: heightToDp('1.5'),
        padding: heightToDp('1'),
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: modalRadiusDp,
        shadowColor: color.GREEN_5,
        shadowRadius: 7,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.23
    },
    closeBtnText: {
        fontSize: widthToDp('4'),
        color: color.GREEN_5
    }
})

export const message = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        borderBottomColor: color.LIGHT_GREY,
        borderBottomWidth: 0.3,
        paddingHorizontal: 5,
        paddingVertical: heightToDp('1'),
    },
    imageContainer: {
        width: widthToDp('12'),
        height: widthToDp('12'),
        backgroundColor: color.BLUE_5,
        borderRadius: widthToDp('6'),
        marginHorizontal: widthToDp('2')
    },
    image: {
        height: widthToDp('12'),
        width: widthToDp('12'),
        borderRadius: widthToDp('6')
    },
    badges: {
        aspectRatio: 1,
        width: 20,
        backgroundColor: color.YELLOW,
        borderRadius: 10,
        right: -5,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgesText: {
        color: color.BLUE_0
    },
    listContent: {
        justifyContent: 'space-between',
        paddingHorizontal: widthToDp('3'),
        flex: 1,
    },
    name: {
        fontSize: widthToDp('4'),
        color: color.BLUE_0,
        fontWeight: 'normal'
    },
    unreadName: {
        fontWeight: 'bold',
    },
    text: {
        fontSize: widthToDp('3'),
        color: color.BLUE_3,
        fontWeight: 'normal',
    },
    unreadMessage: {
        fontWeight: 'bold'
    },
    bubbleContainer: {
        paddingVertical: heightToDp('0.2'),
        paddingHorizontal: widthToDp('5'),
        justifyContent: 'center',
    },
    rightContainer: {
        alignItems: 'flex-end'
    },
    bubble: {
        paddingVertical: heightToDp('0.7'),
        paddingHorizontal: widthToDp('3'),
        borderRadius: heightToDp('2'),
        maxWidth: '75%'
    },
    rightBubble: {
        backgroundColor: color.BLUE_3,

    },
    rightText: {
        color: color.WHITE
    },
    leftContainer: {
        alignItems: 'flex-start'
    },
    leftBubble: {
        // borderBottomLeftRadius: 0,
        backgroundColor: color.YELLOW
    },
    leftText: {
        color: '#111'
    },
    chatInputContainer: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        backgroundColor: color.BLUE_5,
        paddingHorizontal: widthToDp('3'),
        marginHorizontal: widthToDp('2'),
        paddingVertical: widthToDp('1'),
        lineHeight: widthToDp('4'),
        borderRadius: buttonRadiusDp,
        height : 'auto',
        fontSize: widthToDp('4'),
    },
    sendButton: {
        marginRight: widthToDp('3'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameContainer: {
        marginTop: 10,
        marginBottom: 3,
    },
    rightNameContainer: {
        marginRight: 15
    },
    leftNameContainer: {
        marginLeft: 15,
    },
    nameText: {
        fontSize: 12
    },
    rightNameText: {
        color: color.BLUE_0
    },
    leftNameText: {
        color: '#111'
    },
    dateTimeContainer: {

    },
    dateTimeText: {
        color: color.BLUE_0,
        fontSize: widthToDp('2.7')
    },
    newDateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: heightToDp('1')
    },
    newDateText: {
        color: color.BLUE_0,
        fontSize: 12
    },
    bubleImage: {
        width: widthToDp('60'),
        minHeight: widthToDp('30'),
        maxHeight: widthToDp('50'),
    },
    rightImageBubble: {
        borderTopLeftRadius: widthToDp('4'),
        borderBottomLeftRadius: widthToDp('4'),
        borderTopRightRadius: widthToDp('2'),
        borderBottomRightRadius: widthToDp('2')
    },
    leftImageBubble: {
        borderTopLeftRadius: widthToDp('2'),
        borderBottomLeftRadius: widthToDp('2'),
        borderTopRightRadius: widthToDp('4'),
        borderBottomRightRadius: widthToDp('4')
    }
})

export const technician = StyleSheet.create({
    infoContainer: {
        // backgroundColor:'green',
        flexDirection: 'row',
    },
    imageContainer: {
        // backgroundColor:'blue',
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: color.GREEN_4
    },
    textContainer: {
        // backgroundColor:'yellow',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
    },
    aptitude: {
        backgroundColor: '#666',
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginVertical: 2.5,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    aptitudeText: {
        color: '#fff',
        fontSize: 13
    },
    aptitudeContainer: {
        // backgroundColor:'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingVertical: 5,
    },
    onsiteContainer: {
        backgroundColor: color.GREEN,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 25
    },
    onsiteText: {
        color: '#fff'
    },
    nameText: {
        color: color.BLUE_0,
        fontWeight: 'bold',
        fontSize: 20

    },
    telText: {
        color: color.GREEN,
        fontSize: 16
    },
    telBtn: {
        backgroundColor: color.GREEN,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 25,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 2.5,
        alignItems: 'center'
    },
    telNum: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 2
    },
    chatBtn: {
        backgroundColor: color.BLUE_0,
        marginVertical: 5,
        borderRadius: 25
    },
    chatText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        padding: 5
    },
    locationContainer: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 0.3,
        paddingBottom: 10,
        marginVertical: 10,
    },
    locationHeader: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    locationText: {
        color: color.BLUE_0,
        fontWeight: 'bold',
        fontSize: 18,
    },
    location: {
        paddingTop: 5,
        paddingHorizontal: 15
    },
    map: {
        aspectRatio: 2,
        backgroundColor: color.BLUE_5
    },
    ratingContainer: {
        paddingHorizontal: 25,
        alignItems: 'flex-start'
    },
    ratingNameContainer: {
        marginVertical: 2.5
    },
    ratingName: {
        fontSize: 16,
        color: color.BLUE_0,
    },
    commentContainer: {
        paddingLeft: 15,
        paddingVertical: 5,
        borderColor: color.LIGHT_GREY,
        borderBottomWidth: 0.3,
        width: '100%'
    },
    commentText: {
        fontSize: 14,
        color: '#666'
    },
    reviewContainer: {
        padding: 15,
        alignItems: 'flex-start',
        borderBottomWidth: 0.3,
        borderBottomColor: '#aaa'
    },
    reviewHeader: {
        paddingVertical: 5,
        marginBottom: 5,
        borderBottomWidth: 0.3,
        borderColor: color.LIGHT_GREY,
        alignItems: 'flex-start',
        width: '100%',
    },
})

export const registor = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: '10%',
        marginTop: '15%',
    },
    descText: {
        color: color.GREY,
        marginLeft: 15,
        marginBottom: 15
    },
    whaturname: {
        fontSize: 20,
        color: color.BLUE_0
    },
    selectBtn: {
        flex: 1,
        backgroundColor: color.GREY_BLUE,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 3
    },
    selectIcon: {
        fontSize: 40,
        color: color.WHITE
    },
    selectText: {
        color: color.WHITE,
        fontSize: 18,
        marginTop: 10
    },
    phoneInput: {
        // backgroundColor:'red',
        marginHorizontal: 5,
        flex: 1,
        fontSize: 20,
        color: color.BLUE_0,
        letterSpacing: 1
    },
    regionNumber: {
        fontSize: 20,
        color: color.BLUE_0,
        marginHorizontal: 5,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: color.BLUE_5,
        borderRadius: 10,
        marginBottom: 5
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    otpInput: {
        // borderBottomColor:color.BLUE_0,
        // borderBottomWidth:1,
        flex: 1,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 10,
        fontSize: 20,
        color: color.BLUE_0,
        backgroundColor: color.BLUE_5
    },
    borderRed: {
        backgroundColor: color.RED_4
    },
    textRed: {
        color: color.RED_0
    }
})