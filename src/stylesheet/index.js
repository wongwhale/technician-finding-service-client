import { StyleSheet } from 'react-native'

export const color = {}
color.BLUE = '#3F52B9'
color.GREY_LIGHT_BLUE = '#E5E5ED'
color.DARK_GREEN = '#386065'
color.YELLOW = '#FFAA38'
color.LIGHT_GREY = '#E6E6E6'
color.GREEN = '#248152'
color.IOS_BLUE = '#0461e9'


export const content = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 10
    }
})

export const mainScreen = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1
    },
    menuLayout: {
        paddingHorizontal: 25,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    halfBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.GREY_LIGHT_BLUE,
        marginHorizontal: 2.5,
        borderRadius: 10,
        aspectRatio: 1,
    },
    fullBox: {
        backgroundColor: color.DARK_GREEN,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        aspectRatio: 2,
        color: color.GREY_LIGHT_BLUE,
        flexDirection: 'row'
    },
    menuTextHalf: {
        color: color.BLUE,
        fontSize: 20,
        marginTop: 5
    },
    menuTextFull: {
        color: color.GREY_LIGHT_BLUE,
        fontSize: 30,
        marginLeft: 10
    }
})

export const global = StyleSheet.create({
    header: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    headerText: {
        color: color.BLUE,
        fontSize: 30,
        fontWeight: '600',
    },
    chatIconContainer: {
        position: 'absolute',
        right: 30,
        // backgroundColor:'black'
    },
    chatIcon: {
        fontSize: 30,
        color: color.BLUE,
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
        color: color.BLUE,
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
        color: color.BLUE,
    },
    backTextContainer: {
        backgroundColor: color.BLUE,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    backText: {
        color: color.GREY_LIGHT_BLUE,
        fontWeight: 'bold'
    },
    interlocutorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginVertical: 5
    },
    interlocutorName: {
        fontSize: 14,
        color: '#444'
    },
    bbt: {
        borderBottomWidth: 0.3,
        borderBottomColor: color.LIGHT_GREY,
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
        marginVertical: 10
    },
    subContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    name: {
        color: color.BLUE,
        fontSize: 16,
        fontWeight: '600'
    },
    type: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'normal'
    },
    userImage: {
        aspectRatio: 1,
        width: 50,
        backgroundColor: color.DARK_GREEN,
        borderRadius: 25,
        marginLeft: 25
    }
})

