import React, { useEffect } from 'react'

import { Text, View, TouchableOpacity, Button } from 'react-native'

import { userNotification, notification, widthToDp, color } from '../../stylesheet'

import Abstract from './Abstract'
import { connect } from 'react-redux';

import { LOADING, LOADED } from '../../store/actions/authAction'
import { cancelRequest } from '../../store/actions/socketAction'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    LOADING, 
    LOADED , 
    cancelRequest
}

const UserNotification = (props) => {
    const [date, setDate] = React.useState(new Date(props.date))
    const month_ = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']

    return (
        <>
            <View style={[notification.container, userNotification.bg]}>
                <View style={[notification.headerContainer, { borderBottomColor: color.GREY_5 , }]}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Text style={[notification.headerText, userNotification.headerText,{flex:1}]}>
                            {`การตอบรับของรายการ`}
                        </Text>
                        <TouchableOpacity
                            onPress={ () => {
                                props.LOADING()
                                props.cancelRequest(props.orderID)
                            }}
                        >
                            <Text style={{
                                color :color.IOS_BLUE,
                                fontSize: widthToDp('4'),
                            }}>
                                ยกเลิก
                            </Text>
                        </TouchableOpacity>
                    </View>


                    {/* <Text style={notification.headerID}>
                            {`#${props.orderID}`}
                        </Text> */}
                    <View>
                        <Text style={notification.headerID}>
                            {`วันที่ ${date.getDate()} ${month_[date.getMonth()]} ${date.getFullYear() + 543}`}
                        </Text>
                        <Text style={notification.headerID}>
                            {`เวลา ${date.getHours()}:${date.getMinutes()}`}
                        </Text>
                        <Text style={notification.headerID}>
                            {`รายละเอียด ${props.detail} `}
                        </Text>
                    </View>
                </View>
                <View style={notification.content}>
                    {
                        props.acceptedTech !== undefined ? (
                            props.acceptedTech.length !== 0 ? (
                                props.acceptedTech.map((item, index) => {
                                    return <Abstract
                                        key={item.tech._id}
                                        formID={props.orderID}
                                        name={`${item.tech.userInfoID.firstname} ${item.tech.userInfoID.lastname}`}
                                        star={item.tech.star}
                                        distance={props.distance}
                                        price={`${item.minPrice} - ${item.maxPrice}`}
                                        last={index === props.acceptedTech.length - 1}
                                        avatar={item.tech.userInfoID.avatar}
                                        techID={item.tech.userInfoID.userID}
                                    />
                                })
                            ) : (
                                    <>
                                        <View style={{ padding: widthToDp('4') }}>
                                            <Text style={{ fontSize: widthToDp('3.5'), color: color.BLUE_2 }}>
                                                ยังไม่มีการตอบรับ
                                            </Text>
                                        </View>
                                    </>
                                )
                        ) : (
                                <>
                                    <View style={{ padding: widthToDp('1.5'), paddingHorizontal: widthToDp('4') }}>
                                        <Text style={{ fontSize: widthToDp('3.5'), color: color.BLUE_2 }}>
                                            ยังไม่มีการตอบรับ
                                        </Text>
                                    </View>
                                </>
                            )
                    }
                </View>
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNotification)