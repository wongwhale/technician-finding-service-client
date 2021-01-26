import React from 'react'

import {ActivityIndicator} from 'react-native'
import Modal from 'react-native-modalbox'

import {} from '../../store/actions/authAction'
import { connect } from 'react-redux'
import { color } from '../../stylesheet'

const mapStateToProps = (state) => ({
    isLoading : state.auth.isLoading
})

const mapDispatchToProps = {

}

const LoadingModal = (props) => {
    return(
        <>
        <Modal
            isOpen={props.isLoading}
            swipeToClose={false}
            backButtonClose={false}
            position='center'
            style={{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'tranparent'
            }}
        >
            <ActivityIndicator size='small' color={color.WHITE} />
        </Modal>
        </>
    )
}

export default connect(mapStateToProps , mapDispatchToProps)(LoadingModal)