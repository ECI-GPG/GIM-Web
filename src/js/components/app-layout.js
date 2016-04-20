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
          {React.cloneElement(this.props.children, {toggleDrawer: this.toggleDrawer })}
        </div>

        <Toolbar />

      </div>
    );
  }
}
