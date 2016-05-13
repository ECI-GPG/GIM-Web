import React from 'react';
import Styles from './app.css';
import Layout from './layout/layout';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

// Pages
import Inbox from './shipments/app-shipment-inbox';
import Issues from './issues/app-issues';
import Search from './search/app-search-page';
import Outbox from './shipments/app-shipment-outbox';
import Monitor from './shipments/app-shipment-monitor';
import Products from './products/app-products';
import ShipmentForm from './shipments/app-shipment-form';
import ShipmentInfo from './shipments/app-shipment-info';
import ShipmentCheckin from './shipments/app-shipment-reception-form';
import ShipmentCheckinDetail from './shipments/app-checkin-form';

import Camera from './media/app-photobooth';

export default () =>  <Router history={browserHistory}>
                        <Route path="/" component={Layout}>

                          <IndexRoute component={Inbox}/>

                          <Route path="inbox" component={Inbox}>
                            <Route path="shipments/:id" component={ShipmentCheckinDetail}/>
                          </Route>

                          <Route path="inbox/checkin" component={ShipmentCheckin}/>
                          <Route path="products" component={Products}/>

                          <Route path="monitor" component={Monitor}/>
                          <Route path="outbox" component={Outbox}/>
                          <Route path="outbox/new" component={ShipmentForm}/>
                          <Route path="issues" component={Issues}/>
                          <Route path="shipment" component={ShipmentInfo}/>

                          <Route path="camera" component={Camera}/>
                          <Route path="search" component={Search}/>
                        </Route>
                      </Router>
