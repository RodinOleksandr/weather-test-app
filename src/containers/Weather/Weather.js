import React from 'react'
import Loader from '../../components/Loader/Loader'
import WeatherForDay from '../../components/WeatherForDay/WeatherForDay'
import {connect} from 'react-redux'
import {getWeather} from '../../store/actions/weather'

class Weather extends React.Component {

  componentDidMount() {
    this.props.getWeather();
  }

  render() {
  return  this.props.loading
    ? <Loader/>
    :this.props.result != null
    ?<WeatherForDay  data = {this.props.result}
                     celsiusOn = {this.props.celsiusOn}
                     currentWeather = {this.props.currentWeather}/>

    :<p>{this.props.error.message}</p>

    }
  }

function mapStateToProps(state) {
  return {
    result : state.weather.result,
    loading : state.weather.loading,
    error : state.weather.error,
    celsiusOn : state.weather.celsiusOn,
    currentWeather : state.weather.currentWeather,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getWeather : () => dispatch (getWeather())
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(Weather)
