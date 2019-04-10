import {FETCH_WEATHER_START , FETCH_WATHER_SUCCESS , FETCH_WEATHER_ERROR , CELSIUS_ON , RESET} from '../actions/actionTypes'

const initialState = {
  result: null,
  currentWeather : null,
  loading: false,
  error : '',
  celsiusOn : true,
}

export default function quizReduce(state = initialState , action) {

  switch (action.type) {
    case FETCH_WEATHER_START :
      return {
        ...state , loading : true
      }
    case FETCH_WATHER_SUCCESS :
      return {
        ...state ,
        result : action.dailyWeather ,
        loading: false ,
        currentWeather : action.currentWeather
      }
    case FETCH_WEATHER_ERROR :
      return {
        ...state , loading: false , error : action.error
      }
    case CELSIUS_ON :
      return {
        ...state , celsiusOn : action.changeOn
      }
    case RESET :
      return {
        ...state , celsiusOn : true
      }



    default:
      return state

  }

}
