import React, {Component} from 'react'
import ControlUnit from '../../components/ControlUnit/ControlUnit'
import './Settings.css'
import {connect} from 'react-redux'
import {changeUnit ,resetUnit} from '../../store/actions/weather'

class Settings extends Component{

  render(){
    return (
      <div className = 'Settings'>
        <ControlUnit  celsiusOn = {this.props.celsiusOn} changeUnit = {this.props.changeUnit}/>
        <div>System Settings</div>
        <button onClick = {this.props.resetUnit}>Reset Cache</button>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    celsiusOn : state.weather.celsiusOn,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeUnit : (changeOn) => dispatch(changeUnit(changeOn)),
    resetUnit : () => dispatch(resetUnit())
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(Settings)
