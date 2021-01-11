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

import { OPEN_SELECT_TYPE_PICKER_MODAL } from '../../store/actions/modalAction'

import Feather from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const connector = connect(mapStateToProps , {OPEN_SELECT_TYPE_PICKER_MODAL})

const TypePicker = (props) => {

    const type_ = ['โทรศัพท์' , 'คอมพิวเตอร์' , 'นาฬิกา' ,'ช่างไฟฟ้า' , 'ช่างประปา' , 'ช่างซ่อมรถ' , 'นวด']

    const [type , setType] = useState('เลือกประเภทงาน หรือ อุปกรณ์')


    return (
        <>
            <View style={posting.fullContainer}>
                <TouchableOpacity 
                    style={posting.fullSelector}
                    onPress={ () => props.OPEN_SELECT_TYPE_PICKER_MODAL()}
                >
                    <Text style={posting.inputText}>
                        {type}
                    </Text>
                    <Feather style={posting.chevronDown} name='chevron-down' size={20} />
                </TouchableOpacity>
            </View>

        </>
    )
}

export default connector(TypePicker)