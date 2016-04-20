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

    let icon = (
      <div className="icon" onClick={this.props.toggleDrawer}>
          <i className="material-icons">menu</i>
      </div>
    )

    if (this.props.to) {
      icon = (
        <div className="icon">
          <Link to={this.props.to}>
            <i className="material-icons">arrow_back</i>
          </Link>
        </div>
      )
    }

    let search = (
      <div id="searchButton" className="icon">
        <Link to="/search">
          <i className="material-icons">search</i>
        </Link>
      </div>
    )

    return (
      <header>

        <div className="title">
          {icon}
          <div>
            <h1>{this.props.title}</h1>
          </div>
        </div>

        <SearchBox />

        {search}

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
