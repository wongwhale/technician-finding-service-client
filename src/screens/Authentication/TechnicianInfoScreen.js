import React from 'react'

import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

import { content, technician, heightToDp, global, widthToDp, color } from '../../stylesheet'
import { infoStyles as styles } from './UserInfoScreen'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { infoStyles } from './UserInfoScreen'

import { connect } from 'react-redux'
import { GET_TECHNICIAN_INFO } from '../../store/actions/techAction'
import { ENTER_PRIVATE_CHAT } from '../../store/actions/chatAction'

const mapStateToProps = (state) => ({
    info: state.tech.info,
    uid: state.auth.userInfo.uid
})

const TechnicianInfo = (props) => {

    return (
        <>
            <SafeAreaView>
                <View style={global.header}>
                    <Image
                        style={infoStyles.profileImage}
                        source={{ uri: props.info.personalInfo.avatar }}
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
                        <TouchableOpacity >
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
                <ScrollView style={{ backgroundColor: color.BLUE_5 }}>
                    <View style={styles.coverImage} >
                        <View style={styles.headerContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: props.info.personalInfo.avatar }}
                            />
                            <View style={{ marginLeft: widthToDp('5') }}>
                                <Text style={{ fontSize: widthToDp('5'), fontWeight: 'bold' }}>
                                    {`${props.info.personalInfo.firstname} ${props.info.personalInfo.lastname}`}
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={[styles.headerButton, styles.contactColor, { marginRight: widthToDp('1') }]}>
                                        <Ionicons style={styles.contactText} name='chatbubble-outline' />
                                        <Text style={styles.contactText}>
                                            สอบถาม
                                    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.headerButton, styles.callColor]}>
                                        <Feather style={styles.callText} name='phone' />
                                        <Text style={styles.callText}>
                                            โทร
                                </Text>
                                    </TouchableOpacity>
                                </View>
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
                                                <View key={item.aptitude} style={styles.aptitude}>
                                                    <Text style={styles.aptitudeText}>{item.aptitude}</Text>
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
                                    <Feather name='map-pin' style={[styles.btnText, { paddingHorizontal: widthToDp('1') }]} />
                                    <Text style={styles.btnText}>แผนที่</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Feather name='chevron-right' style={styles.btnText} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.infoRow, styles.ratingContainer]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Feather name='star' style={[styles.btnText, { paddingHorizontal: widthToDp('1') }]} />
                                    <Text style={styles.btnText}>เรทติ้ง</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.btnText}>{`${props.info.star}/5  (25 ครั้ง)`}</Text>
                                    <Feather name='chevron-right' style={styles.btnText} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, { ENTER_PRIVATE_CHAT, GET_TECHNICIAN_INFO })(TechnicianInfo)

{/* <View style={technician.infoContainer}>
                        <View style={technician.imageContainer}>
                            <Image
                                style={technician.image}
                                source={{ uri: props.info.personalInfo.avatar }} />
                            <TouchableOpacity
                                style={technician.chatBtn}
                                onPress={() => {
                                    if(props.uid !== props.info.personalInfo.userID){
                                        props.ENTER_PRIVATE_CHAT(props.uid , props.info.personalInfo.userID)
                                        .then( () => props.navigation.navigate('chat'))
                                    }else{
                                        props.ENTER_PRIVATE_CHAT(props.uid , props.info.personalInfo.userID)
                                        .then( () => props.navigation.navigate('chat'))
                                    }
                                    props.navigation.navigate('chat')
                                }}
                                >
                                <Text style={technician.chatText}>
                                    ติดต่อสอบถาม
                        </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={technician.textContainer}>
                            <View style={technician.lineContainer}>
                                <Text style={technician.nameText}>
                                    {`${props.info.personalInfo.firstname} ${props.info.personalInfo.lastname}`}
                                </Text>
                            </View>
                            <View style={technician.aptitudeContainer}>
                                {
                                    props.info.aptitude.map((item, index) => {
                                        return (
                                            <View key={index} style={technician.aptitude}>
                                                <Text style={technician.aptitudeText}>{item.aptitude}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View style={technician.lineContainer}>
                                {
                                    props.info.onSite ? (
                                        <View style={technician.onsiteContainer}>
                                            <Text style={technician.onsiteText}>บริการนอกสถานที่</Text>
                                        </View>
                                    ) : null
                                }
                            </View>
                            <View style={[technician.lineContainer]}>
                                <TouchableOpacity style={technician.telBtn}>
                                    <Feather name="phone" style={technician.telNum} />
                                    <Text style={technician.telNum}>
                                        092-234-1235
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <Location />
                    <Review /> */}