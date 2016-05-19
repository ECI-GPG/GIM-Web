import React from 'react';
import AppConstants from '../../constants/app-constants';
import {Link} from 'react-router';
import Card from '../layout/app-card';

const ShipmentCard = (props) => {

    var stateDate = new Date();
    var stateIcon =
      props.item.state == AppConstants.SHIPMENT_STATE.CLOSED ? "cube" : "dropbox";

    return  (
      <Card icon={stateIcon} title={props.item.id} subtitle={stateDate.toLocaleDateString()}>
        <progress max="100" value="50"></progress>
        <Link to="/inbox/reception"><i className="material-icons">edit</i></Link>
      </Card>
    );
}

export default ShipmentCard;
