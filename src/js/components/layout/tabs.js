import React from 'react';
import style from './tabs.css';

const Tab = (props) => {

  var activeClass = props.active ? "tab mui--is-active" : "tab"
  let selectTab = () => { props.selected(props.id); }

  return (
    <li className={activeClass} onClick={selectTab}>
      <a>
        <i className={`fa fa-${props.icon} fab-lg`}></i>
        &nbsp;&nbsp;&nbsp;{props.label}
      </a>
    </li>
  )
}

const Tabs = (props) => {
  return (
    <ul className="tabbar mui-tabs__bar">{props.children}</ul>
  )
}

export {Tabs, Tab};
