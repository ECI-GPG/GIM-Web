import React from 'react'
import Header from './header/app-header'
import Menu from './menu/app-menu';
import Toolbar from './toolbar/app-toolbar';
import styles from './app-layout.css';

export default class Layout extends React.Component {

  constructor() {
    super();
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    console.log(this.drawer)
    this.drawer.classList.toggle('open');
    this.overlay.classList.toggle('open');
  }

  render() {
    return (
      <div id="layout">

        <div id="drawerButton" className="icon" onClick={this.toggleDrawer}>
          <i className="material-icons">menu</i>
        </div>

        <div id="drawer" ref={(ref) => this.drawer = ref}>
          <Menu selected={this.toggleDrawer}/>
        </div>

        <div id="overlay" ref={(ref) => this.overlay = ref} onClick={this.toggleDrawer}></div>

        <div id="container">
          {this.props.children}
        </div>

        <Toolbar />

      </div>
    );
  }
}
