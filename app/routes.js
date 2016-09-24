import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddShip from './components/AddShip';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/rebel'  />
    <Route path='/empire'  />
    <Route path='/add' component={AddShip} />
  </Route>
);