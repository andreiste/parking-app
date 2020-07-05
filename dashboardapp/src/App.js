import React, {Component} from 'react';
import MainPage from './MainPage/MainPage';
import MapPage from './MapPage/MapPage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={MainPage}/>
          <Route path='/map' exact={true} component={MapPage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
