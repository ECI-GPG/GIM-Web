import React from 'react';
import { Link } from 'react-router';
import './button.css';

const materialIcon = (icon) => (
  <i className="material-icons md-24">{icon}</i>
);

const Icon = (props) => (
  <div id={props.id} className="icon">
    {materialIcon(props.icon)}
  </div>
);

Icon.propTypes = {
  id: React.PropTypes.string,
  icon: React.PropTypes.string,
};

const Button = (props) => (
  <button id={props.id} className={`button ${props.classes}`} onMouseLeave={props.onMouseLeave}>
    {props.icon ? materialIcon(props.icon) : null}
    {props.label}
  </button>
);

Button.propTypes = {
  id: React.PropTypes.string,
  icon: React.PropTypes.string,
  label: React.PropTypes.string,
  onMouseLeave: React.PropTypes.func,
  classes: React.PropTypes.string,
};

const FAB = (props) => (
  <Link to={props.to}>
    <Button icon={props.icon} classes="fab" />
  </Link>
);

FAB.propTypes = {
  icon: React.PropTypes.string,
  to: React.PropTypes.string,
};

export { Icon, Button, FAB };
