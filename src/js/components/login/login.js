import React from 'react';
import {FieldGroup, Field} from '../layout/app-field';
import {Tabs, Tab} from '../layout/tabs';
import {Button} from '../layout/button';
import style from './login.css'

// TODO: Separate sign component from login panel
class Login extends React.Component {

  static defaultProps = {
    initial : {
      tab : 'SIGNIN',
      name : '',
      password : ''
    }
  };

  state = {
    tab : this.props.initial.tab,
    name : this.props.initial.name,
    password : this.props.initial.password
  };

  constructor(props) {
    super(props);
    this.renderSignIn = ::this.renderSignIn;
    this.renderSignUp = ::this.renderSignUp;
  }

  tabSelected = (tabid) => {
    this.setState({'tab':tabid});
  }

  onChange = (inputName, e) => {
    this.setState({[`${inputName}Value`]: e.target.value,});
  }

  signin() {
    alert('login');
  }

  signup() {
    alert('signup');
  }

  render () {

    return (
      <div className="login">

        <div className="panel mui-panel">
          <Tabs>
            <Tab id="SIGNIN" label="Sign In" active={this.state.tab === "SIGNIN"} selected={this.tabSelected}/>
            <Tab id="SIGNUP" label="Sign Up" active={this.state.tab === "SIGNUP"} selected={this.tabSelected}/>
          </Tabs>

          <br></br><br></br>

          {this.renderContent()}

        </div>

      </div>
    );
  }

  renderContent() {
    var renderer = this.state.tab === "SIGNIN" ? this.renderSignIn : this.renderSignUp;
    return renderer();
  }

  renderSignIn() {
    return (
      <div>
        <FieldGroup>
          <Field label="Name" value={this.state.name} onChange={this.onChange}/>
          <Field label="Password" value={this.state.password} onChange={this.onChange}/>
        </FieldGroup>
        <Button label="Sign IN" onClick={this.signin}></Button>
      </div>
    );
  }

  renderSignUp() {
    return (
      <div>
        <FieldGroup>
          <Field label="Name" value=""/>
          <Field label="Email" value=""/>
          <Field label="Password" value=""/>
          <Field label="Repeat Password" value=""/>
        </FieldGroup>
        <Button label="Sign UP" onClick={this.signup}></Button>
      </div>
    )
  }
}

export default Login;
