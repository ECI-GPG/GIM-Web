import React from 'react';
import style from './app-inbox.css';
import Header from './app-header';
import {List} from './list';
import TabPanel from './tabpanel';

const Inbox = (props) => {
  return (
    <div className="inbox">
      <TabPanel>
        <List id="opened" name="Opened" add={props.add} active="true">{props.items}</List>
        <List id="closed" name="Closed" add={props.add}>{props.items}</List>
      </TabPanel>
      <div className="viewer">{props.children}</div>
    </div>
  )
}

export default Inbox;
