import React from 'react';
import {Link} from 'react-router';
import styles from './button.css';

const Icon = (props) => {
  return (
    <div id={props.id} className="icon">
      <i className="material-icons md-24">{props.icon}</i>
    </div>
  )
}

const Button = (props) => {
  return (
    <button id={props.id} className="button" onClick={props.onClick}>
      <i className="material-icons md-24">{props.icon}</i>
    </button>
  )
}

const FAB = (props) => {
  return (
    <Link to={props.to}>
      <button className="mui-btn mui-btn--accent mui-btn--fab fab">
        <i className="material-icons">{props.icon}</i>
      </button>
    </Link>
  );
}

export {Icon, Button, FAB};
