import React, { } from 'react'

import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';


import { mainScreen, color , global} from '../stylesheet'

import Feather from 'react-native-vector-icons/Feather'

const MainMenu = ({navigation:changepage}) => {
    return (
        <>
            <View style={mainScreen.container}>
                <View style={mainScreen.menuLayout}>
                    <TouchableOpacity style={mainScreen.halfBox}
                        onPress={ () => {
                            // console.log('test');
                            changepage('search')
                        }}
                    >
                        <Feather name='search' size={50} color={color.BLUE} />
                        <Text style={mainScreen.menuTextHalf}>
                            ค้นหา
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={mainScreen.halfBox}
                        onPress={ () => {
                            changepage('nearme')
                        }}
                    >
                        <Feather name='map' size={50} color={color.BLUE} />
                        <Text style={mainScreen.menuTextHalf}>
                            ใกล้ฉัน
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={mainScreen.menuLayout}>
                    <TouchableOpacity style={mainScreen.fullBox}
                        onPress={ () => {
                            changepage('post')
                        }}
                    >
                        <Feather name='edit' size={50} color={color.GREY_LIGHT_BLUE} />
                        <Text style={mainScreen.menuTextFull}>
                            บอกอาการ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default MainMenu