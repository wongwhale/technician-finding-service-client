import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { color } from '../../stylesheet/colors'
import { content } from '../../stylesheet'
import { useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { connect } from 'react-redux'


const RatingTabPage = (props) => {
    const route = useRoute()

    React.useEffect(() => {
        console.log(props.aptitude[route.name]);
    },[])
    return (
        <>
            <View
                style={content.container}
            >
                <Text>
                    {

                    }
                </Text>
                <Text>
                    test
                </Text>
            </View>
        </>
    )
}

const mapStateToProps = (state) => ({
    aptitude: state.tech.info.aptitude,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RatingTabPage)