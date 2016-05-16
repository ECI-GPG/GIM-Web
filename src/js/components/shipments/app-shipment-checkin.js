import React from 'react';
import {Page} from '../layout/page';
import ShipmentCheckinForm from './app-shipment-checkin-form';
import StoreWatchMixin from '../../mixin/storeWatchMixin0';
import InboxStore from '../../stores/inbox-store';
import AppActions from '../../actions/app-actions';
import AppConstants from '../../constants/app-constants';

class ShipmentCheckin extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    AppActions.send(AppConstants.INBOX.NEW_CHECKIN, {});
  }

  render() {
    return (
    <Page title="Shipment Checkin" icon="move_to_inbox" toggleDrawer={this.props.toggleDrawer}>
      <div className="scrollpane">
        <ShipmentCheckinForm shipment={this.props.shipment}></ShipmentCheckinForm>
      </div>
    </Page>
  )}
}

export default StoreWatchMixin(ShipmentCheckin, InboxStore, (props) => {
  const state = InboxStore.getState();
  return state;
});
