import React from 'react';
import AppStore from '../../stores/app-store';
import AppShipmentItem from './app-shipment-item';
import StoreWatchMixin from '../../mixin/storeWatchMixin';

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
        <h1>Shipments</h1>
        <table className="mui-table">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>state</th>
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
