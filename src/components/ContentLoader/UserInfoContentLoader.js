import React from 'react'

import { View , Text } from 'react-native'

import ContentLoader from 'react-native-easy-content-loader'
import { widthToDp } from '../../stylesheet'

const UserInfoContentLoader = () => {
    return (
        <>
            <View 
                style={{
                    flex : 1,
                    alignItems : 'center',
                    padding : widthToDp('7'),
                    backgroundColor : '#fff'
                }}
            >
                <ContentLoader 
                    avatar
                    avatarStyles={{
                        width : widthToDp('15'),
                        height : widthToDp('15'),
                        borderRadius : widthToDp('7.5')
                    }}
                    loading={true}
                    pRows={0} 
                    title={false} 
                    containerStyles = {{
                        width : widthToDp('20')
                    }}
                    
                />
                <ContentLoader 
                    title
                    titleStyles={{
                        width : '100%',
                        height : widthToDp('5')
                    }}
                    loading={true}
                    pRows={0} 
                    containerStyles={{
                        width : widthToDp(50),
                        margin : widthToDp('2')
                    }}
                    
                />
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(25),
                            margin : widthToDp('2')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(25),
                            margin : widthToDp('2')
                        }}
                        
                    />
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(25),
                            margin : widthToDp('2')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(10),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(10),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(10),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(25),
                            margin : widthToDp('2')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(10),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(10),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(10),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(25),
                            margin : widthToDp('2')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(15),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(15),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                </View>
                <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(25),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                    <ContentLoader 
                        title
                        titleStyles={{
                            width : '100%',
                            height : widthToDp('4')
                        }}
                        loading={true}
                        pRows={0} 
                        containerStyles={{
                            width : widthToDp(60),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
                    <ContentLoader 
                        
                        loading={true}
                        pRows={1}
                        pWidth={[widthToDp('80')]}
                        pHeight={[widthToDp('80')]} 
                        containerStyles={{
                            width : widthToDp(80),
                            marginVertical : widthToDp('2'),
                            marginHorizontal : widthToDp('0.5')
                        }}
                        
                    />
            </View>
        </>
    )
}

export default UserInfoContentLoader