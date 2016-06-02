import React from 'react';

import InboxStore from '../../../stores/inbox-store';
import AppActions from '../../../actions/app-actions';
import AppConstants from '../../../constants/app-constants';
import StoreWatchMixin from '../../../mixin/storeWatchMixin0';

import { FAB } from '../../chips/buttons/buttons';
import { Link } from 'react-router';
import { Page } from '../../layout/page/page';
import { Inbox, InboxList, InboxViewer } from '../../layout/inbox/inbox';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { List, ListItem } from '../../layout/list/list';
import ShipmentCheckinForm from './app-shipment-checkin-form';


class ShipmentListItem extends React.Component {

  departments = {
    Compras: { initial: 'Co', color: '#EAA' },
    Almacen: { initial: 'Al', color: '#AAE' },
    'Oficina Internacional': { initial:'OI', color:'#AEA' },
    Marketing: { initial: 'Ma', color: '#EEE' },
    Centros: { initial: 'Ce', color: '#EE0' },
  }

  handleSelected = () => {
    this.props.onSelected(this.props.shipment.id);
  }

  render() {
    const shipment = this.props.shipment;

    const color = this.departments[shipment.origin.department].color;
    const initial = this.departments[shipment.origin.department].initial;
    const title = '' + shipment.origin.office;
    const selected = (this.props.selected === shipment.id)? "selected" : "unselected";

    return (
      <ListItem id={shipment.id} title={title} selected={selected} onSelected={this.handleSelected} avatar={{ 'color': color, 'initial': initial }}>
        <Link to={`inbox/shipments/${shipment.id}`}>
          <div className="line-info flex centred secondary-text-color">
            <span className="flex centred expand">
              <i className="material-icons small" style={{fontSize:'1.8rem'}}>location_city</i>
              <span style={{alignSelf:'flex-end', marginRight:'1rem'}}>{shipment.origin.city}</span>
              <i className="material-icons small" style={{fontSize:'1.8rem'}}>person</i>
              <span style={{alignSelf:'flex-end'}}>{shipment.origin.contact}</span>
            </span>
            <span>{shipment.dateCreated.toLocaleDateString()}</span>
          </div>
        </Link>
      </ListItem>
    );
  }
}

class Shipments extends React.Component {

  handleTabChanged = (tab) => {
    AppActions.send(AppConstants.INBOX.SELECT_TAB, tab);
  }

  filterChanged = (value) => {
    AppActions.send(AppConstants.INBOX.FILTER_SHIPMENTS, value);
  }

  shipmentSelected(id) {
    AppActions.send(AppConstants.INBOX.SELECT_SHIPMENT, id);
  }

  renderShipment = (shipment) => (
    <ShipmentListItem shipment={shipment} selected={this.props.list.selected} onSelected={this.shipmentSelected}/>
  );

  render() {
    const filter = {
      value: this.props.filter.value,
      criteria : this.props.filter.criteria,
      options: [
        { label: 'Department', value: 'origin.department' },
        { label: 'Contact', value: 'origin.contact' },
        { label: 'Origin', value: 'origin.city' },
        { label: 'Send Date', value: 'dateSent' },
      ],
    }

    return (
      <Page title="SampleBook" icon="content_copy" toggleDrawer={this.props.toggleDrawer}>
        <Inbox>
          <InboxList>
            <Tabs onChanged={this.handleTabChanged} className="shadow-bottom">
              <Tab id="ALL" label="All" active={this.props.tab === "ALL"} />
              <Tab id="OPENED" label="In Progress" active={this.props.tab === "OPENED"} />
              <Tab id="CLOSED" label="Done" active={this.props.tab === "CLOSED"} />
            </Tabs>
            <List filter={filter} filtered={this.filterChanged}>
              {this.props.shipments.map(this.renderShipment)}
            </List>
            <FAB icon="add" to="/inbox/checkin"/>
          </InboxList>
          <InboxViewer>
            <ShipmentCheckinForm shipment={this.props.shipment} onSave={this.unselect}/>
          </InboxViewer>
        </Inbox>
      </Page>
    );
  }
}

export default StoreWatchMixin(Shipments, InboxStore, (props) => {
  const state = InboxStore.getState();
  return state;
});
