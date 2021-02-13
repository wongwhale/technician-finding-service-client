import React, { useState } from 'react'

import {
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Button,
    Linking,
    Text
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { searchScreen, content, color, widthToDp } from '../../stylesheet'

import Header from '../../components/Header'
import ListBox from '../../components/Search/ListBox'

import { connect } from 'react-redux'

import { SET_SEARCH_KEY_WORD, SEARCH_BY_KEY_WORD, SEARCH_GUIDE } from '../../store/actions/techAction'
import { LOADED } from '../../store/actions/authAction'
import { getDistance } from '../../misc/getDistance'

const mapStateToProps = (state) => ({
    keyword: state.tech.keyword,
    search_list: state.tech.search_list
})


const SearchScreen = (props) => {

    const [listsWithDistance, setListsWithDistance] = React.useState([])
    const [kw, setKw] = React.useState('')
    const [check, setCheck] = React.useState(false)
    const [guide, setGuide] = React.useState([])
    const searchInputRef = React.useRef()

    const handleDistance = (lists) => {
        let temp_lists = []
        searchInputRef.current.blur()
        Promise.all(
            lists.map(async (tech) => {
                const distance = await getDistance(
                    18.795924746501605,
                    98.95296894013882,
                    tech.address.lat,
                    tech.address.lon
                )
                temp_lists.push({
                    ...tech,
                    distance: distance
                })
            })
        )
            .then(() => {
                props.LOADED()
                setListsWithDistance(temp_lists.sort((a, b) => {
                    return a.distance - b.distance
                }))
            }).catch( () => {
                props.LOADED()
            } )
    }

    React.useEffect(() => {
        if (kw !== '' && kw === props.keyword && check) {
            setCheck(false)
            props.SEARCH_GUIDE(kw)
                .then(lists => {
                    setGuide(lists)
                }).catch(err => {
                    console.log(err);
                })
        }
    })

    React.useEffect(() => {
        return () => {
            props.SET_SEARCH_KEY_WORD('')
        }
    }, [])

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray, { backgroundColor: color.WHITE }]}>

                <Header page="ค้นหา" back={true} navigation={props.navigation} />
                <View style={[content.container, { backgroundColor: color.WHITE }]}
                    onStartShouldSetResponder={() => true}
                    onTouchStart={() => {
                        // setKw('')
                        searchInputRef.current.blur()
                    }}
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
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={[
                                    searchScreen.textInputContainer,
                                    check || kw.length === 0
                                        ? { borderRadius: widthToDp('5') }
                                        : {
                                            borderTopLeftRadius: widthToDp('5'),
                                            borderTopRightRadius: widthToDp('5')
                                        }
                                ]}
                            >
                                {
                                    props.keyword.length != 0 ? (
                                        <TouchableOpacity
                                            style={searchScreen.xIconContainer}
                                            onPress={() => {
                                                props.SET_SEARCH_KEY_WORD('')
                                                setKw('')
                                                setCheck(false)
                                            }}>
                                            <Feather name='x' style={searchScreen.xIcon} />
                                        </TouchableOpacity>
                                    ) : null

                                }
                                <TextInput
                                    placeholder="ค้นหาช่าง  ประเภท , ชื่อ หรือ อื่นๆ "
                                    placeholderTextColor={color.BLUE_4}
                                    style={searchScreen.textInput}
                                    ref={searchInputRef}
                                    autoCorrect={false}
                                    onFocus={() => {
                                        setKw(props.keyword)
                                        setCheck(true)
                                    }}
                                    onChangeText={(val) => {
                                        props.SET_SEARCH_KEY_WORD(val)
                                        setCheck(true)
                                        setTimeout(() => {
                                            setKw(val)
                                        }, 500)
                                    }}
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
                            {
                                kw.length !== 0 && kw === props.keyword ? (
                                    guide.length === 0
                                        ? (
                                            <View
                                                style={[{
                                                    backgroundColor: 'white',
                                                    paddingTop: widthToDp('3'),
                                                    paddingBottom: widthToDp('5')

                                                }]}
                                            >
                                            </View>
                                        )
                                        :
                                        guide.map((item, index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={[{
                                                        backgroundColor: 'white',
                                                    }, guide.length === index + 1
                                                        ? {
                                                            paddingBottom: widthToDp('5')
                                                        }
                                                        : {
                                                            paddingVertical: widthToDp('2'),
                                                        }
                                                        , index === 0
                                                        ? {
                                                            paddingTop: widthToDp('3')
                                                        } : null

                                                    ]}
                                                    onPress={() => {
                                                        props.SEARCH_BY_KEY_WORD(item)
                                                            .then((res) => {
                                                                handleDistance(res)
                                                                props.SET_SEARCH_KEY_WORD(item)
                                                            })
                                                        setKw('')
                                                        setCheck(false)
                                                        searchInputRef.current.blur()
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: widthToDp('3.5'),
                                                            color: color.BLUE_1
                                                        }}
                                                    >{item}
                                                    </Text>
                                                </TouchableOpacity>

                                            )
                                        })
                                ) : (
                                        null
                                    )
                            }
                        </View>
                    </View>
                    <ScrollView style={{ marginTop: widthToDp('12') }}>
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

            </SafeAreaView>

        </>
    )
}

export default connect(mapStateToProps, { SEARCH_GUIDE, LOADED, SET_SEARCH_KEY_WORD, SEARCH_BY_KEY_WORD })(SearchScreen)