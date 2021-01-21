import React, { useState } from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { searchScreen, content, color } from '../../stylesheet'

import Header from '../../components/Header'
import ListBox from '../../components/Search/ListBox'

import { connect } from 'react-redux'

import { SET_SEARCH_KEY_WORD , SEARCH_BY_KEY_WORD } from '../../store/actions/techAction'


const mapStateToProps = (state) => ({
    keyword : state.tech.keyword,
    search_list : state.tech.search_list
})


const SearchScreen = (props) => {

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>

                <Header page="ค้นหา" back={true} navigation={props.navigation} />
                <View style={content.container}>
                    <View style={searchScreen.textInputContainer}>
                        {
                            props.keyword.length != 0 ? (
                                <TouchableOpacity style={{justifyContent:'center'}} onPress={() => props.SET_SEARCH_KEY_WORD('')}>
                                    <Feather name='x' style={searchScreen.xIcon} />
                                </TouchableOpacity>
                            ) : null
                            
                        }
                        <TextInput
                            placeholder="ค้นหาช่าง  ประเภท , ชื่อ หรือ อื่นๆ "
                            placeholderTextColor={color.BLUE_4}
                            style={searchScreen.textInput}
                            autoCorrect={false}
                            onChangeText={(val) => props.SET_SEARCH_KEY_WORD(val)}
                            value={props.keyword}
                            onSubmitEditing={ () => {
                                props.SEARCH_BY_KEY_WORD(props.keyword)
                            }}
                        />
                                <View style={searchScreen.searchIconContainer}>
                                    <Feather name='search' style={searchScreen.searchIcon} />
                                </View>
                    </View>
                    <ScrollView>
                        {
                            props.search_list.map((item , index) => {
                                return <ListBox 
                                    key={index} 
                                    name={`${item.userInfoID.firstname} ${item.userInfoID.lastname}`} 
                                    star={item.star} 
                                    distance={23} 
                                    tid={item._id} 
                                    avatar={item.userInfoID.avatar}
                                    navigation={props.navigation} 
                                />
                            })
                        }
                    </ScrollView>
                </View>

            </SafeAreaView>

        </>
    )
}

export default connect(mapStateToProps , {SET_SEARCH_KEY_WORD , SEARCH_BY_KEY_WORD})(SearchScreen)