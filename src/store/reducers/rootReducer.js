import weatherReduce from './weather'

import {combineReducers} from 'redux'

export default combineReducers({
  weather : weatherReduce,

})
