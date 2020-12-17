import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import authReducer from './authReducer'
import regReducer from './regReducer'

export default combineReducers({
    counter : counterReducer,
    auth : authReducer,
    reg : regReducer,
})