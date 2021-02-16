import React, { } from 'react'

import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';


import { global } from '../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { INITIAL_HISTORY_LIST } from '../store/actions/chatAction'
import { connect } from 'react-redux';
import { LOADED } from '../store/actions/authAction';

const mapStateToProps = (state) => ({
    uid : state.auth.userInfo.uid
})

const mapDispatchToProsp = {
    INITIAL_HISTORY_LIST,
    LOADED
}

const Header = ({ page, back, navigation, chat , INITIAL_HISTORY_LIST , LOADED , uid }) => {
    const badgesNum = 1
    return (
        <>
            <View style={global.header}>
                <Text style={global.headerText}>
                    {page}
                </Text>
                {
                    !chat ? (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('message')
                                // INITIAL_HISTORY_LIST(uid).then( () => {
                                //     LOADED()
                                //     navigation.navigate('message')
                                // }).catch(err => {
                                    
                                // })
                            }}
                            style={global.chatIconContainer}
                        >
                            <Feather name="mail" style={global.chatIcon} />
                            <View style={global.badges}>
                                <Text style={global.badgesText}>
                                    {badgesNum}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ) : null

                }



                {
                    back ? (
                        <>
                            <TouchableOpacity style={global.backIconContainer}
                                onPress={() => {
                                    navigation.goBack()
                                }}
                            >
                                <Feather name="chevron-left" style={global.backIcon} />
                                {/* <View style={global.backTextContainer}>
                                    <Text style={global.backText}>
                                        ย้อนกลับ
                                    </Text>
                                </View> */}
                            </TouchableOpacity>
                        </>
                    ) : null
                }
            </View>
        </>
    )
}

export default connect(mapStateToProps , mapDispatchToProsp)(Header)