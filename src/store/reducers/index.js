import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import authReducer from './authReducer'
import regReducer from './regReducer'
import socketReducer from './socketReducer'
import modalReducer from './modalReducer'

export default combineReducers({
    counter : counterReducer,
    auth : authReducer,
    reg : regReducer,
    socket : socketReducer,
    modal : modalReducer
})