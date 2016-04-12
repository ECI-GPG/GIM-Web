import React from 'react';
import Shipments from './app-shipments';

class Monitor extends React.Component {

  render() {
    return (
      <div>
        <div className="app-titled-toolbar">
          <h2>Monitor</h2>
        </div>
        <Shipments />
      </div>
    )
  }
}

export default Monitor;
