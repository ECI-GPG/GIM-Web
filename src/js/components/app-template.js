import React from 'react'
import Header from './header/app-header'
import Menu from './menu/app-menu';

export default (props) => {
  return (
    <div className="app-layout">
      <Menu ref="leftMenu"></Menu>
      <div className="app-container">
        <Header></Header>
        <div className="app-content">{props.children}</div>
      </div>
      <div className="app-menu-right"></div>
    </div>
  );
}
