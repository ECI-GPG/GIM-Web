import React from 'react';
import Layout from './app-layout';
import {Router, Route, IndexRoute} from 'react-router';
import styles from './app.css';

// Pages
import Monitor from './shipments/app-shipment-monitor';
import Outbox from './shipments/app-shipment-outbox';
import Preparation from './shipments/app-shipment-form';

export default () => {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <IndexRoute component={Monitor}></IndexRoute>
        <Route path="outbox" component={Outbox}></Route>
        <Route path="outbox/new" component={Preparation}></Route>
      </Route>
    </Router>
  )
}
