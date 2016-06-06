import React from 'react';
import store from '../../../stores/shipments-store';
import { Page } from '../../layout/page/page';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { Grid, GridItem } from '../../layout/grid/grid';
import { FieldGroup, Field } from '../../chips/fields/fields';
import { FAB } from '../../chips/buttons/buttons';


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
        <Field id="city" label="Ciudad" value={props.city} onChange={props.onChange}  readOnly={props.readOnly} />
        <Field id="deptno" label="Deptno" value={props.deptno} onChange={props.onChange}  readOnly={props.readOnly} />
        <Field id="deptno" label="Centro" value={props.center} onChange={props.onChange}  readOnly={props.readOnly} />
      </FieldGroup>
      <FieldGroup icon="person">
        <Field id="contact" label="Contacto" value={props.contact} onChange={props.onChange}  readOnly={props.readOnly} />
        <Field id="contact" label="E-Mail" value='contact@email.com' onChange={props.onChange}  readOnly={props.readOnly} />
        <Field id="contact" label="Tfn:" value='91 5055678' onChange={props.onChange}  readOnly={props.readOnly} />
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

class Shipment extends React.Component {

  static propTypes = {
    shipment: React.PropTypes.object,
    toggleDrawer: React.PropTypes.func,
  }

  defaultProps = {
    shipment: store.shipment,
    tab: store.shipmentTab,
  }

  state = {
    shipment: this.defaultProps.shipment,
    tab: this.defaultProps.tab,
  }

  handleTabChanged = (nextTab) => {
    store.selectShipmentTab(nextTab, () => {
      this.setState({ tab: nextTab });
    });
  }

  renderFile = (shipment) => (
    <div>
    <div className="mui-panel">
      <h3>Origen</h3>
      <OriginForm
        deptno={shipment.origin.department + ' / ' + shipment.origin.office}
        city={shipment.origin.city}
        contact={shipment.origin.contact}
        sendDate={shipment.dateSent.toLocaleDateString()}
        agency={shipment.agency}
        readOnly={true}
      />
    </div>
    <div className="mui-panel">
      <h3>Recepción</h3>
      <ReceptionForm
        receptionDate={shipment.dateEstimatedReception.toLocaleDateString()}
        registryDate={shipment.dateReceived.toLocaleDateString()}
        readOnly={true}
      />
    </div>
    <div className="mui-panel scrollable">
      <h3>Observaciones</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
  );

  renderContent = () => {
    const renderItem = (item) => (<GridItem id={item.id} title={item.title} subtitle={item.description} image={item.image}/>);
    const items = this.state.shipment.samples.map(renderItem);
    return (
      <div>
        <Grid>{items}</Grid>
        <FAB icon="add_a_photo" to="/shipments/10/samples"/>
      </div>);
  }

  renderIssues = () => (
    <div className="mui-panel scrollable">
      <h3>Incidencias</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )

  renderTabContent = (shipment) => {
    switch (this.state.tab) {
      case 'FILE':
        return this.renderFile(shipment);
        break;
      case 'CONTENT':
        return this.renderContent(shipment);
        break;
      case 'ISSUES':
        return this.renderIssues(shipment);
        break;
      default:
      return this.renderFile(shipment);
      break;
    }
  }

  render() {
    const shipment = this.state.shipment;
    const readOnly = true;

    return (
      <Page title="Shipment Checkin" icon="move_to_inbox" to="/" toggleDrawer={this.props.toggleDrawer}>
        <div className="shipment">

          <div className="mui-panel" style={{maxHeight: '10rem'}}>
            <h3> Identificación </h3>
            <IdentificationForm
              id={shipment.id}
              courrier={shipment.courrier}
              orderId={shipment.orderId}
              readOnly={readOnly}
            />
          </div>

          <Tabs onChanged={this.handleTabChanged} className="shadow-bottom">
            <Tab id="FILE" label="Ficha" active={this.state.tab === 'FILE'} />
            <Tab id="CONTENT" label="Contenidos" active={this.state.tab === 'CONTENT'}/>
            <Tab id="ISSUES" label="Incidencias" active={this.state.tab === 'ISSUES'}/>
          </Tabs>

          <div className="scrollable">
            {this.renderTabContent(shipment)}
          </div>
        </div>
      </Page>
    );
  }
}

export default Shipment;
