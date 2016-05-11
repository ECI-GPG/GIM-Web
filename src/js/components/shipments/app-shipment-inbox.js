import React from 'react';
import Inbox from '../layout/app-inbox';
import styles from './app-shipments.css';
import {Window} from '../layout/page';
import AppStore from '../../stores/app-store';
import {List, ListItem} from '../layout/list';
import StoreWatchMixin from '../../mixin/storeWatchMixin';

const Shipments = (props) => {
  var items = AppStore.getShipments();
  return { items: items}
}

class ShipmentsInbox extends React.Component {

  listItem(item) {
    console.log(item)
    const icon = (<i className="logo">{item.origin.initial}</i>);
    return (<ListItem title={item.origin.city} icon={icon} to={`/inbox/shipment/${item.id}`}>{item.dateSent.toLocaleDateString()}</ListItem>)
  }

  render() {

    let closedShipments = this.props.items
      .filter(item => item.state === 'RECEIVED' )
        .map(this.listItem);

    let openedShipments = this.props.items
      .filter(item => item.state === 'OPENED' )
        .map(this.listItem);

    let lists = [];
    lists.push(<List id="closed" icon="cube" name="Closed" add="inbox/checkin" active="true">{openedShipments}</List>);
    lists.push(<List id="opened" icon="dropbox" name="Open" add="inbox/checkin" active="false">{closedShipments}</List>);

    return (
      <Window title="Inbox" icon="move_to_inbox" toggleDrawer={this.props.toggleDrawer}>
        <Inbox lists={lists} pages={this.props.children}></Inbox>
      </Window>
    )
  }
}

export default StoreWatchMixin(ShipmentsInbox, Shipments);
