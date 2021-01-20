import React from 'react'

import { Text, View, TouchableOpacity, Button } from 'react-native'

import { techNotification, color, widthToDp } from '../../stylesheet'

import Abstract from './Abstract'
import { connect } from 'react-redux'

const mapStateToProps =(state) => ({
    techOrder : state.noti.techOrder
})

const mapDispatchToProps = {

}

const TechnicianNotification = (props) => {
    const month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฏาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    

    return (
        <>
            <View style={techNotification.container}>
                <View style={techNotification.headerContainer}>
                    <Text>
                        <Text style={techNotification.headerText}>
                            ออเดอร์ใหม่
                        </Text>
                    </Text>
                </View>
                <View style={techNotification.content}>
                    {
                        props.techOrder.length !== 0 ? (
                            props.techOrder.map( (item , index) => {
                                const date_ = new Date(item.date)
                                return <Abstract key={index} 
                                    order={item}
                                    distance="2.21" 
                                    date={`${date_.getDate()} ${month[date_.getMonth()]} ${date_.getFullYear() + 543}`} 
                                    last={props.techOrder.length === index+1 ? true : false}
                                />
                            })
                        ) : (
                            <View style={{padding:widthToDp('1.5')}}>
                                    <Text style={{fontSize:widthToDp('3.5') , color : color.BLUE_5}}>
                                        ไม่มีออเดอร์ใหม่
                                    </Text>
                            </View>
                        )
                    }
                </View>
            </View>
        </>
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(TechnicianNotification)