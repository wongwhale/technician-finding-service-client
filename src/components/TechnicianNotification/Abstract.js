import React, { useEffect } from 'react'

import { Text, View, TouchableOpacity, Image } from 'react-native'

import { techNotification } from '../../stylesheet'

import Feather from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const Abstract = ({ name, distance, last, date, detail }) => {
    return (
        <>
            <View style={!last ? [techNotification.abstractContainer, techNotification.abstractBottomBorder] : techNotification.abstractContainer}>
                <View style={techNotification.imageContainer}>
                    <TouchableOpacity style={techNotification.image}>
                        <Image
                            style={techNotification.image}
                            source={require('./test.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={techNotification.detailContainer}>
                    <View style={{ flexDirection: 'row' , justifyContent:'space-between' , alignItems:'' }}>
                        <Text style={[techNotification.text, techNotification.nameText]}>
                            {`${name}`}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Feather name='chevron-right' style={[techNotification.text, techNotification.detailText]} />
                            <Text style={[techNotification.text, techNotification.detailText]}> ดูรายละเอียด</Text>
                        </View>
                    </View>

                    <Text style={[techNotification.text, techNotification.detailText]}>
                        {`ห่างจากคุณ : ${distance} กม. `}
                    </Text>
                    <Text style={[techNotification.text, techNotification.detailText]}>
                        {`วันที่: ${date}`}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[techNotification.text, techNotification.detailText]}>
                            {`รายละเอียด: ${detail}`}
                        </Text>

                    </View>
                </TouchableOpacity>
                <View style={techNotification.buttonContainer}>
                    <TouchableOpacity style={[techNotification.acceptButton, techNotification.button]}>
                        <Text style={techNotification.buttonText}>
                            ตอบรับ
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[techNotification.contactButton, techNotification.button]}>
                        <Text style={techNotification.buttonText}>
                            ไม่สนใจ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(Abstract)