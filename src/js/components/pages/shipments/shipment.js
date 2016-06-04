import React from 'react';

import store from '../../../stores/shipments-store';

import { Page } from '../../layout/page/page';

class Shipment extends React.Component {

  static propTypes = {
    shipment: React.PropTypes.object,
    toggleDrawer: React.PropTypes.func,
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <Page title="Shipment Checkin" icon="move_to_inbox" to="/" toggleDrawer={this.props.toggleDrawer}>

      </Page>
    );
  }
}

export default Shipment;
