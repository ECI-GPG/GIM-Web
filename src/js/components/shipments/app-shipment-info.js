import React from 'react';
import {Page} from '../layout/app-page';
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
      <div className="timeline-item">
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
      <Page title="Shipment Info" to="/">

            <br/>

            <h5 className="mui--text-dark-secondary">Info</h5>
            <div className="mui-panel">
              <h5> [shihpment-id] </h5>
              <div><image src="http://generator.barcoding.com/images/Barcodes/UCC-EAN128.gif"></image></div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>ID</label>
              </div>

              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>State</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Creation Date</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Close Date</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Send Date</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Estimated Reception Date</label>
              </div>
              <div className="input-textfield mui-textfield mui-textfield--float-label">
                <input type="text"></input>
                <label>Reception Date</label>
              </div>
            </div>

            <h5 className="mui--text-dark-secondary">Samples</h5>
            <div className="mui-panel">
              samples
            </div>

            <h5 className="mui--text-dark-secondary">Timeline</h5>
            <div className="mui-panel">
              {timeline}
            </div>

      </Page>
    )
}

export default StoreWatchMixin(ShipmentInfo, getShipmentInfo);
