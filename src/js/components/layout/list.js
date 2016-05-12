import React from 'react';
import style from './list.css';
import {FAB} from './button';

const ListItem = ({title, subtitle, icon, children}) => {
  return (
      <li className="listitem">
        {icon}
        <div>
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="content">{children}</div>
        </div>
      </li>
  );
}

const ListDivider = (props) => {
    return (
      <li className="mui-divider"/>
    );
}

const List = (props) => {
  return (
    <div className="list">
      <div className="textfield mui-textfield">
        <div className="mui-textfield expand">
          <input type="text" placeholder="Filter by..."></input>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="mui-select">
          <select>
            <option>Contact</option>
            <option>Origin</option>
            <option>Sent Date</option>
          </select>
        </div>
      </div>
      <ul>{props.children}</ul>
    </div>
  );
}

export {List, ListItem, ListDivider};
