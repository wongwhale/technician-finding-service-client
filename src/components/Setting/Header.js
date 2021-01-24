import React from 'react'

import { TouchableOpacity , View , Text } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { global , widthToDp , color } from '../../stylesheet'

const Header = (props) => {
    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: widthToDp('10'),
                    backgroundColor: '#fff'
                }}>
                <TouchableOpacity
                    style={global.backIconContainer}
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                >
                    <Feather style={global.backIcon} name='chevron-left' />
                </TouchableOpacity>
                <Text style={{ color: color.BLUE_2, fontSize: widthToDp('4') }}>
                    {props.title}
                    </Text>
            </View>
        </>
    )
}

export default Header