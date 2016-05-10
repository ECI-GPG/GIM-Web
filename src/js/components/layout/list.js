import React from 'react';
import style from './list.css';
import {Link} from 'react-router';
import FAB from './button';

const ListItem = ({title="Title", to, children}) => {
  return (
    <Link to={to}>
      <li className="listitem">
        <i className="material-icons logo">archive</i>
        <div>
          <div className="title">{title}</div>
          <p className="subtitle">{children}</p>
        </div>
      </li>
    </Link>
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
      <FAB icon="fiber_new" to={props.add}></FAB>
    </div>
  );
}

export {List, ListItem, ListDivider};
