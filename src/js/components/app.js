import React from 'react';
import Template from './app-template';
import {Router, Route, IndexRoute} from 'react-router';

// Pages
import Monitor from './shipments/app-shipment-monitor';
import Preparations from './shipments/app-shipment-preparations';

export default () => {
  return (
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={Monitor}></IndexRoute>
        <Route path="preparations" component={Preparations}></Route>
      </Route>
    </Router>
  )
}
