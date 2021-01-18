import { StyleSheet , Dimensions , PixelRatio } from 'react-native'

export const widthToDp = percent => {
    const swidth = Dimensions.get('window').width
    const elemWidth = parseFloat(percent)

    return PixelRatio.roundToNearestPixel( swidth * elemWidth / 100)
}

export const heightToDp = percent => {
    const sheight = Dimensions.get('window').height
    const elemHeight = parseFloat(percent)

    return PixelRatio.roundToNearestPixel( sheight * elemHeight / 100)
}

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
color.WHITE = '#F6F6F6'
color.GREY = '#999999'


export const content = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: widthToDp('8'),
        paddingVertical: 10,
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
        marginHorizontal: 2.5,
        borderRadius: 10,
        aspectRatio: 1,
    },
    fullBox: {
        backgroundColor: color.BLUE_1,
        width:'100%',
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
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: heightToDp('10')
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
        fontSize: 30,
        color: color.BLUE_2,
    },
    badges: {
        aspectRatio: 1,
        width: 20,
        backgroundColor: color.YELLOW,
        borderRadius: 10,
        position: 'absolute',
        right: -5,
        top: -5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgesText: {
        color: color.BLUE_2,
        fontWeight: 'bold'
    },
    backIconContainer: {
        position: 'absolute',
        left: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        zIndex: 2
    },
    backIcon: {
        fontSize: 30,
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
        width: 50,
        height: 50,
        borderRadius: 25,
        marginVertical: 5,
        backgroundColor: color.GREEN_4
    },
    interlocutorName: {
        fontSize: 14,
        color: '#444'
    },
    bbt: {
        borderBottomWidth: 0.3,
        borderBottomColor: color.BLUE_5,
        paddingBottom: 15,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    rightIcon: {
        fontSize: 14,
        color: '#444',
        marginLeft: 5,
    }
})


export const userInfo = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 25
    },
    subContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    name: {
        color: color.BLUE_2,
        fontSize: 16,
        fontWeight: '600'
    },
    type: {
        color: color.BLUE_4,
        fontSize: 14,
        fontWeight: 'normal'
    },
    userImage: {
        aspectRatio: 1,
        width: 50,
        backgroundColor: color.BLUE_5,
        borderRadius: 25,
        marginLeft: 10
    },
})

export const searchScreen = StyleSheet.create({
    textInputContainer: {
        borderRadius: 10,
        padding: 10,
        paddingLeft: 20,
        marginHorizontal: 25,
        flexDirection: 'row-reverse',
        backgroundColor: color.BLUE_5,
        justifyContent: 'space-between'
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: color.BLUE_1,
    },
    searchIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    searchIcon: {
        fontSize: 25,
        color: color.BLUE_1,
    },
    listContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: color.BLUE_5,
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
        fontSize: 14
    },
    nameText: {
        color: color.BLUE_1,
        fontSize: 16
    },
    infoContainer: {
        justifyContent: 'space-between',
        height: 50,
        paddingLeft: 25,
        flex: 1,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    techImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: color.GREEN_4
    },
    detailbtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center'
    },
    detailbtnText: {
        color: color.BLUE_3,
        fontSize: 12
    }
})

export const userNotification = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: color.BLUE_5
    },
    headerContainer: {
        borderBottomColor: color.BLUE_4,
        borderBottomWidth: 0.3,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        color: color.BLUE_2
    },
    headerID: {
        fontSize: 14,
        color: color.BLUE_4
    },
    content: {
        // borderBottomWidth: 0.6,
        // borderBottomColor: color.BLUE_5 ,
        padding: 5,
    },
    abstractContainer: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    abstractBottomBorder: {
        borderBottomWidth: 0.5,
        borderColor: color.BLUE_4
    },
    imageContainer: {
        width: 75,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    image: {
        width: 60,
        aspectRatio: 1,
        height: 60,
        borderRadius: 30,
        backgroundColor: color.YELLOW_4,
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    buttonContainer: {
        // backgroundColor:'grey',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: 5,
        width: 75,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginVertical: 2
    },
    contactButton: {
        backgroundColor: color.BLUE_3,
    },
    acceptButton: {
        backgroundColor: color.GREEN_2,
    },
    buttonText: {
        fontSize: 12,
        color: color.WHITE
    },
    star: {
        // backgroundColor:color.YELLOW
        fontSize: 14,
        color: color.YELLOW
    },
    text: {
        color: color.BLUE_2
    },
    nameText: {
        fontSize: 16
    },
    detailText: {
        fontSize: 12
    }
})

