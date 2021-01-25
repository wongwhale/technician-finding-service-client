import React, { useEffect } from 'react'

import { Text, View, TouchableOpacity, Image, Button, StyleSheet } from 'react-native'

import { newOrder, color, widthToDp, notification } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { removeOrder } from '../../store/actions/notiAction'
import { acceptedReq } from '../../store/actions/socketAction'
import { OPEN_PRICE_INPUT_MODAL, OPEN_DETAIL_MODAL } from '../../store/actions/modalAction'

import PriceInputModal from '../Modal/PriceInputModal'

import { connect } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler'

const mapStateToProps = (state) => ({
    uid: state.auth.userInfo.uid,
    firstname: state.auth.userInfo.firstname,
    lastname: state.auth.userInfo.lastname
})

const mapDispatchToProps = {
    removeOrder,
    acceptedReq,
    OPEN_DETAIL_MODAL
}

const Abstract = (props) => {
    const [isAccepted, setIsAccepted] = React.useState(false)
    const [lowestPrice, setLowestPrice] = React.useState('')
    const [hightestPrice, setHightestPrice] = React.useState('')
    return (
        <>
            {
                !isAccepted ? (
                    <>
                        <TouchableOpacity
                            style={!props.last ? [notification.abstractContainer, notification.abstractBottomBorder] : notification.abstractContainer}
                            onPress={() => props.OPEN_DETAIL_MODAL()}
                        >
                            <View style={notification.imageContainer}>
                                <TouchableOpacity style={notification.image}>
                                    <Image
                                        style={notification.image}
                                        source={require('./test.jpg')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={notification.detailContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: '' }}>
                                    <View style={{ flexWrap: 'nowrap' }}>
                                        <Text style={[newOrder.text, notification.nameText]}>
                                            {`${props.order.senderName}`}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[newOrder.text, notification.detailText]}> ดูรายละเอียด</Text>
                                        <Feather name='chevron-right' style={[newOrder.text, notification.detailText]} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                        <Text style={[newOrder.text, notification.detailText]}>
                                            {`ห่างจากคุณ : ${props.distance} กม. `}
                                        </Text>
                                        <Text style={[newOrder.text, notification.detailText]}>
                                            {`วันที่: ${props.date}`}
                                        </Text>
                                        <Text style={[newOrder.text, notification.detailText]}>
                                            {`รายละเอียด: ${props.order.detail}`}
                                        </Text>
                                    </View>
                                    <View style={notification.buttonContainer}>
                                        <TouchableOpacity
                                            style={[newOrder.acceptButton, notification.button]}
                                            onPress={() => {
                                                const payload = {
                                                    _id: props.order._id,
                                                    date: props.order.date,
                                                    detail: props.order.detail,
                                                    image: props.order.image,
                                                    tname: `${props.firstname} ${props.lastname}`,
                                                    tid: props.uid,
                                                    customerID: props.order.senderID,
                                                }
                                                setIsAccepted(true)
                                            }}
                                        >
                                            <Text style={newOrder.buttonText}>
                                                ตอบรับ
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[newOrder.contactButton, notification.button]}
                                            onPress={() => {
                                                props.removeOrder(props.order._id)
                                            }}
                                        >
                                            <Text style={newOrder.buttonText}>
                                                ไม่สนใจ
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </>
                ) : (
                        <>
                            <View style={[notification.abstractContainer, { backgroundColor: color.BLUE_5, borderRadius: widthToDp('1') }]}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={priceInput.headerText}>ระบุราคาโดยประมาณ</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput
                                            style={priceInput.textInput}
                                            placeholderTextColor={color.BLUE_4}
                                            placeholder='ต่ำสุด'
                                            keyboardType='number-pad'
                                            value={lowestPrice}
                                            onChangeText={val => {
                                                setLowestPrice(val)
                                            }}
                                            autoFocus={true}
                                        />
                                        <Text style={{ color: color.BLUE_2, fontSize: widthToDp('5') }}>
                                            -
                                        </Text>
                                        <TextInput
                                            style={priceInput.textInput}
                                            placeholderTextColor={color.BLUE_4}
                                            placeholder='สูงสุด'
                                            keyboardType='number-pad'
                                            value={hightestPrice}
                                            onChangeText={val => {
                                                setHightestPrice(val)
                                            }}

                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: widthToDp('2') }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setHightestPrice('')
                                                setLowestPrice('')
                                                setIsAccepted(false)
                                            }}
                                            style={[priceInput.btn, priceInput.cancel, { marginRight: widthToDp('1') }]}>
                                            <Text style={priceInput.cancelText}>
                                                ยกเลิก
                                        </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                const payload = {
                                                    _id: props.order._id,
                                                    date: props.order.date,
                                                    detail: props.order.detail,
                                                    image: props.order.image,
                                                    tname: `${props.firstname} ${props.lastname}`,
                                                    tid: props.uid,
                                                    customerID: props.order.senderID,
                                                }
                                                if (parseInt(lowestPrice) <= parseInt(hightestPrice)) {
                                                    props.acceptedReq(props.order.senderID, payload)
                                                    setHightestPrice('')
                                                    setLowestPrice('')
                                                    setIsAccepted(false)
                                                } else {
                                                    alert('จำนวนเงินผิดพลาด')
                                                }

                                            }}
                                            style={[priceInput.btn, priceInput.accept, { marginLeft: widthToDp('1') }]}>
                                            <Text style={priceInput.acceptText}>
                                                ยืนยัน
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </>
                    )
            }

        </>
    )
}

const priceInput = StyleSheet.create({
    textInput: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: color.WHITE,
        fontSize: widthToDp('4'),
        marginHorizontal: widthToDp('2'),
        height: widthToDp('7'),
        borderRadius: widthToDp('2')
    },
    btn: {
        marginTop: widthToDp('2'),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: widthToDp('7'),
        borderRadius: widthToDp('1'),
    },
    cancel: {
        backgroundColor: color.RED_3
    },
    accept: {
        backgroundColor: color.GREEN_4
    },
    acceptText: {
        color: color.GREEN_0,
        fontSize: widthToDp('4')
    },
    cancelText: {
        color: color.RED_0,
        fontSize: widthToDp('4')
    },
    headerText: {
        color: color.BLUE_2,
        fontSize: widthToDp('4')
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Abstract)