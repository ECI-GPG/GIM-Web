import React from 'react';
import Layout from './app-layout';
import {Router, Route, IndexRoute} from 'react-router';
import styles from './app.css';

// Pages
import Monitor from './shipments/app-shipment-monitor';
import Outbox from './shipments/app-shipment-outbox';
import ShipmentForm from './shipments/app-shipment-form';
import ShipmentInfo from './shipments/app-shipment-info';
import Search from './search/app-search-page';

export default () => {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <IndexRoute component={Monitor}></IndexRoute>
        <Route path="shipment" component={ShipmentInfo}></Route>
        <Route path="outbox" component={Outbox}></Route>
        <Route path="outbox/new" component={ShipmentForm}></Route>
        <Route path="search" component={Search}></Route>
      </Route>
    </Router>
  )
}
