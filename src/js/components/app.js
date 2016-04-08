import React from 'react';
import Shipments from './shipments/app-shipments';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import Template from './app-template';
import {Router, Route, IndexRoute} from 'react-router';
import CatalogDetail from './product/app-catalog-detail.js';

export default () => {
  return (
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={Shipments}></IndexRoute>
        <Route path="cart" component={Cart}></Route>
        <Route path="item/:item" component={CatalogDetail}></Route>
      </Route>
    </Router>
  )
}
