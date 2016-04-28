import React from 'react';
import Styles from './app.css';
import Layout from './layout/app-layout';
import {Router, Route, IndexRoute} from 'react-router';

// Pages
import Inbox from './shipments/app-shipment-inbox';
import Issues from './issues/app-issues';
import Search from './search/app-search-page';
import Outbox from './shipments/app-shipment-outbox';
import Monitor from './shipments/app-shipment-monitor';
import Products from './products/app-products';
import ShipmentForm from './shipments/app-shipment-form';
import ShipmentInfo from './shipments/app-shipment-info';

export default () =>  <Router>
                        <Route path="/" component={Layout}>
                          <IndexRoute component={Monitor}/>
                          <Route path="search" component={Search}/>
                          <Route path="issues" component={Issues}/>
                          <Route path="outbox" component={Outbox}/>
                          <Route path="shipment" component={ShipmentInfo}/>
                          <Route path="products" component={Products}/>
                          <Route path="outbox/new" component={ShipmentForm}/>
                          <Route path="inbox" component={Inbox}/>
                        </Route>
                      </Router>
