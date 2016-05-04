import React from 'react';

const Card = (props) => {

  var icon = "";
  if (props.icon) {
    icon = (
      <div className="logo">
        <i className={`fa fa-${props.icon} fa-lg`}></i>
      </div>
    )
  }

  return (
    <div className="box mui-panel card">
    
      <div className="header">
        {icon}
        <div className="title">
          <div className="title1">{props.title}</div>
          <span className="title2 mui--text-dark-secondary">{props.subtitle}</span>
        </div>
      </div>

      <div className="content">

      </div>

      <div className="actions">
        {props.children}
      </div>
    </div>
  )
}

export default Card;
