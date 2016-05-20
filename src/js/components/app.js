import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import './app.css';

// Pages
import Login from './pages/login/login';
import Layout from './layout/layout';
import Inbox from './pages/shipments/inbox';

const auth = {

  login(email, pwd, callback) {
    console.log('LOGIN');
    if (email === 'jeroldan@gmail.comm') {
      localStorage.token = Math.random().toString(36).substring(7);
      callback(true);
      this.onChange(true);
    } else {
      callback(false);
      this.onChange(false);
    }
  },

  loggedIn() {
    console.log(!!localStorage.token)
    return !!localStorage.token;
  },

  logout() {
    delete localStorage.token;
    this.onChange(false);
  },

  onChange() {},
};

class LoginRequired extends React.Component {

  state = {
    loggedIn: auth.loggedIn(),
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
  }

  updateAuth = (logged) => {
    this.setState({ loggedIn: logged });
  }

  renderLayout = (children) => (
    <Layout>{children}</Layout>
  );

  render() {
    const children = React.cloneElement(
      this.props.children, { key: this.props.location.pathname }
    );
    return this.state.loggedIn ? <Layout>{children}</Layout> : <Login auth={auth} />;
  }
}

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LoginRequired}>
          <IndexRoute component={Inbox} />
        </Route>
      </Router>
    );
  }
}


export default App;

/*
<Route path="/samplebook" component={Layout}>
  <IndexRoute component={Inbox} />
  <Route path="inbox" component={Inbox} />
  <Route path="inbox/checkin" component={ShipmentCheckin} />
  <Route path="products" component={Products} />
  <Route path="monitor" component={Monitor} />
  <Route path="outbox" component={Outbox} />
  <Route path="outbox/new" component={ShipmentCheckin} />
  <Route path="issues" component={Issues} />
  <Route path="camera" component={Camera} />
  <Route path="search" component={Search} />
</Route>
*/
