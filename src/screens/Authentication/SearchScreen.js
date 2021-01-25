import React, { useState } from 'react'

import {
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Button,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { searchScreen, content, color } from '../../stylesheet'

import Header from '../../components/Header'
import ListBox from '../../components/Search/ListBox'

import { connect } from 'react-redux'

import { SET_SEARCH_KEY_WORD, SEARCH_BY_KEY_WORD } from '../../store/actions/techAction'
import { GOOGLE_API } from '../../misc/google_api'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const mapStateToProps = (state) => ({
    keyword: state.tech.keyword,
    search_list: state.tech.search_list
})


const SearchScreen = (props) => {

    const [listsWithDistance, setListsWithDistance] = React.useState([])

    const getDistanceOneToOne = async (lat1, lng1, lat2, lng2) => {
        const Location1Str = lat1 + "," + lng1;
        const Location2Str = lat2 + "," + lng2;

        let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";

        let params = `origins=${Location1Str}&destinations=${Location2Str}&key=${GOOGLE_API}`; // you need to get a key
        let finalApiURL = `${ApiURL}${encodeURI(params)}`;

        let fetchResult = await fetch(finalApiURL); // call API
        let Result = await fetchResult.json(); // extract json
        return Result.rows[0].elements[0].distance.value
    }

    const handleDistance = (lists) => {
        let temp_lists = []
        Promise.all(
        lists.map(async (tech) => {
            const distance = await getDistanceOneToOne(
                18.795924746501605,
                98.95296894013882,
                tech.address.lat,
                tech.address.lon
            )
            temp_lists.push({
                ...tech,
                distance : distance
            })
        })
        )
        .then( () => {
            setListsWithDistance(temp_lists.sort( (a,b) => {
                return a.distance - b.distance
            }))
        })

    }

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray, { backgroundColor: color.WHITE }]}>

                <Header page="ค้นหา" back={true} navigation={props.navigation} />
                <View style={[content.container, { backgroundColor: color.WHITE }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={searchScreen.textInputContainer}>
                            {
                                props.keyword.length != 0 ? (
                                    <TouchableOpacity style={searchScreen.xIconContainer} onPress={() => props.SET_SEARCH_KEY_WORD('')}>
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
                                onSubmitEditing={() => {
                                    props.SEARCH_BY_KEY_WORD(props.keyword)
                                        .then((res) => {
                                            handleDistance(res)
                                        })
                                }}
                            />
                            <View style={searchScreen.searchIconContainer}>
                                <Feather name='search' style={searchScreen.searchIcon} />
                            </View>
                        </View>
                        {/* <TouchableOpacity style={searchScreen.filterBtn}>
                            <Feather style={searchScreen.filterIcon} name="sliders" />
                        </TouchableOpacity> */}
                    </View>
                    <ScrollView >
                        {

                            listsWithDistance.map((item, index) => {
                                return <ListBox
                                    key={index}
                                    name={`${item.userInfoID.firstname} ${item.userInfoID.lastname}`}
                                    star={item.star}
                                    distance={parseFloat(item.distance/1000).toFixed(2)}
                                    tid={item.userID}
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

export default connect(mapStateToProps, { SET_SEARCH_KEY_WORD, SEARCH_BY_KEY_WORD })(SearchScreen)