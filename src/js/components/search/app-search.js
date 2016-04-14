import React from 'react';
import styles from './app-search.css'

class SearchBox extends React.Component {

  constructor() {
    super();
    this.state = { busy : false };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    let nextState = !this.state.busy;
    this.setState({ busy: nextState});
  }

  render() {
    if (this.state.busy) {
      return(
        <div className="searchbox busy">
          <div className="textfield mui-textfield">
            <input  type="text" onBlur={this.toggleState} autoFocus></input>
          </div>
          <span><i className="fa fa-close fa-lg"></i></span>
        </div>
      );
    } else {
      return(
        <div className="searchbox" onClick={this.toggleState}>
          <span><i className="fa fa-search fa-lg"></i></span>
          <span>Buscar Envios</span>
        </div>
      );
    }
  }
}

export default SearchBox;
