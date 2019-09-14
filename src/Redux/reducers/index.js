import {combineReducers} from 'redux'
import homeReducers from './homeReducer'

export default combineReducers({
    home: homeReducers
    // home: () => []
})