import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import authReducer from './authReducer'
import regReducer from './regReducer'
import socketReducer from './socketReducer'

export default combineReducers({
    counter : counterReducer,
    auth : authReducer,
    reg : regReducer,
    socket : socketReducer,
})