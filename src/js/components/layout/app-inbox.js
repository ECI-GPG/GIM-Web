import React from 'react';
import style from './app-inbox.css';
import Header from './app-header';
import {List} from './list';
import TabPanel from './tabpanel';

const Inbox = (props) => {
  return (
    <div className="inbox">
      <TabPanel>
        {props.lists}
      </TabPanel>
      <div className="viewer">{props.pages}</div>
    </div>
  )
}

export default Inbox;
