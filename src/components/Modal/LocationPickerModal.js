import React from 'react'
import { Button, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import Modal from 'react-native-modalbox'
import { widthToDp } from '../../stylesheet'
import { color } from '../../stylesheet/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const LocationPickerModal = ({setLocation , location , ...props}) => {

    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onClosed={() => props.onClosed()}
                swipeToClose={false}
                style={{
                    backgroundColor: 'transparent'
                }}
            >
                <SafeAreaView
                    style={techRegModalStyles.container}
                >
                    <View
                        style={{
                            backgroundColor: '#fff',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: widthToDp('80'),
                            borderRadius: widthToDp('4'),
                        }}
                    >
                        <View style={techRegModalStyles.header}>
                            <Text
                                style={techRegModalStyles.headerText}
                            >
                                ระบุที่อยู่
                            </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                // paddingHorizontal: widthToDp('5'),
                                // paddingVertical: widthToDp('2'),
                                width: '100%',
                                aspectRatio: 1
                            }}
                        >
                            <MapView
                                style={{ width: '100%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('2') }}
                                provider={PROVIDER_GOOGLE}
                                region={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005
                                }}
                                showsUserLocation
                                onRegionChangeComplete={(res) => {
                                    setLocation(res.latitude, res.longitude)
                                }}
                            >
                                <Ionicons name='ios-pin' size={50} style={{ top: -20, right: -2, color: 'red' }} />
                            </MapView>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                height: widthToDp('12'),
                                borderBottomRightRadius: widthToDp('4'),
                                borderBottomLeftRadius: widthToDp('4'),
                                borderTopColor: `${color.BLUE_2}66`,
                                borderTopWidth: widthToDp('0.1')
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                    props.onClosed()
                                }}
                            >
                                <Text
                                    style={{
                                        color: color.IOS_BLUE,
                                        fontWeight: 'bold',
                                        fontSize: widthToDp('4')
                                    }}
                                >
                                    ยืนยัน
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>

            </Modal>
        </>
    )
}

export default LocationPickerModal

const techRegModalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: widthToDp('1.5'),
        width: '100%'
    },
    header: {
        marginTop: widthToDp('3'),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: widthToDp(0.1),
        borderBottomColor: `${color.BLUE_2}66`,
        paddingBottom: widthToDp('3')
    },
    headerText: {
        fontSize: widthToDp('4'),
        color: color.BLUE_0,
        fontWeight: 'bold'
    },
    text: {
        fontSize: widthToDp('4')
    }
})