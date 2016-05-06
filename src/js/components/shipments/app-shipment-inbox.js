import React from 'react';
import Inbox from '../layout/app-inbox';
import styles from './app-shipments.css';
import {Window} from '../layout/app-page';
import AppStore from '../../stores/app-store';
import {ListItem} from '../layout/list';
import StoreWatchMixin from '../../mixin/storeWatchMixin';

const Shipments = (props) => {
  var items = AppStore.getShipments();
  return { items: items}
}

class ShipmentsInbox extends React.Component {

  render() {

    let listItems = this.props.items.map(item => {
      return (<ListItem to={`/inbox/shipment/${item.id}`}>{item.id}</ListItem>)
    });

    return (
      <Window title="Inbox" icon="move_to_inbox" toggleDrawer={this.props.toggleDrawer}>
        <Inbox items={listItems} add="/inbox/checkin">{this.props.children}</Inbox>
      </Window>
    )
  }
}

export default StoreWatchMixin(ShipmentsInbox, Shipments);
