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
        <input type="text" placeholder="Filter by..."></input>
      </div>
      <ul>{props.children}</ul>
    </div>
  );
}

export {List, ListItem, ListDivider};
