import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Tatami, Drawer, Container, Toolbar, Overlay } from './tatami/tatami';
import Menu from './layout/app-menu';
import './app.css';
import './palette-indigo.css';

// Pages
import Login from './pages/login/login';
import Inbox from './pages/shipments/shipments';

const auth = {

  login(email, pwd, callback) {
    if (email === 'jeroldan@gmail.com') {
      localStorage.token = Math.random().toString(36).substring(7);
      callback(true);
      this.onChange(true);
    } else {
      callback(false);
      this.onChange(false);
    }
  },

  loggedIn() {
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

const Layout = (props) => (
  <Tatami>
    <Drawer><Menu /></Drawer>
    <Container>{props.children}</Container>
    <Toolbar>toolbar</Toolbar>
    <Overlay />
  </Tatami>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

const App = () => (
  <Router>
    <Route path="/" component={LoginRequired}>
      <IndexRoute component={Inbox} />
    </Route>
  </Router>
);

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
