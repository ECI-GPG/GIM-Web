import React from 'react'
import AppActions from '../../actions/app-actions';
import styles from './app-header.css';
import SearchBox from '../search/app-search';
import { Link } from 'react-router';

class Header extends React.Component {

  constructor() {
    super();
  }

  render() {

    let link = (
      <div id="navButton" className="icon" onClick={this.props.toggleDrawer}>
          <i className="material-icons md-36">menu</i>
      </div>
    )

    if (this.props.to) {
      link = (
        <div id="navButton" className="icon">
          <Link to={this.props.to}>
            <i className="material-icons md-36">arrow_back</i>
          </Link>
        </div>
      )
    }

    let icon = (
      <div id="icon" className="icon">
          <i className="material-icons md-36">{this.props.icon}</i>
      </div>
    )

    if (this.props.to) {
      icon = (
        <div id="icon" className="icon">
          <Link to={this.props.to}>
            <i className="material-icons md-36">arrow_back</i>
          </Link>
        </div>
      )
    }

    let search = (
      <div id="searchButton" className="icon">
        <Link to="/search">
          <i className="material-icons md-36">search</i>
        </Link>
      </div>
    )

    return (
      <header>
        <div className="title">
          {link}{icon}
          <div>
            <h1>{this.props.title}</h1>
          </div>
        </div>
        {search}
      </header>
    );
  }
}

export default Header;