export const searchScreen = StyleSheet.create({
    textInputContainer: {
        color: color.BLUE,
        borderRadius: 10,
        padding: 10,
        paddingLeft:20,
        marginHorizontal: 25,
        flexDirection: 'row-reverse',
        backgroundColor:color.GREY_LIGHT_BLUE,
        justifyContent:'space-between'
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    },
    searchIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    searchIcon: {
        fontSize: 25,
        color: color.BLUE,
    },
    listContainer:{
        alignItems:'flex-start',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:15,
        borderBottomWidth:0.3,
        borderBottomColor:color.LIGHT_GREY
    },
    listRowContainer:{
        alignItems:'flex-start',
        marginVertical:2,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    distanceText:{
        color:color.BLUE
    },
    nameText:{
        color:color.BLUE,
        fontWeight:'bold'
    },
    infoContainer:{
        paddingLeft:25,
        flex:1,
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    techImage:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:color.DARK_GREEN
    },
    detailbtnContainer:{
        flexDirection:'row',
        alignItems:'center',
        textAlignVertical:'center'
    },
    detailbtnText:{
        color:color.BLUE,
        fontSize:12
    }
})

export const userNotification = StyleSheet.create({
    container: {
        // backgroundColor:'tomato',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
    },
    headerContainer: {
        borderBottomColor: color.LIGHT_GREY,
        borderBottomWidth: 0.3,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        color: color.BLUE
    },
    headerID: {
        fontSize: 14,
        color: '#666'
    },
    content: {
        // backgroundColor:'blue'
        borderBottomWidth: 0.6,
        borderBottomColor: '#e6e6e6',
        padding: 5,
    },
    abstractContainer: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    abstractBottomBorder: {
        borderBottomWidth: 0.3,
        borderColor: color.LIGHT_GREY
    },
    imageContainer: {
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'yellow'
    },
    image: {
        width: 50,
        // aspectRatio: 1,
        height: 50,
        borderRadius: 25,
        backgroundColor: color.GREY_LIGHT_BLUE,
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    buttonContainer: {
        // backgroundColor:'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginVertical: 5,
        padding: 5,
        width: 75,
        height: 30,
        alignItems: 'center',
        borderRadius: 25,
    },
    contactButton: {
        backgroundColor: color.BLUE,
    },
    acceptButton: {
        backgroundColor: color.GREEN,
    },
    buttonText: {
        color: color.GREY_LIGHT_BLUE
    },
    star: {
        // backgroundColor:color.YELLOW
        fontSize: 14,
        color: color.YELLOW
    },
    text: {
        color: color.BLUE
    }
})

export const posting = StyleSheet.create({
    halfContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    halfHeader: {
        textAlign: 'center',
        fontSize: 16,
        color: color.BLUE
    },
    halfInput: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        // borderWidth: 2,
        // borderColor: color.BLUE,
        backgroundColor:color.GREY_LIGHT_BLUE,
        height: 35,
        flexDirection: 'row',
    },
    fullContainer: {
        padding: 5,
        paddingTop: 0
    },
    fullHeader: {
        paddingLeft: 15,
        fontSize: 16,
        color: color.BLUE
    },
    fullSelector: {
        marginTop: 5,
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        justifyContent:'center',
        // borderWidth: 2,
        // borderColor: color.BLUE,
        backgroundColor:color.GREY_LIGHT_BLUE,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputText: {
        color: color.IOS_BLUE,
        // textDecorationLine: 'underline',
        fontSize: 16
    },
    detailInput: {
        height: 100,
        marginTop: 5,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:color.GREY_LIGHT_BLUE,
        // borderColor: color.BLUE,
        lineHeight: 20,
    },
    detailLength: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 5
    },
    chevronDown: {
        color: color.BLUE,
        width: 20,
        height: 20,
    },
    mapContainer: {
        aspectRatio: 1,
        width: '100%',
        backgroundColor: color.GREY_LIGHT_BLUE,
        marginTop: 5,
        borderRadius: 10
    },
    descLine: {
        height: 1,
        borderBottomColor: color.GREY_LIGHT_BLUE,
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
        color: color.BLUE
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
        // backgroundColor:'red'
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        // borderWidth:1,
        // borderColor:color.BLUE,
        shadowColor: color.DARK_GREEN,
        shadowRadius: 7,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.23,
        zIndex: 2,
    },
    headerContainer: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        color: color.BLUE
    },
    pickerContainer: {
        flexDirection: 'row'
    },
    dayContainer: {
        flex: 1
    },
    monthContainer: {
        flex: 2
    },
    yearContainer: {
        flex: 2
    },
    closeContainer: {
        marginVertical: 20,
        padding: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        // borderWidth:1,
        // borderColor:color.BLUE,
        shadowColor: color.DARK_GREEN,
        shadowRadius: 7,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.23
    },
    closeBtnText: {
        fontSize: 16,
        color: color.DARK_GREEN
    }
})

