import React, { useState } from 'react'

import { Text , View , TextInput } from 'react-native'

import { posting } from '../../stylesheet'

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
                    maxLength={150} style={posting.detailInput} 
                    placeholder="รายละเอียด" 
                    onChangeText={(val) => {
                        setDetail_(val)
                    }}
                />
                <View style={posting.detailLength}>
                    <Text style={{color:'#595959'}}>{`${detail_.length}/150`}</Text>
                </View>
            </View>
        </>
    )
}

export default DetailInput