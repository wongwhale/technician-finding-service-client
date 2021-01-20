import React from 'react'

import {
    View , Text , TouchableOpacity ,Image
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { widthToDp } from '../../stylesheet'
import { infoStyles } from '../../screens/Authentication/UserInfoScreen'



const TechnicianInfoComponent = (props) => {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={infoStyles.onside}>
                    <Feather name='x' style={[infoStyles.onsideIcon, infoStyles.xColor]} />
                    <Text style={[infoStyles.onsideText, infoStyles.xColor]}>
                        หน้าร้าน
                    </Text>
                </View>
                <View style={infoStyles.onside}>
                    <Feather name='check' style={[infoStyles.onsideIcon, infoStyles.checkColor]} />
                    <Text style={[infoStyles.onsideText, infoStyles.checkColor]}>
                        บริการนอกสถานที่
                    </Text>
                </View>
            </View>
            <View style={infoStyles.infoContainer}>
                <View style={infoStyles.infoRow}>
                    <View style={infoStyles.infoTopic}>
                        <Text style={infoStyles.topicText}>
                            ความถนัด
                        </Text>
                    </View>
                    <View style={[infoStyles.infoDetail, { justifyContent: "flex-end" }]}>
                        {
                            props.info.aptitude.map((item, index) => {
                                return (
                                    <View style={infoStyles.aptitude}>
                                        <Text key={index} style={infoStyles.aptitudeText}>{item.aptitude}</Text>
                                    </View>
                                )
                            })
                        }

                    </View>
                </View>
                <View style={infoStyles.infoRow}>
                    <View style={infoStyles.infoTopic}>
                        <Text style={infoStyles.topicText}>
                            รูปภาพ
                        </Text>
                    </View>
                </View>
                <View style={infoStyles.infoRow}>
                    <View style={infoStyles.imageContainer}>
                        <Image style={infoStyles.image} />
                        <Image style={infoStyles.image} />
                        <Image style={infoStyles.image} />
                        <Image style={infoStyles.image} />
                        <Image style={infoStyles.image} />
                        <Image style={infoStyles.image} />
                    </View>
                </View>
                <TouchableOpacity
                    style={[infoStyles.infoRow, infoStyles.ratingContainer]}
                    onPress={() => {
                        console.log(props.info);
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Feather name='map-pin' style={[infoStyles.btnText, { paddingHorizontal: widthToDp('1') }]} />
                        <Text style={infoStyles.btnText}>แผนที่</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Feather name='chevron-right' style={infoStyles.btnText} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[infoStyles.infoRow, infoStyles.ratingContainer]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Feather name='star' style={[infoStyles.btnText, { paddingHorizontal: widthToDp('1') }]} />
                        <Text style={infoStyles.btnText}>เรทติ้ง</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={infoStyles.btnText}>{`${props.info.star}/5  (25 ครั้ง)`}</Text>
                        <Feather name='chevron-right' style={infoStyles.btnText} />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default TechnicianInfoComponent

