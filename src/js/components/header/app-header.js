import React from 'react'
import AppActions from '../../actions/app-actions';
import styles from './app-header.css';
import Title from '../title/app-title';

class Header extends React.Component {

  toggleMenu() {
    alert('TODO: toggle menu');
  }

  render() {
    return (
      <header>

        <div id="drawerButton">
          <button className="mui-btn mui-btn--flat" onClick={this.toggleMenu}>
            <i className="fa fa-bars fa-fw"></i>
          </button>
        </div>

        <Title />

      </header>
    );
  }
}

export default Header;
