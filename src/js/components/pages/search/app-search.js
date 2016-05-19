import React from 'react';
import './app-search.css';

class SearchBox extends React.Component {

  constructor() {
    super();
    this.state = { busy: false };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const nextState = !this.state.busy;
    this.setState({ busy: nextState });
  }

  render() {
    if (this.state.busy) {
      return (
        <div className="searchbox busy">
          <div className="textfield mui-textfield">
            <input type="text" onBlur={this.toggleState} autoFocus />
          </div>
          <span><i className="material-icons">close</i></span>
        </div>
      );
    } else {
      return (
        <div className="searchbox" onClick={this.toggleState}>
          <span><i className="material-icons">search</i></span>
          <span className="mui--text-light-secondary">Search...</span>
        </div>
      );
    }
  }
}

export default SearchBox;
