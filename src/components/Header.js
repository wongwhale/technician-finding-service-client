import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { global } from '../stylesheet'
import Feather from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux';
import { LOADED } from '../store/actions/authAction';

const mapStateToProps = (state) => ({
    uid : state.auth.userInfo.uid
})

const mapDispatchToProsp = {
    LOADED
}

const Header = ({ page, back, navigation, chat , isRadius  }) => {
    const badgesNum = 1
    return (
        <>
            <View style={[global.header , isRadius ? global.headerBorderRadius : null ]}>
                <Text style={global.headerText}>
                    {page}
                </Text>
                {
                    !chat ? (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('message')
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