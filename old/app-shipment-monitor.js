import React from 'react';
import {Page} from '../layout/page';
import styles from './app-shipments.css';
import Shipments from './app-shipments2';
import Constants from '../../constants/app-constants';

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
