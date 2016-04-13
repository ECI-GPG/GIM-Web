import React from 'react';
import Constants from '../../constants/app-constants';
import Shipments from './app-shipments';

class Monitor extends React.Component {

  render() {

    let states = [
      Constants.SHIPMENT_STATE.SENT,
      Constants.SHIPMENT_STATE.RECEIVED
    ];

    return (
      <div>
        <div className="app-titled-toolbar">
          <h2>Monitor</h2>
        </div>
        <Shipments states={states}/>
      </div>
    )
  }
}

export default Monitor;
