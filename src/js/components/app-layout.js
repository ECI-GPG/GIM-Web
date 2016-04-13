import React from 'react'
import Header from './header/app-header'
import Menu from './menu/app-menu';

import styles from './app-layout.css'

export default (props) => {
  return (
    <div id="layout">
      <Menu/>
      <div id="container">
        <Header />
        <main>{props.children}</main>
      </div>
      <div id="menu-right" />
    </div>
  );
}
