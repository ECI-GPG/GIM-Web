import React from 'react';
import AppStore from '../../stores/app-store';
import AppShipmentItem from './app-shipment-item';
import StoreWatchMixin from '../../mixin/storeWatchMixin';

const shipmentItems = (props) => {

  var items = AppStore.getShipments()
    .filter(item => {
      if (props.states) {
        return props.states.some( state => state === item.state)
      } else {
        return true;
      }
    })

  return { items: items}
}

const Shipments = (props) => {

  var items = props.items.map( (item, i) => {
    return (
      <AppShipmentItem item={item}/>
    );
  });

  return (
      <div>
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
