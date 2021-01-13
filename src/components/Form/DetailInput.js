import React, { useState } from 'react'

import { Text , View , TextInput, Keyboard } from 'react-native'

import { posting, color } from '../../stylesheet'

const DetailInput = () => {

    const [detail_, setDetail_] = useState('')

    return (
        <>
            <View style={posting.fullContainer}>
                {/* <Text style={posting.fullHeader}>
                    ลายละเอียด
                </Text> */}
                <TextInput 
                    multiline={true} 
                    numberOfLines={4} 
                    value={detail_}
                    maxLength={150} 
                    style={[posting.detailInput , ]} 
                    placeholder="รายละเอียด" 
                    placeholderTextColor={color.BLUE_3}
                    onChangeText={(val) => {
                        setDetail_(val)
                    }}
                    onSubmitEditing={ () => Keyboard.dismiss()}
                />
                <View style={posting.detailLength}>
                    <Text style={{color:color.BLUE_4}}>{`${detail_.length}/150`}</Text>
                </View>
            </View>
        </>
    )
}

export default DetailInput