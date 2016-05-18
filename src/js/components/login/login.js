import React from 'react';
import { Tabs, Tab } from '../chips/tabs/tabs';
import { Button, FAB } from '../chips/button/button';
import { FieldGroup, Field } from '../layout/app-field';
import './login.css';

// TODO: Separate sign component from login page
class Login extends React.Component {

  static propTypes = {
    tab: React.PropTypes.string,
    name: React.PropTypes.string,
    password: React.PropTypes.string,
  }

  static defaultProps = {
    tab: 'SIGNIN',
    name: '',
    password: '',
  }

  constructor(props) {
    super(props);
    this.renderSignIn = ::this.renderSignIn;
    this.renderSignUp = ::this.renderSignUp;
  }

  state = {
    tab: this.props.tab,
    name: this.props.name,
    password: this.props.password,
  };

  onChange = (inputName, e) => {
    this.setState({ [`${inputName}Value`]: e.target.value });
  }

  handleTabChanged = (tabid) => {
    this.setState({ tab: tabid });
  }

  signin() {
    // TODO: signin action
  }

  signup() {
    // TODO: signup action
  }

  renderSignIn() {
    return (
      <div>
        <FieldGroup>
          <Field label="Name" value={this.state.name} onChange={this.onChange} />
          <Field label="Password" value={this.state.password} onChange={this.onChange} />
        </FieldGroup>
        <Button label="Sign IN" onClick={this.signin} />
      </div>
    );
  }

  renderSignUp() {
    return (
      <div>
        <FieldGroup>
          <Field label="Name" value="" />
          <Field label="Email" value="" />
          <Field label="Password" value="" />
          <Field label="Repeat Password" value="" />
        </FieldGroup>
        <FAB label="Sign UP" onClick={this.signup} />
      </div>
    );
  }

  renderContent() {
    const renderer = this.state.tab === 'SIGNIN' ? this.renderSignIn : this.renderSignUp;
    return renderer();
  }

  render() {
    return (
      <div className="login">
        <div className="panel mui-panel">
          <Tabs onChanged={this.handleTabChanged}>
            <Tab id="SIGNIN" label="Sign In" active={this.state.tab === 'SIGNIN'} />
            <Tab id="SIGNUP" label="Sign Up" active={this.state.tab === 'SIGNUP'} />
          </Tabs>
          <br></br><br></br>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Login;
