import React from 'react'

import { SafeAreaView, View, TouchableOpacity, Image, ScrollView, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Header from '../../components/Setting/Header'
import { content, color, card, widthToDp, posting } from '../../stylesheet'
import { infoStyles } from './UserInfoScreen'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { TextInput } from 'react-native-gesture-handler'
import { aptitudeType } from '../../misc/aptitude_type'

import { CheckBox } from './TechnicianRegisterScreen'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { SET_LOCATION } from '../../store/actions/formAction'


const mapStateToProps = (state) => ({
    userInfo: state.auth.userInfo,
    location: state.form.location
})

const mapDispatchToProps = {
    SET_LOCATION
}

const UserInfoEditScreen = (props) => {

    const [day, setDay] = React.useState({
        title: ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์', 'วันอาทิตย์'],
        status: [false, false, false, false, false, false, false],
        no: [1, 2, 3, 4, 5, 6, 0]
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

    const [detail, setDetail] = React.useState('')

    React.useEffect(() => {
        props.SET_LOCATION(18.795924746501605, 98.95296894013882)
    }, [])

    const [newFirstname, setNewFirstName] = React.useState(props.userInfo.firstname)
    const [newLastname, setNewLastname] = React.useState(props.userInfo.lastname)


    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={[content.safearray, { backgroundColor: color.WHITE }]}>
                <Header title='แก้ไขข้อมูลส่วนตัว' navigation={props.navigation} />
                <ScrollView style={content.container}>
                    {/* personal info */}
                    <View style={card.card}>
                        <View style={card.cardHeader}>
                            <Text style={card.headerText}>
                                ข้อมูลส่วนตัว
                            </Text>
                        </View>
                        <View style={card.cardContainer}>
                            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                                <TouchableOpacity style={{ width: widthToDp('15'), height: widthToDp('15'), borderRadius: widthToDp('7.5') }} >
                                    <Image
                                        style={{ width: widthToDp('15'), height: widthToDp('15'), borderRadius: widthToDp('7.5') }}
                                        source={{ uri: props.userInfo.avatar }}
                                    />
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'absolute',
                                            backgroundColor: '#00000077',
                                            width: widthToDp('15'),
                                            height: widthToDp('15'),
                                            borderRadius: widthToDp('7.5')

                                        }}>
                                        <Feather name='upload' style={{
                                            color: '#fff',
                                            fontSize: widthToDp('7')
                                        }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.topic}>
                                    <Text style={styles.topicText}>ชื่อ</Text>
                                </View>
                                <View style={styles.rowContent}>
                                    <TextInput
                                        placeholder='ชื่อ'
                                        style={styles.textInput}
                                        value={newFirstname}
                                    />
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.topic}>
                                    <Text style={styles.topicText}>นามสกุล</Text>
                                </View>
                                <View style={styles.rowContent}>
                                    <TextInput
                                        placeholder='นามสกุล'
                                        style={styles.textInput}
                                        value={newLastname}
                                    />
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.topic}>
                                    <Text style={styles.topicText}>เบอร์โทร</Text>
                                </View>
                                <View style={styles.rowContent}>
                                    <TextInput
                                        placeholder='นามสกุล'
                                        style={styles.textInput}
                                        value={'01239407123'}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* technician info */}
                    {
                        props.userInfo.role === 'technician' ? (
                            <View style={card.card}>
                                <View style={card.cardHeader}>
                                    <Text style={card.headerText}>
                                        ข้อมูลช่าง
                            </Text>
                                </View>
                                <View style={card.cardContainer}>
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
                                </View>
                                <View style={[card.cardHeader, card.topBorder]}>
                                    <Text style={card.headerText}>เวลาทำงาน</Text>
                                </View>
                                <View style={card.cardContainer}>
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
                                </View>
                                <View style={[card.cardHeader, card.topBorder]}>
                                    <Text style={card.headerText}>ความถนัด</Text>
                                </View>
                                <View style={card.cardContainer}>
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
                                <View style={[card.cardHeader, card.topBorder]} >
                                    <Text style={card.headerText}>ที่อยู่</Text>
                                </View>
                                <View style={card.cardContainer}>
                                    <TextInput
                                        multiline
                                        style={[posting.detailInput, { marginBottom: 5 }]}
                                        placeholder='ที่อยู่'
                                        value={detail}
                                        onChangeText={(val) => setDetail(val)}
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
                            </View>

                        ) : null
                    }

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoEditScreen)

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    topicText: {
        fontSize: widthToDp('4'),
        color: color.BLUE_0
    },
    topic: {
        width: widthToDp('20')
    },
    rowContent: {
        flex: 1,
    },
    textInput: {
        paddingHorizontal: widthToDp('2'),
        paddingVertical: widthToDp('1'),
        borderRadius: widthToDp('1'),
        borderBottomWidth: 1,
        borderBottomColor: color.BLUE_5,
        fontSize: widthToDp('4')
    }
})