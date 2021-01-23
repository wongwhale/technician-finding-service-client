import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import { content, widthToDp, color, global, posting, datePicker, heightToDp } from '../../stylesheet'

import Header from '../../components/Setting/Header'
import { styles } from '../../components/Setting/styles'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


import { modalStyle } from '../../components/Modal/PostModal'
import Modal from 'react-native-modalbox'
import { Picker } from '@react-native-picker/picker'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { aptitudeType } from '../../misc/aptitude_type'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'
import { SET_LOCATION } from '../../store/actions/formAction'

import MyButton from '../../components/MyButton'

const CheckBox = ({ title, status, onPress }) => {
    return (
        <>
            <TouchableOpacity
                style={styles.row}
                onPress={() => {
                    onPress()
                }}
            >
                <TouchableOpacity style={[styles.selectBtn, status ? styles.selected : styles.unselect]}
                    onPress={() => {
                        onPress()
                    }}
                >
                    {
                        status ? <Feather name='check' style={styles.checkIcon} /> : null
                    }
                </TouchableOpacity>
                <Text style={[styles.selectedText]}>{title}</Text>
            </TouchableOpacity>
        </>
    )
}

const mapStateToProps = (state) => ({
    location: state.form.location,
})

const mapDispatchToProps = {
    SET_LOCATION
}

