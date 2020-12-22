import React , {} from 'react'

import { SafeAreaView, Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../store/actions/authAction'
import useSocket from '../misc/socket'

const mapStateToProps = (state) => ({
    
})

const connector = connect(mapStateToProps , {logout})

const User = (props) => {

    const {disconnect} = useSocket()

    return(
        <>
            <SafeAreaView>
                <Button 
                    title='Log out' 
                    onPress={ () => {
                        props.logout()
                        disconnect()
                    }} 
                />
            </SafeAreaView>
        </>
    )
}

export default connector(User)