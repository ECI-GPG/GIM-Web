import React from 'react';
import './inbox.css';

class InboxList extends React.Component {

  static propTypes = {
    open: React.PropTypes.bool,
    children: React.PropTypes.node,
  }

  render() {
    const openClass = this.props.open ? 'open' : '';
    return (
      <div className={`inbox-list ${openClass}`}>
        {this.props.children}
      </div>
    );
  }
}

class InboxViewer extends React.Component {

  static propTypes = {
    open: React.PropTypes.bool,
    children: React.PropTypes.node,
  }

  render() {
    const openClass = this.props.open ? 'open' : '';
    return (
      <div className={`inbox-viewer ${openClass}`}>
        {this.props.children}
      </div>
    );
  }
}

class Inbox extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div className="inbox">
        {this.props.children}
      </div>
    );
  }
}

export { Inbox, InboxList, InboxViewer };
