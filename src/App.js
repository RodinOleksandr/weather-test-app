import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route , Switch, Redirect, withRouter} from 'react-router-dom'
import Settings from './containers/Settings/Settings'
import Weather from './containers/Weather/Weather'
import Navigation from './components/Navigation/Navigation'
import {getWeather} from './store/actions/weather'



class App extends Component {


  render() {

    let routes = (
      <Switch>
        <Route path = '/' exact component = {Weather}/>
        <Route path = '/settings' component = {Settings}/>
        <Redirect to = '/' />
      </Switch>
    )
    return (
      <div >
        <Navigation getWeather = {this.props.getWeather}/>
        {routes}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getWeather : () => dispatch(getWeather())
  }
}


export default withRouter(connect( null , mapDispatchToProps)(App))
