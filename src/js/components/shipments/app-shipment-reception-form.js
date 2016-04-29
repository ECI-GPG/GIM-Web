import React from 'react';
import Page from '../layout/app-page';
import {Link} from 'react-router';
import {FieldGroup, Field} from '../layout/app-field';

const ShipmentReceptionForm = (props) => {
  return (
    <Page icon="unarchive" title="Shipment Reception" to="/inbox">

      <h5 className="mui--text-dark-secondary"><i className="fa fa-barcode fa-lg"></i>&nbsp;&nbsp;&nbsp;Shipment Info</h5>
      <div className="mui-panel">
        <FieldGroup icon="fingerprint">
          <Field label="ID" icon="fingerprint" value="1234678"/>
          <Field label="Currier" value="1234678"/>
          <Field label="Order ID" value="1234678"/>
        </FieldGroup>
        <FieldGroup icon="home">
          <Field label="Origin Date" icon="today" value="01/10/2015"/>
          <Field label="Origin" value="New York"/>
          <Field label="Contact" value="John Smith"/>
        </FieldGroup>
        <FieldGroup icon="archive">
          <Field label="State" value="CLOSED"/>
          <Field label="Num.Samples" value="1"/>
          <Field label="Observations" value=""/>
        </FieldGroup>
      </div>

      <h5 className="mui--text-dark-secondary"><i className="material-icons">timeline</i>&nbsp;&nbsp;&nbsp;Timeline</h5>
      <div className="mui-panel">
        <FieldGroup icon="flight_takeoff">
          <Field label="Agency" value="UPS"/>
          <Field label="Send Date" value="02/10/2015"/>
          <Field label="Reception Date" value="03/10/2015"/>
          <Field label="Registry Date" value="03/10/2015"/>
        </FieldGroup>
        <FieldGroup icon="warning">
          <Field label="Issue #1"></Field>
        </FieldGroup>
      </div>

      <Link to="/outbox/new">
        <button className="mui-btn mui-btn--accent mui-btn--fab  fab">
          <i className="material-icons">done</i>
        </button>
      </Link>

    </Page>
  )
}

export default ShipmentReceptionForm;
