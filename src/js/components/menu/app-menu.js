import React from 'react';
import {Link} from 'react-router';
import style from './app-menu.css';
import Title from '../title/app-title';

class Menu extends React.Component {

  constructor() {
    super();
    this.state = { hidden : true }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ hidden : false });
    console.log('show ' +this.state.hidden)
  }

  hide() {
    this.setState({ hidden : true });
    console.log('hide' + this.state.hidden)
  }

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

    if (this.state.hidden) {

      return (
        <div className="icon drawerButton" onClick={this.show}>
            <i className="material-icons">menu</i>
        </div>
      );

    } else {

      return (
        <aside id="drawer" ref="drawer">
          <Title text="SampleBook" subtext="Shipment" toggleMenu={this.hide}/>
          <div className="mui-divider"></div>
          <nav>{items}</nav>
        </aside>
      )

    }
  }
}

export default Menu;
