import React, { useEffect } from 'react'

import { Text, View } from 'react-native'

import { posting, color } from '../../stylesheet'

import { connect } from 'react-redux'

import MapView, { PROVIDER_GOOGLE, Marker, Animated } from 'react-native-maps'

import { SET_LOCATION } from '../../store/actions/formAction'

import Ionicons from 'react-native-vector-icons/Ionicons'

const mapStateToProps = (state) => ({
    location: state.form.location,
})

const LocationPicker = (props) => {

    return (
        <>
            <View style={posting.fullContainer}>
                <View style={posting.mapContainer}>
                    <MapView
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        provider={PROVIDER_GOOGLE}
                        region={{
                            latitude: props.location.latitude,
                            longitude: props.location.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005
                        }}
                        showsUserLocation={true}
                        // onRegionChangeComplete={(res) => {
                        //     console.log( `\nlat :  ${res.latitude}\nlng : ${res.longitude}`);
                        //     props.SET_LOCATION(res.latitude, res.longitude)
                        // }}
                    >
                        <Ionicons name='ios-pin' size={50} style={{ top:-20 , right:-2 , color:'red' }} />
                        {/* <Marker
                            coordinate={{
                                latitude: props.location.latitude,
                                longitude: props.location.longitude,
                            }}
                        ></Marker> */}
                    </MapView>
                    {/* Drag Location  */}
                </View>
            </View>
        </>
    )
}

export default connect(mapStateToProps, { SET_LOCATION })(LocationPicker)