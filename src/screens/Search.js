import React, { useState } from 'react'

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { searchScreen, content } from '../stylesheet'

import Header from '../components/Header'
import ListBox from '../components/Search/ListBox'

const SearchScreen = ({ navigation }) => {
    const list = [
        { name: 'ปริญญากร สีตะวัน', distance: 2.3, star: 3.5, id: 'akchq1240a' },
        { name: 'นนทวัต อุตพรม', distance: 2.1, star: 2.1, id: 'qweuxn1232' },
    ]

    const [searchText, setSearchText] = useState('')

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <Header page="ค้นหา" back={true} navigation={navigation} />
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <View style={searchScreen.textInputContainer}>
                        {
                            searchText.length != 0 ? (
                                <TouchableOpacity onPress={() => setSearchText('')}>
                                    <Feather name='x' size={25} color='#c6c6c6' />
                                </TouchableOpacity>
                            ) : null
                            
                        }
                        <TextInput
                            placeholder="ค้นหาช่าง  ประเภท , ชื่อ หรือ อื่นๆ "
                            style={searchScreen.textInput}
                            autoCorrect={false}
                            onChangeText={(val) => setSearchText(val)}
                            value={searchText}
                        />
                                <View style={searchScreen.searchIconContainer}>
                                    <Feather name='search' style={searchScreen.searchIcon} />
                                </View>
                    </View>
                    <ScrollView style={content.container}>
                        {
                            list.map(item => {
                                return <ListBox key={item.id} name={item.name} star={item.star} distance={item.distance} id={item.id} navigation={navigation} />
                            })
                        }
                    </ScrollView>
                </View>

            </SafeAreaView>

        </>
    )
}

export default SearchScreen