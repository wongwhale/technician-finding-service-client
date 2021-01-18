import React, { useEffect } from 'react'

import { Text, View, TouchableOpacity, Image , PixelRatio } from 'react-native'

import { userNotification, color } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { Rating } from 'react-native-ratings';

const Abstract = ({ name, star, distance, price, last }) => {
    return (
        <>
            <View style={!last ? [userNotification.abstractContainer, userNotification.abstractBottomBorder] : userNotification.abstractContainer}>
                <View style={userNotification.imageContainer}>
                    <TouchableOpacity style={userNotification.image}>
                        <Image
                            style={userNotification.image}
                            source={require('./test.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={userNotification.detailContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                        <View style={{ flex: 1, flexWrap: 'nowrap', flexShrink: 0 }}>
                            <Text style={[userNotification.text, userNotification.nameText]}>
                                {`${name}`}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={[userNotification.text, userNotification.detailText]}> ดูรายละเอียด</Text>
                            <Feather name='chevron-right' style={[userNotification.text, userNotification.detailText]} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Rating type='custom' imageSize={12} readonly startingValue={star} ratingColor={color.YELLOW} ratingBackgroundColor={color.WHITE} tintColor={color.BLUE_5} />
                                </View>
                            </View>
                            <Text style={[userNotification.text, userNotification.detailText]}>
                                {`ห่างจากคุณ : ${distance} กม. `}
                            </Text>
                            <Text style={[userNotification.text, userNotification.detailText]}>
                                {`ราคา: ${price} บาท`}
                            </Text>

                        </View>
                        <View style={userNotification.buttonContainer}>
                            <TouchableOpacity style={[userNotification.acceptButton, userNotification.button]}>
                                <Text style={userNotification.buttonText}>
                                    ตอบรับ
                        </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[userNotification.contactButton, userNotification.button]}>
                                <Text style={userNotification.buttonText}>
                                    สอบถาม
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Abstract