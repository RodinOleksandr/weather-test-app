import axios from 'axios'
import moment from 'moment'


import {FETCH_WEATHER_START, FETCH_WATHER_SUCCESS, FETCH_WEATHER_ERROR , CELSIUS_ON , RESET} from './actionTypes'


export function getWeather(){

  return async dispatch => {
    dispatch(fetchWeatherStart())
    try {



      const weatherUrls = [
                            'https://api.openweathermap.org/data/2.5/weather',
                            'https://api.openweathermap.org/data/2.5/forecast'
                          ]
      const appKey = 'afc7bb3f3e233001fb1692a3f07bf51b'

      const {coords} = await new Promise((resolve, reject) => //Get location
          navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true}))


      let currentData = await axios.get(weatherUrls[0], {
        params: {lat: coords.latitude, lon: coords.longitude , APPID: appKey  },
      })

      const city =  await axios.get("https://geoip-db.com/json/1686f900-52ea-11e9-b7df-8f2a45f5c7ce" )

        let currentWeather = //First item of current weather
        {
          tempF : `${Math.ceil(currentData.data.main.temp) }`,
          tempC : `${ Math.ceil(currentData.data.main.temp - 273.15)}`,
          description : currentData.data.weather[0].description,
          date : (() => {
                let time = new Date()
                let date = moment(time).startOf('hour').fromNow();

                return  date

          })(),
          name : city.data.city,
          humidity : currentData.data.main.humidity +'%'
        }


      let {data} = await axios.get(weatherUrls[1], {
        params: {lat: coords.latitude, lon: coords.longitude , APPID: appKey  },
      })

      let dailyWeather  = []
      let currentDay = null

      data.list.forEach((item) => { //Form main weather list
        if (currentDay !== item.dt_txt.slice(8,10) && item.dt_txt.slice(11,13) === '12') {
          currentDay = item.dt_txt.slice(8,10)
          dailyWeather.push(
            {
              tempF : `${Math.ceil(item.main.temp) }`,
              tempC : `${ Math.ceil( item.main.temp - 273.15)}`,
              description : item.weather[0].description,
              date : (() => {
                    let date = moment(item.dt_txt).format('LLL').split(',')

                    return {
                            day : moment(item.dt_txt).format('dddd'),
                            formDate : date[0]
                           }
              })(),
              name : data.city.name,
              humidity : item.main.humidity +'%'
            }
          )
        }

      })
      dispatch(fetchWeatherSuccess(dailyWeather , currentWeather))

    } catch (e) {
      dispatch(fetchWeatherError(e))
    }
  }
}


export  function fetchWeatherStart() {
  return{
    type :  FETCH_WEATHER_START
  }
}

export  function fetchWeatherSuccess(dailyWeather, currentWeather) {
  return{
    type :  FETCH_WATHER_SUCCESS,
    dailyWeather , currentWeather
  }
}

export  function fetchWeatherError(e) {
  return{
    type :  FETCH_WEATHER_ERROR,
    error : e
  }
}

export function changeUnit(changeOn) {
  return dispatch => {

    if (changeOn) {
      dispatch(changeUnitValue(changeOn))
    } else{
      dispatch(changeUnitValue(false))
    }
  }
}

export function changeUnitValue(changeOn) {
  return{
    type : CELSIUS_ON,
    changeOn
  }
}

export function resetUnit() {
  return{
    type :  RESET,

  }
}
