import React from 'react'
import Menu from './app-menu';
import Styles from './app-layout.css';
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
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({drawer: !this.state.drawer});
  }

  closeDrawer() {
    this.setState({drawer: false});
  }

  toggleDialog() {
    this.setState({dialog: !this.state.dialog})
  }

  toggleOverlay() {
    if (this.state.drawer) this.toggleDrawer();
  }

  render() {

    let overlayClass = this.state.drawer || this.state.dialog ? "open" : "";
    let drawerClass = this.state.drawer ? "open" : "";
    let dialogClass = this.state.dialog ? "open" : "";

    return (
      <div id="layout">

        <div id="overlay" className={overlayClass} onClick={this.toggleOverlay}></div>

        <div id="drawer" className={drawerClass}>
          <Menu open={this.closeDrawer}/>
        </div>

        <div id="dialog" className={dialogClass}>
          <Dialog title="Dialog" close={this.toggleDialog}/>
        </div>

        <div id="container">
          <div id="searchbar" onClick={this.toggleDialog}><SearchBox/></div>
				  {React.cloneElement(this.props.children, { key: this.props.location.pathname, toggleDrawer: this.toggleDrawer })}
        </div>

        <div id="toolbar"></div>

      </div>
    );
  }
}

export default Layout;
