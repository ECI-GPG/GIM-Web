import React from 'react';
import Styles from './app-layout.css';

const Dialog = (props) => {

  const title = props.title? props.title : "";

  return (
    <div className="mui-panel">
      <h4>{title}</h4>
      <div>{props.children}</div>
      <div className="horizontal right">
        <button className="mui-btn" onClick={props.close}>CANCEL</button>
        <button className="mui-btn" onClick={props.close}>OK</button>
      </div>
    </div>
  )
}

export default Dialog;
