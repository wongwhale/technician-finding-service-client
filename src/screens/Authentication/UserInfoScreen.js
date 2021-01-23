import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

import { content, heightToDp, global, widthToDp, color } from '../../stylesheet'
import Feather from 'react-native-vector-icons/Feather'

import TechnicianInfoComponent from '../../components/TechnicianInfo/TechnicianInfoComponent'

import { GET_TECHNICIAN_INFO } from '../../store/actions/techAction'
import { logout } from '../../store/actions/authAction'
import { ENTER_PRIVATE_CHAT } from '../../store/actions/chatAction'

const mapStateToProps = (state) => ({
    info: state.tech.info,
    uid: state.auth.userInfo.uid,
    role: state.auth.userInfo.role,
    firstname: state.auth.userInfo.firstname,
    lastname: state.auth.userInfo.lastname,
    avatar: state.auth.userInfo.avatar,
})

const UserInfo = (props) => {

    return (
        <>
            <SafeAreaView style={[content.topsafearray]} />
            <SafeAreaView style={content.safearray}>
                <View style={[global.header]}>
                    <Image
                        style={infoStyles.profileImage}
                        source={{ uri: props.avatar }}
                    />
                    <View style={[global.chatIconContainer, { flexDirection: 'row-reverse' }]}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('message')}
                            style={{ marginLeft: widthToDp('2') }}
                        >
                            <Feather name="mail" style={global.chatIcon} />
                            <View style={global.badges}>
                                <Text style={global.badgesText}>
                                    1
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('setting')
                            }}
                        >
                            <Feather name="settings" style={global.chatIcon} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={global.backIconContainer}
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    >
                        <Feather name="chevron-left" style={global.backIcon} />
                    </TouchableOpacity>
                </View>
                <View style={[infoStyles.headerContainer, { backgroundColor: '#fff' }]}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: widthToDp('5'), color: '#333' }}>
                            {`${props.firstname} ${props.lastname}`}
                        </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8, backgroundColor: '#fff' }}>
                    <TouchableOpacity
                        style={{ width: widthToDp('70'), backgroundColor: color.BLUE_3, borderRadius: widthToDp('1'), borderWidth: 2, borderColor: `${color.BLUE_3}66`, justifyContent: 'center', alignItems: 'center', height: widthToDp('7') }}
                    >
                        <Text style={{ color: color.WHITE, fontSize: widthToDp('3.5'), fontWeight: 'bold' }}>แก้ไขข้อมูลส่วนตัว</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={[content.container]}>
                        {
                            props.role === 'user' ? (
                                <>

                                </>
                            ) :
                                props.role === 'technician' ? (
                                    <>
                                        <TechnicianInfoComponent
                                            info={props.info}
                                        />
                                    </>
                                ) : null
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, { ENTER_PRIVATE_CHAT, GET_TECHNICIAN_INFO, logout })(UserInfo)

export const infoStyles = StyleSheet.create({
    coverImage: {
        backgroundColor: color.BLUE_4,
        height: heightToDp('20')
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: widthToDp('12'),
        height: widthToDp('12'),
        borderRadius: widthToDp('6'),
        backgroundColor: color.GREEN_4,
    },
    headerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: widthToDp('1'),
        flexDirection: 'row',
        width: widthToDp('20'),
        height: widthToDp('6')
    },
    contactColor: {
        backgroundColor: color.BLUE_5,
    },
    callColor: {
        backgroundColor: color.GREEN_4
    },
    contactText: {
        color: color.BLUE_0,
        fontWeight: 'bold',
        fontSize: widthToDp('3')
    },
    callText: {
        color: color.GREEN_0,
        fontWeight: 'bold',
        fontSize: widthToDp('3')
    },
    onside: {
        height: widthToDp('10'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    onsideIcon: {
        fontSize: widthToDp('4'),
        marginHorizontal: widthToDp('1'),
    },
    infoContainer: {
        padding: widthToDp('2'),
    },
    xColor: {
        color: color.RED_2
    },
    checkColor: {
        color: color.GREEN_2
    },
    onsideText: {
        fontSize: widthToDp('4'),
    },
    infoRow: {
        flexDirection: 'row',
        marginVertical: widthToDp('1'),
        paddingHorizontal: widthToDp('3'),
        backgroundColor: '#fff',
        paddingVertical: widthToDp('2'),
        borderRadius: widthToDp('1')
    },
    bottomBorder: {
        borderBottomColor: color.BLUE_3,
        borderBottomWidth: 1
    },
    infoTopic: {
        flex: 1,
    },
    topicText: {
        fontSize: widthToDp('3.5'),
        color: color.BLUE_1
    },
    infoDetail: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    aptitude: {
        backgroundColor: color.BLUE_5,
        justifyContent: 'center',
        height: widthToDp('4'),
        paddingHorizontal: widthToDp('2'),
        marginHorizontal: widthToDp('0.5'),
        marginVertical: widthToDp('0.5'),
        borderRadius: widthToDp('1.5'),
    },
    aptitudeText: {
        fontSize: widthToDp('3'),
        color: color.BLUE_1
    },
    imageContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: widthToDp('23'),
        height: widthToDp('23'),
        marginHorizontal: widthToDp('0.5'),
        marginVertical: widthToDp('0.5'),
        backgroundColor: color.YELLOW_4
    },
    ratingContainer: {
        backgroundColor: color.BLUE_5,
        paddingVertical: widthToDp('2'),
        borderRadius: widthToDp('2'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnText: {
        color: color.BLUE_1,
        fontSize: widthToDp('3.5')
    }

})