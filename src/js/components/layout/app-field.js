import React from 'react';

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

export {FieldGroup, Field};
