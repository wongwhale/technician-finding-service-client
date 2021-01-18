import React, { useEffect} from 'react'

import { Text, View, TouchableOpacity } from 'react-native'

import { techNotification, color } from '../../stylesheet'

import Abstract from './Abstract'
import { connect } from 'react-redux'

const mapStateToProps =(state) => ({
    tech_order : state.noti.tech_order
})

const mapDispatchToProps = {

}

const TechnicianNotification = (props) => {
    const orderID = '#12312as'
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
                        props.tech_order.length !== 0 ? (
                            props.tech_order.map( (item , index) => {
                                const date_ = new Date(item.date)
                                return <Abstract key={index} 
                                    name={item.senderName} 
                                    distance="2.21" 
                                    date={`${date_.getDate()} ${month[date_.getMonth()]} ${date_.getFullYear() + 543}`} 
                                    detail={item.detail} 
                                    last={props.tech_order.length === index+1 ? true : false} 
                                />
                            })
                        ) : (
                            <View>
                                    <Text style={{fontSize:16 , color : color.BLUE_5}}>
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