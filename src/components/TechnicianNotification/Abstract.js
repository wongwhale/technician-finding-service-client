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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: '' }}>
                        <View style={{flexWrap:'nowrap'}}>
                            <Text style={[techNotification.text, techNotification.nameText]}>
                                {`${name}`}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[techNotification.text, techNotification.detailText]}> ดูรายละเอียด</Text>
                            <Feather name='chevron-right' style={[techNotification.text, techNotification.detailText]} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Text style={[techNotification.text, techNotification.detailText]}>
                                {`ห่างจากคุณ : ${distance} กม. `}
                            </Text>
                            <Text style={[techNotification.text, techNotification.detailText]}>
                                {`วันที่: ${date}`}
                            </Text>
                            <Text style={[techNotification.text, techNotification.detailText]}>
                                {`รายละเอียด: ${detail}`}
                            </Text>
                        </View>
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
                </TouchableOpacity>
                {/* <View style={techNotification.buttonContainer}>
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
                </View> */}
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Abstract)