const TechnicianRegisterScreen = (props) => {
    const [day, setDay] = React.useState({
        title: ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์', 'วันอาทิตย์'],
        status: [false, false, false, false, false, false, false],
        no : [1,2,3,4,5,6,0]
    })
    const [starTimeVisible, setStartTimeVisible] = React.useState(false)
    const [endTimeVisible, setEndTimeVisible] = React.useState(false)
    const [time, setTime] = React.useState({
        start: {
            hour: 0,
            minute: 0
        },
        end: {
            hour: 0,
            minute: 0
        }
    })

    const [aptitude, setAbtitude] = React.useState({
        type: aptitudeType,
        status: [...aptitudeType].map((item) => false)
    })

    const [detail , setDetail] = React.useState('')

    React.useEffect(() => {
        props.SET_LOCATION(18.795924746501605, 98.95296894013882)
    }, [])

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header navigation={props.navigation} title='สมัครเป็นช่าง' />
                <ScrollView style={content.container}>
                    <Text>
                        วันทำงาน
                    </Text>
                    {
                        day.title.map((item, index) => {
                            return <CheckBox
                                key={item}
                                title={item}
                                status={day.status[index]}
                                onPress={() => {
                                    let status = [...day.status]
                                    status[index] = !status[index]
                                    setDay({ ...day, status: status })
                                }}
                            />
                        })
                    }
                    <Text>เวลาทำงาน</Text>
                    <View style={[posting.halfContainer]}>
                        <View style={{ flex: 1 }}>
                            <Text style={posting.halfHeader}>เวลาเริ่มงาน</Text>
                            <TouchableOpacity
                                style={[posting.halfInput, { marginRight: widthToDp('1') }]}
                                onPress={() => {
                                    setStartTimeVisible(true)
                                }}
                            >
                                <Text style={posting.inputText}>{`${("0" + time.start.hour).slice(-2)} : ${("0" + time.start.minute).slice(-2)} น`}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={posting.halfHeader}>เวลาเสร็จงาน</Text>
                            <TouchableOpacity
                                style={[posting.halfInput, { marginLeft: widthToDp('1') }]}
                                onPress={() => setEndTimeVisible(true)}
                            >
                                <Text style={posting.inputText}>{`${("0" + time.end.hour).slice(-2)} : ${("0" + time.end.minute).slice(-2)} น`}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text>ความถนัด</Text>
                        {
                            aptitude.type.map((item, index) => {
                                return <CheckBox
                                    title={item}
                                    onPress={() => {
                                        let status = [...aptitude.status]
                                        status[index] = !status[index]
                                        setAbtitude({ ...aptitude, status: status })

                                    }}
                                    status={aptitude.status[index]}
                                    key={item}

                                />
                            })
                        }
                    </View>
                    <View>
                        <Text>ที่อยู่</Text>
                        <TextInput
                            multiline
                            style={[posting.detailInput, { marginBottom: 5 }]}
                            placeholder='ที่อยู่'
                            value={detail}
                            onChangeText={ (val) => setDetail(val)}
                        />
                        <MapView
                            style={{ width: '100%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('2') }}
                            provider={PROVIDER_GOOGLE}
                            region={{
                                latitude: props.location.latitude,
                                longitude: props.location.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005
                            }}
                            showsUserLocation
                        >
                            <Ionicons name='ios-pin' size={50} style={{ top: -20, right: -2, color: 'red' }} />

                        </MapView>
                    </View>
                    <MyButton
                        title='test'
                        onPress={() => {
                            const selectedAptitude = aptitude.type.filter((val, index) => {
                                return aptitude.status[index]
                            })
                            const selectedDay = day.no.filter( (val , index) => {
                                return day.status[index]
                            })
                            const info = {
                                workDay : selectedDay,
                                workTime : time,
                                aptitude : selectedAptitude,
                                address : {
                                    lat : 1,
                                    lon : 1
                                },
                                description : detail

                            }
                            console.log(info);
                        }}
                    />
                    <View style={{marginBottom:15}} />
                </ScrollView>


                {/* Start Time Modal */}
                <Modal
                    isOpen={starTimeVisible}
                    onClosed={() => setStartTimeVisible(false)}
                    style={[modalStyle.subcontainer, { backgroundColor: 'transparent' }]}
                    position='bottom'
                    swipeToClose={false}
                >
                    <View style={datePicker.contentContainer}>
                        <View style={datePicker.headerContainer}>
                            <Text style={datePicker.headerText}>เลือกเวลา</Text>
                        </View>
                        <View style={datePicker.pickerContainer}>
                            <View style={datePicker.dayContainer}>
                                <Picker
                                    selectedValue={time.start.hour}
                                    itemStyle={{ height: 150 }}
                                    onValueChange={(val) => {
                                        // props.SET_HOUR(val)
                                        setTime({ ...time, start: { hour: val, minute: time.start.minute } })
                                    }}
                                >
                                    {
                                        [...Array(24)].map((item, index) => <Picker.Item key={index} label={`0${index}`.slice(-2)} value={index} />)
                                    }
                                </Picker>
                            </View>
                            <View style={datePicker.dayContainer}>
                                <Picker
                                    selectedValue={time.start.minute}
                                    itemStyle={{ height: 150 }}
                                    onValueChange={(val) => setTime({ ...time, start: { minute: val, hour: time.start.hour } })}
                                >
                                    {
                                        [...Array(60)].map((item, index) => <Picker.Item key={index} label={`0${index}`.slice(-2)} value={index} />)
                                    }
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={datePicker.closeContainer}
                        onPress={() => setStartTimeVisible(false)}
                    >
                        <Text style={datePicker.closeBtnText}>Close</Text>
                    </TouchableOpacity>
                </Modal>

                {/* End time Modal */}
                <Modal
                    isOpen={endTimeVisible}
                    onClosed={() => setEndTimeVisible(false)}
                    style={[modalStyle.subcontainer, { backgroundColor: 'transparent' }]}
                    position='bottom'
                    swipeToClose={false}
                >
                    <View style={datePicker.contentContainer}>
                        <View style={datePicker.headerContainer}>
                            <Text style={datePicker.headerText}>เลือกเวลา</Text>
                        </View>
                        <View style={datePicker.pickerContainer}>
                            <View style={datePicker.dayContainer}>
                                <Picker
                                    selectedValue={time.end.hour}
                                    itemStyle={{ height: 150 }}
                                    onValueChange={(val) => {
                                        // props.SET_HOUR(val)
                                        setTime({ ...time, end: { hour: val, minute: time.start.minute } })
                                    }}
                                >
                                    {
                                        [...Array(24)].map((item, index) => <Picker.Item key={index} label={`0${index}`.slice(-2)} value={index} />)
                                    }
                                </Picker>
                            </View>
                            <View style={datePicker.dayContainer}>
                                <Picker
                                    selectedValue={time.end.minute}
                                    itemStyle={{ height: 150 }}
                                    onValueChange={(val) => setTime({ ...time, end: { minute: val, hour: time.start.hour } })}
                                >
                                    {
                                        [...Array(60)].map((item, index) => <Picker.Item key={index} label={`0${index}`.slice(-2)} value={index} />)
                                    }
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={datePicker.closeContainer}
                        onPress={() => setEndTimeVisible(false)}
                    >
                        <Text style={datePicker.closeBtnText}>Close</Text>
                    </TouchableOpacity>
                </Modal>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnicianRegisterScreen)