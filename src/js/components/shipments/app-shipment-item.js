import React from 'react';
import CartButton from '../cart/app-cart-button';
import AppConstants from '../../constants/app-constants';
import {Link} from 'react-router';

export default (props) => {

  var stateDate = new Date();

  switch (props.item.state) {
    case AppConstants.SHIPMENT_STATE.NEW:
      stateDate = props.item.dateCreated;
      break;
    case AppConstants.SHIPMENT_STATE.CLOSED:
      stateDate = props.item.dateClosed;
      break;
    case AppConstants.SHIPMENT_STATE.SENT:
      stateDate = props.item.dateSent;
      break;
    case AppConstants.SHIPMENT_STATE.RECEIVED:
      stateDate = props.item.dateReceived;
      break;
  }

  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.state}</td>
      <td>{stateDate.toLocaleDateString()}</td>
      <td><Link to="/preparations/new">ver...</Link></td>
    </tr>
  );
}
