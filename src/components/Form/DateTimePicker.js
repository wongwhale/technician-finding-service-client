import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback
} from 'react-native'

import { posting, datePicker } from '../../stylesheet'

import { Picker } from '@react-native-picker/picker'

import Feather from 'react-native-vector-icons/Feather'

const DateTimePicker = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')

    const month_ = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    const date_ = new Date

    useEffect(() => {
        setDay(date_.getDate())
        setMonth(month_[date_.getMonth() - 1])
        setYear(date_.getFullYear())
        setHour(date_.toTimeString().slice(0, 2))
        setMinute(date_.toTimeString().slice(3, 5))
    }, [])

    return (
        <>
            {/* <Button title='test' onPress={() => console.log(date_.toTimeString())} /> */}
            <View style={[posting.halfContainer]}>
                <View style={{ flex: 3 }}>
                    <Text style={posting.halfHeader}>วันที่</Text>
                    <TouchableOpacity style={posting.halfInput} onPress={() => setDatePickerVisibility(true)} >
                            <Text style={posting.inputText}>{
                                day === '' && month === '' && year === '' 
                                ? `เลือกวันที่`
                                :  `${day} ${month} ${year}`
                            }</Text>
                        <Feather name='calendar' />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={posting.halfHeader}>เวลา</Text>
                    <TouchableOpacity style={posting.halfInput} onPress={() => setTimePickerVisibility(true)} >
                        <Text style={posting.inputText}>{`${hour} : ${minute} น.`}</Text>
                        <Feather name='clock' />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                visible={isDatePickerVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setDatePickerVisibility(false)}
            >
                <TouchableOpacity
                    onPress={() => setDatePickerVisibility(false)}
                    style={{ height: '100%', zIndex: 0, backgroundColor: '#e6e6e656' }}
                >
                </TouchableOpacity>
                <View onPress={() => setDatePickerVisibility(false)}
                    style={datePicker.modalContainer}
                >
                    <View style={datePicker.contentContainer}>
                        <View style={datePicker.headerContainer}>
                            <Text style={datePicker.headerText}>เลือกวันที่</Text>
                        </View>
                        <View style={datePicker.pickerContainer}>
                            <View style={datePicker.dayContainer}>
                                <Picker
                                    selectedValue={`${day}`}
                                    onValueChange={(val) => {
                                        setDay(val)
                                    }}
                                >
                                    {
                                        [...Array(31)].map((item, index) => <Picker.Item key={index} label={`${index + 1}`} value={`${index + 1}`} />)
                                    }
                                </Picker>
                            </View>
                            <View style={datePicker.monthContainer}>
                                <Picker
                                    selectedValue={`${month}`}
                                    onValueChange={(val) => setMonth(val)}
                                >
                                    {
                                        month_.map((m, index) => <Picker.Item key={index} value={`${m}`} label={`${m}`} />)
                                    }
                                </Picker>
                            </View>
                            <View style={datePicker.yearContainer}>
                                <Picker
                                    selectedValue={year}
                                    onValueChange={(val) => setYear(val)}
                                >
                                    {
                                        [...Array(80)].map((y, i) => <Picker.Item key={i} value={`${date_.getFullYear() + i}`} label={`${date_.getFullYear() + i}`} />)
                                    }
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={datePicker.closeContainer}
                        onPress={() => setDatePickerVisibility(false)}
                    >
                        <Text style={datePicker.closeBtnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal
                visible={isTimePickerVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setTimePickerVisibility(false)}
            >
                <TouchableOpacity
                    onPress={() => setTimePickerVisibility(false)}
                    style={{ height: '100%', zIndex: 0, backgroundColor: '#e6e6e656' }}
                >
                </TouchableOpacity>
                <View style={datePicker.modalContainer}
                >
                    <View style={datePicker.contentContainer}>
                        <View style={datePicker.headerContainer}>
                            <Text style={datePicker.headerText}>เลือกเวลา</Text>
                        </View>
                        <View style={datePicker.pickerContainer}>
                            <View style={datePicker.dayContainer}>
                                <Picker
                                    selectedValue={`${hour}`}
                                    onValueChange={(val) => {
                                        setHour(val)
                                    }}
                                >
                                    {
                                        [...Array(24)].map((item, index) => {
                                            if(index < 10) return  <Picker.Item key={index} label={`0${index}`} value={`0${index}`} />
                                            return  <Picker.Item key={index} label={`${index}`} value={`${index}`} />
                                        })
                                    }
                                </Picker>
                            </View>
                            <View style={datePicker.dayContainer}>
                                <Picker
                                    selectedValue={`${minute}`}
                                    onValueChange={(val) => setMinute(val)}
                                >
                                    {
                                        [...Array(60)].map((m,i) => {
                                            if(i < 10){
                                                return <Picker.Item key={i} value={`0${i}`} label={`0${i}`} />
                                            }
                                            return <Picker.Item key={i} value={`${i}`} label={`${i}`} />
                                        })
                                    }
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={datePicker.closeContainer}
                        onPress={() => setTimePickerVisibility(false)}
                    >
                        <Text style={datePicker.closeBtnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </>
    )
}

export default DateTimePicker