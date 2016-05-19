import React from 'react';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { SignIn, SignUp } from './widgets';
import './login.css';

class LoginPage extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object,
    tab: React.PropTypes.string,
  }

  defaultProps = {
    tab: 'SIGNIN',
  }

  state = {
    tab: this.defaultProps.tab,
  }

  handleTabChanged = (tabb) => {
    this.setState({ tab: tabb });
  }

  handleSignIn = (name, password) => {
    this.props.auth.login(name, password, (loggedIn) => {
      if (!loggedIn) {
        return this.setState({ error: 'Login Error' });
      }
    });
  }

  handleSignUp = () => {
    console.log('signup');
  }

  render() {
    const widgets = {
      SIGNIN: (<SignIn onSubmit={this.handleSignIn} error={this.state.error}/>),
      SIGNUP: (<SignUp onSubmit={this.handleSignUp} />),
    };

    return (
      <div className="login">
        <div className="window">
          <div className="header">
            <h1>SampleBook</h1>
            <h5>Samples Storage Managment</h5>
          </div>
          <Tabs onChanged={this.handleTabChanged}>
            <Tab id="SIGNIN" label="Sign In" active={this.state.tab === 'SIGNIN'} />
            <Tab id="SIGNUP" label="Sign Up" active={this.state.tab === 'SIGNUP'} />
          </Tabs>
          <div className="form">
            {widgets[this.state.tab]}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
