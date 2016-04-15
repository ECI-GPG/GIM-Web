import React from 'react';
import Header from '../header/app-header'
import styles from './app-shipments.css';

class Preparation extends React.Component {
  render() {
    return (
      <div className="page">

        <Header title="New Shipment" to="/outbox"/>

        <main>
          <div>
            <div>
              <h2>New Shipment</h2>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Preparation;
