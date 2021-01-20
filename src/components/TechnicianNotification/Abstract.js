import React, { useEffect } from 'react'

import { Text, View, TouchableOpacity, Image } from 'react-native'

import { techNotification } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { removeOrder } from '../../store/actions/notiAction'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    uid : state.auth.userInfo.uid,
    firstname : state.auth.userInfo.firstname,
    lastname : state.auth.userInfo.lastname
})

const mapDispatchToProps = {
    removeOrder
}

const Abstract = (props) => {
    return (
        <>
            <View style={!props.last ? [techNotification.abstractContainer, techNotification.abstractBottomBorder] : techNotification.abstractContainer}>
                <View style={techNotification.imageContainer}>
                    <TouchableOpacity style={techNotification.image}>
                        <Image
                            style={techNotification.image}
                            source={require('./test.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={techNotification.detailContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: '' }}>
                        <View style={{flexWrap:'nowrap'}}>
                            <Text style={[techNotification.text, techNotification.nameText]}>
                                {`${props.order.senderName}`}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[techNotification.text, techNotification.detailText]}> ดูรายละเอียด</Text>
                            <Feather name='chevron-right' style={[techNotification.text, techNotification.detailText]} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Text style={[techNotification.text, techNotification.detailText]}>
                                {`ห่างจากคุณ : ${props.distance} กม. `}
                            </Text>
                            <Text style={[techNotification.text, techNotification.detailText]}>
                                {`วันที่: ${props.date}`}
                            </Text>
                            <Text style={[techNotification.text, techNotification.detailText]}>
                                {`รายละเอียด: ${props.order.detail}`}
                            </Text>
                        </View>
                        <View style={techNotification.buttonContainer}>
                            <TouchableOpacity 
                                style={[techNotification.acceptButton, techNotification.button]}
                                onPress={ () => {
                                    const payload = {
                                        _id : props.order._id,
                                        date : props.order.date,
                                        detail : props.order.detail,
                                        image : props.order.image,
                                        tname : `${props.firstname} ${props.lastname}`,
                                        tid : props.uid,
                                        customerID : props.order.senderID,
                                        
                                    }
                                    console.log(payload);
                                }}
                            >
                                <Text style={techNotification.buttonText}>
                                    ตอบรับ
                        </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[techNotification.contactButton, techNotification.button]}
                                onPress={ () => {
                                    props.removeOrder(props.order._id)
                                }}
                            >
                                <Text style={techNotification.buttonText}>
                                    ไม่สนใจ
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Abstract)