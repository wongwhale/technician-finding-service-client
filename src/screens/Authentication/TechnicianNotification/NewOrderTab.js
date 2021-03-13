import React from 'react'
import { content } from '../../../stylesheet'
import NewOrderNotification from '../../../components/TechnicianNotification/NewOrderNotification'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../../components/Header'
import NotFoundComponent from '../../../components/NotFoundComponent'


const mapStateToProps = (state) => ({
    techOrder: state.noti.techOrder
})

const mapDispatchToProps = {

}

const NewOrder = (props) => {
    return (
        <>
            <Header back page='ออเดอร์ใหม่' />
                <ScrollView style={content.container}>
                    {
                        props.techOrder.length !== 0 ? (
                            <NewOrderNotification />
                        ) 
                        : <NotFoundComponent label='ยังไม่มีงานใหม่' />
                    }
                </ScrollView>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)