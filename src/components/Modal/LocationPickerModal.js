import React from 'react'

import { Text, StyleSheet } from 'react-native'

import Modal from 'react-native-modalbox'

import { connect } from 'react-redux'
import { CLOSE_LOCATION_PICKER_MODAL } from '../../store/actions/modalAction'
import { SET_LOCATION } from '../../store/actions/formAction'

import Ionicons from 'react-native-vector-icons/Ionicons'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const mapStateToProps = (state) => ({
    location_picker_modal: state.modal.location_picker_modal,
    location: state.form.location
})

const LocationPickerModal = (props) => {

    React.useEffect(() => {
        props.SET_LOCATION(18.795934, 98.952969)
    }, [])

    return (
        <>
            <Modal
                isOpen={props.location_picker_modal}
                onClosed={() => props.CLOSE_LOCATION_PICKER_MODAL()}
                position='center'
                style={styles.container}
            >
                <MapView
                    style={{
                        width:'100%',
                        height:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:25
                    }}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: props.location.latitude,
                        longitude: props.location.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                    showsUserLocation={true}
                    onRegionChangeComplete={(res) => {
                        console.log(`\nlat :  ${res.latitude}\nlng : ${res.longitude}`);
                        props.SET_LOCATION(res.latitude, res.longitude)
                    }}
                >
                    <Ionicons name='ios-pin' size={50} style={{ top: -20, right: -2, color: 'red' }} />
                    {/* <Marker
                            coordinate={{
                                latitude: props.location.latitude,
                                longitude: props.location.longitude,
                            }}
                        ></Marker> */}
                </MapView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        width: '90%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(mapStateToProps, { CLOSE_LOCATION_PICKER_MODAL, SET_LOCATION })(LocationPickerModal)
