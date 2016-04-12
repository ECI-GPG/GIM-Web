import React from 'react'
import AppActions from '../../actions/app-actions';

class Header extends React.Component {

  toggleMenu() {
    alert(this.refs.leftMenu);
  }

  render() {
    return (
      <div className="app-header">

        <div className="menu-button">
          <button className="mui-btn" onClick={this.toggleMenu}>
            <i className="fa fa-bars fa-fw"></i>
          </button>
        </div>

        <div className="title">
          <h1>SampleBook</h1>
          <h4>Shipment</h4>
        </div>

      </div>
    );
  }
}

export default Header;
