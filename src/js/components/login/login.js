import React from 'react';
import {FieldGroup, Field} from '../layout/app-field';
import {Tabs, Tab} from '../layout/tabs';
import {Button} from '../layout/button';
import style from './login.css'

// TODO: Separate sign component from login panel
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'tab' : 'SIGNUP',
      'name' : '',
      'password' : ''
    }
    this.tabSelected = this.tabSelected.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeName = this.changeName.bind(this);
    this.renderSignIn = this.renderSignIn.bind(this);
    this.renderSignUp =this.renderSignUp.bind(this);
  }

  tabSelected(tabid) {
    this.setState({'tab':tabid});
  }

  signin() {
    alert('login');
  }

  signup() {
    alert('signup');
  }

  changeName(name) {
    this.setState({'name':name});
  }

  changePassword(pwd) {
    this.setState({'password':pwd});
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
          <Field label="Name" value={this.state.name} onChange={this.changeName}/>
          <Field label="Password" value={this.state.password} onChange={this.changePassword}/>
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
