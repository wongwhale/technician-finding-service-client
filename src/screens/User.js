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
            <ScrollView>
                <View style={styles.coverImage} >
                    <View style={styles.headerContainer}>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: props.avatar }}
                        />
                        <View style={{ marginLeft: widthToDp('5') }}>
                            <Text style={{ fontSize: widthToDp('5'), fontWeight: 'bold' }}>
                                {`${props.firstname} ${props.lastname}`}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={content.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={styles.onside}>
                            <Feather name='x' style={[styles.onsideIcon, styles.xColor]} />
                            <Text style={[styles.onsideText, styles.xColor]}>
                                หน้าร้าน
                            </Text>
                        </View>
                        <View style={styles.onside}>
                            <Feather name='check' style={[styles.onsideIcon, styles.checkColor]} />
                            <Text style={[styles.onsideText, styles.checkColor]}>
                                บริการนอกสถานที่
                            </Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoRow}>
                            <View style={styles.infoTopic}>
                                <Text style={styles.topicText}>
                                    ความถนัด
                                </Text>
                            </View>
                            <View style={[styles.infoDetail, { justifyContent: "flex-end" }]}>
                                {
                                    props.info.aptitude.map((item, index) => {
                                        return (
                                            <View style={styles.aptitude}>
                                                <Text key={index} style={styles.aptitudeText}>{item.aptitude}</Text>
                                            </View>
                                        )
                                    })
                                }

                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.infoTopic}>
                                <Text style={styles.topicText}>
                                    รูปภาพ
                                </Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} />
                                <Image style={styles.image} />
                                <Image style={styles.image} />
                                <Image style={styles.image} />
                                <Image style={styles.image} />
                                <Image style={styles.image} />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={[styles.infoRow, styles.ratingContainer]}
                            onPress={() => {
                                console.log(props.info);
                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Feather name='map-pin' style={[styles.topicText, { paddingHorizontal: widthToDp('1') }]} />
                                <Text style={styles.topicText}>แผนที่</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Feather name='chevron-right' style={styles.topicText} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.infoRow, styles.ratingContainer]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Feather name='star' style={[styles.topicText, { paddingHorizontal: widthToDp('1') }]} />
                                <Text style={styles.topicText}>เรทติ้ง</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.topicText}>{`${props.info.star}/5  (25 ครั้ง)`}</Text>
                                <Feather name='chevron-right' style={styles.topicText} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.infoRow, styles.ratingContainer, { backgroundColor: color.RED_4 }]}
                            onPress={ () => {
                                props.logout()
                            }}    
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Feather name='log-out' style={[styles.topicText, { paddingHorizontal: widthToDp('1'), color: color.RED_1 }]} />
                                <Text style={[styles.topicText, { color: color.RED_1 }]}>ออกจากระบบ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default connect(mapStateToProps, { ENTER_PRIVATE_CHAT, GET_TECHNICIAN_INFO, logout })(UserInfo)

const styles = StyleSheet.create({
    coverImage: {
        backgroundColor: color.BLUE_5,
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
        backgroundColor: color.BLUE_4,
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
        paddingHorizontal: widthToDp('3')
    },
    bottomBorder: {
        borderBottomColor: color.BLUE_3,
        borderBottomWidth: 1
    },
    infoTopic: {
        flex: 1,
    },
    topicText: {
        fontSize: widthToDp('4'),
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
        flexDirection: 'row'
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

})