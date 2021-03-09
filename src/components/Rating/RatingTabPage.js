import React from 'react'
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native'
import { color } from '../../stylesheet/colors'
import { content, widthToDp, searchScreen, heightToDp } from '../../stylesheet'
import { useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { connect } from 'react-redux'
import { Rating } from 'react-native-ratings'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import ChatInput from '../Chat/ChatInput'

const CommentCard = ({ name, decs , star , avatar }) => {
    return (
        <>
            <View
                style={{
                    backgroundColor: color.BLUE_5,
                    paddingVertical: widthToDp('5'),
                    paddingHorizontal: widthToDp('5'),
                    borderRadius: heightToDp('3'),
                    margin : widthToDp('1')
                }}
            >
                <View 
                    style={{
                        flexDirection : 'row',
                        alignItems : 'center',
                        marginBottom : widthToDp('4'),
                    }}
                >
                    <Image 
                        style={{
                            width : widthToDp('10'),
                            height : widthToDp('10'),
                            backgroundColor : color.GREY_5,
                        borderRadius : widthToDp('4')

                        }}
                        resizeMethod='resize'
                        resizeMode='cover'
                    />
                    <Text
                        style={{
                            fontSize : widthToDp('5'),
                            fontWeight : 'bold',
                            marginLeft : widthToDp('5'),
                            color : color.BLUE_0
                        }}
                    >{name}</Text>
                </View><View>
                    <Text
                        style={{
                            fontSize : widthToDp('4'),
                            color : color.BLUE_2
                        }}
                    >{decs}</Text>
                </View>
            </View>
        </>
    )
}

const RatingTabPage = (props) => {
    const route = useRoute()
    const [info, setInfo] = React.useState({})
    const [star, setStar] = React.useState(0)
    const [comment , setComment] = React.useState([])
    const [myVote , setMyVote] = React.useState(0)

    React.useEffect(() => {
        const thisInfo = props.aptitude.filter((k) => {
            return route.name == k.key
        })
        setInfo(thisInfo[0])
        setStar(thisInfo[0].data.star)
        setComment(thisInfo[0].data.comment)
        setMyVote(thisInfo[0].data.voted)
    }, [])
    return (
        <>
            <ScrollView
                style={content.container}
            >
                <View
                    style={{
                        marginBottom : widthToDp('6')
                    }}
                >
                    <Text
                        style={{
                            alignSelf : 'center',
                            marginVertical : widthToDp('4'),
                            fontSize : widthToDp('5'),
                            fontWeight : 'bold',
                            color : color.BLUE_1
                        }}
                    >
                        {route.name}
                    </Text>
                    <Rating
                        type='custom'
                        startingValue={star}
                        imageSize={widthToDp('8')}
                        ratingBackgroundColor={color.GREY}
                        ratingColor={color.IOS_YELLOW_LIGHT}
                        tintColor={'#fff'}
                        readonly={true}
                    />
                </View>
                {
                    comment.length !== 0 ? (
                        comment.map( (item , index) => {
                            return (
                                <CommentCard 
                                    key={index}
                                    name={`${item.userInfoID.firstname} ${item.userInfoID.lastname}`}
                                    decs = {item.comment}
                                />
                            )
                        })
                    ) : (
                        <Text
                            style={{
                                alignSelf:'center'
                            }}
                        >
                            ไม่มีคอมเมนต์
                        </Text>
                    )
                }
                {/* <CommentCard
                    name='ปริญญา สีตะวัน'
                    decs='คนนี้คือดี งานละเอียด'
                />
                <CommentCard
                    name='นนทวัท อุดพรม'
                    decs='ทำงานลวก ไม่ละเอียด คิดเงินแพง'
                /> */}
            </ScrollView>
            <View
                style={{
                    backgroundColor : '#fff'
                }}
            >
                <Rating 
                    type='custom'
                    startingValue={myVote}
                    imageSize={widthToDp('8')}
                    ratingBackgroundColor={color.GREY}
                    ratingColor={color.IOS_YELLOW_LIGHT} 
                />
                <TextInput
                    placeholder='คอมเมนต์'
                    multiline
                    style={{

                        fontSize: widthToDp('4'),
                        color: color.BLUE_4,
                        paddingHorizontal: widthToDp('4'),
                        paddingVertical: widthToDp('2')
                    }}
                />
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