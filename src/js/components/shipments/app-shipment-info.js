import React from 'react';
import Header from '../header/app-header';
import {Link} from 'react-router';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixin/storeWatchMixin';
import style from './app-shipments.css'

function getShipmentInfo() {
  return {
    info: AppStore.getShipment()
  }
}

const ShipmentEvent = (props) => {
    return (
      <div className="mui-panel timeline-item">
        <span>{props.item.date.toLocaleDateString()}</span>
        <span>{props.item.event}</span>
        <span>{props.item.author}</span>
      </div>
    )
}

const ShipmentInfo = (props) => {

    let timeline = props.info.timeline.map(item => {
      return <ShipmentEvent item={item} />
    });

    return (
      <div className="page">
        <Header title="Shipment Info" to="/"/>
        <main style={{backgroundColor:'#EEE'}}>
            <br/>
            <div className="mui-panel">
              <h2>Shipment Info</h2>
              <h5> [shihpment-id] </h5>
              <div><image src="http://generator.barcoding.com/images/Barcodes/UCC-EAN128.gif"></image></div>
            </div>

            <div className="mui-panel">
              <h5 className="mui--text-dark-secondary">Timeline</h5>
              {timeline}
            </div>

        </main>
      </div>
    )
}

export default StoreWatchMixin(ShipmentInfo, getShipmentInfo);
