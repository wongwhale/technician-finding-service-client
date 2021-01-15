import React, { useEffect, useState } from 'react'

import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

import Header from '../components/Header'
import { content, technician } from '../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import PersonalInfo from '../components/TechnicianInfo/PersonalInfo'
import Location from '../components/TechnicianInfo/Location'
import Review from '../components/TechnicianInfo/Review'

import { connect } from 'react-redux'
import { GET_TECHNICIAN_INFO } from '../store/actions/techAction'
import { ENTER_PRIVATE_CHAT } from '../store/actions/chatAction'

const mapStateToProps = (state) => ({
    info : state.tech.info,
    uid : state.auth.userInfo.uid
})

const TechnicianInfo = (props) => {

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header back={true} page="รายละเอียดช่าง" navigation={props.navigation} />
                <ScrollView style={content.container}>
                    {/* <PersonalInfo navigation={props.navigation} info={techInfo.userInfoID} aptitude={aptitude} /> */}
                    <View style={technician.infoContainer}>
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
                    <Review />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, { ENTER_PRIVATE_CHAT, GET_TECHNICIAN_INFO })(TechnicianInfo)