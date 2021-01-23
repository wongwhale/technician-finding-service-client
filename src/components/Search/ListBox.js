import React, { } from 'react'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import { Rating  } from 'react-native-ratings'

import { searchScreen , widthToDp , color } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { connect } from 'react-redux'
import { SET_TID  , GET_TECHNICIAN_INFO } from '../../store/actions/techAction'

const mapStateToProps = (state) => ({

})

const ListBox = (props) => {

    return (
        <>
            <TouchableOpacity 
                style={[searchScreen.listContainer]} 
                onPress={ () => {
                    props.GET_TECHNICIAN_INFO(props.tid)
                    .then( () => {
                        props.navigation.navigate('techInfo')
                    })
                }} 
            >
                <View style={searchScreen.imageContainer}>
                        <Image style={searchScreen.techImage} source={{uri:props.avatar}} />
                </View>
                <View style={searchScreen.infoContainer}>
                    <View style={searchScreen.listRowContainer}>
                        <Text style={searchScreen.nameText}>
                            {props.name}
                        </Text>
                        <View style={[searchScreen.listRowContainer , {backgroundColor:'red'}]}>
                            <Rating type='custom' startingValue={props.star} imageSize={widthToDp('3.5')} ratingBackgroundColor={color.BLUE_4} ratingColor={color.WHITE}  tintColor={color.WHITE} readonly={true} />
                        </View>
                    </View>
                    <View style={[searchScreen.listRowContainer, { justifyContent: 'space-between' }]}>
                        <Text style={searchScreen.distanceText}>
                            ห่างจากคุณ: {props.distance} กม.
                        </Text>
                        <TouchableOpacity 
                            style={[searchScreen.detailbtnContainer]}
                        >
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

export default connect(mapStateToProps , {SET_TID , GET_TECHNICIAN_INFO})(ListBox)