import React from 'react';
import {Link} from 'react-router';

class Menu extends React.Component {

  render() {

    let options = [
      { txt : 'Monitor',      to:'/',            icon: 'fa fa-dashboard fa-lg'},
      { txt : 'Preparations', to:'preparations', icon: 'fa fa-spinner fa-lg'},
      { txt : 'Incidences',   to:'incidences',   icon: 'fa fa-exclamation-triangle fa-lg'},
    ];

    var items = options.map(item => {
      return (
          <Link to={item.to} className="mui--text-light">
            <div className="app-menu-item">
              <i className={item.icon}></i>
              <strong>{item.txt}</strong>
            </div>
          </Link>
      )
    });

    return (
      <div className="app-menu">
        <div>
          <h1>SampleBook</h1>
          <h4>Shipment</h4>
        </div>
        <div className="mui-divider"></div>
        {items}
      </div>
    )
  }
}

export default Menu;
