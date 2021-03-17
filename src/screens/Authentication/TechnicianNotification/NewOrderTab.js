import React from 'react'
import { content, widthToDp } from '../../../stylesheet'
import NewOrderNotification from '../../../components/TechnicianNotification/NewOrderNotification'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../../components/Header'
import NotFoundComponent from '../../../components/NotFoundComponent'
import { getNewOrderLists } from '../../../store/actions/notiAction'
import { SafeAreaView, RefreshControl } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import ContentLoader from 'react-native-easy-content-loader'
import OrderDetailModal from '../../../components/Modal/OrderDetailModal'
import { socket } from '../../../store/actions/socketAction'

const mapStateToProps = (state) => ({
    techOrder: state.noti.techOrder,
    order_badge: state.noti.order_badge
})

const mapDispatchToProps = {
    getNewOrderLists
}

const NewOrder = (props) => {

    const [isReady, setIsReady] = React.useState(true)
    const [newOrderLists, setNewOrderLists] = React.useState([])

    const [refreshing, setRefreshing] = React.useState(false);

    const handleRefresh = () => {
        setIsReady(true)
        handleNewOrder()
    }

    const handleNewOrder = () => {
        props.getNewOrderLists().then(res => {
            setNewOrderLists(res.sort( (a,b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            }))
            setIsReady(false)
        }).catch(err => {
            console.log(err);
        })
    }

    useFocusEffect(
        React.useCallback(() => {
            socket.on('recieve_new_post_req', () => {
                handleNewOrder()
            })
            socket.on('confirm_accepted_req' , () => {
                handleNewOrder()
            })
            setIsReady(true)
            handleNewOrder()

            return () => {
                setNewOrderLists([])
            }
        }, [])
    )

    return (
        <>
            <SafeAreaView style={content.topsafearray} />
            <SafeAreaView style={content.safearray}>
                <Header back page='ออเดอร์ใหม่' />
                {
                    isReady ? (
                        <>
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                            <ContentLoader
                                pRows={0}
                                title
                                titleStyles={{
                                    height: widthToDp('30'),
                                    width: '92%',
                                    margin: widthToDp('4'),
                                    borderRadius: widthToDp('4')
                                }}

                            />
                        </>
                    ) : (
                            <>
                                <ScrollView style={content.container}>
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={() => handleRefresh()}
                                    />
                                    {
                                        newOrderLists.length !== 0 ? (
                                            <NewOrderNotification lists={newOrderLists} handleNewOrder={ () => handleNewOrder()} />
                                        )
                                            : <NotFoundComponent label='ยังไม่มีงานใหม่' />
                                    }
                                </ScrollView>
                            </>
                        )
                }
            </SafeAreaView>
            <OrderDetailModal />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)