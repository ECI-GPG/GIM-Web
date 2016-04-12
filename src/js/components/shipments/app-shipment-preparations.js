import React from 'react';
import Shipments from './app-shipments';
import Constants from '../../constants/app-constants';
import Button from '../cart/app-cart-button';

class Preparations extends React.Component {

  render() {

    let states = [
      Constants.SHIPMENT_STATE.NEW,
      Constants.SHIPMENT_STATE.CLOSED
    ];

    return (
      <div>
        <div className="app-titled-toolbar">
          <h2>Preparations</h2>
          <Button txt="+"/>
        </div>
        <Shipments states={states}/>
      </div>
    )
  }
}

export default Preparations;
