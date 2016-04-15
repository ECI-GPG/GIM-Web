import React from 'react';
import Shipments from './app-shipments';
import Constants from '../../constants/app-constants';
import Header from '../header/app-header';
import Button from '../cart/app-cart-button';
import {Link} from 'react-router';
import styles from './app-shipments.css';

class Outbox extends React.Component {

  render() {

    let states = [
      Constants.SHIPMENT_STATE.NEW,
      Constants.SHIPMENT_STATE.CLOSED
    ];

    return (
      <div className="page">

        <Header title="Outbox"/>

        <main>
          <div>
            <div>
              <h2>Outbox</h2>
              <Link to="/outbox/new">
                <button className="mui-btn mui-btn--accent mui-btn--fab  fab">
                  <i className="material-icons">add</i>
                </button>
              </Link>
            </div>
            <Shipments states={states}/>
          </div>
        </main>
      </div>
    )
  }
}

export default Outbox;
