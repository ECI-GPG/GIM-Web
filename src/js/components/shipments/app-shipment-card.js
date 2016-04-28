import React from 'react';
import AppConstants from '../../constants/app-constants';
import {Link} from 'react-router';
import Card from '../layout/app-card';

const ShipmentCard = (props) => {

    var stateIcon = "dropbox";
    var stateDate = new Date();

    switch (props.item.state) {
      case AppConstants.SHIPMENT_STATE.NEW:
        stateDate = props.item.dateCreated;
        break;
      case AppConstants.SHIPMENT_STATE.CLOSED:
        stateDate = props.item.dateClosed;
        stateIcon = "cube";
        break;
      case AppConstants.SHIPMENT_STATE.SENT:
        stateDate = props.item.dateSent;
        break;
      case AppConstants.SHIPMENT_STATE.RECEIVED:
        stateDate = props.item.dateReceived;
        break;
    }

    return  <Card icon={stateIcon} title={props.item.id} subtitle={stateDate.toLocaleDateString()}>
              <Link to="/outbox/new"><i className="material-icons">edit</i></Link>
            </Card>

}

export default ShipmentCard;
