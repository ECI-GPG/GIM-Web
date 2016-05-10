import React from 'react'
import Menu from './app-menu';
import Styles from './layout.css';
import SearchBox from '../search/app-search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Dialog from './app-dialog';

class Layout extends React.Component {

  constructor() {
    super();
    this.state = { drawer: false, dialog: false};

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleDrawer(forced) {
    console.log(this.state.drawer);
    var drawerState = forced!=null ? forced : !this.state.drawer;
    this.setState({drawer: drawerState});
  }

  toggleDialog() {
    this.setState({dialog: !this.state.dialog});
  }

  toggleOverlay() {
    if (this.state.dialog) this.toggleDialog();
    if (this.state.drawer) this.toggleDrawer();
  }

  render() {

    let overlayClass = this.state.drawer || this.state.dialog ? "" : "hidden";
    let drawerClass = this.state.drawer ? "uncoverleft" : "";
    let dialogClass = this.state.dialog ? "" : "hidden";

    return (
      <div className="layout">
        <div className={`overlay ${overlayClass} centred`} onClick={this.toggleOverlay}>
          <div className={`dialog ${dialogClass}`}>dialog</div>
        </div>
          <div className={`drawer ${drawerClass}`}>
            <Menu toggleDrawer={this.toggleDrawer} />
          </div>
          <div className="container">
            <div id="searchbar" onClick={this.toggleDialog}><SearchBox/></div>
            {React.cloneElement(this.props.children, { key: this.props.location.pathname, toggleDrawer: this.toggleDrawer })}
          </div>
          <div className="toolbar">toolbar</div>
        </div>
    );
  }
}

export default Layout;
