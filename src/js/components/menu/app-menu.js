import React from 'react';
import {Link} from 'react-router';
import style from './app-menu.css';
import Title from '../title/app-title';

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
          <div className="menu-item">
            <i className={item.icon}></i>
            <strong>{item.txt}</strong>
          </div>
        </Link>
      )
    });

    return (
      <aside>
        <Title />
        <div className="mui-divider"></div>
        <nav>{items}</nav>
      </aside>
    )
  }
}

export default Menu;
