import React from 'react';
import styles from './app-shipments.css';
import AppStore from '../../stores/app-store';
import ShipmentItem from './app-shipment-item';
import ShipmentCard from './app-shipment-card';
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
      <ShipmentCard item={item}/>
    );
  });

  return (
    <div className="boxer">{items}</div>
  )
}

export default StoreWatchMixin(Shipments, shipmentItems);
