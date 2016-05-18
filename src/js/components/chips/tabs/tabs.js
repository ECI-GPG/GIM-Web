import React from 'react';
import './tabs.css';

const Tab = (props) => {
  let activeClass = props.active ? 'tab mui--is-active' : 'tab';
  let selectTab = () => props.onSelected(props.id);
  return (
    <li className={activeClass} onClick={selectTab}>
      <a>
        <i className={`fa fa-${props.icon} fab-lg`}></i>
        &nbsp;&nbsp;&nbsp;
        {props.label}
      </a>
    </li>
  );
};

Tab.propTypes = {
  id: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  label: React.PropTypes.string,
  active: React.PropTypes.bol,
  onSelected: React.PropTypes.func,
};

const Tabs = (props) => (
  <ul className="tabbar mui-tabs__bar">{props.children}</ul>
);

Tabs.propTypes = {
  children: React.PropTypes.node,
};

export { Tabs, Tab };
