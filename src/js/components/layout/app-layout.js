import React from 'react'
import Menu from './app-menu';
import Styles from './app-layout.css';
import SearchBox from '../search/app-search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Layout extends React.Component {

  constructor() {
    super();
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.drawer.classList.toggle('open');
    this.overlay.classList.toggle('open');
  }

  render() {
    return (
      <div id="layout">
        <div id="drawer" ref={(ref) => this.drawer = ref}>
          <Menu selected={this.toggleDrawer}/>
        </div>
        <div id="overlay" ref={(ref) => this.overlay = ref} onClick={this.toggleDrawer}></div>
        <div id="container">
          <div id="searchbar"><SearchBox/></div>
				  {React.cloneElement(this.props.children, { key: this.props.location.pathname, toggleDrawer: this.toggleDrawer })}
        </div>
        <div id="toolbar"></div>
      </div>
    );
  }
}

export default Layout;
