import React, { useState, useRef, useEffect } from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Animated,
    StyleSheet
} from 'react-native'

import Modal from 'react-native-modalbox'
import Feather from 'react-native-vector-icons/Feather'
import { content, posting, datePicker, color } from '../stylesheet'

import Header from '../components/Header'

import DateTimePicker from '../components/Form/DateTimePicker'
import ProcessBar from '../components/Form/ProcessBar'

const PostScreen = ({ navigation }) => {

    const [process, setProcess] = useState(1)
    const [isOpen , setOpen] = useState(false)


    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header page="บอกอาการ" back={true} navigation={navigation} />
                <View style={content.container}>
                    <ProcessBar process={process} setProcess={setProcess} />
                    <ScrollView>
                        <View style={{ marginTop: 50 }}>
                            {
                                process === 1 ? (
                                    <>
                                        <DateTimePicker />
                                    </>
                                ) : (
                                        <>
                                            <Text>2</Text>
                                        </>
                                    )
                            }
                            {
                                process === 1 ? (
                                    <View style={[styles.container, { justifyContent: 'flex-end' }]}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                setProcess(process + 1)
                                            }}
                                        >
                                            <Feather name="chevron-right" style={styles.text} />
                                        </TouchableOpacity>
                                    </View>
                                ) :
                                    null
                            }
                        </View>
                        <Button 
                            title='test'
                            onPress={ () => setOpen(true)}
                        />
                        {/* <Form /> */}

                    </ScrollView>
                </View>
            </SafeAreaView>
            <Modal
                position='bottom'
                isOpen={isOpen}
                onClosed={ () => setOpen(false)}
                style={{
                    height: '30%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 25,
                    backgroundColor: '#e6e6e6'
                }}
            >
                <View
                    style={{
                        height: 30,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 25,
                        backgroundColor: '#e6e6e6',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    <View
                        style={{
                            height:5,
                            width:40,
                            backgroundColor:'#aaa',
                            borderRadius:5
                        }}
                    >

                    </View>
                </View>
                <Text>test</Text>
            </Modal>

        </>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        marginTop:20,
        padding:10
    },
    button: {
        backgroundColor:color.BLUE_3,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
        borderRadius:10
    },
    text: {
        color:color.BLUE_5,
        fontSize:25
    }
})