import React from 'react';
import Constants from '../../constants/app-constants';
import Page from '../header/app-page';
import Shipments from './app-shipments';
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
