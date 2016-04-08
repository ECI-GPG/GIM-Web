import React from 'react';
import {Link} from 'react-router';

const Menu = (props) => {

  let options = [
    { txt : 'Sent'},
    { txt : 'New'},
    { txt : 'Incidences'},
  ];

  var items = options.map(item => {
    return (
      <div>
        <Link to="/">{item.txt}</Link>
      </div>
    )
  });

  return (
    <div className="app-menu">
      <div style={{height:140}}>
        <h1><i className="fa fa-bars fa-fw"></i>&nbsp;SampleBook</h1>
        <h4>Shipment</h4>
      </div>
      <br></br>

      {items}
    </div>
  )
}

export default Menu;
