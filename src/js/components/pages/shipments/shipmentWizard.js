import React from 'react';
import store from '../../../stores/shipments-store';
import { Page } from '../../layout/page/page';
import { Button } from '../../chips/buttons/buttons';
import { FieldGroup, Field } from '../../chips/fields/fields';
import { Stepper, Step } from '../../chips/tabs/steps';
import './shipmentWizard.css';

const identificationForm = () => {
  return (
    <div>
      <FieldGroup icon="fingerprint">
        <Field label="ID" />
        <Field label="Courrier" />
        <Field label="Order ID" />
      </FieldGroup>
    </div>
  );
};

const originForm = () => {
  return (
    <div>
      <FieldGroup icon="location_on">
        <Field label="Deptno / Centro" />
        <Field label="Ciudad" />
      </FieldGroup>
      <FieldGroup icon="person">
        <Field label="Contacto" />
      </FieldGroup>
      <FieldGroup icon="flight_takeoff">
        <Field label="Fecha Envío" />
        <Field label="Agencia" />
      </FieldGroup>
    </div>
  );
};

const receptionForm= () => {
  return (
    <div>
      <FieldGroup icon="date_range">
        <Field label="Fecha Recepción" />
        <Field label="Fecha Registro" />
      </FieldGroup>
    </div>
  );
};

class ShipmentWizard extends React.Component {

  static propTypes = {
    toggleDrawer: React.PropTypes.func,
  }

  defaultProps = {
    step: 1,
  }

  state = {
    step: this.defaultProps.step,
  }

  handleStepChanged = (newStep) => {
    this.setState({ step: newStep });
  }

  steps = {
    1: <div className="flex vertical expand center" style={{minHeight:'60rem', padding:'2rem 0'}}>
      <center><h1>Identificación</h1></center>
      <br />
      <div style={{flex:'10'}}>
        {identificationForm()}
      </div>
    </div>,
    2: <div className="flex vertical expand center" style={{minHeight:'60rem', padding:'2rem 0'}}>
        {identificationForm()}
      <center><h1>Origen</h1></center>
      <br />
      <div style={{flex:'10'}}>
        {originForm()}
      </div>
    </div>,
    3: <div className="flex vertical expand center" style={{minHeight:'60rem', padding:'2rem 0'}}>
      {identificationForm()}
      {originForm()}
      <center><h1>Recepción</h1></center>
      <br />
      <div style={{flex:'10'}}>
        {receptionForm()}
      </div>
    </div>,
    4: <div className="flex vertical expand center" style={{minHeight:'60rem', padding:'2rem 0'}}>
      <div style={{flex:'10'}}>
        {identificationForm()}
        {originForm()}
        {receptionForm()}
        <Button classes="raised" label="OK" />
      </div>
    </div>,
  }

  render() {
    return (
      <Page title="New Shipment" icon="move_to_inbox" to="/" toggleDrawer={this.props.toggleDrawer}>
        <div className="wizard">
          <Step>{this.steps[this.state.step]}</Step>
          <Stepper
            steps={[1, 2, 3, 4]}
            step={this.state.step}
            onStepChanged={this.handleStepChanged}
          />
        </div>
      </Page>
    );
  }
}

export default ShipmentWizard;
