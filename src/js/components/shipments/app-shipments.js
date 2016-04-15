import React from 'react';
import AppStore from '../../stores/app-store';
import AppShipmentItem from './app-shipment-item';
import StoreWatchMixin from '../../mixin/storeWatchMixin';
import styles from './app-shipments.css';

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
        <table className="mui-table mui-table--bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>state<i className="material-icons">arrow_downward</i></th>
              <th>date<i className="material-icons">arrow_downward</i></th>
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
