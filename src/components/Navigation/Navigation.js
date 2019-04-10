import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = (props) => {
  return (

    <div className = 'Navigation'>

    <Link to = '/' className = 'Link'>Home</Link>
    <i className="reload fas fa-sync-alt"  onClick = {props.getWeather}></i>
    <Link to = '/settings' className = 'Link'>Settings <i className="settings fas fa-cog"></i></Link>
    </div>
  )
}


export default Navigation
