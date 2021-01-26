import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import IsAuth from './screens/Authentication/'
import UnAuth from './screens/UnAuthentication';

import { connect } from 'react-redux';
import { disconnect, leave } from './store/actions/socketAction'
import { checkToken } from './store/actions/authAction'


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  uid: state.auth.userInfo.uid,
})

const connector = connect(mapStateToProps, { disconnect, leave, checkToken })

const Router = (props) => {
  useEffect(() => {
    props.checkToken()
    return () => {
      props.disconnect(props.uid)
    }
  }, [])
  return (
    <>
      <NavigationContainer >
        {
          props.isAuth ? (
            <IsAuth />
          )
          :
          (
            <UnAuth />
          )
        }
      </NavigationContainer>
    </>
  );
};

export default connector(Router);
