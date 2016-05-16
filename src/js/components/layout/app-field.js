import React from 'react';
import styles from './field.css';

const FieldGroup = (props) => {
  return (
    <div className="fieldgroup">
      <div className="logo"><i className="material-icons">{props.icon}</i></div>
      <div className="fields">{props.children}</div>
    </div>
  )
}

const Field = (props) => {
  return (
    <div className="field input-textfield mui-textfield mui-textfield--float-label">
      <input type="text" value={props.value}></input>
      <label>{props.label}</label>
    </div>
  )
}

const Select = (props) => {

  let options = props.options.map(option => {
    return (
      <option>{option}</option>
    )
  })

  return (
    <div className="field mui-select">
      <select className="mui-select" value={props.value}>
        {options}
      </select>
    </div>
  )
}

export {FieldGroup, Field, Select};
