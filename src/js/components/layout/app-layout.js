import React from 'react'
import Menu from './app-menu';
import Styles from './app-layout.css';
import SearchBox from '../search/app-search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      opened: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

   toggleDrawer() {
     this.setState({opened: !this.state.opened});
   }

  render() {

    let drawerClass = this.state.opened? "open" : "";

    return (
      <div id="layout">
        <div id="drawer" className={drawerClass}>
          <Menu selected={this.toggleDrawer}/>
        </div>
        <div id="overlay" className={drawerClass} onClick={this.toggleDrawer}></div>
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
