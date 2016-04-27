import React from 'react';
import Style from './app-menu.css';
import {Link} from 'react-router';

class Menu extends React.Component {

  render() {

    let options = [
      { txt : 'Monitor', to:'/', icon: 'send'},
      { txt : 'Outbox', to:'outbox', icon: 'inbox'},
      { txt : 'Issues', to:'issues', icon: 'warning'},
      { txt : 'Products', to:'products', icon:'local_offer'}
    ];

    var items = options.map(item => {
      return (
        <Link to={item.to} className="mui--text-light">
          <div className="menu-item" onClick={this.props.selected}>
            <i className="material-icons">{item.icon}</i>
            {item.txt}
          </div>
        </Link>
      )
    });

      return (
        <aside id="menu">

          <div id="menu-title">
            <h1>SampleBook</h1>
            <h5>International Office</h5>
          </div>

          <div className="mui-divider"></div>

          <div id="menu-user">
            <div id="avatar"><i className="material-icons md-36">face</i></div>
            <h5><strong>John Smith</strong></h5>
            <h6 className="mui--text-light-secondary">johnsmith@mail.com</h6>
          </div>

          <div className="mui-divider"></div>

          <nav>
            {items}
            <div className="mui-divider"></div>
          </nav>

        </aside>
      )

  }
}

Menu.propTypes = {
  selected : React.PropTypes.func
}

export default Menu;
