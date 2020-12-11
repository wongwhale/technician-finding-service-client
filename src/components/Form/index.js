import React, { } from 'react'

import { View, Text } from 'react-native'

import DateTimePicker from './DateTimePicker'
import TypePicker from './TypePicker'
import LocationPicker from './LocationPicker'
import DetailInput from './DetailInput'
import Line from './Line'


const Form = () => {
    return (
        <>
            <Line text='เลือกวันที่' />
            <DateTimePicker />

            <Line mt={true} text='ระบุลายละเอียด' />
            <TypePicker />
            <DetailInput />

            <Line mt={true} text='เลือกที่อยู่ของคุณ หรือ จุดนัดพบ' />
            <LocationPicker />
        </>
    )
}

export default Form