import React, { } from 'react'

import { View , Text ,Image , TouchableOpacity , ScrollView } from 'react-native'

import { technician } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

const PersonalInfo = ({navigation}) => {
    return (
        <>
            <View style={technician.infoContainer}>
                <View style={technician.imageContainer}>
                    <Image
                        style={technician.image}
                        source={require('../UserNotification/test.jpg')} />
                    <TouchableOpacity style={technician.chatBtn} onPress={ () => navigation.navigate('chat')}>
                        <Text style={technician.chatText}>
                            ติดต่อสอบถาม
                                </Text>
                    </TouchableOpacity>
                </View>
                <View style={technician.textContainer}>
                    <View style={technician.lineContainer}>
                        <Text style={technician.nameText}>
                            ปริญญา สีตะวัน
                                </Text>
                    </View>
                    <View style={technician.aptitudeContainer}>
                        <View style={technician.aptitude}>
                            <Text style={technician.aptitudeText}>ช่างไฟ</Text>
                        </View>
                        <View style={technician.aptitude}>
                            <Text style={technician.aptitudeText}>ช่างปะปา</Text>
                        </View>
                        <View style={technician.aptitude}>
                            <Text style={technician.aptitudeText}>ช่างซ่อมรถ</Text>
                        </View>
                        <View style={technician.aptitude}>
                            <Text style={technician.aptitudeText}>นวด</Text>
                        </View>
                    </View>
                    <View style={technician.lineContainer}>
                        <View style={technician.onsiteContainer}>
                            <Text style={technician.onsiteText}>บริการนอกสถานที่</Text>
                        </View>
                    </View>
                    <View style={[technician.lineContainer]}>
                        <Text style={technician.telText}>
                            เบอร์โทร
                                </Text>
                        <TouchableOpacity style={technician.telBtn}>
                            <Feather name="phone" style={technician.telNum} />
                            <Text style={technician.telNum}>
                                092-234-1235
                                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default PersonalInfo