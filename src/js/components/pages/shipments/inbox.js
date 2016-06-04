import React from 'react';

import InboxStore from '../../../stores/inbox-store';
import AppConstants from '../../../constants/app-constants';

import { FAB } from '../../chips/buttons/buttons';
import { Link } from 'react-router';
import { Page } from '../../layout/page';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { List, ListItem } from '../../layout/list';
import ShipmentCheckinForm from './app-shipment-checkin-form';

import './app-shipments.css'; 

const LineInfo = ({ icon, text, info }) => (
  <div className="line-info flex mui--text-dark-secondary">
    <span className="flex expand">
      <i className="material-icons md-18 mui--text-dark-hint">{icon}</i>&nbsp;&nbsp;{text}
    </span>
    <span className="mui--text-dark-secondary">{info}</span>
  </div>
);

LineInfo.propTypes = {
  icon: React.PropTypes.string,
  text: React.PropTypes.string,
  info: React.PropTypes.string,
};

class ShipmentsInbox extends React.Component {

  handleTabChanged = (tab) => {
    AppActions.send(AppConstants.INBOX.SELECT_TAB, tab);
  }

  filterChanged = (value) => {
    AppActions.send(AppConstants.INBOX.FILTER_SHIPMENTS, value);
  }

  shipmentSelected(id) {
    AppActions.send(AppConstants.INBOX.SELECT_SHIPMENT, id);
  }

  unselect() {
    AppActions.send(AppConstants.INBOX.SELECT_SHIPMENT, '');
  }

  renderShipment(shipment) {
    const departments = {
      'Compras': { initial: 'Co', color: '#EAA'},
      'Almacen': { initial: 'Al', color: '#AAE'},
      'Oficina Internacional': { initial:'OI', color:'#AEA'},
      'Marketing': { initial: 'Ma', color: '#EEE'},
      'Centros': { initial:'Ce', color: '#EE0'}
    }

    const color = departments[shipment.origin.department].color;
    const initial = departments[shipment.origin.department].initial;
    const icon = (<i className={`logo up${shipment.origin.color}`} style={{backgroundColor: color}}>{initial}</i>);
    const title = '' + shipment.origin.office;
    const selected = (this.props.list.selected && this.props.list.selected === shipment.id)? "selected" : "unselected";

    return (
      <ListItem id={shipment.id} icon={icon} title={title} onClick={this.shipmentSelected} selected={selected}>
        <Link to={`inbox/shipments/${shipment.id}`}>
         <LineInfo icon="location_city" text={shipment.origin.city} info={shipment.dateSent.toLocaleDateString()}/>
          <LineInfo icon="person" text={shipment.origin.contact} info=""/>
        </Link>
      </ListItem>
    );
  }

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

    const selectedClass = this.props.list.selected ? "selected" : "";

    return (
      <Page title="Inbox" icon="move_to_inbox" toggleDrawer={this.props.toggleDrawer}>
        <div className="inbox">
          <div className={`inbox-list ${selectedClass}`}>
            <Tabs onChanged={this.handleTabChanged}>
              <Tab id="ALL" label="All" active={this.props.tab === "ALL"} />
              <Tab id="OPENED" label="In Progress" active={this.props.tab === "OPENED"} />
              <Tab id="CLOSED" label="Done" active={this.props.tab === "CLOSED"} />
            </Tabs>
            <List filter={filter} filtered={this.filterChanged}>
              {this.props.shipments.map(this.renderShipment.bind(this))}
            </List>
            <FAB icon="add" to="/inbox/checkin"/>
          </div>
          <div className="viewer">
            <ShipmentCheckinForm shipment={this.props.shipment} onSave={this.unselect}/>
          </div>
        </div>
      </Page>
    )
  }
}

export default StoreWatchMixin(ShipmentsInbox, InboxStore, (props) => {
  const state = InboxStore.getState();
  return state;
});
