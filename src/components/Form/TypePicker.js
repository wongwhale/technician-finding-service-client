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

const TypePicker = ({ isDatePickerVisible, isTimePickerVisible, setDatePickerVisibility, setTimePickerVisibility, setTime, setDate, date, time }) => {

    const type_ = ['โทรศัพท์' , 'คอมพิวเตอร์' , 'นาฬิกา' ,'ช่างไฟฟ้า' , 'ช่างประปา' , 'ช่างซ่อมรถ' , 'นวด']

    const [type , setType] = useState('เลือกประเภทงาน หรือ อุปกรณ์')

    const [isTypePickerVisible , setTypePickerVisible] = useState(false)

    return (
        <>
            {/* <Button title='test' onPress={() => console.log(date_.toTimeString())} /> */}
            <View style={posting.fullContainer}>
                {/* <Text style={posting.fullHeader}>
                    ประเภทง
                </Text> */}
                <TouchableOpacity 
                    style={posting.fullSelector}
                    onPress={ () => setTypePickerVisible(true)}
                >
                    <Text style={posting.inputText}>
                        {type}
                    </Text>
                    <Feather style={posting.chevronDown} name='chevron-down' size={20} />
                </TouchableOpacity>
            </View>
            <Modal
                visible={isTypePickerVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setTypePickerVisible(false)}
            >
                <TouchableOpacity
                    onPress={() => setTypePickerVisible(false)}
                    style={{ height: '100%', zIndex: 0, backgroundColor: '#e6e6e656' }}
                >
                </TouchableOpacity>
                <View onPress={() => setTypePickerVisible(false)}
                    style={datePicker.modalContainer}
                >
                    <View style={datePicker.contentContainer}>
                        <View style={datePicker.headerContainer}>
                            <Text style={datePicker.headerText}>เลือกประเภทงาน/อุปกรณ์</Text>
                        </View>
                        <Button title='test' onPress={() => console.log(year_)} />
                        <View style={datePicker.pickerContainer}>
                            <View style={datePicker.dayContainer}>
                                <Picker
                                    selectedValue={type}
                                    onValueChange={(val) => {
                                        setType(val)
                                    }}
                                >
                                    {
                                        type_.map((item, index) => <Picker.Item key={index} label={item} value={item} />)
                                    }
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={datePicker.closeContainer}
                        onPress={() => setTypePickerVisible(false)}
                    >
                        <Text style={datePicker.closeBtnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>


        </>
    )
}

export default TypePicker