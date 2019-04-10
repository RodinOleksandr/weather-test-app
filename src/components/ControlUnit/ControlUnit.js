import React from 'react'
import './ControlUnit.css'

const ControlUnit = (props) => {
  
  let celsiusClass = ['Celsius']
  let farenheitClass = ['Farenheit']
  if (props.celsiusOn) {
      celsiusClass.push('active')
    } else {
      farenheitClass.push('active')
    }

  return(
    <>
    <div>Units</div>
    <div className = 'ControlPanel'>

      <div className = {celsiusClass.join(' ')} onClick = {(changeOn = true) => props.changeUnit(changeOn)} >&deg;C</div>
      <div className = {farenheitClass.join(' ')} onClick = {() => props.changeUnit()}>&deg;F</div>
    </div>
    </>
  )
}

export default ControlUnit
