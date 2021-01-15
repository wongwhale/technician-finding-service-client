import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import { posting } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

import { OPEN_DATE_PICKER_MODAL , OPEN_TIME_PICKER_MODAL } from '../../store/actions/modalAction'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const connector = connect(mapStateToProps , {OPEN_DATE_PICKER_MODAL , OPEN_TIME_PICKER_MODAL })

const DateTimePicker = (props) => {


    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')

    const month_ = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    const date_ = new Date

    useEffect(() => {
        setDay(date_.getDate())
        setMonth(month_[date_.getMonth()])
        setYear(date_.getFullYear())
        setHour(date_.toTimeString().slice(0, 2))
        setMinute(date_.toTimeString().slice(3, 5))
    }, [])

    return (
        <>
            <View style={[posting.halfContainer]}>
                <View style={{ flex: 3 }}>
                    <Text style={posting.halfHeader}>วันที่</Text>
                    <TouchableOpacity style={posting.halfInput} onPress={() => props.OPEN_DATE_PICKER_MODAL()} >
                            <Text style={posting.inputText}>{
                                day === '' && month === '' && year === '' 
                                ? `เลือกวันที่`
                                :  `${day} ${month} ${year}`
                            }</Text>
                        <Feather name='calendar' style={posting.inputText} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2 , marginLeft:10 }}>
                    <Text style={posting.halfHeader}>เวลา</Text>
                    <TouchableOpacity style={posting.halfInput} onPress={() => props.OPEN_TIME_PICKER_MODAL()} >
                        <Text style={posting.inputText}>{`${hour} : ${minute} น.`}</Text>
                        <Feather name='clock' style={posting.inputText} />
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}

export default connector(DateTimePicker)