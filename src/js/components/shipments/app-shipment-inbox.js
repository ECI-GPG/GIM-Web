import React from 'react';
import {Link} from 'react-router';
import Constants from '../../constants/app-constants';
import Page from '../layout/app-page';
import styles from './app-shipments.css';
import Shipments from './app-shipments';

class Inbox extends React.Component {

  render() {

    let states = [
      Constants.SHIPMENT_STATE.CLOSED,
      Constants.SHIPMENT_STATE.NEW,
    ];

    return (
      <Page title="Inbox" icon="inbox" toggleDrawer={this.props.toggleDrawer}>
        <Shipments states={states}/>
        <Link to="/inbox/new">
          <button className="mui-btn mui-btn--accent mui-btn--fab  fab">
            <i className="material-icons">add</i>
          </button>
        </Link>
      </Page>
    )
  }
}

export default Inbox;
