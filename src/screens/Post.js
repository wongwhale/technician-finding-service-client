import React, { } from 'react'

import { SafeAreaView, View, ScrollView } from 'react-native'

import Header from '../components/Header'
import DateTimePicker from '../components/Form/DateTimePicker'
import Line from '../components/Form/Line'
import DetailInput from '../components/Form/DetailInput'
import ImagePicker from '../components/Form/ImagePicker'
import LocationPicker from '../components/Form/LocationPicker'
import TypePicker from '../components/Form/TypePicker'
import MyButton from '../components/MyButton'

import { connect } from 'react-redux'

const mapStateToProps = () => ({

})

const connector = connect(mapStateToProps, {})

const PostScreen = (props) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 , }}>
                <Header page='บอกอาการ' back={true} navigation={props.navigation} chat={false} />
                <ScrollView style={{ paddingHorizontal: '8%'}}>
                    <Line text='ระบุเวลา' mt />
                    <DateTimePicker />
                    <Line text='ระบุรายละเอียด' mt />
                    <TypePicker />
                    <DetailInput />
                    <ImagePicker />
                    <Line text='ระบุสถานที่' mt />
                    <LocationPicker />
                    <View style={{marginBottom: 10}} />
                    <MyButton title='ยืนยัน' 
                        onPress={ () => {
                            //todo
                        }}
                    />
                    <View style={{marginBottom:25}} />
                </ScrollView>


            </SafeAreaView>
        </>
    )
}

export default connector(PostScreen)