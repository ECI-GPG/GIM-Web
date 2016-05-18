import React from 'react';

import InboxStore from '../../stores/inbox-store';
import AppActions from '../../actions/app-actions';
import AppConstants from '../../constants/app-constants';
import StoreWatchMixin from '../../mixin/storeWatchMixin0';

import {FAB} from '../chips/button/button';
import {Link} from 'react-router';
import {Page} from '../layout/page';
import {Tabs, Tab} from '../layout/tabs';
import {List, ListItem} from '../layout/list';
import ShipmentCheckinForm from './app-shipment-checkin-form';

import styles from './app-shipments.css';

const StepInfo = ({icon, city, date}) => {
  return (
    <div className="flex mui--text-dark-secondary">
      <span className="flex expand"><i className="material-icons md-18 mui--text-dark-hint">{icon}</i>&nbsp;{city}</span>
      <span className="mui--text-dark-secondary">{date.toLocaleDateString()}</span>
    </div>
  );
}

class ShipmentsInbox extends React.Component {

  constructor(props) {
    super(props);
    this.tabSelected = this.tabSelected.bind(this);
  }

  tabSelected(tab) {
    AppActions.send( AppConstants.INBOX.SELECT_TAB, tab)
  }

  filterChanged(value) {
    AppActions.send( AppConstants.INBOX.FILTER_SHIPMENTS, value);
  }

  shipmentSelected(id) {
    AppActions.send( AppConstants.INBOX.SELECT_SHIPMENT, id);
  }

  unselect() {
    AppActions.send( AppConstants.INBOX.SELECT_SHIPMENT, "");
  }

  render() {

    const filter = {
      value : this.props.filter.value,
      criteria : this.props.filter.criteria,
      options : [
        { label: 'Contact', value: 'origin.contact'},
        { label: 'Origin', value: 'origin.city'},
        { label: 'Send Date', value: 'dateSent'}
      ]
    }

    const selectedClass = this.props.list.selected ? "selected" : "";
    return (
      <Page title="Inbox" icon="move_to_inbox" toggleDrawer={this.props.toggleDrawer}>
        <div className="inbox">
          <div className={`inbox-list ${selectedClass}`}>
            <Tabs>
              <Tab id="CLOSED" icon="cube" label="Closed" active={this.props.tab === "CLOSED"} selected={this.tabSelected}/>
              <Tab id="OPENED" icon="cube" label="Opened" active={this.props.tab === "OPENED"} selected={this.tabSelected}/>
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

  renderShipment(shipment) {
    let icon = (<i className="logo up">{shipment.origin.initial}</i>);
    let selected =  (this.props.list.selected && this.props.list.selected === shipment.id)? "selected" : "unselected";
    return (
        <ListItem id={shipment.id} icon={icon} title={shipment.origin.contact} onClick={this.shipmentSelected} selected={selected}>
          <Link to={`inbox/shipments/${shipment.id}`}>
            <StepInfo icon="keyboard_arrow_right" city={shipment.origin.city} date={shipment.dateSent}/>
            <div><i className="material-icons md-18 mui--text-dark-secondary mui--text-dark-hint">more_vert</i></div>
            <StepInfo icon="keyboard_arrow_left" city="Madrid" date={shipment.dateReceived}/>
          </Link>
        </ListItem>
    )
  }
}

export default StoreWatchMixin(ShipmentsInbox, InboxStore, (props) => {
  const state = InboxStore.getState();
  return state;
});
