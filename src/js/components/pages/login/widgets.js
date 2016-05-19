import React from 'react';
import { FAB } from '../../chips/buttons/buttons';
import { Field } from '../../chips/fields/fields';

class SignIn extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
    error: React.PropTypes.string
  }

  defaultProps = {
    name: 'jeroldan@gmail.com',
    password: 'xxxxxxxx',
  }

  state = {
    name: this.defaultProps.name,
    password: this.defaultProps.password,
  }

  onSignIn = () => {
    // TODO: fields validations
    this.props.onSubmit(this.state.name, this.state.password);
  }

  onChangeName = (newName) => {
    this.setState({ name: newName });
  }

  onChangePassword = (newPassword) => {
    this.setState({ password: newPassword });
  }

  render() {
    return (
      <div>
        <Field label="Email" value={this.state.name} onChange={this.onChangeName} />
        <Field label="Password" value={this.state.password} onChange={this.onChangePassword} />
        <div>{this.props.error}</div>
        <FAB icon="arrow_forward" to="" onMouseUp={this.onSignIn} />
      </div>
    );
  }
}

const SignUp = () => (<div>signup</div>);

export { SignIn, SignUp };
