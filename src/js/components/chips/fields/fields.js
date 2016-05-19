import React from 'react';
import './fields.css';

const FieldGroup = (props) => (
  <div className="fieldgroup">
    <div className="logo"><i className="material-icons">{props.icon}</i></div>
    <div className="fields">{props.children}</div>
  </div>
);

FieldGroup.propTypes = {
  icon: React.PropTypes.string,
  children: React.PropTypes.node,
};

class Field extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
  };

  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div className="field input-textfield mui-textfield mui-textfield--float-label">
        <input type="text" value={this.props.value} onChange={this.handleChange}></input>
        <label>{this.props.label}</label>
      </div>
    );
  }
}

const Select = (props) => {
  const options = props.options.map(option => (<option>{option}</option>));
  return (
    <div className="field mui-select">
      <select className="mui-select" value={props.value}>
        {options}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: React.PropTypes.array,
  value: React.PropTypes.string,
};

export { FieldGroup, Field, Select };
