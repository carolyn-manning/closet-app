import  manageLogIn  from './manageLogIn'
import  manageItems  from './manageItems'
import {combineReducers} from 'redux'

function allReducers()
    {return combineReducers({manageLogIn, manageItems})
}

export default allReducers; 