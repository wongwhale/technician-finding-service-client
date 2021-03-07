import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import IsAuth from './screens/Authentication/'
import UnAuth from './screens/UnAuthentication';

import { connect } from 'react-redux';
import { disconnect, leave } from './store/actions/socketAction'
import { checkToken, setCurrentLocation } from './store/actions/authAction'
import Geolocation from '@react-native-community/geolocation'

var firebaseConfig = {
  apiKey: "AIzaSyBs8hnxF4agqDm4gaeu16KhQAjXPozxXEw",
  authDomain: "technician-finding-imageupload.firebaseapp.com",
  databaseURL: "https://technician-finding-imageupload.firebaseio.com",
  projectId: "technician-finding-imageupload",
  storageBucket: "technician-finding-imageupload.appspot.com",
  messagingSenderId: "805409191095",
  appId: "1:805409191095:android:1e401a64f2397056848932",
  measurementId: "G-DTM2S3GDEX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  uid: state.auth.userInfo.uid,
})

import firebase from '@react-native-firebase/app';


const connector = connect(mapStateToProps, { setCurrentLocation , disconnect, leave, checkToken })

const Router = (props) => {

  const getCurrentPositionSuccess = ({ coords: { latitude, longitude } }) => {
    props.setCurrentLocation(latitude, longitude)
    props.checkToken()
  }

  const getCurrentPositionFail = () => {

  }

  useEffect(() => {
    Geolocation.getCurrentPosition(getCurrentPositionSuccess, getCurrentPositionFail)
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