export const techNotification = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: color.BLUE_2
    },
    headerContainer: {
        borderBottomColor: color.BLUE_5,
        borderBottomWidth: 0.3,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        color: color.WHITE
    },
    headerID: {
        fontSize: 14,
        color: color.BLUE_5
    },
    content: {
        // borderBottomWidth: 0.6,
        // borderBottomColor: color.BLUE_5 ,
        padding: 5,
    },
    abstractContainer: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    abstractBottomBorder: {
        borderBottomWidth: 0.5,
        borderColor: color.BLUE_5
    },
    imageContainer: {
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 60,
        aspectRatio: 1,
        height: 60,
        borderRadius: 30,
        backgroundColor: color.BLUE_5,
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    buttonContainer: {
        // backgroundColor:'grey',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: 5,
        width: 75,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginVertical: 2
    },
    contactButton: {
        backgroundColor: color.YELLOW_1,
    },
    acceptButton: {
        backgroundColor: color.GREEN_2,
    },
    buttonText: {
        fontSize: 12,
        color: color.WHITE
    },
    star: {
        // backgroundColor:color.YELLOW
        fontSize: 14,
        color: color.YELLOW
    },
    text: {
        color: color.WHITE
    },
    nameText: {
        fontSize: 16
    },
    detailText: {
        fontSize: 12
    }
})

export const posting = StyleSheet.create({
    halfContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    },
    halfHeader: {
        textAlign: 'center',
        fontSize: 16,
        color: color.BLUE_3
    },
    halfInput: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: color.BLUE_5,
        height: 35,
        flexDirection: 'row',
    },
    fullContainer: {
        paddingBottom: 5,
        paddingTop: 0
    },
    fullHeader: {
        paddingLeft: 15,
        fontSize: 16,
        color: color.BLUE_0
    },
    fullSelector: {
        marginTop: 5,
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: color.BLUE_5,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputText: {
        color: color.BLUE_1,
        fontSize: 16
    },
    detailInput: {
        height: 100,
        marginTop: 5,
        padding: 15,
        borderRadius: 10,
        borderWidth: 0.5,
        fontSize: 16,
        borderColor: color.BLUE_4,
        color: color.BLUE_2,
        lineHeight: 20,
    },
    detailLength: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 5,
        marginBottom: 5,
    },
    chevronDown: {
        color: color.BLUE_0,
        width: 20,
        height: 20,
    },
    mapContainer: {
        aspectRatio: 1,
        width: '100%',
        backgroundColor: color.BLUE_5,
        marginTop: 5,
        borderRadius: 10
    },
    descLine: {
        height: 1,
        borderBottomColor: color.BLUE_3,
        borderBottomWidth: 1,
        flex: 1,
    },
    descContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descText: {
        marginHorizontal: 10,
        color: color.BLUE_3
    },
    mt: {
        marginTop: 15
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
        paddingHorizontal: 20,
        borderRadius: 20,
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
        height: 50
    },
    headerText: {
        fontSize: 16,
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
        height: 60,
        marginVertical: 20,
        padding: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: color.GREEN_5,
        shadowRadius: 7,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.23
    },
    closeBtnText: {
        fontSize: 16,
        color: color.GREEN_5
    }
})

export const message = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor: color.LIGHT_GREY,
        borderBottomWidth: 0.3,
        paddingHorizontal: 5,
        paddingBottom: 15,
    },
    imageContainer: {
        aspectRatio: 1,
        width: 50,
        height: 50,
        backgroundColor: color.BLUE_5,
        borderRadius: 25,
        marginHorizontal: 15,

    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
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
        paddingHorizontal: 10,
        flex: 1
    },
    name: {
        fontSize: 18,
        color: color.BLUE_0,
        fontWeight: 'normal'
    },
    unreadName: {
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: color.BLUE_3,
        fontWeight: 'normal',
        flexShrink: 1,
    },
    unreadMessage: {
        fontWeight: 'bold'
    },
    bubbleContainer: {
        paddingVertical: 2,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    rightContainer: {
        alignItems: 'flex-end'
    },
    bubble: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 25,
        maxWidth: '75%'
    },
    rightBubble: {
        // borderBottomRightRadius: 0,
        backgroundColor: color.BLUE_3
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
        marginBottom: 5,
    },
    textInput: {
        backgroundColor: color.BLUE_5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        flex: 1,
        borderRadius: 10,
        height: 'auto',
        textAlignVertical: 'center',
        fontSize: 16
    },
    sendButton: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameContainer: {
        marginTop: 10,
        marginBottom: 3
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
        color: '#666',
        fontSize: 12
    },
    newDateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    newDateText: {
        color: '#666',
        fontSize: 12
    },
    bubleImage: {
        width: '75%',
        minHeight: 200,
        maxHeight: 500
    },
    rightImageBubble: {
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    leftImageBubble: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
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
        marginTop: '20%',
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