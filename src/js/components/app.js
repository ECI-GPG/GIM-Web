import React from 'react';
import Layout from './app-layout';
import {Router, Route, IndexRoute} from 'react-router';
import styles from './app.css';

// Pages
import Monitor from './shipments/app-shipment-monitor';
import Preparations from './shipments/app-shipment-preparations';

export default () => {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <IndexRoute component={Monitor}></IndexRoute>
        <Route path="preparations" component={Preparations}></Route>
      </Route>
    </Router>
  )
}
