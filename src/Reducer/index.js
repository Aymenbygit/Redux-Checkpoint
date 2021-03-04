import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import savedtask from './Savedtask'

export default combineReducers({todoReducer,savedtask})

