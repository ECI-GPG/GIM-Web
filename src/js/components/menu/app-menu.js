import React from 'react';
import {Link} from 'react-router';
import style from './app-menu.css';

class Menu extends React.Component {

  render() {

    let options = [
      { txt : 'Monitor',    to:'/',          icon: 'send'},
      { txt : 'Outbox',     to:'outbox',     icon: 'inbox'},
      { txt : 'Incidences', to:'incidences', icon: 'warning'},
    ];

    var items = options.map(item => {
      return (
        <Link to={item.to} className="mui--text-light">
          <div className="menu-item">
            <i className="material-icons">{item.icon}</i>
            <strong>{item.txt}</strong>
          </div>
        </Link>
      )
    });

      return (
        <aside id="menu">
          <div className="title">
            <div className="icon">
            </div>
            <h1>SampleBook</h1>
          </div>
          <div className="mui-divider"></div>
          <nav>{items}</nav>
        </aside>
      )

  }
}

export default Menu;
