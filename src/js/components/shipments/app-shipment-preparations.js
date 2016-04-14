import React from 'react';
import Shipments from './app-shipments';
import Constants from '../../constants/app-constants';
import Button from '../cart/app-cart-button';
import {Link} from 'react-router';

class Preparations extends React.Component {

  render() {

    let states = [
      Constants.SHIPMENT_STATE.NEW,
      Constants.SHIPMENT_STATE.CLOSED
    ];

    return (
      <div>
        <div>
          <h2>Preparations</h2>
          <Link to="/preparations/new" ><Button txt="+"/></Link>
        </div>
        <Shipments states={states}/>
      </div>
    )
  }
}

export default Preparations;
