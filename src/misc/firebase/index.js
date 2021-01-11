import firebase from 'firebase/app'
import 'firebase/storage'
import firebaseConfig from './config'

export const app = firebase.initializeApp(firebaseConfig)