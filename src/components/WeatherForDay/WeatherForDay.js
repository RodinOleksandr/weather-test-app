import React from 'react'
import './WeatherForDay.css'
const WeatherForDay = (props) => {

  let currentWeather = (
        <div  className = 'WeatherForDay CurrentWeather'>

          <header>

            {props.celsiusOn
            ? <span className = 'Degree'>{props.currentWeather.tempC} &deg;C  </span>
            : <span className = 'Degree'>{props.currentWeather.tempF} &deg;F  </span>}

           <br/>
            <span>
              {props.currentWeather.description}
            </span><br/>
            <span>
              {props.currentWeather.humidity}
              </span>
          </header>
          <footer>
            <span>Last update :</span> <br/>
            {props.currentWeather.date}
          </footer>
         </div>

       )
  let weatherList =  props.data.map((item , index) => {

  return  <div key = {index} className = 'WeatherForDay'>

          <header>

            {props.celsiusOn
            ? <span className = 'Degree'>{item.tempC} &deg;C  </span>
            : <span className = 'Degree'>{item.tempF} &deg;F  </span>}

           <br/>
            <span>
              {item.description}
            </span><br/>
            <span>
              {item.humidity}
              </span>
          </header>
          <footer>
            <span>{item.date.day}</span> <br/>
            {item.date.formDate}
          </footer>
         </div>


  })

  return(

    <div className = 'WeatherContainer'>
      <h1 className = 'CityName'>Weather At <span>{props.currentWeather.name}</span></h1>
      <div className ='WeatherItems'>
        {currentWeather}
        {weatherList}
      </div>
    </div>

  )
}

export default WeatherForDay
