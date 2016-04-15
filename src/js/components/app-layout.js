import React from 'react'
import Header from './header/app-header'
import Menu from './menu/app-menu';
import Toolbar from './toolbar/app-toolbar';
import styles from './app-layout.css';

export default (props) => {
  return (
    <div id="layout">
      <Menu/>
      <div id="container">
        {props.children}
      </div>
      <Toolbar />
    </div>
  );
}
