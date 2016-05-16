import React from 'react';
import {Link} from 'react-router';
import {FieldGroup, Field, Select} from '../layout/app-field';

const CheckinForm = (props) => {

  console.log(props)

  let origins = [
    { initial:'NY', city : 'New York', contact : 'Joan Kim'},
    { initial:'P' , city : 'Paris', contact : 'Laurent Blanc'},
    { initial:'M' , city : 'Milan', contact : 'Giovanni Vitale'},
    { initial:'B' , city : 'Barcelona', contact : 'Xavier Tarradellas'},
    { initial:'L' , city : 'London', contact : 'Elizabeth Holmes'},
    { initial:'T' , city : 'Tokio', contact : 'Hatori Hanzo'}
  ]

  let cities = origins.map(item => item.city);

  if (props.shipment)

  return (
    <div>

    <h5 className="mui--text-dark-secondary"><i className="fa fa-barcode fa-lg"></i>&nbsp;&nbsp;&nbsp;Shipment</h5>
    <div className="mui-panel">
      <FieldGroup icon="fingerprint">
        <Field label="ID" icon="fingerprint" value={props.shipment.id}/>
        <Field label="Currier" value={props.shipment.courrier}/>
        <Field label="Order ID" value={props.shipment.orderId}/>
      </FieldGroup>
    </div>

    <h5 className="mui--text-dark-secondary"><i className="fa fa-info fa-lg"></i>&nbsp;&nbsp;&nbsp;Info</h5>
    <div className="mui-panel">
      <FieldGroup icon="home">
        <Field label="Origin Date" icon="today" value={props.shipment.sendDate}/>
        <Select value={props.shipment.origin.city} options={cities}/>
        <Field label="Contact" value={props.shipment.origin.contact}/>
      </FieldGroup>
      <FieldGroup icon="archive">
        <Field label="State" value={props.shipment.state}/>
        <Field label="Num.Samples" value={props.shipment.samples.length}/>
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

    <h5 className="mui--text-dark-secondary"><i className="material-icons">photo</i>&nbsp;&nbsp;&nbsp;Images</h5>
    <div className="mui-panel">
      <Link to="/camera">
        <button className="mui-btn mui-btn--accent"><i className="material-icons">add_a_photo</i></button>
      </Link>
    </div>


      <button className="mui-btn mui-btn--accent mui-btn--fab  fab" onClick={props.onSave}>
        <i className="material-icons">done</i>
      </button>

    </div>
  )

  else return (<div></div>)
}

export default CheckinForm;
