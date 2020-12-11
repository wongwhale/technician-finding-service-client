import React, { useEffect} from 'react'

import { Text, View, TouchableOpacity ,Image} from 'react-native'

import { userNotification } from '../../stylesheet'

import { Rating } from 'react-native-ratings';

const Abstract = ({ name, star, distance, price , last }) => {
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
                    <Text style={userNotification.text}>
                        {`${name}`}
                    </Text>
                    <View style={{justifyContent:'center'}}>
                        <View style={{alignItems:'flex-start'}}>
                            <Rating imageSize={14} readonly startingValue={star}  />
                        </View>
                    </View>
                    <Text style={userNotification.text}>
                        {`ห่างจากคุณ : ${distance} กม. `}
                    </Text>
                    <Text style={userNotification.text}>
                        {`ราคา: ${price} บาท`}
                    </Text>
                </TouchableOpacity>
                <View style={userNotification.buttonContainer}>
                    <TouchableOpacity style={[userNotification.acceptButton , userNotification.button]}>
                        <Text style={userNotification.buttonText}>
                            ตอบรับ
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[userNotification.contactButton , userNotification.button]}>
                        <Text style={userNotification.buttonText}>
                            สอบถาม
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Abstract