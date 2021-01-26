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
import TechnicianInfoComponent from '../../components/TechnicianInfo/TechnicianInfoComponent'

const mapStateToProps = (state) => ({
    info: state.tech.info,
    uid: state.auth.userInfo.uid
})

const TechnicianInfo = (props) => {

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray, { backgroundColor: '#fff' }]}>
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
                <View style={[infoStyles.headerContainer, { padding: 8 }]}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: widthToDp('5'), fontWeight: 'bold' }}>
                            {`${props.info.personalInfo.firstname} ${props.info.personalInfo.lastname}`}
                        </Text>
                    </View>
                </View>
                <View style={[infoStyles.headerContainer, { padding: 8, justifyContent: 'space-evenly' }]}>
                    <TouchableOpacity
                        style={{
                            width: widthToDp('20'),
                            height: widthToDp('8'),
                            backgroundColor: color.GREEN_2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: widthToDp('4')
                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name='call' style={{ color: '#fff', fontSize: widthToDp('4.5') }} />
                            <Text style={{ color: '#fff', fontSize: widthToDp('4'), fontWeight: 'bold' }}>
                                โทร
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: widthToDp('20'),
                            height: widthToDp('8'),
                            backgroundColor: color.BLUE_3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: widthToDp('4')
                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name='chatbox' style={{ color: '#fff', fontSize: widthToDp('4.5') }} />
                            <Text style={{ color: '#fff', fontSize: widthToDp('4'), fontWeight: 'bold' }}>
                                แชท
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={content.container}>
                        <TechnicianInfoComponent info={props.info} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, { ENTER_PRIVATE_CHAT, GET_TECHNICIAN_INFO })(TechnicianInfo)