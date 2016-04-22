import React from 'react';
import Layout from './layout/app-layout';
import {Router, Route, IndexRoute} from 'react-router';
import styles from './app.css';

// Pages
import Monitor from './shipments/app-shipment-monitor';
import Outbox from './shipments/app-shipment-outbox';
import ShipmentForm from './shipments/app-shipment-form';
import ShipmentInfo from './shipments/app-shipment-info';
import Search from './search/app-search-page';
import Issues from './issues/app-issues';

export default () => {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <IndexRoute component={Monitor}/>
        <Route path="shipment" component={ShipmentInfo}/>
        <Route path="outbox" component={Outbox}/>
        <Route path="outbox/new" component={ShipmentForm}/>
        <Route path="issues" component={Issues}/>
        <Route path="search" component={Search}/>
      </Route>
    </Router>
  )
}
