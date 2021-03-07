import React, { useState } from 'react'

import {
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Animated,
    Easing,
    Keyboard,
    Text
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { searchScreen, content, color, widthToDp } from '../../stylesheet'

import Header from '../../components/Header'
import ListBox from '../../components/Search/ListBox'

import { connect } from 'react-redux'

import { SET_SEARCH_KEY_WORD, SEARCH_BY_KEY_WORD, SEARCH_GUIDE } from '../../store/actions/techAction'
import { LOADED } from '../../store/actions/authAction'
import { SET_LOCATION } from '../../store/actions/formAction'
import { getDistance } from '../../misc/getDistance'
import Geolocation from '@react-native-community/geolocation'

import SearchModal from '../../components/Modal/SearchModal'

const mapStateToProps = (state) => ({
    keyword: state.tech.keyword,
    location : state.form.location
})


const SearchScreen = (props) => {

    const [listsWithDistance, setListsWithDistance] = React.useState([])
    const [check, setCheck] = React.useState(false)
    const searchInputRef = React.useRef()

    React.useEffect( () => {
        Geolocation.getCurrentPosition( ({coords : {latitude , longitude}}) => {
            props.SET_LOCATION(latitude , longitude)
        }, 
        (err) => {
            console.log(err);
        })
    },[])

    const handleDistance = async (lists) => {
        let temp_lists = []
        Promise.all(
            lists.map(async (tech) => {
                const count = tech.count
                const distance = await getDistance(
                    props.location.latitude,
                    props.location.longitude,
                    tech.address.lat,
                    tech.address.lon
                )
                temp_lists.push({
                    ...tech,
                    distance: distance,
                    sorter : distance/2000 + count
                })  
            })
        )
            .then(() => {
                props.LOADED()
                setListsWithDistance(temp_lists.sort((a, b) => {
                    return a.sorter - b.sorter
                }))
            }).catch((err) => {
                props.LOADED()
                console.log(err);
            })
    }

    React.useEffect(() => {
        return () => {
            props.SET_SEARCH_KEY_WORD('')
            setListsWithDistance([])
        }
    }, [])

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray, { backgroundColor: '#fff' }]}>
                <Header page="ค้นหา" back={true} navigation={props.navigation} isRadius />
                <View style={[content.container, { backgroundColor: '#fff' }]}
                    onStartShouldSetResponder={() => true}
                    // onTouchStart={() => {
                    //     searchInputRef.current.blur()
                    // }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            width: widthToDp('100'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: widthToDp('2'),
                            zIndex: 4,
                            paddingHorizontal: widthToDp('7'),
                        }}>
                        <View 
                            style={{
                                flexDirection: 'row' ,
                                justifyContent : 'center',
                                alignItems : 'center'
                            }}>
                            <TouchableOpacity
                                onPress={() => setCheck(true)}
                                style={[
                                    searchScreen.textInputContainer,
                                ]}
                            >
                                <Text   style={searchScreen.textInput}>
                                    {
                                        props.keyword.length !== 0 ? props.keyword : 'ค้นหาช่าง  ประเภท , ชื่อ หรือ อื่นๆ'
                                    }
                                </Text>
                                {/* <TextInput
                                    placeholder="ค้นหาช่าง  ประเภท , ชื่อ หรือ อื่นๆ "
                                    placeholderTextColor={color.BLUE_4}
                                    style={searchScreen.textInput}
                                    ref={searchInputRef}
                                    editable={false}
                                    autoCorrect={false}
                                    value={props.keyword}
                                /> */}
                                <View style={searchScreen.searchIconContainer}>
                                    <Feather name='search' style={searchScreen.searchIcon} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                backgroundColor: 'white',
                                paddingLeft: widthToDp('10'),
                                paddingRight: widthToDp('5'),
                                borderBottomLeftRadius: widthToDp('5'),
                                borderBottomRightRadius: widthToDp('5'),
                                width: '100%'
                            }}
                        >
                        </View>
                    </View>
                    <ScrollView 
                        style={{ 
                            marginTop: widthToDp('12') ,
                            paddingHorizontal : widthToDp('4'),
                            paddingVertical : 0   
                        }}
                    >
                        {

                            listsWithDistance.map((item, index) => {
                                return <ListBox
                                    key={index}
                                    name={`${item.userInfoID.firstname} ${item.userInfoID.lastname}`}
                                    star={item.star}
                                    distance={parseFloat(item.distance / 1000).toFixed(2)}
                                    tid={item.userID}
                                    avatar={item.userInfoID.avatar}
                                    navigation={props.navigation}
                                />
                            })
                        }
                    </ScrollView>
                </View>
                <SearchModal
                    isOpen={check}
                    onClosed={() => {
                        setCheck(false)
                    }}
                    setSearchList={(key) => {
                        props.SET_SEARCH_KEY_WORD(key)
                        props.SEARCH_BY_KEY_WORD(key)
                            .then((res) => {
                                handleDistance(res)
                            })
                    }}
                />
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, { SET_LOCATION , SEARCH_GUIDE, LOADED, SET_SEARCH_KEY_WORD, SEARCH_BY_KEY_WORD })(SearchScreen)