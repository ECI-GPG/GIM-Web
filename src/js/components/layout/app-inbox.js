import React from 'react';
import style from './app-inbox.css';
import Header from './app-header';
import {List} from '../layout/list';

const Inbox = (props) => {
  return (
    <div className="inbox">
      <List add={props.add}>{props.items}</List>
      <div className="viewer">{props.children}</div>
    </div>
  )
}

export default Inbox;
