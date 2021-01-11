import React, { } from 'react'

import { Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import { datePicker, posting, color } from '../../stylesheet'
import { connect } from 'react-redux'
import { OPEN_IMAGE_PICKER_MODAL } from '../../store/actions/modalAction'
import Feather from 'react-native-vector-icons/Feather'

const mapStateToProps = (state) => ({
    uri: state.form.uri,
    file: state.form.file
})

const ImagePickerComponent = (props) => {


    return (
        <>
            <View style={posting.fullContainer}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: color.BLUE_5,
                        borderRadius: 10,
                        padding: 5
                    }}
                    onPress={() => props.OPEN_IMAGE_PICKER_MODAL()}
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
                                                    <View style={{
                                                        width: 100,
                                                        height: 100,
                                                        margin: 3,
                                                        borderRadius: 10,
                                                        backgroundColor: '#ffffff56',
                                                        justifyContent:'center' , 
                                                        alignItems:'center'
                                                    }}>
                                                        <Feather name='plus' style={{
                                                            fontSize:40,
                                                            color: color.BLUE_3
                                                        }} />
                                                    </View>
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
                </TouchableOpacity>
            </View>
            <View style={posting.detailLength}>
                <Text style={{ color: color.BLUE_4 }}>{`${props.file.length}/5`}</Text>
            </View>
        </>
    )
}

export default connect(mapStateToProps, { OPEN_IMAGE_PICKER_MODAL })(ImagePickerComponent)