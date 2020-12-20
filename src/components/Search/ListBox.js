import React, { } from 'react'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import { Rating } from 'react-native-ratings'

import { searchScreen } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

const ListBox = ({ name, distance, star, id, navigation }) => {
    return (
        <>
            <TouchableOpacity style={searchScreen.listContainer} onPress={() => navigation.navigate('techInfo')} >
                <View style={searchScreen.imageContainer}>
                    <View>
                        <Image style={searchScreen.techImage} />
                    </View>
                </View>
                <View style={searchScreen.infoContainer}>
                    <View style={searchScreen.listRowContainer}>
                        <Text style={searchScreen.nameText}>
                            {name}
                        </Text>
                        <View style={searchScreen.listRowContainer}>
                            <Rating startingValue={star} imageSize={14} />
                        </View>
                    </View>
                    <View style={[searchScreen.listRowContainer, { justifyContent: 'space-between' }]}>
                        <Text style={searchScreen.distanceText}>
                            ห่างจากคุณ: {distance} กม.
                        </Text>
                        <TouchableOpacity style={[searchScreen.detailbtnContainer]}>
                            <Text style={searchScreen.detailbtnText}>
                                กดเพื่อดูรายละเอียด
                            </Text>
                            <Feather style={searchScreen.detailbtnText} name='chevron-right' />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default ListBox