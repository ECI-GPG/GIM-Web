import React from 'react'
import Header from './header/app-header'
import Menu from './menu/app-menu';

export default (props) => {
  return (
    <div className="app-layout">
      <Menu></Menu>
      <div className="app-container">
        <Header></Header>
        <div style={{paddingLeft:15, paddingRight:15}}>{props.children}</div>
      </div>
    </div>
  )
}
