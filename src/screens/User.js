import React , { useEffect } from 'react'

import { SafeAreaView, Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../store/actions/authAction'

const mapStateToProps = (state) => ({
    
})

const connector = connect(mapStateToProps , {logout})

const User = (props) => {

    return(
        <>
            <SafeAreaView>
                <Button 
                    title='Log out' 
                    onPress={ () => {
                        props.logout()
                    }} 
                />
            </SafeAreaView>
        </>
    )
}

export default connector(User)