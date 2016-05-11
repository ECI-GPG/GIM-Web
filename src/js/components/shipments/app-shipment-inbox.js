import React from 'react';

import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import StoreWatchMixin from '../../mixin/storeWatchMixin';

import {Page} from '../layout/page';
import {Tabs, Tab} from '../layout/tabs';
import {List, ListItem} from '../layout/list';

import styles from './app-shipments.css';

const Shipments = (props) => {
  var items = AppStore.getShipments();
  return { shipments: items}
}

const StepInfo = ({icon, city, date}) => {
  return (
    <div className="flex mui--text-dark-secondary">
      <span className="flex expand"><i className="material-icons md-18 mui--text-dark-hint">{icon}</i>&nbsp;{city}</span>
      <span className="mui--text-dark-secondary">{date.toLocaleDateString()}</span>
    </div>
  );
}

class ShipmentsInbox extends React.Component {

  constructor() {
    super();
    this.state = AppStore.getInbox();
    this.tabSelected = this.tabSelected.bind(this);
  }

  tabSelected(tab) {
    AppActions.getShipmentsByStatus(tab);
  }

  render() {

    let shipments = this.props.shipments
      .filter((shipment) => {
        return shipment.state === this.state.tab;
      }).map((shipment) => {
        let icon = (<i className="logo up">{shipment.origin.initial}</i>)
        return (
          <ListItem icon={icon} title={shipment.origin.contact}>
            <StepInfo icon="keyboard_arrow_right" city={shipment.origin.city} date={shipment.dateSent}/>
            <div><i className="material-icons md-18 mui--text-dark-secondary mui--text-dark-hint">more_vert</i></div>
            <StepInfo icon="keyboard_arrow_left" city="Madrid" date={shipment.dateReceived}/>
          </ListItem>
        )
      });

    return (
      <Page title="Inbox" icon="move_to_inbox" toggleDrawer={this.props.toggleDrawer}>
        <div className="inbox">
          <Tabs>
            <Tab id="CLOSED" icon="cube" label="Closed" active={this.state.tab === "CLOSED"} selected={this.tabSelected}/>
            <Tab id="OPENED" icon="cube" label="Opened" active={this.state.tab === "OPENED"} selected={this.tabSelected}/>
          </Tabs>
          <List>{shipments}</List>
          <div className="viewer">{this.props.children}</div>
        </div>
      </Page>
    )
  }
}

export default StoreWatchMixin(ShipmentsInbox, Shipments);
