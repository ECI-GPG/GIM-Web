import React from 'react';
import Constants from '../../constants/app-constants';
import Header from '../header/app-header';
import Shipments from './app-shipments';
import styles from './app-shipments.css';

class Monitor extends React.Component {

  render() {

    let states = [
      Constants.SHIPMENT_STATE.SENT,
      Constants.SHIPMENT_STATE.RECEIVED
    ];

    return (
      <div className="page">

        <Header title="Monitor" toggleDrawer={this.props.toggleDrawer}/>

        <main>
          <Shipments states={states}/>
        </main>

      </div>
    )
  }
}

export default Monitor;
