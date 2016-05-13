import React from 'react';
import style from './list.css';
import {Button} from './button';

const ListItem = ({id, title, subtitle, icon, children, selected, onClick}) => {

  const clicked = () => {
    onClick(id);
  }

  return (
      <li className={`listitem ${selected}`} onClick={clicked}>
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

  const filter = (e) => {
    props.filtered({ value : e.target.value});
  }

  const criteria = (e) => {
    props.filtered({ criteria : e.target.value});
  }

  const clearFilter = () => {
    props.filtered({ criteria: '', value :  ''});
  }

  const renderOptions = (options) => {
    return options.map( (option) => {
      return (<option value={option.value}>{option.label}</option>);
    });
  }

  return (
    <div className="list">
      <div className="textfield mui-textfield">
        <div className="mui-select">
          <select onChange={criteria} value={props.filter.criteria}>
            <option value="" disabled selected>Filter By...</option>
            {renderOptions(props.filter.options)}
          </select>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="mui-textfield expand">
          <input type="text" placeholder="..." value={props.filter.value} onChange={filter}></input>
        </div>
        <Button icon="close" onClick={clearFilter}/>
      </div>
      <ul>{props.children}</ul>
    </div>
  );
}

export {List, ListItem, ListDivider};
