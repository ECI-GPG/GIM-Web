import React from 'react';
import store from '../../../stores/shipments-store';
import { Page } from '../../layout/page/page';
import { Button } from '../../chips/buttons/buttons';
import { FieldGroup, Field } from '../../chips/fields/fields';
import { Stepper, Step } from '../../chips/tabs/steps';
import './shipmentWizard.css';

const IdentificationForm = (props) => {
  return (
    <div>
      <FieldGroup icon="fingerprint">
        <Field id="id" label="ID" value={props.id} onChange={props.onChange} readOnly={props.readOnly}/>
        <Field id="courrier" label="Courrier" value={props.courrier} onChange={props.onChange}  readOnly={props.readOnly}/>
        <Field id="orderId" label="Order ID" value={props.orderId} onChange={props.onChange}  readOnly={props.readOnly}/>
      </FieldGroup>
    </div>
  );
};

const OriginForm = (props) => {
  return (
    <div>
      <FieldGroup icon="location_on">
        <Field id="deptno" label="Deptno / Centro" value={props.deptno} onChange={props.onChange}  readOnly={props.readOnly} />
        <Field id="city" label="Ciudad" value={props.city} onChange={props.onChange}  readOnly={props.readOnly} />
      </FieldGroup>
      <FieldGroup icon="person">
        <Field id="contact" label="Contacto" value={props.contact} onChange={props.onChange}  readOnly={props.readOnly} />
      </FieldGroup>
      <FieldGroup icon="flight_takeoff">
        <Field id="sendDate" label="Fecha Envío" value={props.sendDate} onChange={props.onChange}  readOnly={props.readOnly} />
        <Field id="agency" label="Agencia" value={props.agency} onChange={props.onChange}  readOnly={props.readOnly} />
      </FieldGroup>
    </div>
  );
};

const ReceptionForm= (props) => {
  return (
    <div>
      <FieldGroup icon="date_range">
        <Field id="receptionDate" label="Fecha Recepción" value={props.receptionDate} onChange={props.onChange}  readOnly={props.readOnly} />
        <Field id="registryDate" label="Fecha Registro" value={props.registryDate} onChange={props.onChange}  readOnly={props.readOnly} />
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
    shipment: store.newShipment,
  }

  state = {
    step: this.defaultProps.step,
    shipment: this.defaultProps.shipment,
  }

  handleStepChanged = (newStep) => {
    this.setState({ step: newStep });
  }

  handleFieldChange = (value, field) => {
    store.newShipment.changeField(field, value, (nextShipment) => {
      this.setState({ shipment: nextShipment });
    });
  }

  renderStep = (step, readOnly = false ) => {
    const shipment = this.state.shipment;
    const steps = {
      1: <IdentificationForm
        id={shipment.id}
        courrier={shipment.courrier}
        orderId={shipment.orderId}
        readOnly={readOnly}
        onChange={this.handleFieldChange}
      />,
      2: <OriginForm
        deptno={shipment.deptno}
        city={shipment.city}
        contact={shipment.contact}
        sendDate={shipment.sendDate}
        agency={shipment.agency}
        readOnly={readOnly}
        onChange={this.handleFieldChange}
      />,
      3: <ReceptionForm
        receptionDate={shipment.receptionDate}
        registryDate={shipment.registryDate}
        readOnly={readOnly}
        onChange={this.handleFieldChange}
      />,
      4: <Button classes="raised accent-color" label="OK" />,
    };
    return steps[step];
  }

  renderForm = (step) => {
    const identification = step > 1 ? (<div><h4>Identificacion</h4>{this.renderStep(1, true)}</div>) : '';
    const origin = step > 2 ? (<div><h4>Origen</h4>{this.renderStep(2, true)}</div>) : '';
    const reception = step > 3 ? (<div><h4>Recepción</h4>{this.renderStep(3, true)}</div>) : '';
    return (
      <div>{identification}{origin}{reception}</div>
    );
  }

  ShipmentWizardStep = (step) => {
    const titles = [ '', 'Identification', 'Origen', 'Recepción'];
    return (
      <div className="flex vertical expand center" style={{ minHeight: '60rem', padding: '2rem 0' }}>
        {this.renderForm(step)}
        <h2>{titles[this.state.step]}</h2>
        <div style={{ flex: '10' }}>
          {this.renderStep(step)}
        </div>
      </div>
    );
  };

  render() {
    return (
      <Page title="New Shipment" icon="move_to_inbox" to="/shipments" toggleDrawer={this.props.toggleDrawer}>
        <div className="wizard">
          <Step>
            {this.ShipmentWizardStep(this.state.step)}
          </Step>
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
