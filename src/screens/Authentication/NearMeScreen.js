import React from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'

import Header from '../../components/Header'
import { content, searchScreen, color, technician, widthToDp } from '../../stylesheet'
import { connect } from 'react-redux'
import { SEARCH_BY_KEY_WORD, GET_NEAR_TECHNICIAN } from '../../store/actions/techAction'
import { SET_LOCATION } from '../../store/actions/formAction'
import Feather from 'react-native-vector-icons/Feather'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_API } from '@env'
import Geolocation from '@react-native-community/geolocation'

const mapStateToProps = (state) => ({
    location: state.form.location
})

const mapDispatchToProps = {
    SEARCH_BY_KEY_WORD,
    GET_NEAR_TECHNICIAN,
    SET_LOCATION,
}

const NearMeScreen = ({ navigation, ...props }) => {
    const [mapKeyword, setMapKeyword] = React.useState('')
    const [technicians, setTechnicians] = React.useState([])

    React.useEffect(() => {
        props.GET_NEAR_TECHNICIAN(
            props.location.latitude,
            props.location.longitude
        ).then( (res) => {
            setTechnicians(res)
        })
    }, [])

    return (
        <>
            {/* <SafeAreaView style={content.safearray}> */}
            <SafeAreaView style={content.topsafearray} />
            <View style={[content.safearray , {backgroundColor : color.GREY_5}]}>
                <Header page="ใกล้ฉัน" back={true} navigation={navigation} isRadius />
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={[content.container]}
                    // initialRegion={{
                    //     latitude: props.location.latitude,
                    //     longitude: props.location.longitude,
                    //     latitudeDelta: 0.01,
                    //     longitudeDelta: 0.01
                    // }}
                    // region={{
                    //     latitude: props.location.latitude,
                    //     longitude: props.location.latitude,
                    //     latitudeDelta: 0.01,
                    //     longitudeDelta: 0.01
                    // }}
                    initialRegion={{
                        latitude: props.location.latitude,
                        longitude: props.location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    region={{
                        latitude: props.location.latitude,
                        longitude: props.location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    showsUserLocation
                >
                    {/* <View style={{ flexDirection: 'row' }}>
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
                    </View> */}
                    {/* <MapViewDirections
                        origin={{
                            latitude: 18.795924746501605,
                            longitude: 98.95296894013882,
                        }}
                        apikey={GOOGLE_API}
                        strokeWidth={0}
                        strokeColor='red'
                        destination={{
                            latitude: 18.794925746501605,
                            longitude: 98.95190894013882,
                        }}
                    >
                    </MapViewDirections> */}
                    {
                        technicians.length !== 0 ?
                            technicians.map((tech, index) => {
                                return (

                                    <Marker
                                        key={index}
                                        coordinate={{
                                            latitude: tech.address.lat,
                                            longitude: tech.address.lon
                                        }}
                                    >
                                        <Image
                                            style={{
                                                width: widthToDp('7'),
                                                height: widthToDp('7'),
                                                borderRadius: widthToDp('5'),
                                                borderWidth: 2,
                                                borderColor: color.RED_0
                                            }}
                                            source={{
                                                uri: tech.userInfoID.avatar
                                            }}
                                        >

                                        </Image>
                                    </Marker>
                                )
                            })
                            : null
                    }
                    {/* Map */}
                </MapView>
            </View>

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NearMeScreen)