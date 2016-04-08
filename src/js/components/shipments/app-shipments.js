import React from 'react';
import AppStore from '../../stores/app-store';
import AppShipmentItem from './app-shipment-item';
import StoreWatchMixin from '../../mixin/storeWatchMixin';
import CartButton from '../cart/app-cart-button';

const shipmentItems = () => {
  return { items: AppStore.getShipments()}
}

const Shipments = (props) => {

  var items = props.items.map( (item, i) => {
    return (
      <AppShipmentItem item={item}/>
    );
  });

  return (
      <div>

        <div className="app-titled-toolbar">
          <h2>Shipments</h2>
          <CartButton txt="+"/>
        </div>

        <table className="mui-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>state</th>
              <th>date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
  );
}

export default StoreWatchMixin(Shipments, shipmentItems);
