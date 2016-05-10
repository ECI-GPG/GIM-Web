import React from 'react';
import AppActions from '../../actions/app-actions';
import styles from './app-header.css';
import SearchBox from '../search/app-search';
import { Link } from 'react-router';

const Header = (props) => {

    let toggleDrawer = () => {
      props.toggleDrawer();
    }

    let navButton = (
      <div id="navButton" onClick={toggleDrawer}>
          <i className="material-icons md-32">menu</i>
      </div>
    )

    if (props.to) {
      navButton = (
        <div id="navButton">
          <Link to={props.to}>
            <i className="material-icons md-32">arrow_back</i>
          </Link>
        </div>
      )
    }

    let icon = (
      <div id="icon">
          <i className="material-icons md-32">{props.icon}</i>
      </div>
    )

    if (props.to) {
      icon = (
        <div id="icon">
          <Link to={props.to}>
            <i className="material-icons md-32">arrow_back</i>
          </Link>
        </div>
      )
    }

    let search = (
      <div id="searchButton">
        <Link to="/search">
          <i className="material-icons md-32">search</i>
        </Link>
      </div>
    )

    return (
      <header>
        <div className="title">
          {navButton} {icon} <h3>{props.title}</h3>
        </div>
        {search}
      </header>
    );

}

export default Header;
