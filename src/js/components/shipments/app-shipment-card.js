import React from 'react';
import AppConstants from '../../constants/app-constants';
import {Link} from 'react-router';

const ShipmentCard = (props) => {

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

    return  <div className="box mui-panel">
              <h3><i className="material-icons">archive</i> {props.item.id} - {props.item.name}</h3>
              <div className="mui-divider"/>
              <div className="horizontal mui--text-dark-secondary">
                <img src="" alt="product image" width="100"></img>
                <p>{props.item.id} - {props.item.state} - {stateDate.toLocaleDateString()}
                </p>
              </div>
              <Link to="/shipment"><i className="material-icons">info</i></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/outbox/new"><i className="material-icons">edit</i></Link>
            </div>
}

export default ShipmentCard;
