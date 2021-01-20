import React from 'react'

import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

import { content, technician, heightToDp, global, widthToDp, color } from '../stylesheet'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


import { connect } from 'react-redux'
import { GET_TECHNICIAN_INFO } from '../store/actions/techAction'
import { logout } from '../store/actions/authAction'
import { ENTER_PRIVATE_CHAT } from '../store/actions/chatAction'

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
            <TouchableOpacity style={[global.backIconContainer, { top: heightToDp('5') }]}
                onPress={() => {
                    props.navigation.goBack()
                }}
            >
                <Feather name="chevron-left" style={global.backIcon} />
            </TouchableOpacity>
            <ScrollView style={{ backgroundColor: color.WHITE }}>
                <View style={infoStyles.coverImage} >
                    <View style={infoStyles.headerContainer}>
                        <Image
                            style={infoStyles.profileImage}
                            source={{ uri: props.avatar }}
                        />
                        <View style={{ marginLeft: widthToDp('5') }}>
                            <Text style={{ fontSize: widthToDp('5'), fontWeight: 'bold' }}>
                                {`${props.firstname} ${props.lastname}`}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={[content.container]}>
                    {
                        props.role === 'user' ? (
                            <>

                            </>
                        ) :
                            props.role === 'technician' ? (
                                <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <View style={infoStyles.onside}>
                                            <Feather name='x' style={[infoStyles.onsideIcon, infoStyles.xColor]} />
                                            <Text style={[infoStyles.onsideText, infoStyles.xColor]}>
                                                หน้าร้าน
                            </Text>
                                        </View>
                                        <View style={infoStyles.onside}>
                                            <Feather name='check' style={[infoStyles.onsideIcon, infoStyles.checkColor]} />
                                            <Text style={[infoStyles.onsideText, infoStyles.checkColor]}>
                                                บริการนอกสถานที่
                            </Text>
                                        </View>
                                    </View>
                                    <View style={infoStyles.infoContainer}>
                                        <View style={infoStyles.infoRow}>
                                            <View style={infoStyles.infoTopic}>
                                                <Text style={infoStyles.topicText}>
                                                    ความถนัด
                                </Text>
                                            </View>
                                            <View style={[infoStyles.infoDetail, { justifyContent: "flex-end" }]}>
                                                {
                                                    props.info.aptitude.map((item, index) => {
                                                        return (
                                                            <View style={infoStyles.aptitude}>
                                                                <Text key={index} style={infoStyles.aptitudeText}>{item.aptitude}</Text>
                                                            </View>
                                                        )
                                                    })
                                                }

                                            </View>
                                        </View>
                                        <View style={infoStyles.infoRow}>
                                            <View style={infoStyles.infoTopic}>
                                                <Text style={infoStyles.topicText}>
                                                    รูปภาพ
                                </Text>
                                            </View>
                                        </View>
                                        <View style={infoStyles.infoRow}>
                                            <View style={infoStyles.imageContainer}>
                                                <Image style={infoStyles.image} />
                                                <Image style={infoStyles.image} />
                                                <Image style={infoStyles.image} />
                                                <Image style={infoStyles.image} />
                                                <Image style={infoStyles.image} />
                                                <Image style={infoStyles.image} />
                                            </View>
                                        </View>
                                        <TouchableOpacity
                                            style={[infoStyles.infoRow, infoStyles.ratingContainer]}
                                            onPress={() => {
                                                console.log(props.info);
                                            }}
                                        >
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Feather name='map-pin' style={[infoStyles.btnText, { paddingHorizontal: widthToDp('1') }]} />
                                                <Text style={infoStyles.btnText}>แผนที่</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Feather name='chevron-right' style={infoStyles.btnText} />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[infoStyles.infoRow, infoStyles.ratingContainer]}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Feather name='star' style={[infoStyles.btnText, { paddingHorizontal: widthToDp('1') }]} />
                                                <Text style={infoStyles.btnText}>เรทติ้ง</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={infoStyles.btnText}>{`${props.info.star}/5  (25 ครั้ง)`}</Text>
                                                <Feather name='chevron-right' style={infoStyles.btnText} />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[infoStyles.infoRow, infoStyles.ratingContainer, { backgroundColor: color.RED_4 }]}
                                            onPress={() => {
                                                props.logout()
                                            }}
                                        >
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Feather name='log-out' style={[infoStyles.topicText, { paddingHorizontal: widthToDp('1'), color: color.RED_1 }]} />
                                                <Text style={[infoStyles.topicText, { color: color.RED_1 }]}>ออกจากระบบ</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            ) : null
                    }
                </View>
            </ScrollView>
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
        position: 'absolute',
        position: 'absolute',
        left: widthToDp('12'),
        bottom: widthToDp('4'),
        flexDirection: 'row',
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