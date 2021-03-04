import React, { } from 'react'

import { Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import { datePicker, posting, color, widthToDp } from '../../stylesheet'
import { connect } from 'react-redux'
import { OPEN_IMAGE_PICKER_MODAL } from '../../store/actions/modalAction'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

const mapStateToProps = (state) => ({
    uri: state.form.uri,
    file: state.form.file
})

const ImagePickerComponent = (props) => {


    return (
        <>
            <View style={posting.fullContainer}>
                <TouchableOpacity
                    onPress={() => props.OPEN_IMAGE_PICKER_MODAL()}
                >
                    <LinearGradient
                        style={{
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 10,
                            padding: 5
                        }}
                        colors={[
                            color.BLUE_5,
                            color.BLUE_5
                        ]}
                    >

                        {
                            props.file.length === 0 ? (
                                <>
                                    <Feather name='upload' style={{
                                        fontSize: 40,
                                        color: color.BLUE_3,
                                    }} />
                                    <Text style={posting.inputText}>
                                        อัปโหลดรูปภาพ หรือ วิดีโอ
                                </Text>
                                </>
                            ) : (
                                    <>
                                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                                            {
                                                props.file.length < 5 ? (
                                                    <>
                                                        {
                                                            props.file.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <Image
                                                                            key={index}
                                                                            source={{ uri: item.sourceURL }}
                                                                            style={{
                                                                                width: widthToDp('25'),
                                                                                height: widthToDp('25'),
                                                                                margin: widthToDp('1'),
                                                                                borderRadius: widthToDp('4')

                                                                            }}
                                                                        />
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <LinearGradient
                                                            colors={[
                                                                '#e9e9e9',
                                                                color.GREY_5,
                                                                '#ffffff',
                                                            ]}
                                                            key={`add_new_image`}
                                                            style={{
                                                                width: widthToDp('25'),
                                                                height: widthToDp('25'),
                                                                margin: widthToDp('1'),
                                                                borderRadius: widthToDp('4'),
                                                                backgroundColor: '#ffffff56',
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}>
                                                            <Feather name='plus' style={{
                                                                fontSize: 40,
                                                                color: color.BLUE_3
                                                            }} />
                                                        </LinearGradient>
                                                    </>

                                                ) : (
                                                        <>
                                                            {
                                                                props.file.map((item, index) => {
                                                                    return (
                                                                        <>
                                                                            <Image
                                                                                key={index}
                                                                                source={{ uri: item.sourceURL }}
                                                                                style={{
                                                                                    width: 100,
                                                                                    height: 100,
                                                                                    margin: 3,
                                                                                    borderRadius: 10

                                                                                }}
                                                                            />
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </>
                                                    )

                                            }
                                        </View>
                                    </>
                                )
                        }
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={posting.detailLength}>
                <Text style={{ color: color.BLUE_4 }}>{`${props.file.length}/5`}</Text>
            </View>
        </>
    )
}

export default connect(mapStateToProps, { OPEN_IMAGE_PICKER_MODAL })(ImagePickerComponent)