export const message = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor: color.LIGHT_GREY,
        borderBottomWidth: 0.3,
        paddingHorizontal: 5,
        paddingBottom: 15
    },
    imageContainer: {
        aspectRatio: 1,
        width: 50,
        height: 50,
        backgroundColor: color.GREY_LIGHT_BLUE,
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
        color: color.BLUE
    },
    listContent: {
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    name: {
        fontSize: 18,
        color: color.BLUE,
        fontWeight: 'normal'
    },
    unreadName: {
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        color: '#666',
        fontWeight: 'normal'
    },
    unreadMessage: {
        color: '#222',
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
        maxWidth:'75%'
    },
    rightBubble: {
        // borderBottomRightRadius: 0,
        backgroundColor: color.BLUE
    },
    text: {
        fontSize: 16,
    },
    rightText: {
        color: '#fff'
    },
    leftContainer: {
        alignItems: 'flex-start'
    },
    leftBubble: {
        // borderBottomLeftRadius: 0,
        backgroundColor: color.YELLOW
    },
    leftText: {
        color:'#111'
    },
    chatInputContainer:{
        flexDirection:'row',
        borderTopColor:'#666',
        borderTopWidth:0.3,
        paddingVertical:5
    },
    textInput:{
        borderWidth:2,
        borderColor:'#a6a6a6',
        paddingVertical:10,
        paddingHorizontal:20,
        marginHorizontal:10,
        flex:1,
        borderRadius:25,
        height:'auto',
        lineHeight:20,
        textAlignVertical:'center'  
    },
    sendButton:{
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    nameContainer:{
        marginTop:10,
        marginBottom:3
    },
    rightNameContainer:{
        marginRight:15
    },
    leftNameContainer:{
        marginLeft:15,
    },
    nameText:{
        fontSize:12
    },
    rightNameText:{
        color:color.BLUE
    },
    leftNameText:{
        color:color.YELLOW
    },
    dateTimeContainer:{

    },
    dateTimeText:{
        color:'#666',
        fontSize:12
    },
    newDateContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    newDateText:{
        color:'#666',
        fontSize:12
    }
})

export const technician = StyleSheet.create({
    infoContainer:{
        // backgroundColor:'green',
        flexDirection:'row',
    },
    imageContainer:{
        // backgroundColor:'blue',
        width:120,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
    },
    image:{
        width:80,
        height:80,
        aspectRatio:1,
        borderRadius:50,
    },
    textContainer:{
        // backgroundColor:'yellow',
        flexDirection:'column',
        flex:1,
        padding:10,  
    },
    aptitude:{
        backgroundColor:'#666',
        paddingHorizontal:10,
        paddingVertical:2,
        marginVertical:2.5,
        height:30,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
    },
    aptitudeText:{
        color:'#fff',
        fontSize:13
    },
    aptitudeContainer:{
        // backgroundColor:'red',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start',
        paddingVertical:5,
    },
    onsiteContainer:{
        backgroundColor:color.GREEN,
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:25
    },
    onsiteText:{
        color:'#fff'
    },
    nameText:{
        color:color.BLUE,
        fontWeight:'bold',
        fontSize:20
        
    },
    telText:{
        color:color.GREEN,
        fontSize:16
    },
    telBtn:{
        backgroundColor:color.GREEN,
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:25,
        marginHorizontal:5,
        flexDirection:'row',
        alignItems:'center'
    },
    lineContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        paddingVertical:2.5,
        alignItems:'center'
    },
    telNum:{
        color:'#fff',
        fontSize:16,
        marginHorizontal:2
    },
    chatBtn:{
        backgroundColor:color.BLUE,
        marginVertical:5,
        borderRadius:25
    },
    chatText:{
        fontSize:12,
        fontWeight:'bold',
        color:'#fff',
        padding:5
    },
    locationContainer:{
        borderBottomColor:'#aaa',
        borderBottomWidth:0.3,
        paddingBottom:10,
        marginVertical:10,
    },
    locationHeader:{
        paddingVertical:10,
        paddingHorizontal:15,
    },
    locationText:{
        color:color.BLUE,
        fontWeight:'bold',
        fontSize:18,
    },
    location:{
        paddingTop:5,
        paddingHorizontal:15
    },
    map:{
        aspectRatio:2,
        backgroundColor:color.GREY_LIGHT_BLUE
    },
    ratingContainer:{
        paddingHorizontal:25,
        alignItems:'flex-start'
    },
    ratingNameContainer:{
        marginVertical:2.5
    },
    ratingName:{
        fontSize:16,
        color:color.BLUE,
    },
    commentContainer:{
        paddingLeft:15,
        paddingVertical:5,
        borderColor:color.LIGHT_GREY,
        borderBottomWidth:0.3,
        width:'100%'
    },
    commentText:{
        fontSize:14,
        color:'#666'
    },
    reviewContainer:{
        padding:15,
        alignItems:'flex-start',
        borderBottomWidth:0.3,
        borderBottomColor:'#aaa'
    },
    reviewHeader:{
        paddingVertical:5,
        marginBottom:5,
        borderBottomWidth:0.3,
        borderColor:color.LIGHT_GREY,
        alignItems:'flex-start',
        width:'100%',
    },
}) 