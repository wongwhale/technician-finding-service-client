import React from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import Header from '../../components/Header'
import { content, searchScreen, color } from '../../stylesheet'
import { connect } from 'react-redux'
import { SEARCH_BY_KEY_WORD } from '../../store/actions/techAction'
import Feather from 'react-native-vector-icons/Feather'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    SEARCH_BY_KEY_WORD
}

const NearMeScreen = ({ navigation, ...props }) => {
    const [mapKeyword, setMapKeyword] = React.useState('')
    return (
        <>
            {/* <SafeAreaView style={content.safearray}> */}
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray , {backgroundColor : color.WHITE}]}>
                <Header page="ใกล้ฉัน" back={true} navigation={navigation} />
                <View style={[content.container, { backgroundColor: color.WHITE }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={searchScreen.textInputContainer}>
                            {
                                mapKeyword.length != 0 ? (
                                    <TouchableOpacity style={searchScreen.xIconContainer} onPress={() => props.SET_SEARCH_KEY_WORD('')}>
                                        <Feather name='x' style={searchScreen.xIcon} />
                                    </TouchableOpacity>
                                ) : null

                            }
                            <TextInput
                                placeholder="ค้นหาสถานที่"
                                placeholderTextColor={color.BLUE_4}
                                style={searchScreen.textInput}
                                autoCorrect={false}
                                onChangeText={(val) => setMapKeyword(val)}
                                value={mapKeyword}
                                onSubmitEditing={() => {
                                    props.SEARCH_BY_KEY_WORD(mapKeyword)
                                }}
                            />
                            <View style={searchScreen.searchIconContainer}>
                                <Feather name='search' style={searchScreen.searchIcon} />
                            </View>
                        </View>
                    </View>
                    {/* Map */}
                </View>
            </SafeAreaView>

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NearMeScreen)