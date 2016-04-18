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

    var link = '';

    if (this.props.to) {
      link = (
        <div className="icon">
          <Link to={this.props.to}>
            <i className="material-icons">arrow_back</i>
          </Link>
        </div>
      )
    }

    return (
      <header>

        <div className="title">
          <div className="icon">{link}</div>
          <div>
            <h1>{this.props.title}</h1>
          </div>
        </div>

        <SearchBox />

        <div id="searchButton" className="icon">
            <i className="fa fa-search fa-lg"></i>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  to: React.PropTypes.string
}

Header.defaultProps = {
  icon: "menu"
}

export default Header;
