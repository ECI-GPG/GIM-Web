import React from 'react'
import AppActions from '../../actions/app-actions';
import styles from './app-header.css';
import Title from '../title/app-title';
import SearchBox from '../search/app-search';

class Header extends React.Component {

  constructor() {
    super();
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    alert('TODO: show menu');
  }

  render() {
    return (
      <header>
        <Title text="SampleBook" subtext="Shipment" toggleMenu={this.showMenu}/>
        <SearchBox />
        <div id="searchButton" className="icon">
            <i className="fa fa-search fa-lg"></i>
        </div>
      </header>
    );
  }
}

export default Header;
