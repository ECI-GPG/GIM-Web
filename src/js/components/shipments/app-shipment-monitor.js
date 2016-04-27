import React from 'react';
import Constants from '../../constants/app-constants';
import Page from '../layout/app-page';
import Shipments from './app-shipments2';
import styles from './app-shipments.css';

const Monitor = (props) => {

  let states = [
    Constants.SHIPMENT_STATE.SENT,
    Constants.SHIPMENT_STATE.RECEIVED
  ];

  return (
    <Page title="Monitor" icon="send" toggleDrawer={props.toggleDrawer}>
      <Shipments states={states}/>
    </Page>
  )
}

export default Monitor;
