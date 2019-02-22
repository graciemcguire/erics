import React, { Component } from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpecialEric from './Components/SpecialEric.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/special-eric' component={SpecialEric}/>
          <Route path='/*' component={MainContainer} />
        </Switch>
      </Router>
    );
  }
}
